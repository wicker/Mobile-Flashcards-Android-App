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
    if (question && question !== '' && answer && answer !== '') {
      this.props.addCard(decks, title, question, answer);
    }
    this.props.navigation.goBack()
  }

  render() {

    const { input } = this.state

    return (
      <KeyboardAvoidingView style={styles.containCenter}>
        <Text style={styles.title}>
          Add a Card to { this.state.title }
        </Text>
        <Text style={styles.text}>
          Question
        </Text>
        <TextInput
          value={input}
          onChangeText={(text) => this.setState({question: text})}
          style={styles.input}
        />
        <Text style={styles.text}>
          Answer
        </Text>
        <TextInput
          value={input}
          onChangeText={(text) => this.setState({answer: text})}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.onSubmit(this.props.decks,
                                       this.state.title,
                                       this.state.question,
                                       this.state.answer)}
        >
 				  <View>
            <Text style={styles.addButtonText}>Add Card</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  containCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    borderRadius: 10,
    backgroundColor: '#4DD0E1',
    margin: 20,
    padding: 20
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18
  },
  input: {
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    width: 300
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 30
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
