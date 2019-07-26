import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import CoinList from './src/components/CoinList';
import CoinListFilter from './src/components/CoinListFilter';
import Header from './src/components/Header';
import store from './src/store';


export default function App() {
  return (

    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <CoinListFilter />
        <CoinList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: '#fff',
  }
});
