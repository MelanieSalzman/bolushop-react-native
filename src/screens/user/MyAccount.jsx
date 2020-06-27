import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import ProfilePicture from '../../components/ProfilePicture.jsx'
import TextH2 from '../../components/TextH2.jsx'
import InputProfile from '../../components/InputProfile.jsx'
import SimpleButton from '../../components/SimpleButton.jsx'
import Line from '../../components/Line.jsx'
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-community/async-storage';
import { profileUser } from '../../api/userAPI'
import LogoutButton from '../../components/LogoutButton.jsx';
import { updateUser } from '../../api/userAPI';


const MyAccount = (props) => {

    const [enableWritingUsername, setEnableWritingUsername] = useState(false);
    const [enableWritingEmail, setEnableWritingEmail] = useState(false);
    const [enableWritingName, setEnableWritingName] = useState(false);
    const [enableWritingSurname, setEnableWritingSurname] = useState(false);
    const [enableWritingWeb, setEnableWritingWeb] = useState(false);
    const [enableWritingBirth, setEnableWritingBirth] = useState(false);
    const [enableWritingPhone, setEnableWritingPhone] = useState(false);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [name,setName] = useState('')

    const [isLoading, setLoading] = useState(false);

    const onChangeTextEmail = (text) => {
        setEmail(text)
    }
    const onChangeTextUsername = (text) => {
        setUsername(text)
    }

    const onChangeTextName = (text) => {
        setName(text)
    }

    const logout = async () => {
        await AsyncStorage.removeItem("token")
        props.navigation.navigate("HomeScreen")
        console.log("paso por aca")
    }

    const saveProfile = () => {

        //setLoading(true);

        const updated = updateUser(email, username, name)

        /* setTimeout(() => {
           navigation.goBack();
         }, 2000);*/
    };

    const ChangePassword = () => {
        props.navigation.navigate("ChangePassword")
    }



    useEffect(() => {

        const setterProfile = async () => {
            const data = await profileUser()
            setEmail(data.email)
            setUsername(data.username)
            setName(data.name)

        }
        setterProfile()
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
                        value={username}
                        edit={enableWritingUsername}
                        onChangeText={onChangeTextUsername}
                        onPress={() => setEnableWritingUsername(!enableWritingUsername)} />
                    <Line />
                    <InputProfile
                        name='Correo electronico'
                        value={email}
                        edit={enableWritingEmail}
                        onChangeText={onChangeTextEmail}
                        onPress={() => setEnableWritingEmail(!enableWritingEmail)} />
                    <Line />
                </View>
                <View style={styles.title}>
                    <TextH2 text='Datos personales' />
                </View>
                <View style={styles.form}>
                    <Line />
                    <InputProfile
                        name='Nombre'
                        value={name}
                        edit={enableWritingName}
                        onChangeText={onChangeTextName}
                        onPress={() => setEnableWritingName(!enableWritingName)} />
                    <Line />
                    <InputProfile
                        name='Pagina web'
                        value=''
                        edit={enableWritingWeb}
                        onPress={(e) => EnableFunction(enableWritingWeb, setEnableWritingWeb)} />
                    <Line />
                    <InputProfile

                        name='Fecha de nacimiento'
                        value=''
                        edit={enableWritingBirth}
                        onPress={(e) => EnableFunction(enableWritingBirth, setEnableWritingBirth)} />
                    <Line />
                    <InputProfile
                        name='Telefono'
                        value=''
                        edit={enableWritingPhone}
                        onPress={(e) => EnableFunction(enableWritingPhone, setEnableWritingPhone)} />
                    <Line />
                </View>

                <View style={styles.actionsContainer}>
                    <TouchableOpacity onPress={saveProfile}>
                        <View style={styles.loginButtonContainer}>
                            <Text>Guardar</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ChangePassword}>
                        <View style={styles.loginButtonContainer}>
                            <Text>Cambiar contraseña</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <LogoutButton onPress={logout} text="Cerrar sesion" />
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    form: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 20,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    actionsContainer: {
        marginTop: 45,
        alignItems: 'center',
        flexDirection: 'row'
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
    }
});

export default MyAccount;
