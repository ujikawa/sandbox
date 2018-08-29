import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Linking, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: 'relative',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default class Row extends Component {
  onPress = (url) => {
    Linking.openURL(url);
  }

  render() {
    return (
      <View style={styles.header}>
        <TouchableHighlight onPress={() => this.onPress(this.props.text)}>
          <Text style={styles.headerText}>{this.props.text}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
