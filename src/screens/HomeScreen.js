import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
import {useSelector} from 'react-redux';

export default function HomeScreen({navigation}) {

  const state = useSelector(state => state.Auth)
  useEffect(()=>{
    navigation.navigate('DonarList')
  }, [])
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}
