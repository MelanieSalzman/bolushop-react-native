import React, {useState} from 'react';
import { SafeAreaView, FlatList, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import ProductItem from '../../components/ProductItem.jsx'
import TextH1 from '../../components/TextH1.jsx'


const MyProducts = (props) => {

    //Array de productos de ejemplo
    const arrayProducts = [
        {
            id: 1,
            name: 'Producto 1',
            description: 'Descripcion producto 1',
            cost: '100'
        },
    
        {
            id: 2,
            name: 'Producto 2',
            description: 'Descripcion producto 2',
            cost: '100'
        },
        {
            id: 3,
            name: 'Producto 3',
            description: 'Descripcion producto 3',
            cost: '100'
        },
        {
            id: 4,
            name: 'Producto 4',
            description: 'Descripcion producto 4',
            cost: '100'
        },
        {
            id: 5,
            name: 'Producto 5',
            description: 'Descripcion producto 5',
            cost: '100'
        },
        {
            id: 6,
            name: 'Producto 6',
            description: 'Descripcion producto 6',
            cost: '100'
        }
    ]

    //Representa el array de productos
    const [products, setProducts] = useState(arrayProducts);
 

  return (
    <SafeAreaView style={styles.container}>

        <TextH1 text="Mis productos" />

        <FlatList style={styles.title}
            data={products}
            renderItem={({ item }) => (
            <ProductItem
                id={item.id}
                name={item.name}
                description={item.description}
                cost={item.cost}
                navigation={props.navigation}
            />
            )}
            keyExtractor={item => item.id.toString()}
        />
        
    </SafeAreaView>
  );
};

    

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    title: {
      marginTop: 20
    }
    
  });

export default MyProducts;