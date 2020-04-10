import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../../styles/colors'
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
export default function Dashboard({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View
            style={{
              margin: 20,
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableNativeFeedback onPress={() => navigation.openDrawer()}>
                <Icon name="menu" size={23} color={'#fff'} />
              </TouchableNativeFeedback>
              <Text
                style={{
                  fontSize: 18,
                  color: '#fff',
                  marginLeft: 15,
                  fontWeight: '400',
                }}>
                Dashboard
              </Text>
            </View>
            <TouchableNativeFeedback onPress={() => navigation.openDrawer()}>
              <Icon name="more-vert" size={23} color={'#fff'} />
            </TouchableNativeFeedback>
          </View>
        </View>
        <SearchBar
          round
          lightTheme
          containerStyle={{
            backgroundColor: 'transparent',
            marginTop: -35,
            borderWidth: 0,
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
          }}
          placeholder="Type Here..."
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    alignSelf: 'flex-start',
    height: 100,
    width: '100%',
    backgroundColor: color.main,
  },
  context: {
    margin: 5,
    padding: 5,
  },
});
