import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, SafeAreaView, TextInput } from 'react-native';
import ProfilePicture from '../../components/ProfilePicture.jsx'
import TextH2 from '../../components/TextH2.jsx'
import InputProfile from '../../components/InputProfile.jsx'
import SimpleButton from '../../components/SimpleButton.jsx'
import Line from '../../components/Line.jsx'
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-community/async-storage';
import { profileUser } from '../../api/userAPI'
import LogoutButton from '../../components/LogoutButton.jsx';

const MyAccount = (props) => {


    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onChangeTextPassword = (text) => {
        setPassword(text)
    }
    const onChangeTextNewPassword = (text) => {
        setNewPassword(text)
    }

    const onChangeTextConfirmPassword = (text) => {
        setConfirmPassword(text)
    }

    const onSavePress = () => {
     
        setLoading(true);
    
        const changed = changePass(password,newPassword)
    
        setTimeout(() => {
          navigation.goBack();
        }, 2000);
      };
    

    return (
        <SafeAreaView style={styles.container}>


            <View style={styles.form}>
                <Line />
                <View style={styles.title}>
                    <TextH2 text='Cambiar la contraseña' />
                </View>
                <View style={styles.title}>
                    <TextH2 text='Contraseña actual' />
                </View>
                <TextInput
                    style={styles.normalInput}
                    name='Contraseña actual'
                    value={password}
                    onChangeText={onChangeTextPassword}
                    onPress={(text) => setPassword(text)} />

                <View style={styles.title}>
                    <TextH2 text='Nueva contraseña' />
                </View>

                <TextInput
                    style={styles.normalInput}
                    name='Nueva contraseña'
                    value={newPassword}
                    onChangeText={onChangeTextNewPassword}
                    onPress={(text) => setNewPassword(text)} />

                <View style={styles.title}>
                    <TextH2 text='Reingrese su nueva contraseña' />
                </View>

                <TextInput
                    style={styles.normalInput}
                    name='Reingrese su nueva contraseña'
                    value={confirmPassword}
                    onChangeText={onChangeTextConfirmPassword}
                    onPress={(text) => setConfirmPassword(text)} />
                <Line />
            </View>

            <View style={styles.buttons}>
                <SimpleButton title='Cancelar' navigation={props.navigation} screen="HomeScreen" />
                <SimpleButton title='Guardar' navigation={props.navigation} screen="MyAccount" onPress={onSavePress} />
            </View>

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
    normalInput: {
        marginTop: 20,
        height: 30,
        width: 300,
        borderWidth: 1,
        padding: 5,
    },
});

export default MyAccount;
