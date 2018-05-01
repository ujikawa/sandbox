import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';

import imageUrl from './poney.png';

const styles = StyleSheet.create({
  container: {
    flex: 1, // 画面いっぱいに広がる
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  section: {
    flexDirection: 'row', // 横に並べるようになる
    justifyContent: 'flex-start', // 親コンポーネント内の子コンポーネントの配置(縦軸の)を決める。中央から配置される
    alignItems: 'center', // 子コンポーネントの配置(横軸の)を決める。真ん中に配置される
    margin: 5,
    backgroundColor: 'white',
    borderBottomWidth: 1,
  },
  image: {
    margin: 5,
  },
  text: {
    fontSize: 16,
  },
});

const App = () => (
  <View style={styles.container}>
    <View style={styles.section}>
      <Image style={styles.image} source={imageUrl} />
      <Text style={styles.text}>test</Text>
    </View>
  </View>
);

export default App;
