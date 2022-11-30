import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';
import HomeImage from '../images/quiztthomepage.webp';

const home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Welcome to Quiztt</Text>
      <Image source={HomeImage} style={styles.ImageBox} />
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageBox: {
    width: 400,
    height: 400,
  },
  textStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#454545',
  },
});
