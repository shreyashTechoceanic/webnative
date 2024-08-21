import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GreyBar from './GreyBar';
import OtherProfileMultipleOptions from './OtherProfileMultipleOptions';

const OtherProfileOptions = () => {
  return (
    <View style={styles.container}>
      <GreyBar />
      <OtherProfileMultipleOptions />
    </View>
  );
};

export default OtherProfileOptions;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    gap: 17,
    // backgroundColor: 'yellow',
    // width: 360,
    height: 206,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
