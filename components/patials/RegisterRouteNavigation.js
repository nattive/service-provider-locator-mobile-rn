import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserProfileUpdate from '../Screens/Providers/UserProfileUpdate';
import RegisterServiceProvider from '../Screens/Providers/RegisterServiceProvider';

const UserProfileUpdateScreen = () => <UserProfileUpdate />;
const RegisterServiceScreen = () => (
  <RegisterServiceProvider nextScreen={UserProfileUpdateScreen} />
);
const Stack = createStackNavigator();
export default function RegisterRouteNavigation() {
  return (
    <Stack.Navigator initialRouteName="RegisterServiceScreen">
      <Stack.Screen
        name="SignOnScreen"
        component={RegisterServiceScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfileUpdateScreen"
        component={UserProfileUpdateScreen}
        options={{headerTitle: 'Register >> Service Provider'}}
        // options={{headerShown: false}}
        //   options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
