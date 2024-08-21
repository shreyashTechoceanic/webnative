import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from './Icon';
import TagPeople from '../../icons/TagPeople.svg';
import Location from '../../icons/Location.svg';
import SetViewers from '../../icons/SetViewers.svg';
import ForwardArrow from '../../icons/ForwardArrow.svg';
import IconTextList from './IconTextList';
import Input from './Input';

const width_proportion = '100%';

const ClipOption = () => {
  return (
    <View style={styles.container}>
      <IconTextList
        image={<TagPeople />}
        image2={<ForwardArrow />}
        text={'Tag People'}
      />
      <IconTextList
        image={<Location />}
        image2={<ForwardArrow />}
        text={'Add Location'}
      />
      <IconTextList
        image={<SetViewers />}
        image2={<ForwardArrow />}
        text={'Set Viewers'}
      />
      {/* <View style={styles.options}>
        <View style={styles.iconText}>
          <Icon image={<TagPeople />} />
          <Text style={styles.text}>Tag People</Text>
        </View>
        <Icon image={<ForwardArrow />} />
      </View> */}
      {/* <View style={styles.options}>
        <View style={styles.iconText}>
          <Icon image={<Location />} />
          <Text>Add Location</Text>
        </View>
        <Icon image={<ForwardArrow />} />
      </View> */}
      {/* <View style={styles.options}>
        <View style={styles.iconText}>
          <Icon image={<SetViewers />} />
          <Text>Set Viewers</Text>
        </View>
        <Icon image={<ForwardArrow />} />
      </View> */}
    </View>
  );
};

export default ClipOption;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    // backgroundColor: 'yellow',
    height: 128,
    justifyContent: 'space-between',
  },

  inputTag: {
    width: 328,
    height: 73,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    // fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16.37,
    textAlign: 'left',
    color: '#30303080',
  },
});
