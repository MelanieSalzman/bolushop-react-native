import React from 'react';
import { View, Text, Button } from 'react-native';

const ProductDetails = (props) => {
  return (
    <View>
      <Text>Pantalla producto</Text>
      <Button
        title="Ver producto"
        onPress={() => {
          props.navigation.navigate("ProductDetails");
        }}
      />
    </View>
  );
};

export default ProductDetails;
