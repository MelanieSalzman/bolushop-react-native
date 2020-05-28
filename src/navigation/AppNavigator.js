import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NavegadorInicio, HomeDrawer } from "./ShopNavigator";

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <HomeDrawer />
    </NavigationContainer>
  );
};

export default AppNavigator;
