import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import TextH2 from './TextH2.jsx';
import SimpleButton from './SimpleButton.jsx';
import BannerImage from './BannerImage.jsx';

const Banner = (props) => (
  <View style={styles.container}>
    <View style={styles.leftBox}>
      <BannerImage />
    </View>
    <View style={styles.rightBox}>
      <TextH2 text={props.title} />
      <TextH2 text={props.description} />
      <TouchableOpacity onPress={() => {props.navigation.navigate("MyProducts")}}>
                        <View style={styles.loginButtonContainer}>
                            <Text>Vender</Text>
                        </View>
                    </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  rightBox: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  leftBox: {
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  loginButtonContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 40,
    backgroundColor: '#4EEE98',
}

});

export default Banner;
