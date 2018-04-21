import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const AppScreen = () => (
  <View style={styles.container}>
    <Text>test</Text>
  </View>
);

export default StackNavigator({
  App: {
    screen: AppScreen,
  },
});
