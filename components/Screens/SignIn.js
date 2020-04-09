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
  Image,
  ImageBackground,
} from 'react-native';

import {Input, Divider} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native-gesture-handler';

let {height, width} = Dimensions.get('window');
export default function SignIn({nextScreen}) {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={style.container}>
        <StatusBar barStyle="light-content" />

        {/* <ImageBackground
          style={{
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
            height: '100%',
          }}
          source={require('../../assets/images/bg.jpg')}> */}
        <KeyboardAvoidingView
          behavior="height"
          style={style.container}
          enabled>
          <View style={{backgroundColor: '#050339de', height: '100%'}}>
            <ScrollView style={style.SignInContainer}>
              <Text style={style.signInText}>Welcome back!</Text>
              <Input
                labelStyle={style.label}
                inputStyle={{textAlign: 'center', color: '#fff'}}
                placeholderTextColor="#dddce0"
                containerStyle={{margin: 5}}
                label="Email"
                placeholder="Email Address"
              />
              <Input
                labelStyle={style.label}
                inputStyle={{textAlign: 'center', color: '#fff'}}
                placeholderTextColor="#dddce0"
                containerStyle={{margin: 5}}
                label="Password"
                secureTextEntry={true}
                placeholder="Input Password"
              />
              <TouchableOpacity
                onPress={() => navigation.navigate(nextScreen)}
              />
              <TouchableNativeFeedback style={style.SignInBtn}>
                <Text style={style.signupBtnText}>Sign In</Text>
              </TouchableNativeFeedback>

              <View
                style={{
                  flex: 1,
                  alignContent: 'flex-end',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginTop: 30,
                }}>
                {/* <Divider style={{margin: 15}} /> */}
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Montserrat',
                    color: '#fff',
                    fontSize: 18,
                    margin: 5,
                  }}>
                  Or Sign in With
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableNativeFeedback>
                    <Icon
                      name="facebook-square"
                      style={{padding: 5}}
                      size={35}
                      color="#fff"
                    />
                  </TouchableNativeFeedback>
                  <TouchableNativeFeedback>
                    <Icon
                      name="google-plus-square"
                      style={{padding: 5}}
                      size={35}
                      color="#fff"
                    />
                  </TouchableNativeFeedback>
                </View>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
        {/* </ImageBackground> */}
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
  },
  SignInContainer: {
    padding: 10,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    marginHorizontal: 20,
  },
  signInText: {
    textAlign: 'center',
    color: '#fff',
    margin: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Montserrat',
  },
  label: {
    color: '#e2e2e809',
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily: 'Montserrat',
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
    // marginHorizontal: 20,
    padding: 10,
    borderWidth: 0,
    backgroundColor: '#f3f3f3',
    borderRadius: 50,
    elevation: 4,
  },
  signupBtnText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: '#1250F3',
  },
});
