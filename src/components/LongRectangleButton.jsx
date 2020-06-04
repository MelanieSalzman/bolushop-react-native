import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
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
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        width: "100%"
    },
});

export default LongRectangleButton;