import React, {Component} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class WhiteRoundButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <View style={styles.btnView}>
          <Text style={styles.btnText}>{this.props.signUpBtnText}</Text>
          {this.props.Icon && (
            <Text style={styles.icon}>{this.props.Icon}</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btnView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 50,
    paddingVertical: '3%',
    margin: 10,
    elevation: 4,
  },
  btnText: {
    fontFamily: 'Montserrat',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 50,
  },
});
