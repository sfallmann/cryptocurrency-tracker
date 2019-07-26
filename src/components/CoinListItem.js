import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import icons from '../../assets/images/icons/128';

const formatPrice = (priceStr) => {
  let price = Number.parseFloat(priceStr);

  if (Number.isNaN(price)) return 'N/A';

  price = (Math.round(price * 1000)) / 1000;
  return price.toFixed(3);
}

const CoinListItem = ({ item }) => {

  const [isFavorite, toggleFavorite] = useState(false);
  
  const getIconName = (isFavorite) => {
    return isFavorite ? 'heart' : 'hearto';
  }

  const changeFavoriteStatus = () => {
    toggleFavorite(!isFavorite)
  }

  return (
    <TouchableOpacity>
      <ListItem
        title={item.name}
        subtitle={`Price: $ ${formatPrice(item.priceUsd)}`}
        leftAvatar={{ source: icons[item.symbol.toLowerCase()] }}
        containerStyle={styles.container}
        rightIcon={{ 
          name: getIconName(isFavorite), 
          type: 'antdesign', 
          onPress: changeFavoriteStatus, 
          size: 36,
          color: 'red',
        }}
      />
    </TouchableOpacity>
  );
}

const styles={
  container: {
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
  }
}

export default React.memo(CoinListItem);
