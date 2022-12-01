import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Quiz"
        component={Quiz}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Result"
        component={Result}
      />
    </Stack.Navigator>
  );
}
export default Navigation;
