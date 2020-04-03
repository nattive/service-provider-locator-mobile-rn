import React, {Component} from 'react';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class WhiteRoundButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.btnText}>{this.props.signUpBtnText}</Text>
        {this.props.icon && <Text style={styles.icon}>{this.props.icon}</Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    paddingTop: 2,
    paddingBottom: 2,
    margin: 15,
    borderRadius: 50,
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative',
  },
  btnText: {
    fontFamily: 'Montserrat',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 50,
  },
});
