import React from 'react';
import {TouchableOpacity} from 'react-native';

const Button = ({handlePress}: any) => {
  return <TouchableOpacity onPress={handlePress}>Button</TouchableOpacity>;
};

export default Button;
