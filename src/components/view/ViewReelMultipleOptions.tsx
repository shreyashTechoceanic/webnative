import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconTextList from './IconTextList';
import CopyLink1 from '../../icons/CopyLink1.svg';
import AddToFavourites from '../../icons/AddToFavourites.svg';
import Hide from '../../icons/Hide.svg';
import UnfollowProfile1 from '../../icons/UnfollowProfile1.svg';
import Report from '../../icons/Report.svg';

const ViewReelMultipleOptions = () => {
  return (
    <View style={styles.container}>
      <IconTextList
        image={<CopyLink1 />}
        image2={undefined}
        text={'Copy Link'}
        textStyle={styles.text}
      />
      <IconTextList
        image={<AddToFavourites />}
        image2={undefined}
        text={'Add To Favourites'}
        textStyle={styles.text}
      />
      <IconTextList
        image={<Hide />}
        image2={undefined}
        text={'Hide'}
        textStyle={styles.text}
      />
      <IconTextList
        image={<UnfollowProfile1 />}
        image2={undefined}
        text={'Unfollow profile'}
        textStyle={styles.text}
      />
      <IconTextList
        image={<Report />}
        image2={undefined}
        text={'Report'}
        textStyle={styles.text}
      />
    </View>
  );
};

export default ViewReelMultipleOptions;

const styles = StyleSheet.create({
  container: {
    // width: 328,
    height: 128,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  text: {
    // fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16.37,
    color: '#303030',
  },
});
