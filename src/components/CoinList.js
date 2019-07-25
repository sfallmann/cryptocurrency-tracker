import React, { Component } from 'react';
import { FlatList } from 'react-native';
import CoinListItem from './CoinListItem';
import coinlist from './list';

const priceSortedList = () => coinlist.sort((a, b) => {
    const aVal = Number.parseFloat(a.priceUsd);
    const bVal = Number.parseFloat(b.priceUsd);
    return bVal - aVal;
  });

export default class CoinList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.keyExtractor = this.keyExtractor.bind(this);
  // }

  // keyExtractor(item) { return item.id.toString(); }  

  keyExtractor = (item) => item.id.toString();
  renderItem = ({ item }) => (<CoinListItem item={item} />)
  
  render() {
    return (
      <FlatList
          keyExtractor={this.keyExtractor}
          data={priceSortedList()}
          renderItem={this.renderItem}
      />
    );
  }
}
