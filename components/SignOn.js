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
} from 'react-native';
import WhiteRoundButton from './buttons/WhiteRoundButton';
import SignUp from './SignUp';
import {Input, Divider} from 'react-native-elements';
const {height, width} = Dimensions.get('window');


type Props = {};
class SignOn extends React.Component {
  constructor(props) {
    super(props);
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
      display: 'none',
      transform: [{translateY: modalMoveY}],
    };
    let translateSignUpStyle = {
      display: 'none',
      transform: [{translateY: moveSignUp}],
    };
    return (
      <>
        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.setState({
                signUpModalVisible: false,
                signInModalVisible: false,
              });
            }}>
            <View style={styles.authBtnContainer}>
              <Text style={styles.SignOnTxt}>Let's Get Started</Text>
              <WhiteRoundButton
                signUpBtnText="Sign in"
                onPress={() => {
                  this.setState({
                    signUpModalVisible: false,
                    signInModalVisible: true,
                  });
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    signUpModalVisible: true,
                    signInModalVisible: false,
                  });
                }}>
                <Text style={styles.signUpTxt}>
                  Are you new here? Create an Account
                </Text>
              </TouchableOpacity>
              <View style={styles.orSection}>
              <Divider />
                <Text style={styles.orText} />
              </View>
              <WhiteRoundButton
                signUpBtnText="Sign Up with Facebook"
                onClickFunction="undefined"
              />
              <WhiteRoundButton
                signUpBtnText="Sign Up with Google"
                onClickFunction="undefined"
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Animated.View style={[styles.SignIn, translateSignInStyle]}>
          <SignIn
            closeModel={() => {
              this.state = {
                signInModalVisible: false,
              };
            }}
          />
        </Animated.View>
        <Animated.View style={[styles.SignUp, translateSignUpStyle]}>
          <SignUp />
        </Animated.View>
      </>
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
    margin: 10,
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Montserrat',
  },
  authBtnContainer: {
    backgroundColor: '#020049',
    padding: 10,
    left: 0,
    right: 0,
    bottom: 0,
    top: 200,
    height: 350,
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
export default SignOn;
