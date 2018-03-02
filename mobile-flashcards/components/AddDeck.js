import React from 'react'
import { StyleSheet, Text,
         View, FlatList,
         TouchableOpacity } from 'react-native'
import initialDecks from '../utils/initialDecks'
import { connect } from 'react-redux'
import { getAllDecks } from '../actions'

class AddDeck extends React.Component {

  render() {

    return (
      <View style={styles.containCenter}>
        <Text style={styles.deckTitle}>
          Test
        </Text>
      </View>
    )
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
  updateDecks: () => dispatch(getAllDecks())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck)
