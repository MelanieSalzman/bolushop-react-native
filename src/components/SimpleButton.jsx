import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

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