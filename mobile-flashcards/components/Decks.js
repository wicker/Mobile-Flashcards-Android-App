import React from 'react'
import { StyleSheet, Text,
         View, FlatList,
         TouchableOpacity } from 'react-native'
import initialDecks from '../utils/initialDecks'
import { connect } from 'react-redux'
import { getAllDecks } from '../actions'

class Decks extends React.Component {

  state = {
    isLoaded: false
  }

  componentWillMount() {
    this.props.updateDecks()
      .then((decks) => this.setState({ isLoaded: true  }))
  }

  onPressItem = (id: string) => {
    return true
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

const mapStateToProps = state => ({
  decks: state
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  updateDecks: () => dispatch(getAllDecks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Decks)
