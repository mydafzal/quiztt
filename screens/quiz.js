import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useEffect} from 'react';
import Button from '../components/button';
import Spacer from '../components/spacer';
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const Quiz = () => {
  const [question, setQuestions] = useState();
  const [quesN, setQuesN] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const getQuiz = async () => {
    const url =
      'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
  };
  useEffect(() => {
    getQuiz();
  }, []);
  const handleNextPress = () => {
    setQuesN(quesN + 1);
    setOptions(generateOptionsAndShuffle(question[quesN + 1]));
  };
  const generateOptionsAndShuffle = _question => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    return options;
  };
  const handleSelectedOption = _option => {
    console.log(options === question[quesN.correct_answer]);
  };
  return (
    <View style={styles.container}>
      {question && (
        <View style={styles.parent}>
          <View style={styles.QuestionBox}>
            <Text style={styles.textStyles}>
              {decodeURIComponent(question[quesN].question)}
            </Text>
          </View>
          <View style={styles.Option}>
            <TouchableOpacity
              style={styles.OptionBox}
              onPress={() => handleSelectedOption(options[0])}>
              <Text style={styles.OptionText}>
                {' '}
                {decodeURIComponent(options[0])}{' '}
              </Text>
            </TouchableOpacity>
            <Spacer height={10} />
            <TouchableOpacity
              style={styles.OptionBox}
              onPress={() => handleSelectedOption(options[1])}>
              <Text style={styles.OptionText}>
                {' '}
                {decodeURIComponent(options[1])}{' '}
              </Text>
            </TouchableOpacity>
            <Spacer height={10} />
            <TouchableOpacity
              style={styles.OptionBox}
              onPress={() => handleSelectedOption(options[2])}>
              <Text style={styles.OptionText}>
                {' '}
                {decodeURIComponent(options[2])}{' '}
              </Text>
            </TouchableOpacity>
            <Spacer height={10} />
            <TouchableOpacity
              style={styles.OptionBox}
              onPress={() => handleSelectedOption(options[3])}>
              <Text style={styles.OptionText}>
                {' '}
                {decodeURIComponent(options[3])}{' '}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            {/* <TouchableOpacity style={styles.buttonStyleSkip}>
              <Text style={styles.buttonTextSkip}> Skip </Text>
            </TouchableOpacity> */}
            {quesN !== 9 && (
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={handleNextPress}>
                <Text style={styles.buttonText}> Next </Text>
              </TouchableOpacity>
            )}
            {quesN === 9 && (
              <TouchableOpacity style={styles.buttonStyle} onPress={() => null}>
                <Text style={styles.buttonText}> Show Result </Text>
              </TouchableOpacity>
            )}
          </View>
          {/* <Button
            buttonStyle={{backgroundColor: '#e8e8e8'}}
            title={'END'}
            textStyle={{color: '#7f7f7f'}}
          /> */}
          <Spacer height={50} />
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    height: '100%',
  },
  parent: {
    height: '100%',
  },
  QuestionBox: {
    justifyContent: 'center',
    padding: 10,
    width: '100%',
    height: '18%',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    marginVertical: 16,
  },
  Option: {
    marginVertical: 16,
    flex: 1,
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
    color: 'black',
  },
  OptionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  bottom: {
    marginBottom: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonStyle: {
    backgroundColor: '#FB7F50',
    width: '100%',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyleSkip: {
    backgroundColor: 'f7e6c8',
    width: '30%',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 20,
  },
  buttonTextSkip: {
    color: '#FB7F50',
    fontWeight: '500',
    fontSize: 20,
  },
});
