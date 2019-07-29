import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { toggleFilterVisibility } from '../../store/actions/creator';

const CoinListToolbar = (props) => {

  return (
    <View style={styles.toolbarContainer}>
      <TouchableOpacity
        onPress={props.toggleFilter}
      >
        <Feather
          name='filter'
          color={props.filter ? 'lightgreen' : 'white' } 
          size={35} 
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name='sort' color='white' size={35}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name='user' color='white' size={35} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:  'space-evenly'
  }
});

const mapStatetoProps = (state) => ({
  isFilterShowing: state.isFilterShowing,
  filter: state.filter,
});

const mapDispatchtoProps = (dispatch, ownProps) => ({
  toggleFilter: () => dispatch(toggleFilterVisibility())
});


export default connect(mapStatetoProps, mapDispatchtoProps)(CoinListToolbar);
