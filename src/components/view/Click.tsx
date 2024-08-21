import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';

interface ClickTypes {
  textOn: string;
  textOff: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress: () => void;
  status: boolean;
}

const Click = (props: ClickTypes) => {
  const {textOn, textOff, buttonStyle, textStyle, onPress, status} = props;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{status ? textOn : textOff}</Text>
    </TouchableOpacity>
  );
};

export default Click;
