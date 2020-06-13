import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextH1 from './TextH1.jsx';

const CostBg = (props) => {
  const stringCost = `ARS ${props.text}`;

  return (
    <View style={styles.container}>
      <TextH1 text={stringCost} />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    marginTop: 80,
    marginLeft: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,

  },
});

export default CostBg;
