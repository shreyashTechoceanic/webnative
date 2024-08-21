import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconTextList from './IconTextList';
import Save from '../../icons/Save.svg';
import QR from '../../icons/QR.svg';
import Share from '../../icons/Share.svg';

const PostOPtionsSaveQrShare = () => {
  return (
    <View style={styles.container}>
      <IconTextList
        image={<Save />}
        image2={undefined}
        text={'Save'}
        textStyle={styles.text}
        iconTextVertical={styles.iconText}
      />
      <IconTextList
        image={<QR />}
        image2={undefined}
        text={'QR Code'}
        textStyle={styles.text}
        iconTextVertical={styles.iconText}
      />
      <IconTextList
        image={<Share />}
        image2={undefined}
        text={'Share'}
        textStyle={styles.text}
        iconTextVertical={styles.iconText}
      />
    </View>
  );
};

export default PostOPtionsSaveQrShare;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    // fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16.37,
    color: '#303030',
  },

  iconText: {
    width: 96,
    height: 61,
    borderRadius: 6,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 3,
  },
});
