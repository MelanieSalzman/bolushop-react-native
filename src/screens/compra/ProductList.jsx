import React, {useState} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";



const ProductList = (props) => {

    const arrayProducts = [
        {
            id: 1,
            name: 'Producto 1',
            description: 'Descripcion producto 1'
        },
    
        {
            id: 2,
            name: 'Producto 2',
            description: 'Descripcion producto 2'
        },
        {
            id: 3,
            name: 'Producto 3',
            description: 'Descripcion producto 3'
        },
        {
            id: 4,
            name: 'Producto 4',
            description: 'Descripcion producto 4'
        },
        {
            id: 5,
            name: 'Producto 5',
            description: 'Descripcion producto 5'
        },
        {
            id: 6,
            name: 'Producto 6',
            description: 'Descripcion producto 6'
        }
    ]
    
    const [products, setProducts] = useState(arrayProducts);

  return (
    <View>
      <Text>Lista de productos</Text>
    
        <FlatList
          data={products}
          renderItem={({ item }) => {
          return <Text>{item.name}{item.description}</Text>
          }}
         keyExtractor={item => item.id.toString()}
        />
        </View>
  );
};

    

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      paddingVertical: 20
    },
    titleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    title: {
      fontSize: 20
    },
    listTitle: {
        fontSize: 20
      }
  });

export default ProductList;