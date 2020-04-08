import React, {Component} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class SmallRoundButton extends Component {
  render() {
    return (
      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          borderRadius: 50,
          paddingHorizontal: 15,
          paddingVertical: 10,
          margin: 10,
          elevation: 4,
          width: '30%',
          fontWeight: 'Bold',
          borderStyle: 'solid',
          borderWidth: this.props.borderWidth,
          borderColor: this.props.borderColor ? this.props.borderColor : 'none',
          backgroundColor: this.props.backgroundColor ?? '#fff',
        }}
        onPress={this.props.onPress}>
        <View style={styles.btnView}>
          <Text style={styles.btnText}>{this.props.title}</Text>
          {this.props.Icon && (
            <Text
              style={{
                fontFamily: 'Montserrat',
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 'bold',
                color: this.props.color,
              }}>
              {this.props.Icon}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btnView: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 50,
  },
});
