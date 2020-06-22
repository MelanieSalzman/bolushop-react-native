import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import TextH2 from './TextH2.jsx';

const LongRectangleButton = (props) => {
  return (

    <View style={styles.container}>
      <TouchableOpacity onPress={() => {props.navigation.navigate('ProductList');}}>
        <TextH2 text={props.text} />
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4EEE98',
    width: '100%',
  },
});

export default LongRectangleButton;
