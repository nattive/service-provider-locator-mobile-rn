import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Input, Divider, CheckBox, Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import style from '../SignUp';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SmallRoundButton from '../../buttons/SmallRoundButton';
export default function UserProfileUpdate({navigate}) {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={{backgroundColor: '#fff'}}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'height' : null}>
            <ScrollView style={{margin: 20}}>
              <View style={(style.SignInContainer, {padding: 0})}>
                <View
                  style={{
                    marginBottom: 20,
                    flex: 1,
                    height: 50,
                    flexDirection: 'row',
                    alignContent: 'center',
                  }}>
                  <Avatar
                    height={500}
                    icon={{name: 'camera', type: 'font-awesome'}}
                    onPress={() => console.log('Works!')}
                    activeOpacity={0.7}
                    containerStyle={{flex: 5, height: '100%'}}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      margin: 10,
                      padding: 10,
                      fontFamily: 'Montserrat',
                      color: '#020049',
                      fontWeight: 'bold',
                    }}>
                    Upload profile image
                  </Text>
                </View>
                <Divider />
                <Text
                  style={{
                    fontSize: 16,
                    margin: 10,
                    fontFamily: 'Montserrat',
                    color: '#020049',
                    fontWeight: 'bold',
                  }}>
                  Upload Shop Catalog
                </Text>

                <Avatar
                  height={500}
                  icon={{name: 'plus', type: 'font-awesome'}}
                  onPress={() => console.log('Works!')}
                  activeOpacity={0.7}
                  containerStyle={{margin: 10}}
                />
                <Divider />
                <Text
                  style={{
                    fontSize: 16,
                    margin: 10,
                    fontFamily: 'Montserrat',
                    color: '#020049',
                    fontWeight: 'bold',
                  }}>
                  Provider's Short business description
                </Text>
                <Input
                  label="Shop description"
                  placeholder="eg example@xyz.co"
                  multiline={true}
                />
                <Input label="Status" />
                <View style={styles.Buttons}>
                  <SmallRoundButton
                    title="Back"
                    color="#fff"
                    style={styles.backBtn}
                    backgroundColor="#53D3FF"
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                  <SmallRoundButton
                    title="Save"
                    onPress={() => navigation.navigate('ProviderNavigator')}
                    color="#53D3FF"
                    style={styles.backBtn}
                    borderWidth={1}
                    borderColor="#020049"
                    backgroundColor="white"
                  />
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    flex: 1,
    flexDirection: 'column'
  },
  container: {
    backgroundColor: '#F4F4F5',
    flex: 1,
    position: 'absolute',
    bottom: 0
  },
  Buttons: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    marginTop: 10,
  },
});
