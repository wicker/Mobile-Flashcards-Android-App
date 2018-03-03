import React from 'react'
import { StyleSheet, Text,
         View, TouchableOpacity } from 'react-native'
import initialDecks from '../utils/initialDecks'
import { connect } from 'react-redux'
import { getAllDecks } from '../actions'

class DeckView extends React.Component {

  state = {
    isLoaded: false,
    title: '',
    cards: []
  }

  componentDidMount() {
    const thisDeck =
      Object.values(this.props.decks)
        .filter(deck =>
          deck.title === this.props.navigation.state.params.title);

    this.setState({
      title: thisDeck[0].title,
      cards: thisDeck[0].questions,
      isLoaded: true
    });

  }

  onPressAddCard = (title) => {
    this.props.navigation.navigate('AddCard', {title: title})
  }

  onPressStartQuiz = (title, cards) => {
    this.props.navigation.navigate('Quiz', {title: title, cards: cards})
  }

  renderDeck = ({deck}) => (
    <View style={styles.contain}>
      <Text>Test</Text></View>
  )

  render() {


    if (this.state.isLoaded) {

      return (
        <View>
          <View key={this.state.title} style={styles.containCenter}>
            <Text style={styles.deckTitle}>{ this.state.title }</Text>
            <Text>{this.state.cards.length} cards</Text>
          </View>
          <TouchableOpacity
            style={styles.decksButton}
            onPress={() => this.onPressAddCard(this.state.title)}
          >
            <View style={styles.containCenter}>
              <Text style={styles.deckTitle}>
                Add Card
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.decksButton}
            onPress={() => this.onPressStartQuiz(this.state.title,this.state.cards)}
          >
            <View style={styles.containCenter}>
              <Text style={styles.deckTitle}>
                Start Quiz
              </Text>
            </View>
          </TouchableOpacity>

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
    backgroundColor: '#4DD0E1',
    margin: 20,
    padding: 20
  },
  deckTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20
  },
});

const mapStateToProps = state => ({
  decks: state
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  updateDecks: () => dispatch(getAllDecks())
});


export default connect(mapStateToProps, mapDispatchToProps)(DeckView)
