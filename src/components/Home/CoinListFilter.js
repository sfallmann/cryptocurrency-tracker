import React from 'react';
import { Input, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { setFilter } from '../../store/actions/creator';
 
const _CoinListFilter = (props) => 
  props.isFilterShowing
    ? (<SearchBar
        placeholder='Enter filter value' 
        value={props.filter}
        onChangeText={props.setFilter}
        searchIcon={{ type: 'feather', name: 'filter' }}
    />)
    : null;


const styles = {
  container: {
    backgroundColor: '#2089dc',
    padding: 10,
  },
  inputContainer: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  leftIconContainer: {
    marginRight: 15,
  }
}

const mapStatetoProps = (state) => ({
    filter: state.filter,
    isFilterShowing: state.isFilterShowing,
});

const mapDispatchtoProps = (dispatch) => ({
    setFilter: (updatedFilter) => dispatch(setFilter(updatedFilter))
});

const CoinListFilter = connect(mapStatetoProps, mapDispatchtoProps)(_CoinListFilter);
export { CoinListFilter };
