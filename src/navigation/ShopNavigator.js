import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen, { HomeNavOptions } from "../screens/compra/HomeScreen";
import ProductDetails from "../screens/compra/ProductDetails";
import ProductList from "../screens/compra/ProductList";
import { Platform, View, SafeAreaView, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen"

// import {
//   PaginaInicio,
//   opcionesDeLaPantalla,
// } from "../screens/main/PaginaInicio";

const HomeStackNavigator = createStackNavigator();
export const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={HomeNavOptions}
      />
      <HomeStackNavigator.Screen
        name="ProductDetails"
        component={ProductDetails}
      />
      <HomeStackNavigator.Screen
        name="ProductList"
        component={ProductList}
      />
      <HomeStackNavigator.Screen 
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};

const HomeDrawerNavigator = createDrawerNavigator();
export const HomeDrawer = () => {
  return (
    <HomeDrawerNavigator.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <View style={{ height: 50, backgroundColor: "red" }}>
                <Text style={{ color: "white" }}>
                  Aca va el componente de la foto del usuario
                </Text>
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          </View>
        );
      }}
    >
      <HomeDrawerNavigator.Screen
        name="Inicio"
        component={HomeNavigator}
        options={{
          drawerIcon: (props) => {
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={23}
              color={props.color}
            />;
          },
        }}
      />
      <HomeDrawerNavigator.Screen
        name="Buscar"
        component={HomeNavigator}
        options={{
          drawerIcon: (props) => {
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={23}
              color={props.color}
            />;
          },
        }}
      />
      <HomeDrawerNavigator.Screen
        name="Mi cuenta"
        component={HomeNavigator}
        options={{
          drawerIcon: (props) => {
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={23}
              color={props.color}
            />;
          },
        }}
      />
    </HomeDrawerNavigator.Navigator>
  );
};
