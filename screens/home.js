import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import HomeImage from '../images/quiztthomepage.webp';
import Button from '../components/button';
import LottieView from 'lottie-react-native';
import Spacer from '../components/spacer';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Quiztt</Text>
      <LottieView
        style={styles.ImageBox}
        source={require('../assets/animations/QuizHome.json')}
        autoPlay
        autoSize
      />

      <Button
        buttonStyle={{backgroundColor: '#C0DEFE'}}
        title={"Let's Begin"}
        textStyle={{fontFamily: 'Hey Comic', color: '#454545'}}
        onPress={() => navigation.navigate('Quiz')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  ImageBox: {
    width: 400,
    height: 400,
  },
  textStyles: {
    fontFamily: 'Hey Comic',
    fontSize: 30,
    color: '#454545',
  },
  buttonStyle: {
    backgroundColor: '#fb7f50',
    width: '100%',
    borderRadius: 10,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
