import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import {PagerTabIndicator, IndicatorViewPager} from 'rn-viewpager';

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  render() {
    return (
      <View style={styles.container}>
        <IndicatorViewPager
          style={{flex:1, paddingTop:20, backgroundColor:'white'}}
          indicator={this._renderTabIndicator()}
        >
          <View style={{backgroundColor:'cadetblue'}}>
            <Text>page one</Text>
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

  _renderTabIndicator() {
    let tabs = [{
            text: 'ブックマークリスト',
            iconSource: require('./imgs/ic_tab.png'),
            selectedIconSource: require('./imgs/ic_tab.png')
        },{
            text: '新規登録',
            iconSource: require('./imgs/ic_tab.png'),
            selectedIconSource: require('./imgs/ic_tab.png')
        }];
    return <PagerTabIndicator tabs={tabs} />;
  }

}
