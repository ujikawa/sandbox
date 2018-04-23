import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
});

class SimpleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { key: 'a' },
        { key: 'b' },
        { key: 'c' },
        { key: 'd' },
        { key: 'a longer example' },
        { key: 'e' },
        { key: 'f' },
        { key: 'g' },
        { key: 'h' },
        { key: 'i' },
        { key: 'j' },
        { key: 'k' },
        { key: 'l' },
        { key: 'm' },
        { key: 'n' },
        { key: 'o' },
        { key: 'p' },
      ],
    };
  }

  renderItem = data => <Text style={styles.row}>{data.item.key}</Text>;

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data} renderItem={this.renderItem} />
      </View>
    );
  }
}

export default SimpleList;
