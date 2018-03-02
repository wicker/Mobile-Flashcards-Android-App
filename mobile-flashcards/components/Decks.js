import React from 'react'
import { StyleSheet, Text,
         View, FlatList,
         TouchableOpacity } from 'react-native'
import initialDecks from '../utils/initialDecks'

export default class Decks extends React.Component {

  state = {
    isLoaded: true, /*todo: set to false when using store */
    decks: initialDecks,
    selected: (new Map(): Map<string, boolean>)
  }

  onPressItem = (id: string) => {
    return true
  };

  renderDeck = ({deck}) => (
    <View style={styles.contain}>
      <Text>Test</Text></View>
  )

  render() {

    const decksList = Object.values(this.state.decks);

    if (this.state.isLoaded) {
      return (
        <FlatList
          data={decksList}
          extraData={this.state}
          keyExtractor={(deck, index) => deck.title}
          renderItem={({item}) =>
						<TouchableOpacity onPress={this.onPressItem}>
							<View>
								<Text style={styles.contain}>
									{item.title}  - {item.questions.length} cards
								</Text>
							</View>
						</TouchableOpacity>
 					}
        />
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

