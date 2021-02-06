import React, { useState, useEffect} from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Alert} from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux'
import {Register} from '../redux/Actions/Auth';
import {authState} from '../redux/types';

const RegisterScreen = ({navigation}) => {

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  })

   const dispatch = useDispatch();
  const store = useSelector(state => state.Auth);
console.log(store, 'Store')
console.log(state)
  const registerUser = () => {
    const {name, email, password} = state;

    if(email && password && name){

      dispatch(Register(email, password, name))

    }

    else{
      Alert.alert('Name, Email and Password Are Required')
    }

  }

  useEffect(()=>{
    if(store.register){
      dispatch({type: authState, payload: {register: false, }})
      navigation.navigate('Login');
    }
  }, [store.register])
  return (
   <SafeAreaView style={{flex: 1}}>
     <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1,}}>
        <View>
          <Text style={{color: '#fff', backgroundColor: '#23527c', justifyContent: 'center', 
          alignItems: 'center',
          textAlign:'center', padding: 10, fontSize: 20, fontWeight: 'bold',}}>Register</Text>
        </View>

     <View style={{flex: 1, justifyContent: 'center',}}>
     
      <Text style={styles.label}>Name:</Text>
      <Input
        placeholder='Enter Your Name'
        value={state.name}
        onChangeText={(val) => setState({ ...state, name: val })}
      />
      {/* <Text style={styles.label}>Blood Group:</Text>
      <View style={{ marginHorizontal: 10, borderBottomWidth: 1, borderBottomColor: '#99a3ac', marginBottom: 25 }}>
        <Picker
          selectedValue={state.bloodGroup}
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue, itemIndex) =>
            setState({bloodGroup: itemValue})
          }>
          <Picker.Item label="0" value="0" />
          <Picker.Item label="A" value="A" />
          <Picker.Item label="B" value="B" />
          <Picker.Item label="AB" value="AB" />
        </Picker>
      </View>
      <Text style={styles.label}>Address:</Text>
      <Input
        placeholder='Enter Your Address'
        value={state.Address}
        onChangeText={(val) => setState({ ...state, address: val })}
      /> */}

      <Text style={styles.label}>Email:</Text>
      <Input
        placeholder='Enter Your Email'
        value={state.email}
        onChangeText={(val) => setState({ ...state, email: val })}
      />
      <Text style={styles.label}>Password:</Text>
      <Input
        placeholder='Enter Your Password'
        errorStyle={{ color: 'red' }}
        secureTextEntry={true}
        value={state.password}
        onChangeText={(val) => setState({ ...state, password: val })}
      />
      <View style={styles.container}>
        <Button
          title="Register"
          type="outline"
          buttonStyle={{
            backgroundColor: '#23527c'
          }}
          titleStyle={{
            color: 'white',
            fontWeight: 'bold',
          }}
          onPress={registerUser}
          loading={store.loading}
          disabled={store.loading}
        />
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10, marginTop: 10}}>
        <Text>
          Already have an Accout?
        </Text>
        <TouchableOpacity onPress={()=> {
          navigation.navigate("Login")
        }}
        disabled={store.loading}
        >
        <Text style={{color: '#23527c'}}>Login</Text>
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
  }
})

export default RegisterScreen;