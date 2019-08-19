import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CoinList, CoinListFilter, CoinListHeader, CoinListToolbar } from '../components/Home';

export default function Home() {
  return (
    <View style={styles.container}>
      <CoinListHeader />
      <CoinListFilter />
      <CoinList />
      <CoinListToolbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  }
});
