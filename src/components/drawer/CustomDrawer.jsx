import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Image,
  Text,
  StyleShee,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import colors from "../../constants/colors";
import { DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import UserInfoDrawer from "./UserInfoDrawer";
import { getUsername } from "../../api/userAPI";
import { UserContext } from '../../context/UserProvider'

const CustomDrawer = (props) => {
  
  let user = useContext(UserContext)

  const [showModal, setShowModal] = useState(false)
  const [signed, setSigned] = useState(user.signed)

  useEffect(() => {
    const getUserCall = async () => {
      const name = await getUsername();
      if (name !== undefined) {
        user.getUsername(name);
      }
    };
    getUserCall();
  }, [user.signed, showModal]);

  const setLoginModal = () => {
    setShowModal(true)
    props.drawerItems.navigation.navigate("HomeScreen", { modal: true });
  }

  return (
    <View style={styles.container}>
      <SafeAreaView forceInset={{ flex: 1 }}>
        <UserInfoDrawer userName={user.username} setLoginModal={setLoginModal}/>
        <DrawerItemList {...props.drawerItems} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default CustomDrawer;
