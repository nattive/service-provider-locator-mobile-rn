import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
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
            <TouchableNativeFeedback onPress={() => navigation.openDrawer()}>
              <Icon name="navicon" size={23} color={'#fff'} />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => navigation.openDrawer()}>
              <Icon name="ellipsis-v" size={23} color={'#fff'} />
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
    backgroundColor: '#1250F3',
  },
  context: {
    margin: 5,
    padding: 5,
  },
});
