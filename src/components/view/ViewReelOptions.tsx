import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GreyBar from './GreyBar';
import ViewReelMultipleOptions from './ViewReelMultipleOptions';

const ViewReelOptions = () => {
  return (
    <View style={styles.container}>
      <GreyBar />
      <ViewReelMultipleOptions />
    </View>
  );
};

export default ViewReelOptions;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 20,
    // width: 360,
    height: 192,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // backgroundColor: 'yellow',
  },
});
