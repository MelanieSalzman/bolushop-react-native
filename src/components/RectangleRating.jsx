import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import ProductImageDetail from './ProductImageDetail'
import TextH2 from '../components/TextH2'
import IconAdress from '../components/IconAdress'
import Icon from '../components/Icon'





const RectangleRating = (props) => {
    return (

        <View style={styles.container}>

            <View style={styles.leftContainer}>
                <Icon />
            </View>

            <View style={styles.rightContainer}>

                <View style={styles.title}>
                    <TextH2 text="¿Se merece el bolupremio del año" />
                </View>

                <View style={styles.MGIcons}>

                    <View>
                        <IconAdress />
                    </View>

                    <View>
                        <TextH2 text="Si es re bolu*" />
                    </View>

                    <View>
                        <IconAdress />
                    </View>

                    <View>
                        <TextH2 text="No, aburre" /></View>
                </View >

            </View>


        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        backgroundColor: 'red',


    },

    
    MGIcons: {

        flex: 0.5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        

    },
    leftContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    rightContainer:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",


    },
    title:{
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
    }

});

export default RectangleRating;