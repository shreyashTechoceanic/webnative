import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconTextList from './IconTextList';
import CreateStory from '../../icons/CreateStory.svg';
import ForwardArrowBlue from '../../icons/ForwardArrowBlue.svg';
import CreatePost from '../../icons/CreatePost.svg';
import CreateFlashClips from '../../icons/CreateFlashClips.svg';
import CreateFlashFilms from '../../icons/CreateFlashFilms.svg';
import GreyBar from './GreyBar';
const CreateOptions = () => {
  return (
    <View style={styles.container}>
      <GreyBar />
      <IconTextList
        image={<CreateStory />}
        image2={<ForwardArrowBlue />}
        text={'Story'}
        textStyle={styles.text}
        viewStyle={styles.wholeContainer}
      />
      <IconTextList
        image={<CreatePost />}
        image2={<ForwardArrowBlue />}
        text={'Post'}
        textStyle={styles.text}
        viewStyle={styles.wholeContainer}
      />
      <IconTextList
        image={<CreateFlashClips />}
        image2={<ForwardArrowBlue />}
        text={'Flash Clips'}
        textStyle={styles.text}
        viewStyle={styles.wholeContainer}
      />
      <IconTextList
        image={<CreateFlashFilms />}
        image2={<ForwardArrowBlue />}
        text={'Flash Films'}
        textStyle={styles.text}
        viewStyle={styles.wholeContainer}
      />
    </View>
  );
};

export default CreateOptions;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    padding: 10,
    height: 289,
    justifyContent: 'space-around',
  },

  text: {
    // fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21.82,
  },
  wholeContainer: {
    backgroundColor: '#71A8C433',
    // width: 340,
    height: 52,
    padding: 15,
    borderRadius: 11.03,
  },
});
