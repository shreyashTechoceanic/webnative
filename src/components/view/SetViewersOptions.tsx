import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SetViewersAndDone from './SetViewersAndDone';
import SetViewersMultipleOptions from './SetViewersMultipleOptions';

const SetViewersOptions = () => {
  return (
    <View style={styles.container}>
      <SetViewersAndDone />
      <SetViewersMultipleOptions />
    </View>
  );
};

export default SetViewersOptions;

const styles = StyleSheet.create({
  container: {
    gap: 55,
  },
});
