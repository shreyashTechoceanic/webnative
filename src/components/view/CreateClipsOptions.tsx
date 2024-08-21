import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ClipOption from './ClipOption';
import Input from './Input';

import Frame from '../../assets/Frame.svg';

import Frame1 from '../../icons/Frame1.svg';
import {SvgUri} from 'react-native-svg';
import Image from './Image';
import CrossAndDone from './CrossAndDone';

const   CreateClipsOptions = () => {
  const [input, setInput] = useState<string>('');

  const doneHandler = () => {
    console.log(input);
    setInput('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <CrossAndDone doneHandler={doneHandler} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <Image image={<Frame width={240.48} height={278} />} />
        <Image image={<Frame width={240.48} height={278} />} />
        <Image image={<Frame width={240.48} height={278} />} />
        <Image image={<Frame width={240.48} height={278} />} />
      </ScrollView>
      <View style={styles.input}>
        <Input
          inputStyle={styles.inputTag}
          placeHolderText={'Write your caption here...'}
          placeHolderColor={'#30303080'}
          input={input}
          setInput={setInput}
        />
      </View>
      <ClipOption />
    </SafeAreaView>
  );
};

export default CreateClipsOptions;

const styles = StyleSheet.create({
  container: {
    gap: 38,
  },

  scrollViewContent: {
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 85,
    // paddingLeft: 70,
  },

  // imageContainer: {
  //   justifyContent: 'center',
  //   backgroundColor: 'green',
  //   alignItems: 'center',
  // },
  input: {
    paddingHorizontal: 16,
  },

  inputTag: {
    width: 380,
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
