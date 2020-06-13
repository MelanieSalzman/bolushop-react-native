import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextH2 = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.text}</Text>
  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
  },
});

export default TextH2;
