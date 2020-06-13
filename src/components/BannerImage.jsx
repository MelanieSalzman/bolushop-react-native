import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const BannerImage = (props) => (

  <View style={styles.container}>
    <Image source={require('../images/Sell.png')} style={styles.image} />

  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,

  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default BannerImage;
