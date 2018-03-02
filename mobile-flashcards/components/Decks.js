import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import initialDecks from '../utils/initialDecks'

export default class Decks extends React.Component {

  state = {
    isLoaded: true, /*todo: set to false when using store */
    decks: initialDecks
  }

  keyExtractor = (deck, index) => deck.title;

  render() {

    if (this.state.isLoaded) {
      return (
        <View style={styles.contain}>
          {Object.values(this.state.decks)
            .map(deck =>
              <Text key={deck.title}>{deck.title}</Text>
            )
          }
        </View>
      )
    } else {
      return (
        <View style={styles.contain}>
          <Text>Loading animation...</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

