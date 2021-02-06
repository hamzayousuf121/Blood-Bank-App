import React from 'react'
import { View, Text } from 'react-native'
import {useSelector} from 'react-redux';

export default function HomeScreen() {

  const state = useSelector(state => state.Auth)
  console.log(state);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}
