import React from 'react';
import { ListItem } from 'react-native-elements';
import icons from '../../assets/images/icons/128';

const CoinListItem = ({ item }) => (
  <ListItem
    title={item.name}
    subtitle={`Price: $${item.priceUsd}`}
    leftAvatar={{ source: icons[item.symbol.toLowerCase()] }}
  />
);

export default React.memo(CoinListItem);
