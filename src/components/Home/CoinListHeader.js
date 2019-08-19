import React from 'react';
import { Header } from 'react-native-elements';
import HeaderTitle from './HeaderTitle';

const CoinListHeader = () => (
    <Header 
      placement='left'
      leftComponent={<HeaderTitle />}
    />
  );

export { CoinListHeader };
