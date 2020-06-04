import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import TextH2 from "../components/TextH2.jsx"

const ProductItem = (props) => {
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={() => {
          props.navigation.navigate("ProductDetails");
        }}>
            <TextH2 text={props.name} />
            <TextH2 text={props.description} />
            <TextH2 text={props.cost} />
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
        width: '100%'
    },
    title: {
        fontSize: 20
    },
});

export default ProductItem;