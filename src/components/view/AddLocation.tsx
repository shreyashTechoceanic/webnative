import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddLocationAndCross from './AddLocationAndCross'
import LocationServices from './LocationServices'

const AddLocation = () => {
  return (
    <View>
        <AddLocationAndCross />
        <LocationServices />
    </View>
  )
}

export default AddLocation

const styles = StyleSheet.create({})