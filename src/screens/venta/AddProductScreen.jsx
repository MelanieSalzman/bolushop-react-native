import React, { useState } from 'react';
import {
  Image, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity,
} from 'react-native';
import colors from '../../constants/colors';
import LoadingOverlay from '../../components/LoadingOverlay';
import  { addProduct } from '../../api/productAPI'



const AddProductScreen = ({ route, navigation }, props) => {
  const [product, setProduct] = useState(route.params?.editItem); // Item {} - undefined
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [details, setDetails] = useState('');
  const [web, setWeb] = useState('');
  

  const onSavePress = async () => {
    setLoading(true);
   

    const added = await addProduct(name,price,description,details,web)
    console.log('esto es added', added)
    const item = {name: name, description: description, price: price, details: details, web: web}
    setLoading(false);
    navigation.navigate('MyProducts');
  };



  return (
    <View style={styles.container}>
      <LoadingOverlay visible={isLoading} />
      <ScrollView>
        <View style={styles.imageWithButtonContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../images/ImageRandom.png')}
              style={styles.image}
            />
            <TouchableOpacity style={styles.selectImageButtonContainer} onPress={() => {}}>
              <Text style={styles.selectFileText}>Seleccionar archivo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputsContainer}>
          <Text style={styles.defaultText}> Datos del producto </Text>

          <TextInput
            style={styles.normalInput}
            placeholder="Nombre"
            value={product ? product.name : name} // product ? product.name : ""
            onChangeText={(text)=>{setName(text)}}
          />
          <TextInput
            style={styles.normalInput}
            maxLength={8}
            placeholder="Precio $"
            keyboardType="numeric"
            value={`${price}`}
            onChangeText={(text)=>{setPrice(text)}}
          />
          <TextInput
            style={styles.normalInput}
            maxLength={180}
            placeholder="Descripción en 180 caracteres"
            multiline
            value={product ? product.description : description}
            onChangeText={(text)=>{setDescription(text)}}
          />
          <TextInput
            style={styles.normalInput}
            placeholder="Detalles"
            multiline
            value={product ? product.details : details} 
            onChangeText={(text)=>{setDetails(text)}}
          />
          <TextInput
            style={styles.normalInput}
            placeholder="Web del Producto"
            keyboardType="url"
            value={product ? product.url : web}
            onChangeText={(text)=>{setWeb(text)}}
          />
        </View>
      </ScrollView>
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => { navigation.goBack(); }}>
          <Text style={styles.defaultText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={onSavePress}>
          <Text style={styles.defaultText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.defaultBackground,
  },
  imageWithButtonContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 20,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  selectImageButtonContainer: {
    position: 'absolute',
    bottom: 0,
    right: -40,
    borderRadius: 20,
    backgroundColor: colors.passwordInputBorder,
  },
  selectFileText: {
    margin: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  inputsContainer: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  defaultText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  normalInput: {
    marginTop: 20,
    height: 30,
    borderWidth: 1,
    padding: 5,
  },
  actionButtonsContainer: {
    marginBottom: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  actionButton: {
    flex: 1,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 40,
    backgroundColor: colors.passwordInputBorder,
  },

});

export default AddProductScreen;
