import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text } from 'react-native';
import CoinListItem from './CoinListItem';
//import coinlist from './list';
import * as actions from '../store/actions/creator';

// const priceSortedList = () => coinlist.sort((a, b) => {
//     const aVal = Number.parseFloat(a.priceUsd);
//     const bVal = Number.parseFloat(b.priceUsd);
//     return bVal - aVal;
//   });

class CoinList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.keyExtractor = this.keyExtractor.bind(this);
  // }

  // keyExtractor(item) { return item.id.toString(); }  
  componentDidMount() {
    this.props.fetchCoins();
  }

/*   filteredList() {
    return this.props.list.filter((item) => {
      return item.name.indexOf(this.props.filter) >= 0;
    });
  } */
  filteredList() {
    const filterFn = item => item.name.toLowerCase().includes(this.props.filter.toLowerCase());
    return this.props.list.filter(filterFn);
  }
  
  keyExtractor = (item) => item.id.toString()

  renderItem = ({ item }) => (<CoinListItem item={item} />)

  renderList() {
    const filteredList = this.filteredList();

    if (filteredList.length) {
      return (
        <FlatList
            keyExtractor={this.keyExtractor}
            data={filteredList} // data={this.props.list} 
            renderItem={this.renderItem}
        />
      );      
    }
    
    return <Text>No items to display</Text>;
  }

  render() {
    return this.renderList();
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
  ({ list, hasError, isLoading, filter }) => ({ list, hasError, isLoading, filter });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchCoins: () => { dispatch(actions.fetchCoins()); }
//   };
// };

const mapDispatchToProps = dispatch => ({ fetchCoins: () => dispatch(actions.fetchCoins()) });

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
