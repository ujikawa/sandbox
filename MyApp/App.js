import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="ブックマークしたいURLを入力"
        />
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="登録"
        />
      </View>
    );
  }
}
