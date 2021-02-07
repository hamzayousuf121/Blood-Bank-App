import React, { useState, useEffect} from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Alert} from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux'
import { Picker } from '@react-native-picker/picker';
import {authState} from '../redux/types';
import {addDonars} from '../redux/Actions/Auth'
const DonationScreen = ({navigation}) => {

  const [state, setState] = useState({
    full_name: '',
    age: null,
    location: '',
    gender: 'Male',
    phone_no: null,
    blood_group: '0',
    email: '',
    id: ''
  })

   const dispatch = useDispatch();
  const store = useSelector(state => state.Auth);

  const addUserDetail = () => {
    const {full_name, age, location, gender, phone_no, blood_group} = state;

    if(full_name && age && location && gender && phone_no && blood_group){
        dispatch(addDonars(store.user.id, state))
    } 

    else{
      Alert.alert('All Fields Are Required')
    }

  }
  useEffect(() => {
    setState({...state, email: store.user.email, id: store.user.id})
    console.log('useEffect Call')
  }, [])

  useEffect(()=>{
    
    if(store.loading){
      dispatch({type: authState, payload: {loading: false, }})
      navigation.navigate('DonarList');
    }
  }, [store.loading])
  return (
   <SafeAreaView style={{flex: 1}}>
     <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1,}}>
        <View>
          <Text style={{color: '#fff', backgroundColor: '#23527c', justifyContent: 'center', 
          alignItems: 'center',
          textAlign:'center', padding: 10, fontSize: 20, fontWeight: 'bold',}}>Blood Donation Form</Text>
        </View>

     <View style={{flex: 1, justifyContent: 'center', marginVertical: 20}}>
     
      <Text style={styles.label}>Full Name:</Text>
      <Input
        placeholder='Enter Your Full Name'
        value={state.full_name}
        onChangeText={(val) => setState({ ...state, full_name: val })}
      />
      <Text style={styles.label}>Blood Group:</Text>
      <View style={{ marginHorizontal: 10, borderBottomWidth: 1, borderBottomColor: '#99a3ac', marginBottom: 25 }}>
        <Picker
          selectedValue={state.blood_group}
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue, itemIndex) =>
            setState({...state, blood_group: itemValue})
          }>
          <Picker.Item label="0" value="0" />
          <Picker.Item label="A" value="A" />
          <Picker.Item label="B" value="B" />
          <Picker.Item label="AB" value="AB" />
        </Picker>
      </View>
      <Text style={styles.label}>Location:</Text>
      <Input
        placeholder='Enter Your Location'
        keyboardType="default"
        value={state.location}
        onChangeText={(val) => setState({ ...state, location: val })}
      />

      <Text style={styles.label}>Age:</Text>
      <Input
        placeholder='Enter Your Age'
        value={state.age}
        keyboardType="decimal-pad"
        onChangeText={(val) => setState({ ...state, age: val })}
      />

        <Text style={styles.label}>Gender:</Text>
      <View style={{ marginHorizontal: 10, borderBottomWidth: 1, borderBottomColor: '#99a3ac', marginBottom: 25 }}>
        <Picker
          selectedValue={state.gender}
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue) =>
            setState({...state, gender: itemValue})
          }>
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      <Text style={styles.label}>Phone No:</Text>
      <Input
        placeholder='Enter Your Phone No'
        value={state.phone_no}
        keyboardType="phone-pad"
        onChangeText={(val) => setState({ ...state, phone_no: val })}
      />
      

      <View style={styles.container}>
        <Button
          title="Add Details"
          type="outline"
          buttonStyle={{
            backgroundColor: '#23527c'
          }}
          titleStyle={{
            color: 'white',
            fontWeight: 'bold',
          }}
          onPress={addUserDetail}
          loading={store.loading}
          disabled={store.loading}
        />
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

export default DonationScreen;


 
