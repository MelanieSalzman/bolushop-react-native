import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Image,
} from 'react-native';

const Icon = (props) => (

  <View style={styles.container}>
    <TouchableOpacity onPress={(e) => {
      props.onPress(e);
    }}
    >
      <Image source={require('../images/EditIcon.png')} style={styles.image} />
    </TouchableOpacity>
  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
});

export default Icon;
