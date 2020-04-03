import React, {Fragment, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

class SignIn extends React.Component {
  render() {
    return (
      <>
        <SafeAreaView style={style.container}>
          <StatusBar barStyle="dark-content" />
          <KeyboardAvoidingView behavior="padding" style={style.container}>
            <TouchableWithoutFeedback style={style.container}>
              <View style={style.SignInContainer}>
                <Text style={style.signInText}>Sign in</Text>
                <View style={style.textGroup}>
                  <Text style={style.label}>Email</Text>
                  <TextInput style={style.input} keyboardType="email-address" />
                </View>
                <View style={style.textGroup}>
                  <Text style={style.label}>Email</Text>
                  <TextInput
                    style={style.input}
                    returnKeyType="go"
                    secureTextEntry={true}
                  />
                </View>
                <Text style={style.signupText}>Are you new here? Sign Up</Text>
                <TouchableOpacity
                  style={style.SignInBtn}
                  onPress={this.switchSignOncomponent()}>
                  <Text style={style.signupBtnText}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </>
    );
  }

  switchSignOncomponent() {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#020049',
    flex: 1,
    flexDirection: 'column',
  },
  SignInContainer: {
    backgroundColor: '#fff',
    padding: 10,
    left: 0,
    right: 0,
    bottom: 0,
    height: 450,
    position: 'absolute',
    borderTopLeftRadius: 58,
    borderTopRightRadius: 58,
  },
  signInText: {
    textAlign: 'center',
    color: '#020049',
    margin: 10,
    fontWeight: 'bold',
    fontSize: 50,
    fontFamily: 'Montserrat',
  },
  label: {
    color: '#1250F3',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Montserrat',
    position: 'absolute',
  },
  input: {
    color: '#020049',
    fontSize: 20,
    fontFamily: 'Montserrat',
    height: 40,
    borderStyle: 'solid',
    borderColor: 'rgb(214, 214, 214);',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 2,
    padding: 10,
    position: 'relative',
  },
  textGroup: {
    margin: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  signupText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1250F3',
  },
  SignInBtn: {
    borderWidth: 2,
    margin: 20,
    marginTop: 40,
    padding: 15,
    borderColor: '#020049',
    borderRadius: 50,
  },
  signupBtnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
});

export default SignIn;
