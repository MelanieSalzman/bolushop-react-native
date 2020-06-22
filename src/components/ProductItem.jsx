import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import TextH2 from './TextH2';
import ProductImage from './ProductImage';
import CostBg from './CostBg';

const ProductItem = (props) => {
  const { item } = props;

  return(

  <View style={styles.container}>
    <View style={styles.leftBox}>
      <ProductImage />
      <CostBg text={item.price} />
    </View>

    <View style={styles.rightBox}>
      <TouchableOpacity onPress={() => {
        props.navigation.navigate('ProductDetails', { Item: item });
      }}
      >
        <TextH2 text={item.name} />
        <TextH2 text={item.description} />
      </TouchableOpacity>
    </View>
  </View>
)};

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
