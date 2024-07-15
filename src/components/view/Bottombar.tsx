import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottombarIcons from './BottombarIcons';
import {homeHandleClick} from '../logic/Logic';

const Bottombar = () => {
  const random = () => {
    console.log('random');
  };

  return (
    <View style={styles.container}>
      <BottombarIcons random={random} homeHandleClick={homeHandleClick} />
    </View>
  );
};

export default Bottombar;

const styles = StyleSheet.create({
  container: {
    // width:button
    height: 64,
    paddingVertical: 10,
    // paddingHorizontal: 30,
    // backgroundColor: 'pink',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
