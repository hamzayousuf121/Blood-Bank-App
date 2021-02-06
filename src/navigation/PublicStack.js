import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from '../screens';

const Stack = createStackNavigator();

const PublicStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Donation">
      <Stack.Screen name="DonarList" component={Screens.DonarList} />
      <Stack.Screen name="Register" component={Screens.Register} />
      <Stack.Screen name="Login" component={Screens.Login} />
      <Stack.Screen name="Donation" component={Screens.Donation} />
      <Stack.Screen name="Home" component={Screens.Home} />
    </Stack.Navigator>
  );
};

export default PublicStack;
