import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import Icon from './Icon';

interface IconTextListTypes {
  image: React.ReactNode;
  image2: React.ReactNode | undefined;
  text: string;
  textStyle?: TextStyle;
  viewStyle?: ViewStyle;
  iconTextVertical?: ViewStyle;
}

const width_proportion = '100%';

const IconTextList = ({
  image,
  image2,
  text,
  textStyle,
  viewStyle,
  iconTextVertical,
}: IconTextListTypes) => {
  return (
    <View>
      <View style={[styles.options, viewStyle]}>
        <View style={[styles.iconText, iconTextVertical]}>
          <Icon image={image} />
          <Text style={[text === 'Report' ? {color: '#EF0000'} : textStyle]}>
            {text}
          </Text>
        </View>
        {image2 !== undefined && <Icon image={image2} />}
      </View>
    </View>
  );
};

export default IconTextList;

const styles = StyleSheet.create({
  options: {
    width: width_proportion,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',iconText
  },

  iconText: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    // width: 150,
    // justifyContent: 'space-between',
  },
});
