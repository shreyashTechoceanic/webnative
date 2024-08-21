import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconTextList from './IconTextList';

const FriendsProfileMultipleOptions = () => {
  return (
    <View style={styles.container}>
      <IconTextList
        image={undefined}
        image2={undefined}
        text={'Unfollow'}
        textStyle={styles.text}
        iconTextVertical={styles.iconText}
      />
      <IconTextList
        image={undefined}
        image2={undefined}
        text={'Block'}
        textStyle={styles.text}
        iconTextVertical={styles.iconText}
      />
      <IconTextList
        image={undefined}
        image2={undefined}
        text={'Share Profile'}
        textStyle={styles.text}
        iconTextVertical={styles.iconText}
      />
      <IconTextList
        image={undefined}
        image2={undefined}
        text={'Copy Profile URL'}
        textStyle={styles.text}
        iconTextVertical={styles.iconText}
      />
    </View>
  );
};

export default FriendsProfileMultipleOptions;

const styles = StyleSheet.create({
  container: {
    // width: 124,
    height: 148,
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

  iconText: {
    gap: 0,
  },
});
