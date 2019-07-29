import React from 'react';
import { View, Text } from 'react-native';

const NoCoins = () => (
  <View style={styles.container}>
    <Text style={styles.text}>No Coins</Text>
  </View>
);

const styles = {
  container: {
    marginTop: 20,
    padding: 10,
    flex: 1,
    width: '100%',
    height: 40,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  }
};

export default NoCoins;
