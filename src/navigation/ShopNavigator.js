import React, { useState, useEffect } from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  MaterialIcons,
} from '@expo/vector-icons';

import {
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import HomeScreen, {
  HomeNavOptions,
} from '../screens/compra/HomeScreen';
import ProductDetails from '../screens/compra/ProductDetails';
import ProductList, {ProductListOptions} from '../screens/compra/ProductList';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import MyProducts from '../screens/venta/MyProducts';
import MyAccount from '../screens/user/MyAccount';
import ChangePassword from '../screens/user/ChangePassword';
import AddProductScreen from '../screens/venta/AddProductScreen';
import UpdateProductScreen from '../screens/venta/UpdateProductScreen';
import UserInfoDrawer from '../components/drawer/UserInfoDrawer';
import { nameMenu } from '../api/userAPI'

// import { Colors } from "react-native/Libraries/NewAppScreen";

// import {
//   PaginaInicio,
//   opcionesDeLaPantalla,
// } from "../screens/main/PaginaInicio";

const {
  width,
} = Dimensions.get('window');
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
    />

    <HomeStackNavigator.Screen
      name="ProductList"
      component={ProductList}
      options={ProductListOptions}
      
    />

    <HomeStackNavigator.Screen
      name="ForgotPassword"
      component={ForgotPasswordScreen}
    />

    <HomeStackNavigator.Screen
      name="MyProducts"
      component={MyProducts}
    />

    <HomeStackNavigator.Screen
      name="AddProduct"
      component={AddProductScreen}
    />

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
    />
  </HomeStackNavigator.Navigator>
);

const HomeDrawerNavigator = createDrawerNavigator();
export const HomeDrawer = () => {

  /*const [name, setName] = useState('');
  
  useEffect( async () => {

    const nameUser = nameMenu()
    setName(nameUser)
}, [])*/

  return (
    <HomeDrawerNavigator.Navigator
      drawerContent={(props) => (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <SafeAreaView forceInset={{ flex: 1 }}>
            <UserInfoDrawer />
            <DrawerItemList {...props} />
          </SafeAreaView>
        </View>
      )}
    >

      <HomeDrawerNavigator.Screen
        name="Inicio"
        component={HomeNavigator}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons
              name="home"
              size={23}
              color={props.color}
            />
          ),
        }}
      />

      <HomeDrawerNavigator.Screen
        name="Buscar"
        component={ProductList}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons
              name="search"
              size={23}
              color={props.color}
            />
          ),
        }}
      />

      <HomeDrawerNavigator.Screen
        name="Mi cuenta"
        component={MyAccountNavigator}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons
              name="face"
              size={23}
              color={props.color}
            />
          ),
        }}
      />

      <HomeDrawerNavigator.Screen
        name="Vender"
        component={SellerNavigator}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons
              name="store"
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </HomeDrawerNavigator.Navigator>
  )
};
