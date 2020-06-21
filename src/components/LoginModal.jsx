import React, { useState, useEffect } from 'react';
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
import RenderLogin from './LoginForm'
import RenderRegister from './RegisterForm'
import { AsyncStorage } from 'react-native';

const LoginModal = (props) => {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <Modal visible={props.isVisible} animationType="slide" transparent>
      <View style={styles.modalBackground}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.loginTabContainer, isLogin ? { backgroundColor: 'white' } : { backgroundColor: '#ffffffAA' }]}
            onPress={() => setIsLogin(true)}
          >
            <Text>Inicio de sesion</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.registerTabContainer, !isLogin ? { backgroundColor: 'white' } : { backgroundColor: '#ffffffAA' }]}
            onPress={() => setIsLogin(false)}
          >
            <Text>Registro</Text>
          </TouchableOpacity>
        </View>

        {isLogin ? 
        <RenderLogin onLoginPress={props.onLoginPress} 
        onForgotPassword={props.onForgotPassword}/> : 
        <RenderRegister onRegisterPress={props.onRegisterPress}/>}

      </View>
    </Modal>
  );
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

export default LoginModal;
