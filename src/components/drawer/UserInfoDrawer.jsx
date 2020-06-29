import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";
const UserInfoDrawer = (props) => (
  <View style={styles.container}>
    <View style={styles.userInfoContainer}>
      <Image
        source={require("../../images/avatar.png")}
        style={styles.userImage}
      />

      <Text style={styles.userNameText}>
        {props.userName ? props.userName : "No loggeado :("}
      </Text>
    </View>
  </View>
);

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
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default UserInfoDrawer;
