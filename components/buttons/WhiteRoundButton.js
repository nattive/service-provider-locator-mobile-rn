import React, {Component} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../styles/colors';
import {TouchableHighlight} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

export default class WhiteRoundButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={{
          alignContent: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          borderRadius: 40,
          paddingVertical: 12,
          elevation: 4,
          marginVertical: 5,
          width: '100%',
          borderColor: this.props.borderColor || 'white',
          borderWidth: 1,
          borderStyle: this.props.border && 'solid',
          backgroundColor: this.props.backgroundColor || 'white',
        }}
        onPress={this.props.onPress}>
        <View style={styles.btnView}>
          <Text
            style={{
              fontFamily: 'Montserrat',
              textAlign: 'center',
              fontSize: 14,
              fontWeight: '600',
              color: this.props.color || colors.main,
            }}>
            {this.props.signUpBtnText}
          </Text>
          {this.props.Icon && (
            <Text style={styles.icon}>{this.props.Icon}</Text>
          )}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  btnView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
   marginLeft: 20
  }
});

WhiteRoundButton.PropTypes = {
  borderColor: PropTypes.string,
  border: PropTypes.bool,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
  color: PropTypes.string,
  signUpBtnText: PropTypes.string,
  Icon: PropTypes.element,
};


