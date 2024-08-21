import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileCreateImage from './ProfileCreateImage';
import ProfileCreateForm from './ProfileCreateForm';
import Click from './Click';

const ProfileCreate = () => {
  return (
    <View style={styles.container}>
      <ProfileCreateImage />
      <ProfileCreateForm />
      <Click
        textOn={''}
        textOff={'Done'}
        onPress={() => {
          console.log('ProfileCreate');
        }}
        status={false}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
};

export default ProfileCreate;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 87,
    // backgroundColor: 'skyblue',
    gap: 60,
  },

  button: {
    width: 269,
    height: 48,
    paddingVertical: 13,
    borderRadius: 64,
    backgroundColor: '#4690B5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    // fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21.82,
    color: '#FFFFFF',
  },
});
