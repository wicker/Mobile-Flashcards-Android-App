import React from 'react'
import { StyleSheet, Text,
         View, FlatList,
         TouchableOpacity,
         Form, Item, Label,
         TextInput, Button,
         KeyboardAvoidingView} from 'react-native'
import initialDecks from '../utils/initialDecks'
import { connect } from 'react-redux'
import { addNewDeck } from '../actions'
import { NavigationActions } from 'react-navigation'

class AddDeck extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
 			text: ''
		};
  }

  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }))
  }

  onSubmit = (decks, title) => {
    this.props.addDeck(decks, title);

    this.props.navigation
      .dispatch(NavigationActions.navigate(
        {
          routeName: 'DeckView',
          params: {
            title: title
          }
        }));
  }

  render() {

    const { input } = this.state

    return (
      <KeyboardAvoidingView style={styles.containCenter}>
        <Text style={styles.deckTitle}>
          Add a Deck
        </Text>
        <Text>
          What is the title of your new deck?
        </Text>
        <TextInput
          value={input}
          onChangeText={(text) => this.setState({text})}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.deckButton}
          onPress={() => this.onSubmit(this.props.decks, this.state.text)}
        >
 				  <View>
            <Text>Create Deck</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  input: {
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    width: 300
  }
});

const mapStateToProps = state => ({
  decks: state
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  addDeck: (decks, title) => dispatch(addNewDeck(decks, title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck)
