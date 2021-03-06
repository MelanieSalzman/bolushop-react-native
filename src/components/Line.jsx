import React from 'react';
import { View, StyleSheet } from 'react-native';

const Line = (props) => (
  <View style={styles.container} />

);

const styles = StyleSheet.create({
  container: {
    flex: 0.05,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 1,
    width: '100%',
    backgroundColor: '#4EEE98',
  },
});

export default Line;
