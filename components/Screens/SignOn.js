/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import SignIn from './SignIn';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  Dimensions,
  Alert,
} from 'react-native';
import SignUp from './SignUp';
import {Input, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

/*


Program Begins 

*/
// const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function SignOn() {
  return (
    <Tab.Navigator
    
      indicatorStyle={{
        backgroundColor: 'transparent',
      }}
      tabBarOptions={{
        labelStyle: {
          fontSize: 20,
          textTransform: 'capitalize',
          fontWeight: '300',
          marginBottom: 10,
        },
        contentContainerStyle: {
          justifyContent: 'space-around',
          marginHorizontal: 15,
        },
        tabStyle: {width: '100%'},
        style: {
          justifyContent: 'center',
          borderBottomColorWidth: 0,
        },
      }}>
      <Tab.Screen name="Login" component={SignIn} />
      <Tab.Screen name="Sign Up" component={SignUp} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    fontFamily: 'Montserrat',
  },
});
