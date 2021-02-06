import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from '../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Screens.Home} />
      <Stack.Screen name="Donation" component={Screens.Donation} />
      <Stack.Screen name="DonarList" component={Screens.DonarList} />
    </Stack.Navigator>
  );
};

export default AuthStack;
