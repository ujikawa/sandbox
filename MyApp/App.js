import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  TextInput,
  View,
  FlatList,
  Button,
} from 'react-native';
import { PagerTabIndicator, IndicatorViewPager } from 'rn-viewpager';
import Row from './Row';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listpage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  editpage: {
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
  row: {
    margin: 2,
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
    const json = await AsyncStorage.getItem(App.STORAGE_KEY);

    if (json != null) {
      const urls = JSON.parse(json);
      this.setState( {
        urls: urls,
      });
    }
  }

  _addItem() {
    const urls = this.state.urls;
    const text = this.state.text;

    urls.push({ key: Date.now(), value: text });
    this.setState({
      text: '',
      urls: urls,
    });
    AsyncStorage.setItem(App.STORAGE_KEY, JSON.stringify(urls));
  }

  _onChange(text) {
    this.setState({ text: text });
  }

  _clear() {
    AsyncStorage.setItem(App.STORAGE_KEY, JSON.stringify([]));
  }

  _renderItem = data => <Row text={data.item.value} />

  _renderTabIndicator() {
    let tabs = [{
            text: 'Bookmark',
            iconSource: require('./imgs/bookmark.png'),
            selectedIconSource: require('./imgs/bookmark.png')
        },{
            text: 'Add',
            iconSource: require('./imgs/register.png'),
            selectedIconSource: require('./imgs/register.png')
        }];
    return <PagerTabIndicator tabs={tabs} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <IndicatorViewPager
          style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}
          indicator={this._renderTabIndicator()}
        >
          <View style={styles.listpage}>
            <FlatList data={this.state.urls} extraData={this.state.text.length} renderItem={this._renderItem} />
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

}
