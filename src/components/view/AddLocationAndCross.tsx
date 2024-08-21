import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconTextList from './IconTextList';
import Cross from '../../icons/Cross.svg';

const AddLocationAndCross = () => {
  return (
    <View style={styles.container}>
      <IconTextList
        image={<Cross />}
        image2={undefined}
        text={'Add Location'}
        textStyle={styles.iconText}
      />
    </View>
  );
};

export default AddLocationAndCross;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 16,
  },
  iconText: {
    // fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21.82,
    // textAlign: 'center',
  },
});
