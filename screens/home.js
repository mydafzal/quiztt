import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';
import HomeImage from '../images/quiztthomepage.webp';
import navigation from '../navigation/stacknavigation';
import Button from '../components/button';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Welcome to Quiztt</Text>
      <Image source={HomeImage} style={styles.ImageBox} />
      <Button
        buttonStyle={{backgroundColor: '#e8e8e8'}}
        title={'Skip'}
        textStyle={{color: '#7f7f7f'}}
        onPress={() => navigation.navigate('Quiz')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
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
