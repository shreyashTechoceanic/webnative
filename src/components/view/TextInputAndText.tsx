import {StyleSheet, Text, View, TextInput, TextStyle} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';

interface TextInputAndTextTypes {
  option: string;
  textStyle?: TextStyle;
  textStyle2?: TextStyle;
  optionTextStyle: TextStyle;
  value: string;
  checked: string;
  setChecked: (text: string) => void;
}

const TextInputAndText = (props: TextInputAndTextTypes) => {
  const {
    option,
    textStyle,
    textStyle2,
    optionTextStyle,
    value,
    checked,
    setChecked,
  } = props;

  // const [color, setColor] = useState(false);

  // const inputColorHandler = (input: string) => {
  //   setColor(prevState => !prevState);
  // };

  return (
    <View style={styles.iconTextIcon}>
      {/* <TextInput
        style={color ? textStyle : textStyle2}
        onFocus={() => inputColorHandler('Public')}
      /> */}
      <View style={styles.radioContainer}>
        <RadioButton
          color="#2196F3"
          value={value}
          status={checked === value ? 'checked' : 'unchecked'}
          onPress={() => setChecked(value)}
        />
      </View>
      <Text style={optionTextStyle}>{option}</Text>
    </View>
  );
};

export default TextInputAndText;

const styles = StyleSheet.create({
  iconTextIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  radioContainer: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}], // Adjust scale to make the radio button smaller
  },
  
});
