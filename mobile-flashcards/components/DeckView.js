import React from 'react'
import { StyleSheet, Text,
         View, TouchableOpacity } from 'react-native'
import initialDecks from '../utils/initialDecks'
import { connect } from 'react-redux'
import { getAllDecks } from '../actions'

class DeckView extends React.Component {

  state = {
    isLoaded: true
  }

  onPressItem = (id: string) => {
    return true
  }

  renderDeck = ({deck}) => (
    <View style={styles.contain}>
      <Text>Test</Text></View>
  )

  render() {

    const deckTitle = this.props.navigation.state.params.title;

    if (this.state.isLoaded) {
      const decksList = Object.values(this.props.decks);

      return (
        <View style={styles.containCenter}>
          {Object.values(this.props.decks)
            .filter(deck => deck.title === deckTitle)
            .map(deck =>
            <Text key={deck.title} style={styles.deckTitle}>
                { deck.title }
            </Text>
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
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  containCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  decksButton: {
    borderRadius: 10,
    backgroundColor: '#cfcfcf',
    margin: 20,
    padding: 20
  },
  deckTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({
  decks: state
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  updateDeckView: () => dispatch(getAllDecks())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckView)
