import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import icons from './assets/images/icons/128';

const coin = 'aion';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>   
      <Image style={{ width: 50, height: 50 }} source={icons[coin]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
