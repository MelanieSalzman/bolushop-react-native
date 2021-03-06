import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import ProfilePicture from "../../components/ProfilePicture.jsx";
import TextH2 from "../../components/TextH2.jsx";
import InputProfile from "../../components/InputProfile.jsx";
import SimpleButton from "../../components/SimpleButton.jsx";
import LoadingOverlay from "../../components/LoadingOverlay";
import Line from "../../components/Line.jsx";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-community/async-storage";
import { profileUser } from "../../api/userAPI";
import LogoutButton from "../../components/LogoutButton.jsx";
import { updateUser } from "../../api/userAPI";
import colors from "../../constants/colors.js";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from '../../context/UserProvider'

const MyAccount = (props) => {

  let user = useContext(UserContext)

  const [enableWritingUsername, setEnableWritingUsername] = useState(false);
  const [enableWritingEmail, setEnableWritingEmail] = useState(false);
  const [enableWritingName, setEnableWritingName] = useState(false);
  const [enableWritingSurname, setEnableWritingSurname] = useState(false);
  const [enableWritingWeb, setEnableWritingWeb] = useState(false);
  const [enableWritingBirth, setEnableWritingBirth] = useState(false);
  const [enableWritingPhone, setEnableWritingPhone] = useState(false);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const [isLoading, setLoading] = useState(false);
  const [islogout, setIsLogout] = useState(false);

  const onChangeTextEmail = (text) => {
    setEmail(text);
  };
  const onChangeTextUsername = (text) => {
    setUsername(text);
  };

  const onChangeTextName = (text) => {
    setName(text);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setIsLogout(true)
    user.logout()
    user.removeToken()
    user.removeUsername()
    props.navigation.navigate("HomeScreen", { modal: false });
    console.log("paso por aca", user);
  };

  const saveProfile = () => {
    setLoading(true);

    const updated = updateUser(email, username, name);
    setLoading(false);
  };

  const ChangePassword = () => {
    props.navigation.navigate("ChangePassword");
  };

  useEffect(() => {
    const setterProfile = async () => {
      setLoading(true);
      const data = await profileUser();
      console.log(data);

      if (data === undefined) {
        props.navigation.goBack();
      }
      setEmail(data.email);
      setUsername(data.username);
      setName(data.name);
      setLoading(false);
    };
    setterProfile();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LoadingOverlay visible={isLoading} />
      <ScrollView>
        <View style={styles.image}>
          <ProfilePicture />
        </View>

        <View style={styles.title}>
          <TextH2 text="Datos de la cuenta" />
        </View>
        <View style={styles.form}>
          <Line />
          <InputProfile
            name="Nombre de usuario"
            value={username}
            edit={enableWritingUsername}
            onChangeText={onChangeTextUsername}
            onPress={() => setEnableWritingUsername(!enableWritingUsername)}
          />
          <Line />
          <InputProfile
            name="Correo electronico"
            value={email}
            edit={enableWritingEmail}
            onChangeText={onChangeTextEmail}
            onPress={() => setEnableWritingEmail(!enableWritingEmail)}
          />
          <Line />
        </View>
        <View style={styles.title}>
          <TextH2 text="Datos personales" />
        </View>
        <View style={styles.form}>
          <Line />
          <InputProfile
            name="Nombre"
            value={name}
            edit={enableWritingName}
            onChangeText={onChangeTextName}
            onPress={() => setEnableWritingName(!enableWritingName)}
          />
          <Line />
          <InputProfile
            name="Pagina web"
            value=""
            edit={enableWritingWeb}
            onPress={(e) =>
              EnableFunction(enableWritingWeb, setEnableWritingWeb)
            }
          />
          <Line />
          <InputProfile
            name="Fecha de nacimiento"
            value=""
            edit={enableWritingBirth}
            onPress={(e) =>
              EnableFunction(enableWritingBirth, setEnableWritingBirth)
            }
          />
          <Line />
          <InputProfile
            name="Telefono"
            value=""
            edit={enableWritingPhone}
            onPress={(e) =>
              EnableFunction(enableWritingPhone, setEnableWritingPhone)
            }
          />
          <Line />
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={saveProfile}>
            <View style={styles.loginButtonContainer}>
              <Text>Guardar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ChangePassword}>
            <View style={styles.loginButtonContainer}>
              <Text>Cambiar contraseña</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <LogoutButton onPress={logout} text="Cerrar sesion" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const MyAccountNavOptions = (props) => ({
  headerTitle: "Mi Cuenta",
  headerStyle: {
    backgroundColor: colors.passwordInputBorder,
  },
  headerRight: () => (
    <View style={styles.headerImageContainer}>
      <Image
        style={styles.headerImage}
        source={require("../../../assets/images/caritaFelizHeader.png")}
      />
    </View>
  ),
  headerLeft: () => (
    <MaterialIcons
      style={styles.menu}
      name="menu"
      size={30}
      onPress={() => props.navigation.toggleDrawer()}
    />
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  form: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  actionsContainer: {
    marginTop: 45,
    alignItems: "center",
    flexDirection: "row",
  },
  loginButtonContainer: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 40,
    backgroundColor: "#4EEE98",
  },
  menu: {
    marginLeft: 20,
  },
  headerImageContainer: {
    justifyContent: "center",
    marginRight: 20,
  },
  headerImage: {
    height: 40,
    width: 40,
  },
});

export default MyAccount;
