import React, {Component} from 'react';
// import LinearGradient from 'react-native-linear-gradient';

import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';
import colors from './styles/colors';
import {Text} from 'react-native-svg';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require('../assets/images/bg.jpg')}
          style={{
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
            height: '100%',
          }}>
          <SafeAreaView style={styles.container}>
            <Image
              style={styles.logo}
              source={require('../assets/logo/logoViariant3.png')}
            />
            <Text style={styles.loadingText}>Getting Things ready...</Text>
            <MaterialIndicator color="white" />
          </SafeAreaView>
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4c6ec644',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 166,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  loadingText: {
    fontSize: 12,
    color: 'white',
    margin: 0,
  },
  error: {
    color: 'white',
    backgroundColor: 'red',
    padding: 15,
    width: '100%',
    textAlign: 'center',
    display: 'none',
  },
});
