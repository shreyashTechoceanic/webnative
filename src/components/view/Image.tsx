import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgUri} from 'react-native-svg';
import Frame from '../../assets/Frame.svg';

interface ImageTypes {
  image: React.ReactNode;
}

const Image = ({image}: ImageTypes) => {
  return <View>{image}</View>;
};

export default Image;

const styles = StyleSheet.create({});
