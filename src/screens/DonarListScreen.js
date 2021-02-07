import React, {useState, useEffect} from 'react';
import { SafeAreaView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Cards from '../components/Cards';
import {useDispatch, useSelector} from 'react-redux';
import {getDonars} from '../redux/Actions/Auth';

export default function DonarList() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const store = useSelector(state => state.Auth)
  const [users, setUsers] = useState([
    {
      name: 'Hamza',
      Phone_No: '03142316028',
      location: 'Karachi',
      gender: 'Male',
      bloodGroup: 'A',
    },
    {
      name: 'Ali Raza',
      Phone_No: '03142518294',
      location: 'Karachi',
      gender: 'Male',
      bloodGroup: 'AB',
    },
    {
      name: 'Yousuf',
      Phone_No: '03146444555',
      location: 'Karachi',
      gender: 'Male',
      bloodGroup: 'B',
    },
    {
      name: 'Aliraza',
      Phone_No: '03144516028',
      location: 'Karachi',
      gender: 'Male',
      bloodGroup: 'O',
    },
    {
      name: 'Sana',
      Phone_No: '035466464644',
      location: 'Karachi',
      gender: 'Female',
      bloodGroup: 'O',
    },
  ]);


  useEffect(()=>{
    dispatch(getDonars())
    console.log(store, "Donar List");
  },[])

  const filterDonars = users.filter((user) =>
    user.bloodGroup.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <SearchBar
        placeholder="Search By Blood Group"
        onChangeText={(val) => setSearch(val)}
        value={search}
        lightTheme={true}
        inputContainerStyle={{
          backgroundColor: 'white',
          color: 'black',
          marginHorizontal: 7,
        }}
      />
      <Cards users={filterDonars} />
    </SafeAreaView>
  );
}
