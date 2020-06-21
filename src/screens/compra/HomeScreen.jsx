import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Title from '../../components/TextH1';
import ProductItem from '../../components/ProductItem';
import RectangleButton from '../../components/LongRectangleButton';
import Banner from '../../components/Banner';
import colors from '../../constants/colors';

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
  headerStyle: {
    backgroundColor: colors.passwordInputBorder,
  },
  headerRight: () => (
    <View style={styles.headerImageContainer}>
      <Image style={styles.headerImage} source={require('../../../assets/images/caritaFelizHeader.png')} />
    </View>
  ),
  headerLeft: () => (
    <MaterialIcons
      style={styles.menu}
      name="menu"
      size={30}
      onPress={() => props.navigation.toggleDrawer()}
    />
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.defaultBackground,

  },
  menu: {
    marginLeft: 20,
  },
  headerImageContainer: {
    justifyContent: 'center',
    marginRight: 20,
  },
  headerImage: {
    height: 40,
    width: 40,
  },
});

export default HomeScreen;
