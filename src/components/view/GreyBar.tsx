import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GreyBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bar}></View>
    </View>
  );
};

export default GreyBar;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },

  bar: {
    backgroundColor: '#D9D9D9',
    width: 70.58,
    height: 4.41,
    borderRadius: 11.03,
  },
});
