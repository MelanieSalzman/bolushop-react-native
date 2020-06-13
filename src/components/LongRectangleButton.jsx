import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import TextH2 from '../components/TextH2.jsx'

const LongRectangleButton = (props) => {
    const screen = props.screen;
    return (


        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate(screen);
            }}>
                <TextH2 text={props.text} />
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.07,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#4EEE98',
        width: "100%"
    },
});

export default LongRectangleButton;