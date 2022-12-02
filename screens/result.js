import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import Button from '../components/button';
import Spacer from '../components/spacer';

const Result = ({navigation, route}) => {
  const {score} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Result</Text>
      <Spacer height={20} />
      <Text style={styles.scoreText}>You got: {score}/100</Text>
      <Spacer height={50} />
      {score <= 30 && (
        <LottieView
          style={styles.ImageBox}
          source={require('../assets/animations/sad-face.json')}
          autoPlay
          autoSize
        />
      )}
      {score === 50 && (
        <LottieView
          style={styles.ImageBox}
          source={require('../assets/animations/normal-face.json')}
          autoPlay
          autoSize
        />
      )}
      {score > 50 && (
        <LottieView
          style={styles.ImageBox}
          source={require('../assets/animations/happy-face.json')}
          autoPlay
          autoSize
        />
      )}
      {/* <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}> Go Back Home! </Text>
        </TouchableOpacity>
      </View> */}
      <Spacer height={50} />
      <Button
        onPress={() => navigation.navigate('Home')}
        buttonStyle={{backgroundColor: '#3C75D5'}}
        title={'Go back Home!'}
        textStyle={{color: 'white', fontFamily: 'Hey Comic', fontSize: 30}}
      />
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  ImageBox: {
    width: 250,
    height: 250,
  },
  bottom: {
    marginBottom: 400,
    paddingVertical: 16,
    flexDirection: 'row',
  },
  buttonStyle: {
    backgroundColor: '#3C75D5',
    width: '100%',
    borderRadius: 10,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Hey Comic',
    fontSize: 30,
  },
  scoreText: {
    fontFamily: 'Hey Comic',
    fontSize: 20,
    color: '#454545',
  },
  textStyles: {
    fontFamily: 'Hey Comic',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#454545',
  },
});
