import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const App = () => (
  <View style={styles.container}>
    <Text>test</Text>
  </View>
);

export default App;
