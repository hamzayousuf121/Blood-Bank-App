import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from '../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Screens.Home} />
    </Stack.Navigator>
  );
};

export default AuthStack;
