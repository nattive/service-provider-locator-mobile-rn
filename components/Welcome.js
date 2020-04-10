import * as React from 'react';
import {Text, View, StyleSheet, Image, Alert, StatusBar} from 'react-native';
import WhiteRoundButton from './buttons/WhiteRoundButton';
import colors from './styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar backgroundColor="#4c669f" barStyle="light-content" />

      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}>
        <Image
          source={require('../assets/logo/logoViariant3.png')}
          style={{width: 100, height: 100}}
        />
        <Text style={styles.WelcomeText}>Welcome to AKAD!</Text>

        <WhiteRoundButton
          signUpBtnColor={colors.main}
          signUpBtnText="Continue With facebook"
          onPress={() => Alert.alert('ok')}
          underlayColor="red"
          Icon={<Icon name="facebook-square" size={20} color={colors.main} />}
        />
        <WhiteRoundButton
          margin={0}
          signUpBtnColor={colors.main}
          signUpBtnText="Create Account"
          onPress={() => navigation.navigate('SignUpScreenScreen')}
          // Icon={<Icon name="facebook-square" size={20} color={colors.main} />}
          backgroundColor={colors.main}
          border={true}
          color="#fff"
        />
        <TouchableOpacity
          style={{marginVertical: 15}}
          onPress={() => navigation.navigate('SignInScreenScreen')}>
          <Text
            style={{
              color: '#fff',
              fontSize: 14,
              fontWeight: '300',
              textAlign: 'center',
            }}>
            Already a member? Sign in
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: colors.main,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  WelcomeText: {
    fontSize: 30,
    fontFamily: 'Montserrat',
    fontWeight: '300',
    color: '#fff',
    marginVertical: 40,
  },
});
