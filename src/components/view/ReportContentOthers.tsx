import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GreyBar from './GreyBar';
import TextInputAndText from './TextInputAndText';
import Input from './Input';
import Click from './Click';

const ReportContentOthers = () => {
  const [checked, setChecked] = React.useState('first');

  const [input, setInput] = React.useState('');

  return (
    <View style={styles.container}>
      <GreyBar />
      <View style={{gap: 6}}>
        <Text style={styles.heading}>Report Content</Text>
        <Text style={styles.subHeading}>
          Help Us Maintain a Safe and Positive Environment
        </Text>
      </View>
      <TextInputAndText
        optionTextStyle={styles.iconText}
        textStyle={styles.roundInputColor}
        option={'Others'}
        textStyle2={styles.roundInput}
        value={'first'}
        checked={checked}
        setChecked={setChecked}
      />
      <View style={styles.inputContainer}>
        <Input
          inputStyle={styles.inputTag}
          placeHolderText={'Please provide a brief description'}
          placeHolderColor={'#30303080'}
          input={input}
          setInput={setInput}
        />
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          height: 81,
        }}>
        <Click
          textOn={'Report Done'}
          textOff={'Report'}
          onPress={() => {
            console.log('Report Content Others');
          }}
          status={false}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

export default ReportContentOthers;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap: 14,
  },

  heading: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21.82,
    color: '#303030',
  },

  subHeading: {
    // fontFamily: 'Nunito',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 13.64,
    color: '#30303080',
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

  inputContainer: {
    // backgroundColor: 'pink',
    alignItems: 'flex-end',
    width: '100%',
  },

  inputTag: {
    width: 340,
    // width: '90%',
    height: 50,
    paddingTop: 6,
    paddingRight: 7,
    paddingBottom: 28,
    paddingLeft: 7,
    borderRadius: 2,
    backgroundColor: '#3030300D',
    // fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16.37,
    // alignSelf: 'flex-start',
  },

  button: {
    width: 98,
    height: 37,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 35,
    backgroundColor: '#4690B5',
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'relative',
    // top: 44,
    // left: 268,
  },

  buttonText: {
    // fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16.37,
    color: '#FFFFFF',
  },
});
