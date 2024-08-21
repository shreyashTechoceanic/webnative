import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconTextList from './IconTextList';
import BackArrow from '../../icons/BackArrow.svg';
import Click from './Click';

interface CrossAndDoneTypes {
  doneHandler: () => void;
}

const CrossAndDone = ({doneHandler}: CrossAndDoneTypes) => {
  return (
    <View style={styles.container}>
      <IconTextList
        image={<BackArrow />}
        image2={undefined}
        text={'New Clip'}
        textStyle={styles.textHeading}
      />

      <Click
        textOn={'Post'}
        textOff={'Done'}
        // onPress={() => {
        //   console.log('DOne');
        // }}
        onPress={doneHandler}
        status={false}
        buttonStyle={styles.doneButton}
        textStyle={styles.text}
      />
    </View>
  );
};

export default CrossAndDone;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 50,
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

  textHeading: {
    // fontSize: 14,
    // fontWeight: 700,
    // lineHeight: 19.1,

    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21.82,
  },
});
