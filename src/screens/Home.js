import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CoinList, CoinListFilter, CoinListHeader } from '../components/Home';

export default function Home() {
  return (
    <View style={styles.container}>
      <CoinListHeader />
      <CoinListFilter />
      <CoinList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: '#fff',
  }
});
