import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Slick from 'react-native-slick';
import SignOn from './SignOn';
import SliderImage from './patials/SliderImage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function SlickScreen({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.contents}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../assets/logo/logo.png')}
          />
        </View>
        <Slick style={styles.wrapper} showsButtons={false} autoplay={true}>
          <View>
            <SliderImage
              Image={require('../assets/Carousel/slider3.png')}
              sliderInnerText="Search for your desired service "
            />
          </View>
          <View>
            <SliderImage
              Image={require('../assets/Carousel/slider2.png')}
              sliderInnerText=" We give you the closest and top ranked 
service provider in your area"
            />
          </View>
          <View>
            <SliderImage
              Image={require('../assets/Carousel/slider1.png')}
              sliderInnerText="Connect and contact your desired provider, 
you can call, message or locate the office 
of the provider. All in one app"
            />
          </View>
        </Slick>

        <View style={styles.navigationBorder}>
          <View style={styles.navigationLinks}>
            <TouchableOpacity>
              <Text style={styles.navigationLinksText} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignOnScreens')}>
              <Text style={styles.navigationLinksText}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

function SignOnScreen({navigation}) {
  return <SignOn />;
}

export default function SliderScreen({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeSliderScreen">
        <Stack.Screen
          name="Slider"
          component={SlickScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignOnScreens"
          component={SignOnScreen}
          options={{headerTitle: 'Sign in'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
  },
  contents: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navigationBorder: {
    borderTopColor: ' rgba(143, 143, 143, 0.151)',
    padding: 10,
    borderTopWidth: 1,
    borderStyle: 'solid',
    marginTop: 20,
  },
  navigationLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
    padding: 5,
  },
  navigationLinksText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1250F3',
  },
});
