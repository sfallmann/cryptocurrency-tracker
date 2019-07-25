import React from 'react';
import { StyleSheet, View } from 'react-native';
import CoinList from './src/components/CoinList';


export default function App() {
  return (
    <View style={styles.container}>
      <CoinList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
