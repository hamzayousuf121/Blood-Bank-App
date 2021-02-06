import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from '../screens';

const Stack = createStackNavigator();

const PublicStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Screens.Login} />
      <Stack.Screen name="Register" component={Screens.Register} />
    </Stack.Navigator>
  );
};

export default PublicStack;
