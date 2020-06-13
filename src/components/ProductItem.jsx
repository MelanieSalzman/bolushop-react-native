import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import TextH2 from './TextH2.jsx';
import ProductImage from './ProductImage.jsx';
import CostBg from './CostBg.jsx';

const ProductItem = (props) => (

  <View style={styles.container}>
    <View style={styles.leftBox}>
      <ProductImage />
      <CostBg text={props.cost} />

    </View>
    <View style={styles.rightBox}>
      <TouchableOpacity onPress={() => {
        props.navigation.navigate('ProductDetails');
      }}
      >

        <TextH2 text={props.name} />
        <TextH2 text={props.description} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  title: {
    fontSize: 20,
  },
  rightBox: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  leftBox: {
    flex: 0.5,
    marginRight: 20,
    height: '100%',
  },
  image: {
    marginRight: 20,
  },
});

export default ProductItem;
