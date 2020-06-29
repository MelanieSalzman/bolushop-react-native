import React, { useEffect, useState } from "react";
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
import { profileUser } from "../../api/userAPI";

const CustomDrawer = (props) => {
  const [userName, setUserName] = useState("");


  useEffect(() => {
    const getUserCall = async () => {
      const data = await profileUser();
      if (data !== undefined) {
        console.log(data.name);
        setUserName(data.name);
      }
      console.log("No data");
    };
    getUserCall();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView forceInset={{ flex: 1 }}>
        <UserInfoDrawer userName={userName} />
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
