import React from "react";
import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginModal = (props) => {
  return (
    <Modal visible={props.isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={styles.loginTabContainer}>
            <Text>Inicio de sesion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerTabContainer}>
            <Text>Registro</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View>
            <Image
              style={styles.imageContainer}
              source={{
                uri:
                  "https://ad-venture.org.uk/wp-content/uploads/2017/05/logo-placeholder.png",
              }}
            />
          </View>

          <View style={styles.inputsContainer}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Direccion de correo electronico"
            />
            <TextInput placeholder="Contraseña" />
          </View>
          <View style={styles.actionsContainer}>
            <TouchableOpacity>
              <View style={styles.loginButtonContainer}>
                <Text>Iniciar Sesion</Text>
              </View>
            </TouchableOpacity>

            <Text>Olvidaste tu contraseña?</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#00000099",
  },
  tabsContainer: {
    height: 45,
    flexDirection: "row",
  },
  loginTabContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopStartRadius: 20,
    backgroundColor: "white",
  },
  registerTabContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopEndRadius: 20,
    backgroundColor: "#ffffffAA",
  },
  card: {
    backgroundColor: "white",
    paddingBottom: 70,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  inputsContainer: {
    marginHorizontal: 40,
  },
  inputStyle: {
    borderBottomWidth: 1,
  },
  actionsContainer: {
    marginTop: 45,
    alignItems: "center",
  },
});

export default LoginModal;
