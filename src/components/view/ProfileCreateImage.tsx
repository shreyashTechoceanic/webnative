import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from './Icon';
import UserProfileCreate2 from '../../icons/UserProfileCreate2.svg';
import CameraProfileCreate from '../../icons/CameraProfileCreate.svg';

const ProfileCreateImage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create your profile</Text>
      <View>
        <Icon image={<UserProfileCreate2 />} />
        <Icon image={<CameraProfileCreate />} viewStyle={styles.cameraIcon} />
      </View>
    </View>
  );
};

export default ProfileCreateImage;

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 162,
    gap: 24,
    // backgroundColor: 'pink',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },

  heading: {
    // fontFamily: 'Nunito',
    fontSize: 19,
    fontWeight: '600',
    lineHeight: 27.28,
  },

  cameraIcon: {
    position: 'relative',
    left: 85.5,
    bottom: 30,
  },
});
