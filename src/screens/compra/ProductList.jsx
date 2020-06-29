import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, StyleSheet, View, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';
import ProductItem from '../../components/ProductItem.jsx';
import LoadingOverlay from '../../components/LoadingOverlay'
import TextH1 from '../../components/TextH1.jsx';
import colors from '../../constants/colors.js';
import { getProducts } from '../../api/productAPI'
import { MaterialIcons } from '@expo/vector-icons';


const ProductList = (props) => {

  const [products, setProducts] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(

    () => {

      const list = async () => {
        setLoading(true);
        const data = await getProducts()
        setProducts(data)
        setLoading(false);
      }

      list()
    }
    , [])


  return (
    <SafeAreaView style={styles.container}>
      <LoadingOverlay visible={isLoading} />
      <TextH1 text="Todos los productos de bolushop" />

      <FlatList
        style={styles.title}
        data={products}
        renderItem={({ item }) => (
          <ProductItem
            item={item}
            navigation={props.navigation}
          />
        )}
        keyExtractor={(item) => item._id.toString()}
      />

    </SafeAreaView>
  );
};

export const ProductListOptions = (props) => ({
  //headerTitle: 'Bolushop',
  headerStyle: {
    backgroundColor: colors.passwordInputBorder,
  },
  headerRight: () => (
    <View style={styles.headerImageContainer}>
      <Image style={styles.headerImage} source={require('../../../assets/images/caritaFelizHeader.png')} />
    </View>
  ),

  headerTitle: () => (
    <TextInput
    placeholder='Enter Text...'
    placeholderTextColor='gray'
    //value={this.state.query}
   // onChangeText={this.filterItem.bind(this)}
    style={styles.input}
  />

  ),

  headerLeft: () => (
    <MaterialIcons
      style={styles.menu}
      name="menu"
      size={30}
      onPress={() => props.navigation.toggleDrawer()}
    />
      
    
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  title: {
    marginTop: 20,
  }, menu: {
    marginLeft: 20,
  },
  headerImageContainer: {
    justifyContent: 'center',
    marginRight: 20,
  },
  headerImage: {
    height: 40,
    width: 40,
  },
  input:{
    height:30,
    width: '95%',
    backgroundColor:'#fff',
    borderRadius:20,
    padding: 5,
    paddingLeft:10,
    

  }

});

export default ProductList;
