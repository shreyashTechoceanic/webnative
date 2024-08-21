import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import GreyBar from './GreyBar';
import ReportContentOptions from './ReportContentOptions';

const ReportContent = () => {
  return (
    <View style={styles.container}>
      <GreyBar />
      <View style={{gap: 6}}>
        <Text style={styles.heading}>Report Content</Text>
        <Text style={styles.subHeading}>
          Help Us Maintain a Safe and Positive Environment
        </Text>
      </View>
      <ReportContentOptions />
    </View>
  );
};

export default ReportContent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap: 14,
  },

  heading: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21.82,
    color: '#303030',
  },

  subHeading: {
    // fontFamily: 'Nunito',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 13.64,
    color: '#30303080',
  },
});
