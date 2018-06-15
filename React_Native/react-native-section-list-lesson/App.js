import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';

import imageUrl from './screen.png';
import imageUrl2 from './mark.png';

const styles = StyleSheet.create({
  container: {
    flex: 1, // 画面いっぱいに広がる
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
    paddingLeft: 12,
    paddingRight: 12,
  },
  section: {
    flexDirection: 'row', // 横に並べるようになる
    justifyContent: 'flex-start', // 親コンポーネント内の子コンポーネントの配置(縦軸の)を決める。中央から配置される
    height: 56,
    alignItems: 'center', // 子コンポーネントの配置(横軸の)を決める。真ん中に配置される
    borderBottomWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#DDDDDD',
  },
  image: {
    padding: 2,
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  image2: {
    height: 16,
    width: 16,
  },
  text: {
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
  },
  url: {
    fontSize: 12,
    color: '#757575',
  },
  mark: {
  },
  section2: {
    flex: 1,
    flexDirection: 'row', // 横に並べるようになる
    justifyContent: 'space-between',
    alignItems: 'center', // 子コンポーネントの配置(横軸の)を決める。真ん中に配置される
  },
});

const App = () => (
  <View style={styles.container}>
    <View style={styles.section}>
      <Image style={styles.image} source={imageUrl} />
      <View style={styles.section2}>
        <View style={styles.text}>
          <Text style={styles.title}>Poney</Text>
          <Text style={styles.url}>https://www.poney.jp/</Text>
        </View>
        <Image style={styles.image2} source={imageUrl2} />
      </View>
    </View>
  </View>
);

export default App;
