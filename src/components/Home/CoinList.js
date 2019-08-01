import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Dimensions } from 'react-native';
import CoinListItem from './CoinListItem';
import NoCoins from './NoCoins';
import * as actions from '../../store/actions/creator';

// const priceSortedList = () => coinlist.sort((a, b) => {
//     const aVal = Number.parseFloat(a.priceUsd);
//     const bVal = Number.parseFloat(b.priceUsd);
//     return bVal - aVal;
//   });

class BaseCoinList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.keyExtractor = this.keyExtractor.bind(this);
  // }
  // keyExtractor(item) { return item.id.toString(); }  
  componentDidMount() {
    this.props.fetchCoins();
  }

  screenHeight = Dimensions.get('screen').height;
  
  height() {
        return this.screenHeight - (this.screenHeight * 0.2);
  }

  mockFavorites = ['BTC', 'ETH', 'TOMO'];
  /*   
    filteredList() {
      return this.props.list.filter((item) => {
        return item.name.indexOf(this.props.filter) >= 0;
      });
    } 
  */

  sortFn(a, b) {
    const aPrice = Number.parseFloat(a.priceUsd);
    const bPrice = Number.parseFloat(b.priceUsd);

    return bPrice - aPrice;
  }

  filteredList() {
    const filterFn = item => item.name.toLowerCase().includes(this.props.filter.toLowerCase());
    return this.props.list.filter(filterFn).sort(this.sortFn);
  }
  
  keyExtractor = (item) => item.id.toString()

  renderItem = ({ item }) => {
    const favorite = this.mockFavorites.includes(item.symbol);

    return (<CoinListItem item={item} favorite={favorite} />);
  }

  render() {
    return (
      <FlatList
        style={{ height: this.height() }}
        keyExtractor={this.keyExtractor}
        data={this.filteredList()} // data={this.props.list} 
        renderItem={this.renderItem}
        ListEmptyComponent={<NoCoins />}
      />      
    );
  }
/*   render() {
    return (
      <FlatList
          keyExtractor={this.keyExtractor}
          data={this.filteredList()} // data={this.props.list} 
          renderItem={this.renderItem}
      />
    );
  } */
}

/* const mapStateToProps = (state) => {
  return {
    list: state.list,
    hasError: state.hasError,
    isLoading: state.isLoading
  };
}; */
const mapStateToProps = 
  ({ coinlist: { list, hasError, isLoading, filter } }) => ({ list, hasError, isLoading, filter });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchCoins: () => { dispatch(actions.fetchCoins()); }
//   };
// };

const mapDispatchToProps = dispatch => ({ fetchCoins: () => dispatch(actions.fetchCoins()) });
const CoinList = connect(mapStateToProps, mapDispatchToProps)(BaseCoinList);

export { CoinList };
