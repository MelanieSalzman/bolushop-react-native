import React from "react";
import { View, Text, Button } from "react-native";
import LoginModal from "../../components/LoginModal";

const ProductDetails = (props) => {
  return (
    <View>
      <Text>Pantalla producto</Text>
      <Button
        title="Comprar"
        onPress={() => {
          props.navigation.navigate("ProductDetails");
        }}
      />
      <LoginModal isVisible={true} />
    </View>
  );
};

export default ProductDetails;
