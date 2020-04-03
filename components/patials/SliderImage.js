import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

export default class SliderImage extends Component {
  render() {
    return (
      <>
        <View style={styles.contents}>
          <Image style={{width: 276, height: 280, }} source={this.props.Image} />
        </View>
        <Text style={styles.sliderText}>{this.props.sliderInnerText}</Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  sliderText: {
    color: '#1250F3',
    fontSize: 14,
    fontFamily: 'Montserrat',
    fontWeight: '400',
    textAlign: 'center',
    padding: 10,
  },
  contents: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
