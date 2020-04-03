import React, {useEffect} from 'react';
import SignIn from './SignIn';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import WhiteRoundButton from './buttons/WhiteRoundButton';
class SignOn extends React.Component {

  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.authBtnContainer}>
            <Text style={styles.SignOnTxt}>Let's Get Started</Text>
            <WhiteRoundButton
              signUpBtnText="Sign in"
              onClickFunction="undefined"
            />
            <TouchableOpacity>
              <Text style={styles.signUpTxt}>
                Are you new here? Create an Account
              </Text>
            </TouchableOpacity>
            <View style={styles.orSection}>
              <Text style={styles.orText}>or</Text>
            </View>
            <WhiteRoundButton
              signUpBtnText="Sign Up with Facebook"
              onClickFunction="undefined"
              icon="()"
            />
            <WhiteRoundButton
              signUpBtnText="Sign Up with Google"
              onClickFunction="undefined"
            />
          </View>
        </View>
        {/* <SignIn style={styles.SignIn} /> */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  SignIn: {
    position: 'absolute',
    display: 'none'
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
