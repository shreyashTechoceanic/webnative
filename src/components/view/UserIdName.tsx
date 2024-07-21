import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from './Icon';

interface UserIdNameTypes {
  name: string;
  id: string;
  image: React.ReactNode;
}

const UserIdName = ({name, id, image}: UserIdNameTypes) => {
  return (
    <View style={styles.container}>
      <Icon image={image} />
      <View>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userId}>{id}</Text>
      </View>
    </View>
  );
};

export default UserIdName;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  userName: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 27.28,
  },

  userId: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16.37,
    color: '#303030',
  },
});
