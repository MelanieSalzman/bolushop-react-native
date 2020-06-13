import React, { useState } from 'react';
import {
  View, Text, Button,
} from 'react-native';
import LoginModal from '../../components/LoginModal';

const ProductDetails = (props) => {
  const [showModal, setShowModal] = useState(false);

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
    <View>
      <Text>Pantalla producto</Text>
      <Button
        title="Comprar"
        onPress={() => {
          setShowModal(true);
        }}
      />
      <LoginModal
        isVisible={showModal}
        onLoginPress={onLoginPress}
        onRegisterPress={onRegisterPress}
        onForgotPassword={onForgotPassword}
      />
    </View>
  );
};

export default ProductDetails;
