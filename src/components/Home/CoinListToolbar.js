import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { toggleFilterVisibility } from '../../store/actions/creator';

const CoinListToolbar = (props) => {

  return (
    <View style={styles.toolbarContainer}>
      <Feather
        name='filter'
        color={props.isFilterShowing ? 'lightgreen' : 'white' } 
        size={32} 
        onPress={props.toggleFilter}/>
      <MaterialIcons name='sort' color='white' size={24}/>
      <Feather name='user' color='white' size={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  toolbarContainer: {
    flex: 1,
    flexDirection: 'row',
    width: 100,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

const mapStatetoProps = (state) => ({
  isFilterShowing: state.isFilterShowing,
});

const mapDispatchtoProps = (dispatch, ownProps) => ({
  toggleFilter: () => dispatch(toggleFilterVisibility())
});


export default connect(mapStatetoProps, mapDispatchtoProps)(CoinListToolbar);
