import React from 'react';
import {
  Image, StyleSheet, Text, View, TextInput, Button,
} from 'react-native';

const AddProductScreen = (props) => (
  <View>
    <View>
      <Image />

      <View style={{
        height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',
      }}
      >
        <Image
          source={require('../../../images/ImageRandom.png')}
          style={{ height: 120, width: 120, borderRadius: 60 }}
        />
      </View>

      <Text>hola</Text>
      <Button title="Seleccionar archivo" backgroundColor onPress={() => {}} />
    </View>

    {/* titulo producto */}
    <View>
      <Text> Datos del producto </Text>
    </View>

    {/* info producto */}
    <View>
      <TextInput
        style={{
          borderWidth: 1, borderColor: 'black', margin: 10, paddingLeft: 10,
        }}
        placeholder="Nombre"
      />
      <TextInput
        style={{
          borderWidth: 1, borderColor: 'black', margin: 10, paddingLeft: 10,
        }}
        maxLength={8}
        placeholder="Precio $"
        keyboardType="numeric"
      />
      <TextInput
        style={{
          borderWidth: 1, borderColor: 'black', margin: 10, paddingLeft: 10,
        }}
        maxLength={180}
        placeholder="Descripción en 180 caracteres"
        multiline
      />
      <TextInput
        style={{
          borderWidth: 1, borderColor: 'black', margin: 10, paddingLeft: 10,
        }}
        placeholder="Detalles"
        multiline
      />
      <TextInput
        style={{
          borderWidth: 1, borderColor: 'black', margin: 10, paddingLeft: 10,
        }}
        placeholder="Web del Producto"
        keyboardType="url"
      />
    </View>

    <View>
      <Button title="Guardar" onPress={() => {}} />
      <Button title="Cancelar" onPress={() => {}} />
    </View>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Buttonr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD739',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
  },
});

export default AddProductScreen;
