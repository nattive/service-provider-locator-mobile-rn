import * as React from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Button} from 'react-native';
import {Input, Divider} from 'react-native-elements';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import SmallRoundButton from '../../buttons/SmallRoundButton';
import {useNavigation} from '@react-navigation/native';

export default function RegisterUsers() {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView containerStyle={styles.container}>
          <Divider color="#8F8F8F" />
          <View style={styles.content}>
            <Input
              containerStyle={{margin: 10}}
              label="First Name"
              autoCompleteType="name"
              placeholder="egJohn & Doe Ltd"
            />
            <Input
              containerStyle={{margin: 10}}
              label="Last Name"
              autoCompleteType="name"
              placeholder="egJohn & Doe Ltd"
            />
            <Input
              containerStyle={{margin: 10}}
              label="Address"
              autoCompleteType="street-address"
              placeholder="18a Kingstone Arena"
            />
            <Input
              containerStyle={{margin: 10}}
              label="Phone Number"
              autoCompleteType="tel"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.Buttons}>
            <SmallRoundButton
              title="Back"
              color="#fff"
              style={styles.backBtn}
              backgroundColor="#53D3FF"
            />
            <SmallRoundButton
              title="Next"
              onPress={() => navigation.navigate('UserProfileUpdateScreen')}
              color="#53D3FF"
              style={styles.backBtn}
              borderWidth={1}
              borderColor="#020049"
              backgroundColor="white"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
  },
  container: {
    backgroundColor: '#F4F4F5',
    flex: 1,
    alignItems: 'center',
    padding: 15
  },
  Buttons: {
    marginTop: 20,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  content: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    margin: 0,
    marginVertical: 0,
  },
  header: {
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    color: '#8F8F8F',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    fontSize: 16,
    margin: 0,
  },
});
