import * as React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import Message from './Message';
import CallHistory from './CallHistory';
import Wallet from './Wallet';
import ContactSupport from './ContactSupport';
import InviteFriends from './InviteFriends';
import drawerContentComponents from './drawerContentComponents'

const Drawer = createDrawerNavigator();
// const DashboardScreen = props => <Dashboard {...props} />;
export default function ProviderNavigator() {
  return (
    <Drawer.Navigator drawerContent={drawerContentComponents}>
      <Drawer.Screen name="DashboardScreen" component={Dashboard} />
      <Drawer.Screen name="Message" component={Message} />
      <Drawer.Screen name="CallHistory" component={CallHistory} />
      <Drawer.Screen name="Wallet" component={Wallet} />
      <Drawer.Screen name="ContactSupport" component={ContactSupport} />
      <Drawer.Screen name="InviteFriends" component={InviteFriends} />
    </Drawer.Navigator>
  );
}