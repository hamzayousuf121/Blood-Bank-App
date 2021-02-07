import React from 'react'
import { View } from 'react-native'
import {useSelector} from 'react-redux';
import {Text, Button, Image} from 'react-native-elements'

export default function HomeScreen({navigation}) {

  const state = useSelector(state => state.Auth)
 
  return (
    <View style={{flex: 1}}>
     
      <View style={{flex: 1, alignItems: 'center', width: '100%'}}>
      <Text h1>Blood Bank App</Text>
      <Image
        source={require('../../assets/img.png')}
        style={{ width: 200, height: 200 }}
      />
      </View>
     {/* <View style={{flexDirection: 'row', width: '100%'}}> */}
     <Button
      title="Request"
      containerStyle={{
       width: '95%',
       margin: 10,
      }}
      buttonStyle={{
        backgroundColor: 'red',

      }}
      onPress={()=>{
        navigation.navigate('Donation')
      }}
    />
    

      <Button
      title="Donate"
      containerStyle={{
       width: '95%',
       margin: 10,

      }}
      type="solid"
      style={{width: '48%'}}
      onPress={()=>{
        navigation.navigate('DonarList')
      }}
    />
     {/* </View> */}
    
    </View>
  )
}
