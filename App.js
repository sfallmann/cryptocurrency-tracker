import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import icons from './assets/images/icons/128';
import { Provider } from 'react-redux';
import store from './src/store';

const coin = 'aion';

export default function App() {
  return (
    <Provider store={store}>
        <View style={styles.container}>
           <Text>Open up App.js to start working on your app!</Text>   
           <Image style={{ width: 50, height: 50 }} source={icons[coin]} />
        </View>
    </Provider>
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
