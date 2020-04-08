/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import SignIn from './SignIn';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  Dimensions,
  Alert,
} from 'react-native';
import WhiteRoundButton from './buttons/WhiteRoundButton';
import SignUp from './SignUp';
import {Input, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const {height, width} = Dimensions.get('window');
import {createStackNavigator} from '@react-navigation/stack';

/*


Program Begins 

*/
const Stack = createStackNavigator();
// type Props = {};
export default class SignOn extends React.Component {
  constructor(props) {
    super(props);
    this.openSignInModel = this.openSignInModel.bind(this);
    this.yTranslate = new Animated.Value(0);
    this.signUpTranslate = new Animated.Value(0);
    this.state = {
      signUpModalVisible: false,
      signInModalVisible: false,
    };
  }
  render() {
    let modalMoveY = this.yTranslate.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -height],
    });
    let moveSignUp = this.signUpTranslate.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -height],
    });

    let translateSignInStyle = {
      transform: [{translateY: modalMoveY}],
    };
    let translateSignUpStyle = {
      transform: [{translateY: moveSignUp}],
    };
    return (
      <View
        style={styles.container}
        onStartShouldSetResponder={() => {
          this.setState({
            signUpModalVisible: false,
            signInModalVisible: false,
          });
        }}>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <View style={styles.authBtnContainer}>
              <Text style={styles.SignOnTxt}> Let 's Get Started</Text>
              <WhiteRoundButton
                signUpBtnText="Sign in"
                onPress={() => {
                  this.setState({
                    signUpModalVisible: false,
                    signInModalVisible: true,
                  });
                }}
              />
              <TouchableOpacity style={{padding: 10}}
                onPress={() => {
                  this.setState({
                    signUpModalVisible: true,
                    signInModalVisible: false,
                  });
                }}>
                <Text style={styles.signUpTxt}>
                  Are you new here ? Create an Account
                </Text>
              </TouchableOpacity>
              <View style={styles.orSection}>
                <Divider />
                <Text style={styles.orText} />
              </View>
              <WhiteRoundButton
                signUpBtnText="Sign Up with Facebook"
                Icon={<Icon name="facebook-square" size={24} color="black" />}
                onClickFunction="undefined"
              />
              <WhiteRoundButton
                signUpBtnText="Sign Up with Gmail"
                onClickFunction="undefined"
                Icon={<Icon name="google-plus-square" size={24} color="red" />}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Animated.View style={[styles.SignIn, translateSignInStyle]}>
          <SignIn />
        </Animated.View>
        <Animated.View style={[styles.SignUp, translateSignUpStyle]}>
          <SignUp />
        </Animated.View>
      </View>
    );
  }

  openSignUpModel(prevProps, prevState) {
    if (this.state.signUpModalVisible) {
      // animate the showing of the modal
      this.signUpTranslate.setValue(0); // reset the animated value
      Animated.spring(this.signUpTranslate, {
        toValue: 1,
        friction: 6,
        useNativeDriver: true,
      }).start();
    } else {
      // animate the hiding of the modal
      Animated.timing(this.signUpTranslate, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }
  openSignInModel(prevProps, prevState) {
    if (this.state.signInModalVisible) {
      // animate the showing of the modal
      this.yTranslate.setValue(0); // reset the animated value
      Animated.spring(this.yTranslate, {
        toValue: 1,
        friction: 6,
        useNativeDriver: true,
      }).start();
    } else {
      // animate the hiding of the modal
      Animated.timing(this.yTranslate, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }

  componentDidUpdate() {
    this.openSignInModel();
    this.openSignUpModel();
  }
}

const styles = StyleSheet.create({
  dNone: {
    display: 'none',
  },
  SignIn: {
    position: 'absolute',
    height: height,
    width: width,
    bottom: -height,
  },
  SignUp: {
    position: 'absolute',
    height: height,
    width: width,
    bottom: -height,
  },
  container: {
    backgroundColor: '#020049',
    flex: 1,
    flexDirection: 'column',
  },
  orSection: {
    marginTop: 15,
  },
  border: {
    borderStyle: 'solid',
    borderColor: 'white',
    width: 100,
  },
  orText: {
    color: '#fff',
    textAlign: 'center',
  },
  SignOnTxt: {
    textAlign: 'center',
    color: '#fff',
    margin: 15,
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Montserrat',
  },
  authBtnContainer: {
    display: 'flex',
    alignContent: 'center',
    backgroundColor: '#020049',
    padding: 18,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  signUpTxt: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  SignInBtn: {
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 40,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  signUpBtnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: '#020049',
  },
});
