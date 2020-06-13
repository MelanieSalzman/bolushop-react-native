import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import TextH1 from './TextH1';

const BuyButton = (props) => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <TextH1 text={props.text} />
  </TouchableOpacity>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD739',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,

  },
});

export default BuyButton;
