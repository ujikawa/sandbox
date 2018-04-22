import React from 'react';
import {
  StyleSheet,
  Button,
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

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>test</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
);

const DetailsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Details Screen</Text>
    <Button
      title="Go to Details... again"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
);


const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Home',
      },
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        headerTitle: 'Detail',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const App = () => (
  <RootStack />
);

export default App;
