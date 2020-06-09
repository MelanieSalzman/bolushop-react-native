import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Rectangle from '../../components/Rectangle'
import ProductImageDetail from '../../components/ProductImageDetail';
import TextH2 from '../../components/TextH2'
import RectangleAdress from '../../components/RectangleAdress'
import BuyButton from '../../components/BuyButton'
import RectangleRating from '../../components/RectangleRating'


const ProductDetails = (props) => {
  return (
    <View style={styles.container}>

      <View style={styles.image}>
        <ProductImageDetail />
      </View>


      <View styles={styles.rectangle}>
        <Rectangle />
      </View>


      <View style={styles.description}>
        <TextH2 text="aliqua do voluptate. Sint tempor voluptate ea veniam nisi enim nisi velit anim pariatur amet." />
      </View>
      <View style={styles.adress}>
        <RectangleAdress />
      </View>

      <View style={styles.buy}>
      <BuyButton text='COMPRAR' />
      </View>
      
      <View style={styles.rating}>
        <RectangleRating />
      </View>


    </View>

  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "blue",
  },

  description: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"red",
    

  },

  adress: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',

  },
  rating: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  image: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",


  },
  rectangle:{
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    
    backgroundColor:"blue",
  },
  buy:{
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default ProductDetails;
