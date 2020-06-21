import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TextH2 from './TextH2';
import ProductImage from './ProductImage';
import CostBg from './CostBg';
import colors from '../constants/colors';

const MyProductItem = (props) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemContent}>
      <View style={styles.itemLeft}>
        <ProductImage />
        <CostBg text={props.cost} />
      </View>
      <View style={styles.itemRight}>
        <TextH2 text={props.name} />
        <TextH2 text={props.description} />
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionOption}>
            <MaterialIcons name="edit" size={23} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionOption}>
            <MaterialIcons name="delete" size={23} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionOption, { marginRight: 30 }]}>
            <MaterialIcons name="visibility" size={23} />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 15,
    marginBottom: 30,
  },
  itemContent: {
    flexDirection: 'row',
  },
  itemLeft: {
    flex: 1,
  },
  itemRight: {
    flex: 1,
    alignItems: 'flex-start',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 20,
  },
  actionOption: {
    marginHorizontal: 10,
  },
});

export default MyProductItem;
