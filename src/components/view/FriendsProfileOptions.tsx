import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GreyBar from './GreyBar';
import FriendsProfileMultipleOptions from './FriendsProfileMultipleOptions';

const FriendsProfileOptions = () => {
  return (
    <View style={styles.container}>
      <GreyBar />
      <FriendsProfileMultipleOptions />
    </View>
  );
};

export default FriendsProfileOptions;

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
