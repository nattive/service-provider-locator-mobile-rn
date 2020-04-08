/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import {Input, CheckBox} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

let {height, width} = Dimensions.get('window');
export default function SignUp({nextScreen}) {
  const navigation = useNavigation()
  return (
    <>
      <SafeAreaView style={style.container}>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'height' : null}
          style={style.container}>
          <View style={style.container}>
            <View style={style.SignInContainer}>
              <Text style={style.signInText}>Sign Up</Text>
              <ScrollView style={style.formContainer}>
                <Input
                  containerStyle={{margin: 10}}
                  label="Full Name"
                  placeholder="eg John Doe"
                />
                <Input
                  containerStyle={{margin: 10}}
                  label="Email"
                  placeholder="eg example@xyz.co"
                />
                <Input
                  containerStyle={{margin: 10}}
                  label="Password"
                  placeholder="**********"
                />
                <Input
                  containerStyle={{margin: 10}}
                  label="Confirm Password"
                  placeholder="**********"
                />
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <CheckBox title="User" checked />
                  <CheckBox title="Service Provider" />
                </View>
              </ScrollView>
              <TouchableOpacity>
                <Text style={style.signupText}>
                  Already Have an account? Sign in
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.SignInBtn}
                onPress={() =>
                  navigation.navigate('RegisterServiceProviderScreen')
                }>
                <Text style={style.signupBtnText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );

  // switchSignOncomponent() {
  //   ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  // }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#020049',
    flex: 1,
    flexDirection: 'column',
    marginLeft: 3,
    marginRight: 3,
  },
  formContainer: {
    margin: 8,
  },
  SignInContainer: {
    backgroundColor: '#fff',
    padding: 10,
    left: 0,
    right: 0,
    bottom: 0,
    height: height - 100,
    position: 'absolute',
    borderTopLeftRadius: 58,
    borderTopRightRadius: 58,
  },
  signInText: {
    textAlign: 'center',
    color: '#020049',
    margin: 5,
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Montserrat',
  },
  input: {
    color: '#020049',
    fontSize: 12,
    fontFamily: 'Montserrat',
    margin: 10,
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
    padding: 5,
    borderColor: '#1250F3',
    backgroundColor: '#1250F3',
    borderRadius: 50,
    elevation: 4,
  },
  signupBtnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: '#fff',
  },
});
