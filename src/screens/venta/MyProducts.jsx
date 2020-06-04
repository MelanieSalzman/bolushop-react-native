import React, {useState} from 'react';
import { SafeAreaView, TouchableOpacity, FlatList, StyleSheet, Text} from 'react-native';
import Constants from 'expo-constants';


const MyProducts = (props) => {

    //Array de productos de ejemplo
    const arrayProducts = [
        {
            id: 1,
            name: 'Producto 1',
            description: 'Descripcion producto 1',
            cost: '$100'
        },
    
        {
            id: 2,
            name: 'Producto 2',
            description: 'Descripcion producto 2',
            cost: '$100'
        },
        {
            id: 3,
            name: 'Producto 3',
            description: 'Descripcion producto 3',
            cost: '$100'
        },
        {
            id: 4,
            name: 'Producto 4',
            description: 'Descripcion producto 4',
            cost: '$100'
        },
        {
            id: 5,
            name: 'Producto 5',
            description: 'Descripcion producto 5',
            cost: '$100'
        },
        {
            id: 6,
            name: 'Producto 6',
            description: 'Descripcion producto 6',
            cost: '$100'
        }
    ]

    //Representa el producto seleccionado
    const [selected, setSelected] = React.useState(new Map());

    //Representa el array de productos
    const [products, setProducts] = useState(arrayProducts);
    
    //Funcion que maneja el evento onSelect
    const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  //Funcion que representa el item de producto
    function Item({ id, name, description, cost, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => {
          props.navigation.navigate("ProductDetails");
        }}
      style={[
        styles.item,
        { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
      ]}
    >
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.cost}>{cost}</Text>
    </TouchableOpacity>
  );
}

  return (
    <SafeAreaView style={styles.container}>

        <Text style={styles.title}>Todos los productos de bolushop</Text>

        <FlatList
            data={products}
            renderItem={({ item }) => (
            <Item
                id={item.id}
                name={item.name}
                description={item.description}
                cost={item.cost}
                selected={!!selected.get(item.id)}
                onSelect={onSelect}
            />
            )}
            keyExtractor={item => item.id}
            extraData={selected}
        />
        
    </SafeAreaView>
  );
};

    

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    name: {
      fontSize: 20,
    },
    description: {
      fontSize: 15,
    },
    cost: {
      fontSize: 20,
    },
    title: {
        fontSize: 25,
        padding: 20,
      }
    
  });

export default MyProducts;