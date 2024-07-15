import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Icon from './Icon';
import FlashCamera from '../../icons/FlashCamera.svg';
import Cross from '../../icons/Cross.svg';

const CreateClips = () => {
  return (
    // <View>
    //   <Icon source={Home} height={10} width={10} />
    // </View>
   <SafeAreaView style={styles.container}>
      <View style={styles.icons}>
        <Icon image={<FlashCamera />} />
        <Icon image={<Cross />} />
      </View>
    </SafeAreaView>
  ); 
};

export default CreateClips;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    display: 'flex',
    // flexDirection: 'row',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 40,
  },

  icons: {
    backgroundColor: 'yellow',
    width: 237,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
