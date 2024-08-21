import {StyleSheet, Text, View} from 'react-native';
import IconTextList from './IconTextList';
import CopyLinkSocialMedia from '../../icons/CopyLinkSocialMedia.svg';
import Whatsapp from '../../icons/Whatsapp.svg';
import React from 'react';
import Icon from './Icon';
import Facebook from '../../icons/Facebook.svg';
import Instagram from '../../icons/Instagram.svg';
import Snapchat from '../../icons/Snapchat.svg';

const SocialMediaHandles = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'column', gap: 4}}>
        <View style={styles.copyLink}>
          <Icon image={<CopyLinkSocialMedia />} />
        </View>
        <Text style={styles.text}>Copy Link</Text>
      </View>

      <IconTextList
        image={<Whatsapp />}
        image2={undefined}
        text={'Whatsapp'}
        textStyle={styles.text}
        iconTextVertical={styles.iconText}
      />
      <IconTextList
        image={<Facebook />}
        image2={undefined}
        text={'Facebook'}
        textStyle={styles.text}
        iconTextVertical={styles.iconText}
      />
      <IconTextList
        image={<Instagram />}
        image2={undefined}
        text={'Instagram'}
        textStyle={styles.text}
        iconTextVertical={styles.iconText}
      />
      <IconTextList
        image={<Snapchat />}
        image2={undefined}
        text={'Snapchat'}
        textStyle={styles.text}
        iconTextVertical={styles.iconText}
      />
    </View>
  );
};

export default SocialMediaHandles;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // width: 320,
    height: 66,
    // backgroundColor: 'pink',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  copyLink: {
    width: 48,
    height: 48,
    backgroundColor: '#EAF7FE',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    // fontFamily: 'Nunito',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 13.64,
    color: '#303030',
  },
  iconText: {
    flexDirection: 'column',
    gap: 4,
  },
});
