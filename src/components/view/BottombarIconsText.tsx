import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface BottombarIconsText {
  image: React.ReactNode | number;
  text: string;
}

const BottombarIconsText = ({image, text}: BottombarIconsText) => {
  return (
    <View style={styles.container}>
      {image}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default BottombarIconsText;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },

  text: {
    // fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 16.37,
    color: '#958E8E',
  },
});
