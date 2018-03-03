import React from 'react'
import { StyleSheet, Text,
         View, FlatList,
         TouchableOpacity,
         Form, Item, Label,
         TextInput, Button,
         KeyboardAvoidingView} from 'react-native'
import initialDecks from '../utils/initialDecks'
import { connect } from 'react-redux'
import { addNewCard } from '../actions'
import { NavigationActions } from 'react-navigation'

class AddCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
 			question: '',
      answer: '',
      title: this.props.navigation.state.params.title
		};
  }

  onSubmit = (decks, title, question, answer) => {
    this.props.addCard(decks, title, question, answer);
    this.props.navigation.goBack()
  }

  render() {

    const { input } = this.state

    return (
      <KeyboardAvoidingView style={styles.containCenter}>
        <Text style={styles.deckTitle}>
          Add a Card
        </Text>
        <Text>
          Question?
        </Text>
        <TextInput
          value={input}
          onChangeText={(text) => this.setState({question: text})}
          style={styles.input}
        />
        <Text>
          Question?
        </Text>
        <TextInput
          value={input}
          onChangeText={(text) => this.setState({answer: text})}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.deckButton}
          onPress={() => this.onSubmit(this.props.decks,
                                       this.state.title,
                                       this.state.question,
                                       this.state.answer)}
        >
 				  <View>
            <Text>Add Card</Text>
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
  addCard: (decks, title, question, answer) =>
    dispatch(addNewCard(decks, title, question, answer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)
