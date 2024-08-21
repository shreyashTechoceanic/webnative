import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import GreyBar from './GreyBar';
import Search from './Search';
import SocialMediaHandles from './SocialMediaHandles';
import ShareUser from './ShareUser';

const {width} = Dimensions.get('window');

const ShareOptions = () => {
  return (
    <View style={styles.container}>
      <GreyBar />
      <Search />
      <SocialMediaHandles />
      <View style={styles.greyLine}></View>
      <ShareUser />
    </View>
  );
};

export default ShareOptions;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 16,
  },
  greyLine: {
    borderWidth: 1,
    borderColor: '#3030300D',
    width: width,
    marginLeft: -12,
  },
});
