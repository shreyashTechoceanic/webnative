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
  text: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;  
}

const Click = ({text, buttonStyle, textStyle}: ClickTypes) => {
  return (
    <View>
      <TouchableOpacity style={buttonStyle}>
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Click;
