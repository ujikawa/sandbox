import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: 350,
    fontSize: 16,
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
            // URLを追加する処理
          }}
          title="登録"
        />
      </View>
    );
  }
}
