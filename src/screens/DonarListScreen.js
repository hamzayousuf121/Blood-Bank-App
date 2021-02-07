import React, {useState, useEffect} from 'react';
import { SafeAreaView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Cards from '../components/Cards';
import {useDispatch, useSelector} from 'react-redux';
import {getDonars} from '../redux/Actions/Auth';

export default function DonarList() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const store = useSelector(state => state.Auth.donars)

  useEffect(() => {
    dispatch(getDonars())
    console.log(store, "Donar List");
  },[])

  const filterDonars = store?.filter((donars) =>
  donars?.blood_group?.toLowerCase()?.includes(search?.toLowerCase()),
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
