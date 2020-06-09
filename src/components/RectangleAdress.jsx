import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import ProductImageDetail from './ProductImageDetail'
import TextH2 from '../components/TextH2'
import IconAdress from '../components/IconAdress'




const RectangleAdress = (props) => {
    return (

        <View style={styles.container}>
            <View>
            <IconAdress/>
            </View>
            
        <View>
        <TextH2 text="Buenos Aires, Argentina"/></View>
        </View>
                       
    


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: '100%',
        backgroundColor: '#4EEE98',
     
        
    },

});

export default RectangleAdress;