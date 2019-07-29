import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';

// FontAwesome5
const Title = () => (
  <View style={styles.headerContainer} >
    <View>
      <FontAwesome5 raise name='coins' color='#ffbf00' size={24} />
    </View>
    <Text style={styles.headerText} >Coin Tracker</Text>
  </View>
  
);

const styles = {
  headerContainer: {
    backgroundColor: '#2089dc',
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    marginLeft: 5,
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  }
};

export default Title;
