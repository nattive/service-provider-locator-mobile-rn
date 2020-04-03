import React, {Component} from 'react';
// import LinearGradient from 'react-native-linear-gradient';

import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';


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
        {/* <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']}
          style={styles.gradient}></LinearGradient> */}
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Image
            style={styles.logo}
            source={require('../assets/logo/logo.png')}
          />
          <View className="sweet-loading">
            {/* <ClipLoader size={150} color={'#123abc'} loading={true} /> */}
          </View>
          <Text style={styles.loadingText}>Loading</Text>
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
    fontSize: 16,
    color: 'white',
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
