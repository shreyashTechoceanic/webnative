import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignUpImageText from './SignUpImageText';
import PhoneNumberButton from './PhoneNumberButton';

const SignUp = () => {
  return (
    <View style={styles.container}>
      {/* <SignUpImageText
        headingText={'Create Your Account'}
        subText={
          'Join us and experience a world of possibilities. Sign up to get started'
        }
        headingTextStyles={styles.heading}
        subTextStyles={styles.subText}
        // imageLink={''}
      /> */}
      <PhoneNumberButton />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    alignItems: 'center',
    paddingTop: 94,
    gap: 94,
  },

  heading: {
    // fontFamily: 'Nunito',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 27.28,
    textAlign: 'center',
  },

  subText: {
    // fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16.37,
    textAlign: 'center',
  },
});
