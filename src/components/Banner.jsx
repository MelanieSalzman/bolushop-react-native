import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import TextH2 from "../components/TextH2.jsx"
import SimpleButton from '../components/SimpleButton.jsx'
import BannerImage from '../components/BannerImage.jsx'

const Banner = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftBox}>
             <BannerImage />
            </View>
            <View style={styles.rightBox}>
            <TextH2 text={props.title} />
            <TextH2 text={props.description} />
            <SimpleButton navigation={props.navigation} title='Vender' screen={props.screen}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        width: '100%'
    },
    rightBox: {
        flex:0.5,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: '100%'
    },
    leftBox: {
        flex:0.55,
        justifyContent: "center",
        alignItems: "center",
        width: '100%'
    },

});

export default Banner;