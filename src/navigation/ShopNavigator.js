import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  Ionicons,
} from '@expo/vector-icons';

import {
  Platform,
  View,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import HomeScreen, {
  HomeNavOptions,
} from '../screens/compra/HomeScreen';
import ProductDetails from '../screens/compra/ProductDetails';
import ProductList from '../screens/compra/ProductList';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import MyProducts from '../screens/venta/MyProducts';
import MyAccount from '../screens/user/MyAccount';
import AddProductScreen from '../screens/venta/AddProductScreen';

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

  </HomeStackNavigator.Navigator>
);

const AccountStackNavigator = createStackNavigator();
export const MyAccountNavigator = () => (
  <HomeStackNavigator.Navigator>
    <HomeStackNavigator.Screen
      name="MyAccount"
      component={MyAccount}
    />
  </HomeStackNavigator.Navigator>
);

const HomeDrawerNavigator = createDrawerNavigator();
export const HomeDrawer = () => (
  <HomeDrawerNavigator.Navigator drawerContent={
    (props) => (
      <View style={
        {
          flex: 1,
          paddingTop: 20,
        }
      }
      >
        <SafeAreaView forceInset={{ flex: 1 }}>
          <View style={{
            height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',
          }}
          >
            <Image
              source={require('../images/avatar.png')}
              style={{ height: 120, width: 120, borderRadius: 60 }}
            />
          </View>
          <DrawerItemList {...props} />
        </SafeAreaView>
      </View>
    )
}
  >

    <HomeDrawerNavigator.Screen
      name="Inicio"
      component={
  HomeNavigator
}
      options={
  {
    drawerIcon: (props) => (
      <Ionicons
        name={
        Platform.OS === 'android' ? 'md-home' : 'ios-home'
      }
        size={
        23
      }
        color={
        props.color
      }
      />
    ),
  }
}
    />

    <HomeDrawerNavigator.Screen
      name="Buscar"
      component={
  HomeNavigator
}
      options={
  {
    drawerIcon: (props) => (
      <Ionicons
        name={
        Platform.OS === 'android' ? 'md-create' : 'ios-create'
      }
        size={
        23
      }
        color={
        props.color
      }
      />
    ),
  }
}
    />

    <HomeDrawerNavigator.Screen
      name="Mi cuenta"
      component={
  MyAccountNavigator
}
      options={
  {
    drawerIcon: (props) => (
      <Ionicons
        name={
        Platform.OS === 'android' ? 'md-create' : 'ios-create'
      }
        size={
        23
      }
        color={
        props.color
      }
      />
    ),
  }
}
    />

    <HomeDrawerNavigator.Screen
      name="Vender"
      component={
  HomeNavigator
}
      options={
  {
    drawerIcon: (props) => (
      <Ionicons
        name={
        Platform.OS === 'android' ? 'md-create' : 'ios-create'
      }
        size={
        23
      }
        color={
        props.color
      }
      />
    ),
  }
}
    />
  </HomeDrawerNavigator.Navigator>
);
