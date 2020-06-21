import React, { useState } from 'react';
import {
  SafeAreaView, FlatList, StyleSheet, Modal, Image, TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
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
      description: 'Es una taza que tiene un contenedor extra para sostener las galletitas',
      cost: '19.99',
      details: 'Es una taza que tiene un contenedor extra para sostener las galletitas asdasdasdasd asdasdadsadasdasdasdasasdddddddddddddddddddddddddsdaadsasa',
      url: 'www.lamagiadelastazasxd.com.ar/altataza',
    },

    {
      id: 2,
      name: 'Taza porta galletitas 2',
      description: 'Es una taza que tiene un contenedor extra para sostener las galletitas',
      cost: '19.99',
      details: 'Es una taza que tiene un contenedor extra para sostener las galletitas asdasdasdasd asdasdadsadasdasdasdasasdddddddddddddddddddddddddsdaadsasa',
      url: 'www.lamagiadelastazasxd.com.ar/altataza',
    },

  ];

  // Representa el array de productos
  const [products, setProducts] = useState(arrayProducts);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(undefined);

  const deleteItem = () => {
    setProducts(
      arrayProducts.filter((item) => item.id !== itemToDelete),
    );
    setIsDeleteModalVisible(false);
  };

  const onItemRemovePress = (itemId) => {
    setIsDeleteModalVisible(true);
    setItemToDelete(itemId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.title}
        data={products}
        renderItem={({ item }) => (
          <MyProductItem
            item={item}
            navigation={props.navigation}
            onItemRemovePress={onItemRemovePress}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('AddProduct')}>
        <View style={styles.addProductContainer}>
          <Text>Agregar un nuevo producto</Text>
        </View>
      </TouchableOpacity>

      <Modal visible={isDeleteModalVisible} transparent>
        <View style={styles.modalBackground}>
          <View style={styles.modalCard}>
            <Text>¿Seguro queres eliminar este producto?</Text>
            <View style={styles.deleteActionsContainer}>
              <TouchableOpacity onPress={() => setIsDeleteModalVisible(false)}>
                <Image style={styles.actionsImage} source={require('../../../assets/images/caritaFeliz.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteItem()}>
                <Image style={styles.actionsImage} source={require('../../../assets/images/caritaTriste.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: colors.modalAuthBackground,
  },
  modalCard: {
    justifyContent: 'center',
    padding: 30,
    borderRadius: 20,
    backgroundColor: colors.defaultBackground,
  },
  deleteActionsContainer: {
    marginTop: 60,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

export default MyProducts;
