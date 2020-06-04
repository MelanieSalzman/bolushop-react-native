import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";
import TextH2 from '../components/TextH2.jsx'

const SimpleButton = (props) => {
    const screen = props.screen;
    return (


        <View style={styles.container}>
            <Button
                color="#13BE6D"
                title={props.title}
                onPress={() => {
                    props.navigation.navigate(screen);
                }}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
});

export default SimpleButton;