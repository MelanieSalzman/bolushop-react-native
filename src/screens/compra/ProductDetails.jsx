import React, { useState } from 'react';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';
import LoginModal from '../../components/LoginModal';
import Rectangle from '../../components/Rectangle';
import ProductImageDetail from '../../components/ProductImageDetail';
import TextH2 from '../../components/TextH2';
import RectangleAdress from '../../components/RectangleAdress';
import BuyButton from '../../components/BuyButton';
import RectangleRating from '../../components/RectangleRating';

const ProductDetails = ({ route, navigation }) => {

  const [product, setProduct] = useState(route.params?.Item);
  const [showModal, setShowModal] = useState(false);

  const [id, setId] = useState(product._id);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [details, setDetails] = useState(product.details);
  const [web, setWeb] = useState(product.web);
  

  const isLogged = () => {
    // TODO: Check user
    // if (user.token){
    // }
    setShowModal(true);
  };
  const onLoginPress = () => {
    setShowModal(false);
  };

  const onRegisterPress = () => {
    setShowModal(false);
  };

  const onForgotPassword = () => {
    setShowModal(false);
    props.navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>

      <View style={styles.image}>
        <ProductImageDetail />
      </View>

      <View style={styles.rectangle}>
        <Rectangle />
      </View>

      <View style={styles.description}>
        <TextH2 text={description} />
      </View>
      <View style={styles.adress}>
        <RectangleAdress />
      </View>

      <View style={styles.buy}>
        <BuyButton text="COMPRAR" onPress={isLogged} />
      </View>

      <View style={styles.rating}>
        <RectangleRating />
      </View>

      <LoginModal
        isVisible={showModal}
        onLoginPress={onLoginPress}
        onRegisterPress={onRegisterPress}
        onForgotPassword={onForgotPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  description: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adress: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

  },
  rating: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buy: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductDetails;
