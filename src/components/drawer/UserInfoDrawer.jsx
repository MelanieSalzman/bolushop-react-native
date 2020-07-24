import React, {useContext, useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";
import BuyButton from '../../components/BuyButton'
import { UserContext } from '../../context/UserProvider'
const UserInfoDrawer = (props) => {

  let user = useContext(UserContext)

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image
          source={require("../../images/avatar.png")}
          style={styles.userImage}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.userNameText}>
            {user.signed ? `¡Hola ${user.username}!` : "¡Hola!"}
          </Text>
          { !user.signed ?
          <View style={styles.loginButton}>
            <BuyButton text='Ingresar' onPress={props.setLoginModal} />
          </View> : null
          }
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.passwordInputBorder,
  },
  userInfoContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 30,
    marginHorizontal: 30,
  },
  userImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.defaultBackground,
  },
  userNameText: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  loginButton: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  }
});

export default UserInfoDrawer;
