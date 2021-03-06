import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from './Icon.jsx';
import TextH2 from './TextH2.jsx';

const InputProfile = (props) => (
  <View style={styles.container}>
    <View style={styles.name}>
      <TextH2 text={props.name} />
    </View>
    <View style={styles.input}>
      <TextInput
        value={props.value}
        onChangeText={(text)=>{props.onChangeText(text)}}
        editable={props.edit}
        style={{ color: props.edit ? 'black' : 'gray' }}
      />
    </View>
    <View style={styles.icon}>
      <Icon onPress={props.onPress} />
    </View>
  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    flex: 0.4,
    alignItems: 'flex-start',
  },
  input: {
    flex: 0.4,
    alignItems: 'flex-start',
    padding: 5,
  },
  icon: {
    flex: 0.15,
    alignItems: 'flex-end',
    marginRight: 10,
  },
});

export default InputProfile;
