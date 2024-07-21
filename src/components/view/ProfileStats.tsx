import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface ProfileStatsTypes {
  statsName: string;
  statsNumber: string;
}

const ProfileStats = ({statsName, statsNumber}: ProfileStatsTypes) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{statsName}</Text>
      <Text style={styles.text}>{statsNumber}</Text>
    </View>
  );
};

export default ProfileStats;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  heading: {
    // fontFamily: 'Nunito',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.37,
    color: '#303030',
  },

  text: {
    // fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 21.82,
    color: '#303030',
  },
});
