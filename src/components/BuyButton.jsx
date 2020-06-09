import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextH1 from "./TextH1.jsx";

const BuyButton = (props) => {

    

    return (
        <View style={styles.container}>
            <TextH1 text={props.text} />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,        
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFD739",
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 20

    }
});

export default BuyButton;