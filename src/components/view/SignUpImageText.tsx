import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Icon from './Icon';
import Hide from '../../icons/Hide.svg';
// import Logo from '../../icons/Logo.svg';
// import logo1 from '../../icons/logo1.png';

interface SignUpImageTextTypes {
  headingText: string;
  subText: string;
  headingTextStyles?: TextStyle;
  subTextStyles?: TextStyle;
  imageLink?: string;
}

const SignUpImageText = (props: SignUpImageTextTypes) => {
  const {imageLink, headingText, subText, headingTextStyles, subTextStyles} =
    props;

  return (
    <View style={styles.container}>
      {/* <Icon image={<Hide />} viewStyle={undefined} /> */}
      {<Image source={undefined} style={styles.logo} />}
      {/* <Image
        source={{
          uri: 'file:///home/saurav/WorkSpace/Office/WebApp/webnative/src/icons/Logo.svg',
        }}
        style={styles.logo} 
      /> */}
      <View>
        <Text style={headingTextStyles}>{headingText}</Text>
        <Text style={subTextStyles}>{subText}</Text>
      </View>
    </View>
  );
};

export default SignUpImageText;

const styles = StyleSheet.create({
  container: {
    width: 251,
    height: 139,
    gap: 12,
    alignItems: 'center',
    // backgroundColor: 'purple',
  },

  logo: {
    width: 66,
    height: 66,
    backgroundColor: 'grey',
  },
});
