import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import TextH2 from '../components/TextH2.jsx'

const BannerImage = (props) => {
    return (

        <View style={styles.container}>
            <Image source={require('../images/Sell.png')} style={styles.image}/>
            
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 10

    },
    image: {
        width: "100%", 
        height: "100%",
    },
});

export default BannerImage;