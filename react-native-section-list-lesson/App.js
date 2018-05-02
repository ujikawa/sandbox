import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';

import imageUrl from './favicons.png';

const styles = StyleSheet.create({
  container: {
    flex: 1, // 画面いっぱいに広がる
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16,
  },
  section: {
    flexDirection: 'row', // 横に並べるようになる
    justifyContent: 'flex-start', // 親コンポーネント内の子コンポーネントの配置(縦軸の)を決める。中央から配置される
    height: 72,
    alignItems: 'center', // 子コンポーネントの配置(横軸の)を決める。真ん中に配置される
    borderBottomWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#DDDDDD',
  },
  image: {
    padding: 2,
    height: 32,
    width: 32,
    borderRadius: 16,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  text: {
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 16,
    color: '#212121',
  },
  url: {
    fontSize: 12,
    color: '#757575',
  },

});

const App = () => (
  <View style={styles.container}>
    <View style={styles.section}>
      <Image style={styles.image} source={imageUrl} />
      <View style={styles.text}>
        <Text style={styles.title}>Poney</Text>
        <Text style={styles.url}>https://www.poney.jp/</Text>
      </View>
    </View>
  </View>
);

export default App;
