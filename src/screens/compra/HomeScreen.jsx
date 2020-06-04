import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from '../../components/TextH1.jsx'
import ProductItem from '../../components/ProductItem.jsx'
import RectangleButton from '../../components/LongRectangleButton.jsx'
import Banner from '../../components/Banner.jsx'


const HomeScreen = (props) => {
  return (
    <View style={styles.container}>

      <Title text='Candidatos a BoluPremio del año' />

      <ProductItem
        name='Nombre del Producto'
        description='Descripcion del producto'
        cost='$100'
        navigation={props.navigation} />

      <ProductItem
        name='Nombre del Producto'
        description='Descripcion del producto'
        cost='$100'
        navigation={props.navigation}
         />

      <RectangleButton
        text='Ver todos los boluproductos'
        screen='ProductList'
        navigation={props.navigation}
      />

      <Banner title='Para vos comerciante'
      description='Hace crecer tus ventas'
      navigation={props.navigation}
      screen="MyProducts"
      />
    </View>
  );
};

export const HomeNavOptions = (props) => {
  return {
    headerTitle: "Bolushop",
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
