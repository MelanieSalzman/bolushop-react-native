import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    CheckBox,
} from 'react-native';
import colors from '../constants/colors';
import {loginUser} from '../api/userAPI'
import { UserContext } from '../context/UserProvider' 


const LoginForm = (props) => {

    let user = useContext(UserContext)
    
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const onLoginPress = async () => {
        props.onLoginPress();

        const token = await loginUser(email,password)
        if(token!=undefined){
        user.login()
        user.getToken(token)
        }
        console.log('este es el user',user)
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