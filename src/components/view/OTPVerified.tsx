import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from './Icon';
import OTPCheck from '../../icons/OTPCheck.svg';

interface OTPVerifiedType {
  setIsModalVisible: (visible: boolean) => void;
}

const OTPVerified = ({setIsModalVisible}: OTPVerifiedType) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconText}>
        <Icon image={<OTPCheck />} />
        <Text style={styles.text}>OTP Verified</Text>
      </View>
      <Button title="CLICK" onPress={() => setIsModalVisible(false)} />
    </View>
  );
};

export default OTPVerified;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 205,
    width: 195,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    left: 110,
    top: 200,
    borderRadius: 8,
  },

  iconText: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 86,
    width: 96,
    backgroundColor: 'yellow',
  },

  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});
