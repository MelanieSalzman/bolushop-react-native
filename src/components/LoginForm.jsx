import React, { useState } from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    CheckBox
} from 'react-native';
import colors from '../constants/colors';
import AsyncStorage from '@react-native-community/async-storage';


const LoginForm = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLoginPress = () => {
        props.onLoginPress();

        fetch("http://10.0.2.2:3000/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                saveTokenToStorage = async (data) => {
                    try {
                        AsyncStorage.setItem('token', data.token)
                    } catch (e) {
                        console.log("Error: ", e)
                    }
                }
            })
    };

    const onForgotPassword = () => {
        props.onForgotPassword();
    };
    return (
        <View style={styles.card}>
            <View>
                <Image
                    style={styles.imageContainer}
                    source={require('../../assets/images/bolushop.jpeg')}
                />
            </View>

            <View style={styles.inputsContainer}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Direccion de correo electronico"
                    textContentType="emailAddress"
                    value={email}
                    onChangeText={(emailEntered) => setEmail(emailEntered)}
                />

                <TextInput
                    style={styles.inputStyle}
                    placeholder="Contraseña"
                    textContentType="password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(pass) => setPassword(pass)} />

            </View>
            <View style={styles.actionsContainer}>
                <TouchableOpacity onPress={onLoginPress}>
                    <View style={styles.loginButtonContainer}>
                        <Text>Iniciar Sesion</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onForgotPassword}>
                    <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: colors.modalAuthBackground,
    },
    tabsContainer: {
        height: 45,
        flexDirection: 'row',
    },
    loginTabContainer: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopStartRadius: 20,
        backgroundColor: 'white',
    },
    registerTabContainer: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopEndRadius: 20,
        backgroundColor: '#ffffffAA',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
    },
    imageContainer: {
        width: 100,
        height: 220,
        resizeMode: 'contain',
    },
    inputsContainer: {
        width: '100%',
        paddingHorizontal: 40,
    },
    inputsContainerRegister: {
        marginTop: 50,
        width: '100%',
        paddingHorizontal: 40,
    },
    inputStyle: {
        marginBottom: 50,
        fontSize: 15,
        borderBottomWidth: 1,
    },
    inputStyleRegister: {
        marginBottom: 20,
        fontSize: 15,
        borderBottomWidth: 1,
    },
    actionsContainer: {
        marginTop: 45,
        alignItems: 'center',
    },
    loginButtonContainer: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 40,
        backgroundColor: '#4EEE98',
    },
    forgotPasswordText: {
        marginBottom: 70,
        fontSize: 15,
        fontWeight: 'bold',
    },
    registerRowTerms: {
        paddingHorizontal: 40,
        alignItems: 'center',
        flexDirection: 'row',
    },
    registerTermsText: {
        flex: 1,
    },
});

export default LoginForm;