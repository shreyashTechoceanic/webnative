import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import PhoneNumberInput from './PhoneNumberInput';
import Click from './Click';
import {TextInput} from 'react-native-paper';
import CountryCode from './CountryCode';

const PhoneNumberButton = () => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.countryInput}>
        <CountryCode />
        <Text style={styles.pipeline}>|</Text>
        <TextInput
          mode="outlined"
          label="Phone number *"
          selectionColor={'#4690B5'}
          // cursorColor={'#EF0000'}
          underlineColor={'red'}
          outlineColor={'#f5f9fb'}
          activeOutlineColor={'#4690B5'}
          outlineStyle={styles.border}
          style={styles.textInput}
          value={text}
          maxLength={10}
          keyboardType="numeric"
          onChangeText={text => {
            setText(text);
          }}
        />
      </View>

      <Click
        textOn={''}
        textOff={'Send OTP'}
        onPress={() => {
          if (text.length === 10) console.log('signup', text);
        }}
        status={false}
        buttonStyle={text.length === 10 ? styles.button : styles.buttonGrey}
        textStyle={styles.buttonText}
      />
      <Text style={styles.text}>
        Already have an account?{' '}
        <TouchableOpacity>
          <Text style={{color: '#4690B5', textDecorationLine: 'underline'}}>
            Sign in
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default PhoneNumberButton;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    alignItems: 'center',
    height: 146,
    justifyContent: 'space-between',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 268,
    height: 42,
    padding: 10,
    borderRadius: 60,
    backgroundColor: '#4690B5',
  },

  buttonGrey: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 268,
    height: 42,
    padding: 10,
    borderRadius: 60,
    backgroundColor: '#A2C7D9',
  },

  buttonText: {
    color: '#FFFFFF',
    // fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21.82,
  },

  text: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16.37,
    textAlign: 'center',
    color: '#303030',
  },

  border: {
    width: 188,
    // height: 48,
    height: 46,
    borderRadius: 50,
    backgroundColor: '#f5f9fb',
    color: '#4690B5',
    // left: -10,
  },
  textInput: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16.37,
    // padding: 20,
  },
  countryInput: {
    flexDirection: 'row',
    width: 320,
    height: 48,
    borderRadius: 50,
    backgroundColor: '#f5f9fb',
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 10,
  },

  pipeline: {
    color: '#4690B5',
    // height: 30,
    paddingRight: 10,
    paddingLeft: 5,
  },
});
