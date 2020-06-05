import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import TextH2 from '../components/TextH2.jsx'

const ProfilePicture = (props) => {
    return (

        <View style={styles.container}>
            <Image source={require('../images/ImageRandom.png')} style={styles.image}/>
            
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    image: {
        width: 90, 
        height: 90,
        borderRadius: 100
    },
});

export default ProfilePicture;