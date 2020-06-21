import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import ProfilePicture from '../../components/ProfilePicture.jsx'
import TextH2 from '../../components/TextH2.jsx'
import InputProfile from '../../components/InputProfile.jsx'
import SimpleButton from '../../components/SimpleButton.jsx'
import LongRectangleButton from '../../components/LongRectangleButton.jsx'
import Line from '../../components/Line.jsx'
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-community/async-storage';
import {profileUser} from '../../api/userAPI'

const MyAccount = (props) => {

    const [enableWritingUsername, setEnableWritingUsername] = useState(false);
    const [enableWritingEmail, setEnableWritingEmail] = useState(false);
    const [enableWritingPassword, setEnableWritingPassword] = useState(false);
    const [enableWritingName, setEnableWritingName] = useState(false);
    const [enableWritingSurname, setEnableWritingSurname] = useState(false);
    const [enableWritingWeb, setEnableWritingWeb] = useState(false);
    const [enableWritingBirth, setEnableWritingBirth] = useState(false);
    const [enableWritingPhone, setEnableWritingPhone] = useState(false);

    const [email, setEmail] = useState('');

    const EnableFunction = (component, set, value) => {
        if (component) {
            set(false)
            console.log("pasa",value)
            setEmail(value)
            
        } else {
            set(true)
            
        }
    }


    const removeItemFromStorage = async (key) => {

        try {
            await AsyncStorage.removeItem(key);
            return true;
        }
        catch (exception) {
            return false;
        }
    }

    const logout = async () => {

        if (removeItemFromStorage("token")) {
            props.navigation.navigate("HomeScreen")
        } else {
            console.log("No se pudo cerrar sesion")
        }
    }

    useEffect(() => {
        const data = profileUser()
        setEmail(data.email)

    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.image}>
                    <ProfilePicture />
                </View>

                <View style={styles.title}>
                    <TextH2 text='Datos de la cuenta' />
                </View>
                <View style={styles.form}>
                    <Line />
                    <InputProfile
                        name='Nombre de usuario'
                        value='MelanieSalzman'
                        edit={enableWritingUsername}
                        onPress={(e) => EnableFunction(enableWritingUsername, setEnableWritingUsername)} />
                    <Line />
                    <InputProfile
                        name='Correo electronico'
                        value={email}
                        edit={enableWritingEmail}
                        onChangeText = {value => setEmail(value)}
                        onPress={(e,email) => {
                            EnableFunction(enableWritingEmail, setEnableWritingEmail, email);
                            }} />
                    <Line />
                    <InputProfile
                        name='Contraseña'
                        value='*********'
                        edit={enableWritingPassword}
                        onPress={(e) => EnableFunction(enableWritingPassword, setEnableWritingPassword)} />
                    <Line />
                </View>
                <View style={styles.title}>
                    <TextH2 text='Datos personales' />
                </View>
                <View style={styles.form}>
                    <Line />
                    <InputProfile
                        name='Nombre'
                        value='Melanie'
                        edit={enableWritingName}
                        onPress={(e) => EnableFunction(enableWritingName, setEnableWritingName)} />
                    <Line />
                    <InputProfile
                        name='Apellido'
                        value='Salzman'
                        edit={enableWritingSurname}
                        onPress={(e) => EnableFunction(enableWritingSurname, setEnableWritingSurname)} />
                    <Line />
                    <InputProfile
                        name='Pagina web'
                        value='www.melanielamejor.com.ar'
                        edit={enableWritingWeb}
                        onPress={(e) => EnableFunction(enableWritingWeb, setEnableWritingWeb)} />
                    <Line />
                    <InputProfile
                        name='Fecha de nacimiento'
                        value='28 - 03 - 1997'
                        edit={enableWritingBirth}
                        onPress={(e) => EnableFunction(enableWritingBirth, setEnableWritingBirth)} />
                    <Line />
                    <InputProfile
                        name='Telefono'
                        value='11 - 5145 - 4719'
                        edit={enableWritingPhone}
                        onPress={(e) => EnableFunction(enableWritingPhone, setEnableWritingPhone)} />
                    <Line />
                </View>

                <View style={styles.buttons}>
                    <SimpleButton title='Cancelar' navigation={props.navigation} screen="HomeScreen" />
                    <SimpleButton title='Guardar' navigation={props.navigation} screen="MyAccount" />
                </View>
                <View style={styles.button}>
                    <LongRectangleButton onPress={logout} text="Cerrar sesion" />
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    buttons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        flex: 1,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 20
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    }
});

export default MyAccount;