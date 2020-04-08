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
  Dimensions,
} from 'react-native';

import {Input, Divider} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

let {height, width} = Dimensions.get('window');
export default function SignIn({nextScreen}) {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={style.container}>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="padding" style={style.container}>
          <TouchableWithoutFeedback style={style.container}>
            <View style={style.SignInContainer}>
              <Text style={style.signInText}>Sign in</Text>
              <Input
                containerStyle={{margin: 10}}
                label="Email"
                placeholder="eg example@xyz.co"
              />
              <Input
                containerStyle={{margin: 10}}
                label="Password"
                secureTextEntry={true}
                placeholder="**********"
              />
              <TouchableOpacity onPress={() => navigation.navigate(nextScreen)}>
                <Text style={style.signupText}>Are you new here? Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.SignInBtn}>
                <Text style={style.signupBtnText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
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
    height: height - height / 3,
    position: 'absolute',
    borderTopLeftRadius: 58,
    borderTopRightRadius: 58,
    marginLeft: 10,
    marginRight: 10,
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
    borderWidth: 1,
    margin: 10,
    marginTop: 20,
    padding: 10,
    borderColor: '#1250F3',
    backgroundColor: '#1250F3',
    borderRadius: 50,
  },
  signupBtnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: '#fff',
  },
});
