import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import TextInputAndText from './TextInputAndText';

const ReportContentOptions = () => {
  // const [color, setColor] = useState(false);

  // const inputColorHandler = (input: string) => {
  //   setColor(prevState => !prevState);
  // };

  const [checked, setChecked] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInputAndText
        option={'Sexual content'}
        textStyle={styles.roundInputColor}
        textStyle2={styles.roundInput}
        optionTextStyle={styles.iconText}
        value={'first'}
        checked={checked}
        setChecked={setChecked}
      />
      <TextInputAndText
        option={'Violent or repulsive content'}
        textStyle={styles.roundInputColor}
        textStyle2={styles.roundInput}
        optionTextStyle={styles.iconText}
        value={'second'}
        checked={checked}
        setChecked={setChecked}
      />
      <TextInputAndText
        option={'Hateful or abusive content'}
        textStyle={styles.roundInputColor}
        textStyle2={styles.roundInput}
        optionTextStyle={styles.iconText}
        value={'third'}
        checked={checked}
        setChecked={setChecked}
      />
      <TextInputAndText
        option={'Harmful or dangerous content'}
        textStyle={styles.roundInputColor}
        textStyle2={styles.roundInput}
        optionTextStyle={styles.iconText}
        value={'fourth'}
        checked={checked}
        setChecked={setChecked}
      />
      <TextInputAndText
        option={'Spam or misleading'}
        textStyle={styles.roundInputColor}
        textStyle2={styles.roundInput}
        optionTextStyle={styles.iconText}
        value={'fifth'}
        checked={checked}
        setChecked={setChecked}
      />
      <TextInputAndText
        option={'Child abuse'}
        textStyle={styles.roundInputColor}
        textStyle2={styles.roundInput}
        optionTextStyle={styles.iconText}
        value={'sixth'}
        checked={checked}
        setChecked={setChecked}
      />
      <TextInputAndText
        option={'Others'}
        textStyle={styles.roundInputColor}
        textStyle2={styles.roundInput}
        optionTextStyle={styles.iconText}
        value={'seventh'}
        checked={checked}
        setChecked={setChecked}
      />
    </View>
  );
};

export default ReportContentOptions;

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },

  iconText: {
    // fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16.37,
    color: '#303030',
    // text-align: left;
  },

  roundInputColor: {
    backgroundColor: 'skyblue',
    borderRadius: 70,
    width: 12,
    height: 12,
    borderWidth: 1,
    borderColor: '##30303080',
    borderStyle: 'solid',
    // padding: 1,
  },

  roundInput: {
    // backgroundColor: 'green',
    borderRadius: 70,
    width: 12,
    height: 12,
    borderWidth: 1,
    borderColor: '#30303080',
    borderStyle: 'solid',
  },
});
