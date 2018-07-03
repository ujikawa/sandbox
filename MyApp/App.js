import React, { Component } from 'react';
import {
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
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { key: 'a' },
        { key: 'b' },
        { key: 'c' },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <IndicatorViewPager
          style={{flex:1, paddingTop:20, backgroundColor:'white'}}
          indicator={this._renderTabIndicator()}
        >
          <View style={styles.listpage}>
            <FlatList data={this.state.data} renderItem={this._renderItem} />
          </View>
          <View style={styles.editpage}>
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
        </IndicatorViewPager>
      </View>
    );
  }

  _renderItem = data => <Text style={styles.row}>{data.item.key}</Text>;

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
