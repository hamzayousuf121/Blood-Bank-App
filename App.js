import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';
import Navigation from './src/navigation';
import {getCurrentUser} from './src/redux/Actions/Auth';

const App = () => {
  const {isLogIn} = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch({type: 'Auth/updateState', payload: {loading: true}});
      const user = auth().currentUser;
      console.log('app js ', user);
      if (user?.uid) {
        dispatch(getCurrentUser(user.uid));
      } else dispatch({type: 'Auth/updateState', payload: {loading: false}});
    } catch (error) {
      dispatch({type: 'Auth/updateState', payload: {loading: false}});
    }
  }, []);

  return (
    <NavigationContainer>
      {isLogIn ? <Navigation.Auth /> : <Navigation.Public />}
    </NavigationContainer>
    //  <>
    //  { loading ? 
    //    <ActivityIndicator size="large" color="blue" />
    //    :<NavigationContainer>
    //    {isLogIn ? <Navigation.Auth /> : <Navigation.Public />}
    //  </NavigationContainer>
    //  }
    //  </>
  );
};

export default App;
