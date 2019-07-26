import React from 'react';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { setFilter } from '../store/actions/creator';
 
const CoinListFilter = (props) => (
    <Input 
        placeholder='Enter filter value' 
        value={props.filter}
        onChangeText={props.setFilter}
        containerStyle={styles.container}
        inputContainerStyle={styles.inputContainer}
        leftIcon={{ type: 'feather', name: 'filter' }}
        leftIconContainerStyle={styles.leftIconContainer}
        autoCapitalize='none'
        autoCompleteType='off'
        autoCorrect={false}
    />
);

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
    filter: state.filter
});

const mapDispatchtoProps = (dispatch) => ({
    setFilter: (updatedFilter) => dispatch(setFilter(updatedFilter))
});

export default connect(mapStatetoProps, mapDispatchtoProps)(CoinListFilter);
