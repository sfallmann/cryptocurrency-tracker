import React from 'react';
import { Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { setFilter } from '../../store/actions/creator';


const BaseCoinListFilter = (props) => { 
  const { isFilterShowing } = props;

  if (isFilterShowing) {
    return (
      <SearchBar
        placeholder='Enter filter value' 
        value={props.filter}
        onChangeText={props.setFilter}
        searchIcon={{ type: 'feather', name: 'filter' }}
      />
    );
  }
  return null;
};

const mapStateToProps = (state) => ({
    filter: state.filter,
    isFilterShowing: state.isFilterShowing,
});

const mapDispatchToProps = (dispatch) => ({
    setFilter: (updatedFilter) => dispatch(setFilter(updatedFilter))
});

const CoinListFilter = connect(mapStateToProps, mapDispatchToProps)(BaseCoinListFilter);
export { CoinListFilter };
