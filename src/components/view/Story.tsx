import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HighlightsImage from '../../icons/HighlightsImage.svg';

interface StoryTypes {
  image: React.ReactNode;
  imageText: string;
}

const Story = ({image, imageText}: StoryTypes) => {
  const isHighlightsImage =
    React.isValidElement(image) && image.type === HighlightsImage;

  return (
    <View style={styles.container}>
      <View style={isHighlightsImage ? styles.imageBorder : styles.blueBorder}>
        {image}
      </View>
      <Text style={styles.text}>{imageText}</Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // flex: 1,
  },

  imageBorder: {
    width: 64,
    height: 65,
    padding: 1,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 13.37,
    fontWeight: '400',
    lineHeight: 18.24,
    color: '#30303080',
  },

  blueBorder: {
    width: 64,
    height: 65,
    padding: 1,
    borderWidth: 1,
    borderRadius: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#4690B5',
  },
});
