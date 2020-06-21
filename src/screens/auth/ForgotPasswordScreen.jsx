import React, { useState } from 'react';
import {
  Image, StyleSheet, Text, View, TextInput,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../constants/colors';
import LoadingOverlay from '../../components/LoadingOverlay';

const ForgotPasswordScreen = (props) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const onSendEmailPress = () => {
    setLoading(true);
  };

  return (
    <View style={styles.container}>
      <LoadingOverlay visible={loading} />
      <View style={styles.dialogsAndInputContainer}>

        <View style={[styles.forgotPassworDialogContainer, styles.forgotPasswordFirstTextContainer]}>
          <Text style={styles.forgotPasswordMessageTextLeft}>¿Olvidaste tu contraseña?</Text>
          <Image style={styles.forgotPasswordFirstImage} source={require('../../../assets/images/caritaTriste.png')} />
        </View>

        <View style={styles.dialogRightContainer}>
          <View style={styles.emptyView} />
          <View style={[styles.forgotPassworDialogContainer, styles.forgotPasswordSecondTextContainer]}>
            <Image style={styles.forgotPasswordFirstImage} source={require('../../../assets/images/caritaFeliz.png')} />
            <Text style={[styles.forgotPasswordMessageTextLeft, styles.forgotPasswordMessageTextRigth]}>
              No te preocupes!
            </Text>
          </View>
        </View>

        <View style={styles.inputWithTitleContainer}>
          <Text>Indicanos a que email debemos enviarla</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.sendButtonContainer}>
            <TouchableOpacity style={styles.sendButton} onPress={onSendEmailPress}>
              <Text style={styles.sendButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.defaultBackground,
  },
  dialogsAndInputContainer: {
    marginTop: 90,
  },
  forgotPasswordFirstTextContainer: {
    marginLeft: 30,
    backgroundColor: colors.forgotPasswordTextOne,
  },
  dialogRightContainer: {
    flexDirection: 'row',
  },
  emptyView: {
    flex: 1,
  },
  forgotPassworDialogContainer: {
    flexDirection: 'row',
    width: 185,
    height: 60,
    borderRadius: 20,
  },
  forgotPasswordSecondTextContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 30,
    backgroundColor: colors.forgotPasswordTextTwo,
  },
  forgotPasswordMessageTextLeft: {
    flex: 2,
    marginVertical: 10,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  forgotPasswordMessageTextRigth: {
    marginLeft: 0,
  },
  forgotPasswordFirstImage: {
    flex: 1,
    marginTop: 5,
    resizeMode: 'contain',
  },
  inputWithTitleContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 20,
    width: '100%',
    height: 40,
  },
  inputTitleText: {
    fontSize: 15,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.passwordInputBorder,
  },
  sendButtonContainer: {
    marginTop: 20,
    alignItems: 'flex-end',
    width: '100%',
  },
  sendButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginRight: 40,
    borderRadius: 20,
    backgroundColor: colors.passwordInputBorder,
  },
  sendButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
