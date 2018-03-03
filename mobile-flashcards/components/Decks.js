import React from 'react'
import { StyleSheet, Text,
         View, FlatList,
         TouchableOpacity } from 'react-native'
import initialDecks from '../utils/initialDecks'
import { connect } from 'react-redux'
import { getAllDecks } from '../actions'

class Decks extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  }

  state = {
    isLoaded: false
  }

  componentWillMount() {
    this.props.updateDecks()
      .then((decks) => this.setState({ isLoaded: true  }))
  }

  onPress(deck) {
    this.props.navigation.navigate('DeckView', {title: deck.title})
  }

  renderDeck = ({deck}) => (
    <View style={styles.contain}>
      <Text>Test</Text></View>
  )

  render() {

    if (this.state.isLoaded) {
      const decksList = Object.values(this.props.decks);

      return (
        <FlatList
          removeClippedSubviews={false}
          data={decksList}
          extraData={this.state}
          keyExtractor={(deck, index) => deck.title}
          renderItem={({item}) =>
						<TouchableOpacity
              style={styles.decksButton}
              onPress={() => this.onPress(item)}
            >
							<View style={styles.containCenter}>
                <Text style={styles.deckTitle}>
                  {item.title}
                </Text>
								<Text>
									{item.questions.length} cards
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

export default connect(mapStateToProps, mapDispatchToProps)(Decks)
