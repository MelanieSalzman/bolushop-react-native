import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import colors from '../constants/colors';

const LoadingOverlay = (props) => {
  if (!props.visible) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <ActivityIndicator style={styles.spinner} size="large" color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 9,
    backgroundColor: colors.blackOpacity,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  spinner: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default LoadingOverlay;
