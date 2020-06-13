

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/colors';

const ForgotPasswordScreen = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.forgotPasswordFirstTextContainer}>
           <Text style={styles.forgotPasswordMessagesText}>¿Olvidaste tu contraseña?</Text>
          <Image style={ styles.forgotPasswordFirstImage} source={require('../../../assets/images/caritaTriste.png')}/>
        </View>
        <View style={styles.forgotPasswordSecondTextContainer}>
          <Image style={ styles.forgotPasswordFirstImage} source={require('../../../assets/images/caritaFeliz.png')}/>
          <Text style={styles.forgotPasswordMessagesText}>No te preocupes!</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.defaultBackground,
  },
  forgotPasswordFirstTextContainer: {
    marginLeft: 30,
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
    width: 185,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#9FFFCB', // TODO: Poner en constante de colores
  },
  forgotPasswordSecondTextContainer: {
    marginTop: 120,
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    marginRight: 30,
    justifyContent: 'center',
    width: 185,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#FFCC00', // TODO: Poner en constante de colores
  },
  forgotPasswordMessagesText: {
    flex: 2,
    marginVertical: 10,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  forgotPasswordFirstImage: {
    flex: 1,
    marginTop: 5,
    resizeMode: 'contain',
  },
});

export default ForgotPasswordScreen;
