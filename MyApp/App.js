import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Button,
} from 'react-native';
import {PagerTabIndicator, IndicatorViewPager} from 'rn-viewpager';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listpage:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  editpage:{
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
  static STORAGE_KEY = '@BookmarkApp:urls'
  
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      urls: [],
    };
  }

  async componentDidMount() {
    let json = await AsyncStorage.getItem(App.STORAGE_KEY)

    if(json != null) {
      let urls = JSON.parse(json);
      this.setState({
        urls: urls,
      })
    }
  }

  _addItem() {
    let urls = this.state.urls;
    let text = this.state.text;

    urls.push({key: Date.now(), value: text});
    this.setState({
      text: '',
      urls: urls,
    });
    AsyncStorage.setItem(App.STORAGE_KEY, JSON.stringify(urls));
  }

  _onChange(text) {
    this.setState({text: text});
  }

  _clear() {
    AsyncStorage.setItem(App.STORAGE_KEY, JSON.stringify([]));
  }
  render() {
    return (
      <View style={styles.container}>
        <IndicatorViewPager
          style={{flex:1, paddingTop:20, backgroundColor:'white'}}
          indicator={this._renderTabIndicator()}
        >
          <View style={styles.listpage}>
            <FlatList data={this.state.urls} renderItem={this._renderItem} />
            <Button
              onPress={() => {
                this._clear();
              }}
              title="クリア"
            />

          </View>
          <View style={styles.editpage}>
            <TextInput
              style={styles.input}
              onChangeText={this._onChange.bind(this)}
              placeholder="ブックマークしたいURLを入力"
            />
            <Button
              onPress={() => {
                this._addItem();
              }}
              title="登録"
            />
          </View>
        </IndicatorViewPager>
      </View>
    );
  }

  _renderItem = data => <Text style={styles.row}>{data.item.value}</Text>;

  _renderTabIndicator() {
    let tabs = [{
            text: 'ブックマークリスト',
            iconSource: require('./imgs/bookmark.png'),
            selectedIconSource: require('./imgs/bookmark.png')
        },{
            text: '新規登録',
            iconSource: require('./imgs/register.png'),
            selectedIconSource: require('./imgs/register.png')
        }];
    return <PagerTabIndicator tabs={tabs} />;
  }

}
