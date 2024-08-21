import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icon from './Icon';
import SearchIcon from '../../icons/SearchIcon.svg';

const Search = () => {
  const [search, setSearch] = useState('');

  console.log('search', search);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={'#30303066'}
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />
      <Icon image={<SearchIcon />} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#E6E6E6',
    borderRadius: 35,
  },
  search: {
    width: 337,
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 35,
    backgroundColor: '#E6E6E6',
  },
});
