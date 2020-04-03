import React, {Component} from 'react';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class WhiteRoundButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>{this.props.signUpBtnText}</Text>
        {this.props.icon && <Text style={styles.icon}>{this.props.icon}</Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    margin: 10,
    borderRadius: 50,
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
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
