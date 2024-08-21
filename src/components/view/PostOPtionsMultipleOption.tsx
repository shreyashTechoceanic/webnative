import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconTextList from './IconTextList';
import CopyLink from '../../icons/CopyLink.svg';
import HideThisPost from '../../icons/HideThisPost.svg';
import ReportThisPost from '../../icons/ReportThisPost.svg';
import UnfollowProfile from '../../icons/UnfollowProfile.svg';
import BlockThisProfile from '../../icons/BlockThisProfile.svg';
const PostOPtionsMultipleOption = () => {
  return (
    <View style={styles.container}>
      <IconTextList
        image={<CopyLink />}
        image2={undefined}
        text={'Copy Link'}
        textStyle={styles.text}
      />
      <IconTextList
        image={<HideThisPost />}
        image2={undefined}
        text={'Hide this post'}
        textStyle={styles.text}
      />
      <IconTextList
        image={<ReportThisPost />}
        image2={undefined}
        text={'Report this post'}
        textStyle={styles.text}
      />
      <IconTextList
        image={<UnfollowProfile />}
        image2={undefined}
        text={'Unfollow profile'}
        textStyle={styles.text}
      />
      <IconTextList
        image={<BlockThisProfile />}
        image2={undefined}
        text={'Block this profile'}
        textStyle={styles.text}
      />
    </View>
  );
};

export default PostOPtionsMultipleOption;

const styles = StyleSheet.create({
  container: {
    // width: 328,
    height: 220,
    paddingHorizontal: 15,
    paddingVertical: 28,
    // gap: 16,
    justifyContent: 'space-between',
    borderRadius: 11,
    backgroundColor: '#F5F5F5',
  },
  text: {
    // fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19.1,
    color: '#303030',
  },
});
