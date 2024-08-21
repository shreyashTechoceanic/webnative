import {StyleSheet, Text, TextInput, TextStyle, View} from 'react-native';
import React from 'react';

interface PhoneNumberInputTypes {
  placeholder?: string;
  placeholderColor?: string;
  textInputStyles: TextStyle;
  keyboardType?: string;
  lengthOfKeyboard: number;
  otp: string;
  setOtp: (text: string) => void;
}

const PhoneNumberInput = (props: PhoneNumberInputTypes) => {
  const {
    placeholder,
    placeholderColor,
    textInputStyles,
    keyboardType,
    lengthOfKeyboard,
    otp,
    setOtp,
  } = props;

  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        keyboardType="numeric"
        maxLength={lengthOfKeyboard}
        style={textInputStyles}
        value={otp}
        onChangeText={text => {
          setOtp(text);
        }}
      />
    </View>
  );
};

export default PhoneNumberInput;

const styles = StyleSheet.create({});
