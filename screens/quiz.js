import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Button from '../components/button';
import Spacer from '../components/spacer';

const home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.QuestionBox}>
        <Text style={styles.textStyles}>This is the first question</Text>
      </View>
      <Spacer height={30} />
      <View>
        <TouchableOpacity style={styles.OptionBox}>
          <Text style={styles.OptionText}> Option 1 </Text>
        </TouchableOpacity>
        <Spacer height={10} />
        <TouchableOpacity style={styles.OptionBox}>
          <Text style={styles.OptionText}> Option 1 </Text>
        </TouchableOpacity>
        <Spacer height={10} />
        <TouchableOpacity style={styles.OptionBox}>
          <Text style={styles.OptionText}> Option 1 </Text>
        </TouchableOpacity>
        <Spacer height={10} />
        <TouchableOpacity style={styles.OptionBox}>
          <Text style={styles.OptionText}> Option 1 </Text>
        </TouchableOpacity>
      </View>
      <Spacer height={30} />
      <Button
        buttonStyle={{backgroundColor: '#e8e8e8'}}
        title={'Skip'}
        textStyle={{color: '#7f7f7f'}}
      />
      <Spacer height={150} />
      <Button
        style={styles.ButtonStyle}
        buttonStyle={{backgroundColor: '#19222E'}}
        title={'Next'}
        textStyle={{color: 'white'}}
      />
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: '100%',
    height: '100%',
  },
  QuestionBox: {
    backgroundColor: '#e8e8e8',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
    height: '18%',
    borderRadius: 10,
    borderColor: '#E8E8E8',
    borderWidth: 1,
  },
  OptionBox: {
    borderRadius: 10,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    width: '100%',
    height: 55,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  textStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#454545',
  },
  OptionText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
