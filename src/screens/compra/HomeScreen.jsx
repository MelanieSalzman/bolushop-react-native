import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Header, left, Right, Icon, Left,
} from 'native-base';
import Title from '../../components/TextH1';
import ProductItem from '../../components/ProductItem';
import RectangleButton from '../../components/LongRectangleButton';
import Banner from '../../components/Banner';

const HomeScreen = (props) => {
  const bannerDescription = 'Publicita tu producto en Bolushop y obtene mayor cantidad de ventas \n \n ¡Que crezca tu negocio ya!';

  return (
    <View style={styles.container}>

      <Title style={{ flex: 1, alignItems: 'flex-start' }} text="Candidatos a BoluPremio del año" />

      <ProductItem
        name="Nombre del Producto"
        description="Descripcion del producto"
        cost="100"
        navigation={props.navigation}
      />

      <ProductItem
        name="Nombre del Producto"
        description="Descripcion del producto"
        cost="100"
        navigation={props.navigation}
      />

      <RectangleButton
        text="Ver todos los boluproductos"
        screen="ProductList"
        navigation={props.navigation}
      />

      <Banner
        title="Para vos comerciante"
        description={bannerDescription}
        navigation={props.navigation}
        screen="MyProducts"
      />
    </View>
  );
};

export const HomeNavOptions = (props) => ({
  headerTitle: 'Bolushop',

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HomeScreen;
