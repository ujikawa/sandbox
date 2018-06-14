import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';


export default class App extends React.Component {
  render() {
    let UID123_object = {
      name: 'Chris',
      age: 30,
      traits: {hair: 'brown', eyes: 'brown'},
     };
     // You only need to define what will be added or updated
     let UID123_delta = {
      age: 31,
      traits: {eyes: 'blue', shoe_size: 10}
     };
     
     AsyncStorage.setItem('UID123', JSON.stringify(UID123_object), () => {
       AsyncStorage.mergeItem('UID123', JSON.stringify(UID123_delta), () => {
         AsyncStorage.getItem('UID123', (err, result) => {
           console.log(result);
           //I/ReactNativeJS( 1826): {"name":"Chris","age":31,"traits":{"hair":"brown","eyes":"blue","shoe_size":10}}
         });
       });
     });

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
