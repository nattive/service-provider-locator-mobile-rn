import React, {Component} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Text, View, StyleSheet, ImageBackground, Image} from 'react-native';
import {white} from 'ansi-colors';
import {Divider, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

navigateToScreen = route => props => {
  const navigateAction = NavigationActions.navigate({
    routeName: route,
  });
  props.navigation.dispatch(navigateAction);
};
export default function drawerContentComponents({navigation}) {
  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignContent: 'center',
            margin: 10,
            marginTop: 30,
          }}>
          <Image
            source={require('../../../assets/images/avatar.png')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              marginHorizontal: 10,
            }}
          />
          <View>
            <Text
              style={{
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                fontSize: 25,
                color: '#1250F3',
              }}>
              John Doe
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat',
                color: '#8F8F8F',
                fontWeight: '600',
              }}>
              Business Name
            </Text>
          </View>
        </View>
      </View>
      <View style={{margin: 5}}>
        <DrawerItem
          label={() => <Text style={styles.screenTextStyle}>Home</Text>}
          icon={focus => (
            <Icon name={focus ? 'home' : 'house'} size={20} color={'#1250F3'} />
          )}
        />
        <Divider />
        <DrawerItem
          label={() => <Text style={styles.screenTextStyle}>Message</Text>}
          icon={() => <Icon name="inbox" size={18} color={'#1250F3'} />}
        />
        <Divider />
        <DrawerItem
          label={() => <Text style={styles.screenTextStyle}>Call</Text>}
          icon={() => <Icon name="phone" size={18} color={'#1250F3'} />}
        />
        <Divider />
        <DrawerItem
          label={() => <Text style={styles.screenTextStyle}>Wallet</Text>}
          icon={() => <Icon name="money" size={18} color={'#1250F3'} />}
        />
        <Divider />
        <DrawerItem
          label={() => (
            <Text style={styles.screenTextStyle}>Contact Support</Text>
          )}
          icon={() => <Icon name="support" size={18} color={'#1250F3'} />}
        />
        <Divider />
        <DrawerItem
          label={() => (
            <Text style={styles.screenTextStyle}>Invite Friends</Text>
          )}
          icon={() => <Icon name="share" size={18} color={'#1250F3'} />}
        />
        <Divider />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 0,
  },
  headerContainer: {
    height: 150,
    flex: 1,
    width: 280,
    justifyContent: 'center',
    borderBottomColor: '#70707044',
    // backgroundColor: '#1250F3',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 0,
  },
  headerText: {
    color: '#fff8f8',
  },
  screenContainer: {
    paddingTop: 20,
    width: '100%',
  },
  screenStyle: {
    height: 30,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  screenTextStyle: {
    fontSize: 12,
    textAlign: 'left',
    color: '#1250F3',
  },
  selectedTextStyle: {
    fontWeight: 'bold',
    color: '#00adff',
  },
  activeBackgroundColor: {
    backgroundColor: 'grey',
  },
});
