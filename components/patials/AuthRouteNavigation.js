import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {fromLeft} from 'react-navigation-transitions';

import Slider from '../Slider';
import SignUp from '../Screens/SignUp';
import SignOn from '../Screens/SignOn';
import SignIn from '../Screens/SignIn';
import RegisterServiceProvider from '../Screens/Providers/RegisterServiceProvider';
import UserProfileUpdate from '../Screens/Providers/UserProfileUpdate';
import ProviderNavigator from '../Screens/Providers/ProviderNavigator';
import RegisterUsers from '../Screens/Users/RegisterUsers';
import Welcome from '../Welcome';
import colors from '../styles//colors'
//authRouteNavigation

/**
 * Screens declaration
 */

const SliderScreen = () => <Slider />;
const SignUpScreen = () => <SignUp />;
const SignOnScreen = () => <SignOn />;
const SignInScreen = () => <SignIn />;
const WelcomeScreen = () => <Welcome />;
const RegisterUsersScreen = () => <RegisterUsers />;
const ProviderNavigatorController = () => <ProviderNavigator />;
const UserProfileUpdateScreen = () => <UserProfileUpdate />;
const RegisterServiceProviderScreen = () => <RegisterServiceProvider />;

/**
 * End of screen declaration
 */

const Stack = createStackNavigator();
export default function AuthRouteNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
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
          options={{
            headerTitle: 'Register',
            headerStyle: {
              backgroundColor: colors.main,
            },
          }}
        />
        <Stack.Screen
          name="RegisterUsersScreenScreen"
          component={RegisterUsersScreen}
          options={{
            headerTintColor: '#fff',
            headerTitle: 'Register',
            headerStyle: {
              backgroundColor: colors.main,
            },
            
           headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff'
          },
          }}
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
