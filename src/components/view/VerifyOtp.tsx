import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SignUpImageText from './SignUpImageText';
import PhoneNumberInput from './PhoneNumberInput';
import Click from './Click';
import OTPVerified from './OTPVerified';

// const width = Dimensions.get('window');

const VerifyOtp = () => {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);

  const otp = otp1 + otp2 + otp3 + otp4;

  return (
    <View style={styles.container}>
      {/* <SignUpImageText headingText={''} subText={''} imageLink={undefined}> */}

      <View style={{alignItems: 'center'}}>
        <Text style={styles.heading}>Verify OTP</Text>
        <Text style={styles.subText}>
          Enter the OTP sent to your mobile or email to verify.
        </Text>
      </View>
      <View>
        <View style={styles.Otp}>
          <PhoneNumberInput
            textInputStyles={styles.numberInput}
            lengthOfKeyboard={1}
            otp={otp1}
            setOtp={setOtp1}
          />
          <PhoneNumberInput
            textInputStyles={styles.numberInput}
            lengthOfKeyboard={1}
            otp={otp2}
            setOtp={setOtp2}
          />
          <PhoneNumberInput
            textInputStyles={styles.numberInput}
            lengthOfKeyboard={1}
            otp={otp3}
            setOtp={setOtp3}
          />
          <PhoneNumberInput
            textInputStyles={styles.numberInput}
            lengthOfKeyboard={1}
            otp={otp4}
            setOtp={setOtp4}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.resendOtp}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
      <Click
        textOn={''}
        textOff={'Verify'}
        onPress={() => {
          if (otp.length === 4) {
            setIsModalVisible(true);
            console.log('Verify OTP', otp);
          }
        }}
        status={false}
        buttonStyle={otp.length === 4 ? styles.button : styles.buttonGrey}
        textStyle={styles.buttonText}
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet">
        <OTPVerified setIsModalVisible={setIsModalVisible} />
      </Modal>
    </View>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  container: {
    paddingTop: 107,
    alignItems: 'center',
    gap: 80,
  },
  heading: {
    // fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21.82,
  },

  subText: {
    // fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16.37,
  },

  numberInput: {
    width: 60,
    height: 55,
    borderRadius: 6.25,
    backgroundColor: 'lightblue',
    borderWidth: 0.5,
    borderColor: '#4690B5',
    // background: #4690B50D;
    // fontFamily: Nunito,
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 16.37,
    padding: 20,
    // color: '#ECF3F8',
    color: 'black',
  },
  Otp: {
    // width: '100vw',
    flexDirection: 'row',
    gap: 17,
    // justifyContent: 'space-between',
  },

  resendOtp: {
    // fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16.37,
    color: '#4690B5',
    position: 'relative',
    top: 16,
    left: 220,
    // backgroundColor: 'red',
  },

  button: {
    width: 268,
    height: 42,
    padding: 10,
    borderRadius: 60,
    backgroundColor: '#4690B5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonGrey: {
    width: 268,
    height: 42,
    padding: 10,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A2C7D9',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21.82,
    color: '#FFFFFF',
  },
  modal: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // position: 'relative',
  },
});

{
  /* <PhoneNumberInput
textInputStyles={styles.numberInput}
lengthOfKeyboard={1}
otp={''}
setOtp={function (text: string): void {
  throw new Error('Function not implemented.');
}}
/> */
}
