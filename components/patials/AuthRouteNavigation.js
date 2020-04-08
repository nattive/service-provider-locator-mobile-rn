import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {fromLeft} from 'react-navigation-transitions';

import Slider from '../Slider';
import SignUp from '../SignUp';
import SignOn from '../SignOn';
import SignIn from '../SignIn';
import RegisterServiceProvider from '../RegisterServiceProvider';
import UserProfileUpdate from '../UserProfileUpdate';
import ProviderNavigator from '../ProviderNavigator'

//authRouteNavigation

/**
 * Screens declaration
 */

const SliderScreen = () => <Slider />;
const SignUpScreen = () => <SignUp />;
const SignOnScreen = () => <SignOn />;
const SignInScreen = () => <SignIn />;
const ProviderNavigatorController = () => <ProviderNavigator />
const UserProfileUpdateScreen = () => <UserProfileUpdate />;
const RegisterServiceProviderScreen = () => <RegisterServiceProvider />;

/**
 * End of screen declaration
 */

const Stack = createStackNavigator();
export default function AuthRouteNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterServiceScreen">
        <Stack.Screen
          name="SliderScreenScreen"
          component={SliderScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreenScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignOnScreenScreen"
          component={SignOnScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterServiceProviderScreen"
          component={RegisterServiceProviderScreen}
          options={{headerTitle: 'Register'}}
        />
        <Stack.Screen
          name="SignInScreenScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserProfileUpdateScreen"
          component={UserProfileUpdateScreen}
          options={{headerTitle: 'Update Profile Details'}}
        />
        <Stack.Screen
          name="ProviderNavigator"
          component={ProviderNavigatorController}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
