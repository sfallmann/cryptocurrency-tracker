import React from 'react';
import { Header} from 'react-native-elements';
import HeaderTitle from './HeaderTitle';
import CoinListToolbar from './CoinListToolbar';

const CoinListHeader = (props) => {
  return (
    <Header 
      placement='left'
      leftComponent={<HeaderTitle/>}
      rightComponent={<CoinListToolbar/>}
    />
  );
}

export { CoinListHeader };
