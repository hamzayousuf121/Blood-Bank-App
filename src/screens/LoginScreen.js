import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import {Login} from '../redux/Actions/Auth';
import {useDispatch, useSelector} from 'react-redux'
import {authState} from '../redux/types';

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(state => state.Auth);
  console.log(state);

  const LoginHandler = () => {

    if(email && password){

      dispatch(Login(email, password));
    }
    else{
      Alert.alert('Email and Password Are Required')
    }
  }


  useEffect(()=>{
    if(state.login){
      dispatch({type: authState, payload: {login: false, }})
      navigation.navigate('Home');
    }
  }, [state.login])

  return (
    <SafeAreaView style={{ flex: 1 }}>
       <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1, }} >
      <View style={{ flex: 1, }}>
        <View>
          <Text style={{color: '#fff', backgroundColor: '#23527c', justifyContent: 'center', 
          alignItems: 'center',
          textAlign:'center', padding: 10, fontSize: 20, fontWeight: 'bold', marginBottom: 150}}>Login</Text>
        </View>
        <Text style={styles.label}>Email:</Text>
        <Input
          placeholder='Enter Your Email'
          onChangeText={(val)=> setEmail(val)}
          value={email}
        />
        <Text style={styles.label}>Password:</Text>

        <Input
          placeholder='Enter Your Password'
          errorStyle={{ color: 'red' }}
          secureTextEntry={true}
          value={password}
          onChangeText={(val)=> setPassword(val)}
          
        />
        <View style={styles.container}>
          <Button
            title="Login"
            type="outline"
            buttonStyle={{
              backgroundColor: '#23527c'
            }}
            titleStyle={{
              color: 'white',
              fontWeight: 'bold',
            }}
            onPress={LoginHandler}
          loading={state.loading}
          disabled={state.loading}
          />
        </View>

        <View style={styles.accountSetting}>
          <Text>
            Don't have an Accout?
        </Text>
          <TouchableOpacity onPress={() => {
           navigation.navigate('Register')
          }}
          disabled={state.loading}
          >
            <Text style={{ color: '#23527c' }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 14,
    paddingLeft: 15
  },
  accountSetting: {
    justifyContent: 'space-between',
    flexDirection: 'row', paddingHorizontal: 10,
    marginTop: 5
  }
})

export default LoginScreen;