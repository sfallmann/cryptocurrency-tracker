import React from 'react';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { setFilter } from '../../store/actions/creator';


const BaseCoinListFilter = (props) => { 
  const { isFilterShowing } = props;

  if (isFilterShowing) {
    return (
      <SearchBar
        containerStyle={styles.containerStyle}
        placeholder='Enter filter value' 
        value={props.filter}
        onChangeText={props.setFilter}
        searchIcon={{ type: 'feather', name: 'filter' }}
      />
    );
  }
  return null;
};

const styles = {
  containerStyle: {
    position: 'absolute',
    width: '100%',
    bottom: 45,
    zIndex: 10,
  }
};

const mapStateToProps = ({ coinlist: { filter, isFilterShowing } }) => ({
    filter,
    isFilterShowing,
});

const mapDispatchToProps = (dispatch) => ({
    setFilter: (updatedFilter) => dispatch(setFilter(updatedFilter))
});

const CoinListFilter = connect(mapStateToProps, mapDispatchToProps)(BaseCoinListFilter);
export { CoinListFilter };
