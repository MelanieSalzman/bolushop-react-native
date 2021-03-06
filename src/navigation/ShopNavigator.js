import React, { useState, useEffect, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import { View, SafeAreaView, Dimensions, StyleSheet } from "react-native";
import HomeScreen, { HomeNavOptions } from "../screens/compra/HomeScreen";
import ProductDetails, {
  ProductDetailsNavOptions,
} from "../screens/compra/ProductDetails";
import ProductList, { ProductListNavOptions } from "../screens/compra/ProductList";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import EnterCode from '../screens/auth/EnterCode';
import MyProducts, { MyProductsNavOptions } from "../screens/venta/MyProducts";
import MyAccount, { MyAccountNavOptions } from "../screens/user/MyAccount";
import ChangePassword from "../screens/user/ChangePassword";
import AddProductScreen from "../screens/venta/AddProductScreen";
import UpdateProductScreen from "../screens/venta/UpdateProductScreen";
import UserInfoDrawer from "../components/drawer/UserInfoDrawer";
import { nameMenu } from "../api/userAPI";
import CustomDrawer from "../components/drawer/CustomDrawer";
import { UserContext } from '../context/UserProvider';
import { TextInput } from "react-native-gesture-handler";
import ResetPassword from "../screens/auth/ResetPassword";

const { width } = Dimensions.get("window");
const HomeStackNavigator = createStackNavigator();

export const HomeNavigator = () => (
  <HomeStackNavigator.Navigator>
    <HomeStackNavigator.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={HomeNavOptions}
    />

    <HomeStackNavigator.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={ProductDetailsNavOptions}
    />

    <HomeStackNavigator.Screen
      name="ProductList"
      component={ProductList}
      options={ProductListNavOptions}
    />

    <HomeStackNavigator.Screen
      name="ForgotPassword"
      component={ForgotPasswordScreen}
    />

    <HomeStackNavigator.Screen
      name="EnterCode"
      component={EnterCode}
    />

    <HomeStackNavigator.Screen
      name="ResetPassword"
      component={ResetPassword}
    />

    <HomeStackNavigator.Screen
      name="MyProducts"
      component={MyProducts}
      options={MyProductsNavOptions}
    />

    <HomeStackNavigator.Screen name="AddProduct" component={AddProductScreen} />

    <HomeStackNavigator.Screen
      name="UpdateProduct"
      component={UpdateProductScreen}
    />
  </HomeStackNavigator.Navigator>
);

export const MyAccountNavigator = () => (
  <HomeStackNavigator.Navigator>
    <HomeStackNavigator.Screen
      name="MyAccount"
      component={MyAccount}
      options={MyAccountNavOptions}
    />

    <HomeStackNavigator.Screen
      name="ChangePassword"
      component={ChangePassword}
    />
  </HomeStackNavigator.Navigator>
);

export const SellerNavigator = () => (
  <HomeStackNavigator.Navigator>
    <HomeStackNavigator.Screen
      name="MyProducts"
      component={MyProducts}
      options={MyProductsNavOptions}
    />
  </HomeStackNavigator.Navigator>
);

export const ProductListNavigator = () => (
  <HomeStackNavigator.Navigator>
    <HomeStackNavigator.Screen
      name="Productos"
      component={ProductList}
      options={ProductListNavOptions}
    />
  </HomeStackNavigator.Navigator>
);

const HomeDrawerNavigator = createDrawerNavigator();
export const HomeDrawer = () => {

  let user = useContext(UserContext)

  return (
    <HomeDrawerNavigator.Navigator
      drawerContent={(props) => <CustomDrawer drawerItems={props} />}
    >
      <HomeDrawerNavigator.Screen
        name="Inicio"
        component={HomeNavigator}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons name="home" size={23} color={props.color} />
          ),
        }}
      />

      <HomeDrawerNavigator.Screen
        name="Buscar"
        component={ProductListNavigator}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons name="search" size={23} color={props.color} />
          ),
        }}
      />
      {user.signed == true ?
        <HomeDrawerNavigator.Screen
          name="Mi cuenta"
          component={MyAccountNavigator}
          options={{
            drawerIcon: (props) => (
              <MaterialIcons name="face" size={23} color={props.color} />
            ),
          }}
        /> : null}
      
        <HomeDrawerNavigator.Screen
          name="Vender"
          component={SellerNavigator}
          options={{
            drawerIcon: (props) => (
              <MaterialIcons name="store" size={23} color={props.color} />
            ),
          }}
        />

    </HomeDrawerNavigator.Navigator>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9
  },
  footer: {
    flex: 0.1
  },


});


