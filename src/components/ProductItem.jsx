import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import TextH2 from "../components/TextH2.jsx"
import ProductImage from '../components/ProductImage.jsx'

const ProductItem = (props) => {
    return (

        <View style={styles.container}>
            <View>
                <ProductImage />
            </View>
            <View style={styles.rightBox}>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("ProductDetails");
                }}>

                    <TextH2 text={props.name} />
                    <TextH2 text={props.description} />
                    <TextH2 text={props.cost} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.25,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        padding: 10,
    },
    title: {
        fontSize: 20
    },
    rightBox: {
        flex: 0.9,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: '100%'
    },
});

export default ProductItem;