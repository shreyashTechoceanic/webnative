import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GreyBar from './GreyBar';
import PostOPtionsSaveQrShare from './PostOPtionsSaveQrShare';
import PostOPtionsMultipleOption from './PostOPtionsMultipleOption';

const PostOptions = () => {
  return (
    <View style={styles.container}>
      <GreyBar />
      <PostOPtionsSaveQrShare />
      <PostOPtionsMultipleOption />
    </View>
  );
};

export default PostOptions;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 16,
  },
});
