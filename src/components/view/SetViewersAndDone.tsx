import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconTextList from './IconTextList';
import Cross from '../../icons/Cross.svg';
import Click from './Click';

const SetViewersAndDone = () => {
  return (
    <View style={styles.container}>
      <IconTextList
        image={<Cross />}
        image2={undefined}
        text={'Set Viewers'}
        textStyle={styles.iconText}
      />

      <Click
        textOn={'Post'}
        textOff={'Done'}
        onPress={() => {
          console.log('SetViewers Done');
        }}
        status={false}
        buttonStyle={styles.doneButton}
        textStyle={styles.text}
      />
    </View>
  );
};

export default SetViewersAndDone;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  doneButton: {
    width: 81,
    height: 27,
    padding: 10,
    borderRadius: 37,
    backgroundColor: '#4690B5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    // fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16.37,
    color: '#FFFFFF',
  },

  iconText: {
    // fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21.82,
  },
});
