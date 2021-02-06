import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';
import Navigation from './src/navigation';
import {getCurrentUser} from './src/redux/Actions/Auth';
import {ActivityIndicator, View} from 'react-native'

const App = () => {
  const {isLogIn, appLoading} = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const user = auth().currentUser;
      console.log('app js ', user);
      if (user?.uid) {
        dispatch(getCurrentUser(user.uid));
      } else dispatch({type: 'Auth/updateState', payload: {appLoading: false}});
    } catch (error) {
      dispatch({type: 'Auth/updateState', payload: {appLoading: false}});
    }
  }, []);

  return (
    // <NavigationContainer>
    //   {isLogIn ? <Navigation.Auth /> : <Navigation.Public />}
    // </NavigationContainer>
    <>
     { appLoading ? 
       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="blue" />

       </View>
       :<NavigationContainer>
       {isLogIn ? <Navigation.Auth /> : <Navigation.Public />}
     </NavigationContainer>
     }
     </>
  );
};

export default App;
