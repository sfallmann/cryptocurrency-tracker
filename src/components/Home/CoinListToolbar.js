import React from 'react';
import { View } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';


const CoinListToolbar = (props) => (
  <View>
    <Feather name='filter' />
    <MaterialIcons name='sort'/>
  </View>
);

export default CoinListToolbar;
