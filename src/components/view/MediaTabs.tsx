import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from './Icon';
import Post from '../../icons/Post.svg';
import Reel from '../../icons/Reel.svg';
import Films from '../../icons/Films.svg';

const MediaTabs = () => {
  return (
    <View style={styles.container}>
      <Icon image={<Post />} />
      <Icon image={<Reel />} />
      <Icon image={<Films />} />
    </View>
  );
};

export default MediaTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 268.13,
    // flex: 1,
    // backgroundColor: 'orange',
  },
});
