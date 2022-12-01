import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Home from './screens/home';
import Quiz from './screens/quiz';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation/stacknavigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
