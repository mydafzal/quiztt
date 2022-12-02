import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import Spacer from '../components/spacer';
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const Quiz = ({navigation}) => {
  const [question, setQuestions] = useState();
  const [quesN, setQuesN] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const getQuiz = async () => {
    setIsLoading(true);
    const url =
      'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setIsLoading(false);
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
    if (_option === question[quesN].correct_answer) {
      setScore(score + 10);
      console.log(score);
    }
    if (quesN !== 9) {
      setQuesN(quesN + 1);
      setOptions(generateOptionsAndShuffle(question[quesN + 1]));
    }
    if (quesN === 9) {
      handleShowResult();
    }
  };
  const handleShowResult = () => {
    navigation.navigate('Result', {
      score: score,
    });
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingScreen}>
          <Text style={styles.loadingText}>Please wait</Text>
          <LottieView
            style={styles.ImageBox}
            source={require('../assets/animations/loading.json')}
            autoPlay
            autoSize
          />
        </View>
      ) : (
        question && (
          <View style={styles.parent}>
            <View style={styles.QuestionBox}>
              <Text style={styles.textStyles}>
                {decodeURIComponent(question[quesN].question)}
              </Text>
              <Spacer height={5} />
              <Text style={styles.quesbelowtext}>
                (Choose the correct answer)
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
              <Text style={styles.buttonTextSkip}> Prev </Text>
            </TouchableOpacity> */}
              {quesN !== 9 && (
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={handleNextPress}>
                  <Text style={styles.buttonText}> SKIP </Text>
                </TouchableOpacity>
              )}
              {quesN === 9 && (
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={handleShowResult}>
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
        )
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  loadingScreen: {
    paddingTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontFamily: 'Hey Comic',
    fontSize: 30,
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    height: '100%',
  },
  parent: {
    height: '100%',
  },
  ImageBox: {
    width: 400,
    height: 400,
  },
  QuestionBox: {
    justifyContent: 'center',
    padding: 10,
    width: '100%',
    height: '18%',
    borderBottomWidth: 1,
    borderBottomColor: '#3C75D5',
    marginVertical: 16,
  },
  Option: {
    marginVertical: 16,
    flex: 1,
  },
  OptionBox: {
    borderRadius: 10,
    backgroundColor: '#C0DEFE',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    width: '100%',
    height: 60,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  textStyles: {
    fontSize: 20,
    fontFamily: 'Hey Comic',
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
    backgroundColor: '#3C75D5',
    width: '100%',
    borderRadius: 10,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyleSkip: {
    backgroundColor: '#f7e6c8',
    width: '40%',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Hey Comic',
    fontSize: 30,
  },
  buttonTextSkip: {
    color: '#FB7F50',
    fontWeight: '500',
    fontSize: 20,
  },
  quesbelowtext: {
    color: '#636776',
    fontSize: 12,
  },
});
