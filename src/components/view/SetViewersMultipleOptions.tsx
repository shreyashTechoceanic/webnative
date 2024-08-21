import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import IconTextList from './IconTextList';
import Public from '../../icons/Public.svg';
import Followers from '../../icons/Followers.svg';
import HideFrom from '../../icons/HideFrom.svg';
import ForwardArrow from '../../icons/ForwardArrow.svg';
import {RadioButton} from 'react-native-paper';

interface SetViewersMultipleOptionsTypes {}

const SetViewersMultipleOptions = () => {
  // const [color, setColor] = useState(false);
  // const [secondColor, setSecondColor] = useState(false);

  // const inputColorHandler = (input: number) => {
  //   if (input === 1) setColor(prevState => !prevState);
  //   else setSecondColor(prevState => !prevState);
  // };

  const [checked, setChecked] = React.useState('first');

  //   const [colors, setColors] = useState({ public: false, followers: false });

  //   const toggleColor = (input: 'public' | 'followers') => {
  // setColors(prevColors => ({
  //   ...prevColors,
  //   [input]: !prevColors[input],
  // }));
  //   };

  return (
    <View style={styles.container}>
      <View style={styles.iconTextIcon}>
        <View>
          <IconTextList
            image={<Public />}
            image2={undefined}
            text={'Public'}
            textStyle={styles.iconText}
          />
          <Text style={styles.subIconText}>Anyone on universe.</Text>
        </View>

        {/* <TextInput
          style={color ? styles.roundInputColor : styles.roundInput}
          onFocus={() => inputColorHandler(1)}
        /> */}

        <RadioButton
          color="#2196F3"
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
      </View>

      <View style={styles.iconTextIcon}>
        <View>
          <IconTextList
            image={<Followers />}
            image2={undefined}
            text={'Followers'}
            textStyle={styles.iconText}
          />
          <Text style={styles.subIconText}>Only your universe followers</Text>
        </View>

        {/* <TextInput
          style={secondColor ? styles.roundInputColor : styles.roundInput}
          onFocus={() => inputColorHandler(2)}
        /> */}

        <RadioButton
          color="#2196F3"
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
      </View>

      <View>
        <View>
          <IconTextList
            image={<HideFrom />}
            image2={<ForwardArrow />}
            text={'Hide From'}
            textStyle={styles.iconText}
          />
          <Text style={styles.subIconText}>
            Choose who to hide your post from
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SetViewersMultipleOptions;

const styles = StyleSheet.create({
  container: {
    height: 153,
    paddingHorizontal: 16,
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
  },

  iconTextIcon: {
    // width: 328,
    width: '102%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  iconText: {
    // fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19.1,
    // text-align: left;
  },

  subIconText: {
    // fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16.37,
    // textAlign: left,
    color: '#30303080',
    marginLeft: 34,
  },

  roundInputColor: {
    backgroundColor: 'skyblue',
    borderRadius: 70,
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#30303080',
    borderStyle: 'solid',
    // padding: 1,
  },

  roundInput: {
    // backgroundColor: 'green',
    borderRadius: 70,
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#30303080',
    borderStyle: 'solid',
  },
});
