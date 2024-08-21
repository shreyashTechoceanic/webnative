import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Image from './Image';
import AddLocation from '../../icons/AddLocation.svg';
import Click from './Click';

const LocationServices = () => {
  return (
    <View style={styles.container}>
      <Image image={<AddLocation />} />
      <Text style={styles.text}>
        Enable location services to include nearby places.
      </Text>
      <Click
        textOn={'Turn Off Location'}
        textOff={'Turn On Location'}
        onPress={() => {
          console.log('Turn on Location');
        }}
        status={false}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
};

export default LocationServices;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    alignItems: 'center',
    // justifyContent: 'center',
    position: 'relative',
    top: 278,
    height: 152,
    justifyContent: 'space-between',
  },

  text: {
    // fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16.37,
    color: '#30303080',
  },

  button: {
    backgroundColor: '#4690B5',
    width: 151,
    height: 39,
    padding: 10,
    borderRadius: 39,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    // fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16.37,
    color: '#FFFFFF',
  },
});
