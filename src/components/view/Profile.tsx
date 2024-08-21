import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Icon from './Icon';
import BackArrow from '../../icons/BackArrow.svg';
import Settings from '../../icons/Settings.svg';
import HamburgerMenu from '../../icons/HamburgerMenu.svg';
import ProfileStats from './ProfileStats';
import MediaTabs from './MediaTabs';
import UserIdName from './UserIdName';
import UserImage from '../../icons/UserImage.svg';
import Story from './Story';
import HighlightsImage from '../../icons/HighlightsImage.svg';
import Plus from '../../icons/Plus.svg';
import Click from './Click';

const Profile = () => {
  const [isFollow, setIsFollow] = useState<boolean>(true);

  const handleFollowClick = () => {
    setIsFollow(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backArrow_settingMenu}>
        <Icon image={<BackArrow />} />
        <View style={styles.setting_menu}>
          <Icon image={<Settings />} />
          <Icon image={<HamburgerMenu />} />
        </View>
      </View>
      <View>
        <UserIdName
          name={'Smita Srivastava'}
          id={'@Smita_12364'}
          image={<UserImage />}
        />
      </View>
      <View style={styles.profileStats}>
        <ProfileStats statsName={'Posts'} statsNumber={'1400'} />
        <ProfileStats statsName={'Followers'} statsNumber={'10.8k'} />
        <ProfileStats statsName={'Following'} statsNumber={'42'} />
      </View>
      <View style={styles.bioLinkContainer}>
        <Text style={styles.bio}>Travel Lover</Text>
        <Text style={styles.link}>linktr.ee/unfoldco</Text>
      </View>
      <View>
        <View style={styles.buttons}>
          <Click
            textOn={'Follow'}
            textOff={'Following'}
            buttonStyle={styles.firstButton}
            textStyle={styles.firstText}
            onPress={handleFollowClick}
            status={isFollow}
          />
          <Click
            textOn={'Message '}
            textOff={'Share Profile'}
            buttonStyle={styles.secondButton}
            textStyle={styles.secondText}
            onPress={() => {}}
            status={!isFollow}
          />
        </View>
      </View>
      <View style={styles.bioLinkContainer}>
        <Text style={styles.highlight}>Glimpse</Text>
        <Text style={styles.highlightText}>
          Keep your favorite stories on your profile
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.storiesHighlight}>
          <Story image={<HighlightsImage />} imageText={'London'} />
          <Story image={<HighlightsImage />} imageText={'London'} />
          <Story image={<HighlightsImage />} imageText={'London'} />
          <Story image={<HighlightsImage />} imageText={'London'} />
          <Story image={<HighlightsImage />} imageText={'London'} />
          <Story image={<HighlightsImage />} imageText={'London'} />
          <Story image={<Plus />} imageText={'New'} />
        </View>
      </ScrollView>
      <View style={{display: 'flex', alignItems: 'center'}}>
        <MediaTabs />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 20,
  },
  backArrow_settingMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  setting_menu: {
    width: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bioLinkContainer: {
    gap: 6,
  },
  bio: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16.37,
  },
  link: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16.37,
    color: '#0F4072',
  },
  highlight: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21.82,
    letterSpacing: 0.5,
    color: '#303030',
  },
  highlightText: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16.37,
    color: '#303030B2',
  },
  storiesHighlight: {
    flexDirection: 'row',
    gap: 12,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstButton: {
    width: 199,
    height: 40,
    padding: 10,
    borderRadius: 49,
    backgroundColor: '#4690B5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondButton: {
    width: 122,
    height: 40,
    padding: 10,
    borderRadius: 49,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#303030',
  },
  firstText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16.37,
    color: '#FFFFFF',
  },
  secondText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16.37,
    color: '#303030',
  },
});
