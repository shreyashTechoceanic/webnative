import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';

const ProfileCreateForm = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'male', value: 'Male'},
    {label: 'female', value: 'Female'},
  ]);

  const [selectedValue, setSelectedValue] = useState('java');

  return (
    <View style={styles.container}>
      <View style={{gap: 4}}>
        <Text style={styles.formText}>Your Name</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={{gap: 4}}>
        <Text style={styles.formText}>User Name</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={{gap: 4}}>
        <Text style={styles.formText}>Write about yourself</Text>
        <TextInput style={styles.input} />
        <TextInput
          style={styles.addLink}
          placeholder="Add Link"
          placeholderTextColor={'#30303080'}
        />
      </View>
      <View style={{gap: 4}}>
        <Text style={styles.formText}>Gender</Text>
        {/* <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        /> */}
        <Picker
          style={styles.dropDown}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
      </View>
    </View>
  );
};

export default ProfileCreateForm;

const styles = StyleSheet.create({
  container: {
    width: 312,
    height: 270,
    gap: 20,
    // justifyContent: 'space-between',
    // backgroundColor: 'pink',
  },

  formText: {
    // fontFamily: 'Nunito',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 13.64,
    color: '#30303080',
  },
  input: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#30303080',
    color: '#303030',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16.37,
    paddingBottom: 3,
  },

  addLink: {
    color: '#303030',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16.37,
    paddingBottom: 3,
  },
  dropDown: {
    borderWidth: 0,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#30303080',
    paddingBottom: 3,
  },
});
