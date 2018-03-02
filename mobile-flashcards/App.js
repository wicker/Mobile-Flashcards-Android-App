import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Decks from './components/Decks.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

export default class App extends React.Component {

  render() {
    return (
        <Provider store={createStore(reducer)}>
          <View style={styles.container}>
            <Decks />
            <Text>Test</Text>
          </View>
        </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

