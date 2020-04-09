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
import SliderImage from './patials/SliderImage';
import {useNavigation} from '@react-navigation/native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export default function Slider({nextScreen}) {
  const navigation = useNavigation()
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
          <SliderImage
            Image={require('../assets/Carousel/slider3.png')}
            sliderInnerText="Search for your desired service "
          />
          <SliderImage
            Image={require('../assets/Carousel/slider2.png')}
            sliderInnerText=" We give you the closest and top ranked 
service provider in your area"
          />
          <SliderImage
            Image={require('../assets/Carousel/slider1.png')}
            sliderInnerText="Connect and contact your desired provider, 
you can call, message or locate the office 
of the provider. All in one app"
          />
        </Slick>

        <View style={styles.navigationBorder}>
          <View style={styles.navigationLinks}>
            <TouchableNativeFeedback
              style={styles.navigationLinksBtn}
              onPress={() => navigation.navigate('SignOnScreenScreen')}>
              <Text style={styles.navigationLinksText}>Skip</Text>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </>
  );
}

// function SignOnScreen({navigation}) {
//   return <SignOn />;
// }

// unction SliderScreen({navigation}) {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HomeSliderScreen">
//         <Stack.Screen
//           name="Slider"
//           component={SlickScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="SignOnScreens"
//           component={SignOnScreen}
//           options={{headerTitle: 'Sign in'}}
//           //   options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: '#fff'
  },
  contents: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  navigationBorder: {
    borderTopColor: ' rgba(143, 143, 143, 0.151)',
    borderTopWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'flex-end',
    padding: 10,
  },
  navigationLinksBtn: {
    width: '100%',
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  navigationLinks: {
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
