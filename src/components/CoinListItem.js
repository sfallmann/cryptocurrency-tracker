import React, { PureComponent } from 'react';
import { ListItem } from 'react-native-elements';
import icons from '../../assets/images/icons/128';

export default class CoinListItem extends PureComponent {

  render() {
    const { item } = this.props;
    return (
      <ListItem
        title={item.name}
        subtitle={`Price: $${item.priceUsd}`}
        leftAvatar={{ source: icons[item.symbol.toLowerCase()] }}
      />
    );
  }
}
