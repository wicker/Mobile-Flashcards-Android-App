import React from 'react'
import { StyleSheet, Text,
         View, FlatList,
         TouchableOpacity,
         Form, Item, Label,
         TextInput, Button,
         KeyboardAvoidingView} from 'react-native'
import initialDecks from '../utils/initialDecks'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.navigation.state.params.title,
      questions: this.props.navigation.state.params.cards,
      countCardsTotal: this.props.navigation.state.params.cards.length,
      countCardsSeen: 0,
      countCardsCorrect: 0
		};
  }

  onSubmit = (isCorrect) => {
    console.log(isCorrect);
  }

  render() {

    return (
      <KeyboardAvoidingView style={styles.containCenter}>
        <Text style={styles.deckTitle}>
          Add a Card
        </Text>
        <Text>{ this.state.questions[this.state.countCardsSeen+1] }</Text>
        <TouchableOpacity
          style={styles.deckButton}
          onPress={() => this.onSubmit(true)}
        >
 				  <View>
            <Text>Correct</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deckButton}
          onPress={() => this.onSubmit(false)}
        >
 				  <View>
            <Text>Incorrect</Text>
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

export default connect(mapStateToProps, null)(Quiz)
