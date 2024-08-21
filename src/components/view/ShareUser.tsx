import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconTextList from './IconTextList';
import ShareUser1 from '../../assets/ShareUser1.svg';
import ShareUser2 from '../../assets/ShareUser2.svg';
import ShareUser3 from '../../assets/ShareUser3.svg';
import ShareUser4 from '../../assets/ShareUser4.svg';

const width_proportion = '92%';

const ShareUser = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <View style={styles.subContainer}>
          <IconTextList
            image={<ShareUser1 />}
            image2={undefined}
            text={'user name'}
            textStyle={styles.text}
            iconTextVertical={styles.imagesAndText}
          />
          <IconTextList
            image={<ShareUser2 />}
            image2={undefined}
            text={'user name'}
            textStyle={styles.text}
            iconTextVertical={styles.imagesAndText}
          />
          <IconTextList
            image={<ShareUser3 />}
            image2={undefined}
            text={'user name'}
            textStyle={styles.text}
            iconTextVertical={styles.imagesAndText}
          />
          <IconTextList
            image={<ShareUser4 />}
            image2={undefined}
            text={'user name'}
            textStyle={styles.text}
            iconTextVertical={styles.imagesAndText}
          />
          <IconTextList
            image={<ShareUser1 />}
            image2={undefined}
            text={'user name'}
            textStyle={styles.text}
            iconTextVertical={styles.imagesAndText}
          />
          <IconTextList
            image={<ShareUser2 />}
            image2={undefined}
            text={'user name'}
            textStyle={styles.text}
            iconTextVertical={styles.imagesAndText}
          />
          <IconTextList
            image={<ShareUser3 />}
            image2={undefined}
            text={'user name'}
            textStyle={styles.text}
            iconTextVertical={styles.imagesAndText}
          />
          <IconTextList
            image={<ShareUser4 />}
            image2={undefined}
            text={'user name'}
            textStyle={styles.text}
            iconTextVertical={styles.imagesAndText}
          />
          <IconTextList
            image={<ShareUser1 />}
            image2={undefined}
            text={'user name'}
            textStyle={styles.text}
            iconTextVertical={styles.imagesAndText}
          />
          <IconTextList
            image={<ShareUser2 />}
            image2={undefined}
            text={'user name'}
            textStyle={styles.text}
            iconTextVertical={styles.imagesAndText}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ShareUser;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor: 'green',
    height: 192,
  },

  subContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
    flexWrap: 'wrap',
    width: '86%',
    gap: 24,
    // backgroundColor: 'red',
  },

  text: {
    // fontFamily: 'Nunito',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 13.64,
    color: '#303030',
  },
  imagesAndText: {
    flexDirection: 'column',
    gap: 4,
    alignItems: 'center',
  },
});
