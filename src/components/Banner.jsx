import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import TextH2 from "../components/TextH2.jsx"
import SimpleButton from '../components/SimpleButton.jsx'
import BannerImage from '../components/BannerImage.jsx'

const Banner = (props) => {
    return (
        <View style={styles.container}>
            <View>
             <BannerImage />
            </View>
            <View style={styles.container}>
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
        backgroundColor: "blue",
        width: '100%'
    },
    rightBox: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%'
    },

});

export default Banner;