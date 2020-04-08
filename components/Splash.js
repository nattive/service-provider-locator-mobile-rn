import React, {Component} from 'react';
// import LinearGradient from 'react-native-linear-gradient';

import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Image
            style={styles.logo}
            source={require('../assets/logo/logo.png')}
          />
          <MaterialIndicator color="white" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#020049',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 166,
  },
  logo: {
    width: 200,
    height: 200,
  },
  loadingText: {
    fontSize: 12,
    color: 'white',
    margin: 0
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
