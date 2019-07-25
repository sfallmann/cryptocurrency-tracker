import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import CoinList from './src/components/CoinList';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
        <View style={styles.container}>
          <CoinList />
       </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
