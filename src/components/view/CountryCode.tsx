import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CountryPicker, {
  CountryCode as CountryPickerCode,
} from 'react-native-country-picker-modal';
import {Country} from 'react-native-country-picker-modal';

const CountryCode = () => {
  const initialCountryCode: CountryPickerCode = 'IN';
  const [countryCode, setCountryCode] =
    useState<CountryPickerCode>(initialCountryCode);
  const [country, setCountry] = useState<Country | null>();
  const [visible, setVisible] = useState<boolean>(false);

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <CountryPicker
        {...{
          countryCode,
          withFilter: true,
          withFlag: true,
          withCountryNameButton: false,
          withAlphaFilter: false,
          withCallingCode: true,
          withEmoji: true,
          onSelect,
        }}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />

      {country && (
        <View style={styles.countryDetails}>
          <Text style={styles.callingCode}>+{country.callingCode?.[0]}</Text>
        </View>
      )}
    </View>
  );
};

export default CountryCode;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  countryDetails: {
    // backgroundColor: 'red',
    // marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //   flag: {
  //     fontSize: 48,
  //   },
  //   countryName: {
  //     fontSize: 18,
  //     fontWeight: 'bold',
  //     marginTop: 8,
  //   },
  callingCode: {
    fontSize: 16,
    color: '#555',
    // marginTop: 4,
    // backgroundColor: 'green',
  },

  countryButton: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
});
