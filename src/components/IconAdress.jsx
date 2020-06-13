import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const IconAdress = (props) => {
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
        alignItems: "center",
        flexDirection: "row"

    },
    image: {
        width: 40, 
        height: 40,
        borderRadius: 100
    },
});

export default IconAdress;