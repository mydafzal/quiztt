import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Home from './screens/home';
import Quiz from './screens/quiz';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <Quiz />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
