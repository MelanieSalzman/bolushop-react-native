import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import ProductImageDetail from './ProductImageDetail'
import TextH2 from '../components/TextH2'



const Rectangle = (props) => {
    return (

        <View style={styles.container}>
        <TextH2 text="Producto"/></View>


                 
    


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        backgroundColor: '#4EEE98',
     
        
    },

});

export default Rectangle;