import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Pagina Inicio</Text>
      <Button
        title="Ver producto"
        onPress={() => {
          props.navigation.navigate("ProductDetails");
        }}
      />
      <Button
        title="Ver todos los boluproductos"
        onPress={() => {
          props.navigation.navigate("ProductList");
        }}
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
