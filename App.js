import React from 'react';
import { Provider } from 'react-redux';
//import Home from './src/screens/Home';
import Home from './src/navigators/HomeList';
import store from './src/store';



export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
