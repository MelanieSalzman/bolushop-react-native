import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from 'native-base';
import MyProductItem from '../../components/MyProductItem';
import TextH1 from '../../components/TextH1';
import colors from '../../constants/colors';

const MyProducts = (props) => {
  // Array de productos de ejemplo
  const arrayProducts = [
    {
      id: 1,
      name: 'Taza porta galletitas',
      description: 'Es una taza que nos permite almacenar galletitas mientras ...',
      cost: '19.99',
    },

    {
      id: 2,
      name: 'Taza porta galletitas 2',
      description: 'Es una taza que nos permite almacenar galletitas mientras ...',
      cost: '19.99',
    },

  ];

  // Representa el array de productos
  const [products, setProducts] = useState(arrayProducts);

  return (
    <SafeAreaView style={styles.container}>

      <TextH1 text="Mis productos" />

      <FlatList
        style={styles.title}
        data={products}
        renderItem={({ item }) => (
          <MyProductItem
            id={item.id}
            name={item.name}
            description={item.description}
            cost={item.cost}
            navigation={props.navigation}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity>
        <View style={styles.addProductContainer}>
          <Text>Agregar mas producots</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.defaultBackground,

  },
  title: {
    marginTop: 20,
  },
  addProductContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    marginHorizontal: 35,
    marginBottom: 35,
    borderRadius: 20,
    backgroundColor: colors.passwordInputBorder,
  },

});

export default MyProducts;
