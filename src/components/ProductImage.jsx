import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const ProductImage = (props) => (

  <View style={styles.container}>
    <Image source={require('../images/ImageRandom.png')} style={styles.image} />

  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    borderColor: 'yellow',
    borderWidth: 4,
    borderRadius: 20,

  },
  image: {
    width: 110,
    height: 110,
  },
});

export default ProductImage;
