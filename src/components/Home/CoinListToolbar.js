import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { toggleFilterVisibility } from '../../store/actions/creator';

const BaseCoinListToolbar = (props) => (
    <View style={styles.toolbarContainer}>
      <TouchableOpacity
        onPress={props.toggleFilter}
      >
        <Feather
          name='filter'
          color={props.filter ? 'lightgreen' : 'black'} 
          size={24} 
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name='sort' color='black' size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name='user' color='black' size={24} />
      </TouchableOpacity>
    </View>
  );

const styles = StyleSheet.create({
  toolbarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});

const mapStateToProps = ({ coinlist: { isFilterShowing, filter } }) => ({
  isFilterShowing,
  filter,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFilter: () => dispatch(toggleFilterVisibility())
});


const CoinListToolbar = connect(mapStateToProps, mapDispatchToProps)(BaseCoinListToolbar);
export { CoinListToolbar };
