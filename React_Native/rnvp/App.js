import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {PagerTabIndicator, IndicatorViewPager} from 'rn-viewpager';

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
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
