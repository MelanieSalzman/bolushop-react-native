import React, { useState } from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    CheckBox,
    Alert,
} from 'react-native';
//import DatePicker from 'react-native-datepicker';
import Calendar from '../components/Calendar'
import colors from '../constants/colors';
import { registerUser } from '../api/userAPI'


const RegisterForm = (props) => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [birth, setBirth] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeated, setPasswordRepeated] = useState('');

    const onRegisterPress = () => {
        props.onRegisterPress();

        registerUser(name, username, email, password)

    };

    const changeDate = (value) => {

        setBirth(value)
    }


    return (
        <View style={styles.card}>
            <View style={styles.inputsContainerRegister}>
                <TextInput
                    style={styles.inputStyleRegister}
                    placeholder="Nombre"
                    textContentType="name"
                    value={name}
                    onChangeText={(name) => setName(name)}
                />

                <TextInput
                    style={styles.inputStyleRegister}
                    placeholder="Nombre de usuario"
                    textContentType="name"
                    value={username}
                    onChangeText={(username) => setUsername(username)}
                />
   { /*
                <DatePicker
                    format="DD/MM/YYYY"
                    style={styles.dateComponent}
                    date={birth}
                    onDateChange={changeDate}

                />*/}
                <Calendar />


                <TextInput
                    style={styles.inputStyleRegister}
                    placeholder="Direccion de correo electronico"
                    value={email}
                    onChangeText={(emailEntered) => setEmail(emailEntered)}
                />

                <TextInput
                    style={styles.inputStyleRegister}
                    placeholder="Contraseña"
                    textContentType="password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(pass) => setPassword(pass)}
                />

                <TextInput
                    style={styles.inputStyleRegister}
                    placeholder="Repetir Contraseña"
                    textContentType="password"
                    secureTextEntry={true}
                    value={passwordRepeated}
                    onChangeText={(pass) => setPasswordRepeated(pass)}
                />

            </View>

            <View style={styles.registerRowTerms}>
                <CheckBox value />
                <Text style={styles.registerTermsText}>Acepto los boluterminos y las bolucondiciones</Text>
            </View>
            <View style={styles.actionsContainer}>
                <TouchableOpacity onPress={onRegisterPress}>
                    <View style={styles.loginButtonContainer}>
                        <Text>Registrarme</Text>
                    </View>
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

    dateComponent:{
        width : 300,
    }
});

export default RegisterForm;
