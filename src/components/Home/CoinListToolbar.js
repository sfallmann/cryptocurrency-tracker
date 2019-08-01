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
          color={props.filter ? 'lightgreen' : 'white'} 
          size={24} 
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name='sort' color='white' size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name='user' color='white' size={24} />
      </TouchableOpacity>
    </View>
  );

const styles = StyleSheet.create({
  toolbarContainer: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 5,
    paddingBottom: 5 
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
