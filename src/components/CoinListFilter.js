import React from 'react';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { setFilter } from '../store/actions/creator';
 
const CoinListFilter = (props) => (
    <Input 
        placeholder='Enter filter value' 
        value={props.filter}
        onChangeText={props.setFilter}
    />
);

const mapStatetoProps = (state) => ({
    filter: state.filter
});

const mapDispatchtoProps = (dispatch) => ({
    setFilter: (updatedFilter) => dispatch(setFilter(updatedFilter))
});

export default connect(mapStatetoProps, mapDispatchtoProps)(CoinListFilter);
