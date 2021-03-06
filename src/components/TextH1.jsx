import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextH1 = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.text}</Text>
  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 20,
  },
});

export default TextH1;
