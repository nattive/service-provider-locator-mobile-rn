/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
  Image,
  Alert,
} from 'react-native';
import {Input, CheckBox} from 'react-native-elements';
import colors from '../styles/colors'
import {
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import WhiteRoundButton from '../buttons/WhiteRoundButton';

let {height, width} = Dimensions.get('window');
export default function SignUp({nextScreen}) {
  const navigation = useNavigation();
  const [isUserAccount, setIsUserAccount] = useState(false);
  return (
    <>
      <SafeAreaView style={style.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={style.formContainer}>
          <Image
            source={require('../../assets/logo/logo.png')}
            style={{width: 150, height: 150, alignSelf: 'center'}}
          />
          <KeyboardAvoidingView
            // behavior="padding"
            enabled>
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
              <CheckBox
                title="User"
                checked={isUserAccount}
                onPress={() => setIsUserAccount(prevCount => !prevCount)}
              />
              <CheckBox
                title="Service Provider"
                checked={!isUserAccount}
                onPress={() => setIsUserAccount(prevCount => !prevCount)}
              />
            </View>
            <WhiteRoundButton
              margin={0}
              signUpBtnColor={colors.main}
              signUpBtnText="Sign up"
              onPress={() =>
                isUserAccount
                  ? navigation.navigate('RegisterUsersScreenScreen')
                  : navigation.navigate('RegisterServiceProviderScreen')
              }
              // Icon={<Icon name="facebook-square" size={20} color={colors.main} />}
              backgroundColor={colors.main}
              border={true}
              color="#fff"
            />
            </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  SignInContainer: {
    padding: 10,
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 4,
    height: height - height / 3,
    position: 'absolute',
    marginHorizontal: 20,
  },
  signInText: {
    textAlign: 'center',
    color: colors.main,
    margin: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Montserrat',
  },
  label: {
    color: '#02004985',
    fontWeight: 'bold',
    fontSize: 15,
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
    color: colors.main,
  },
  SignInBtn: {
    borderWidth: 1,
    margin: 10,
    marginTop: 20,
    padding: 10,
    borderWidth: 0,
    backgroundColor: colors.main,
    borderRadius: 50,
    elevation: 6,
  },
  signupBtnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: '#fff',
  },
});
