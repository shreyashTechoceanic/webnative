import {
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ColorValue,
} from 'react-native';
import React, {useState} from 'react';

interface InputType {
  inputStyle?: StyleProp<TextStyle>;
  placeHolderText?: string;
  placeHolderColor?: ColorValue;
  input: string;
  setInput: (text: string) => void;
}

const Input = (props: InputType) => {
  const {inputStyle, placeHolderText, placeHolderColor, input, setInput} =
    props;

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TextInput
        style={inputStyle}
        value={input}
        onChangeText={setInput}
        placeholder={placeHolderText}
        placeholderTextColor={placeHolderColor}
        multiline={true}
      />
    </View>
  );
};

export default Input;
