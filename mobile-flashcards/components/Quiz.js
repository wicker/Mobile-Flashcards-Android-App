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
      countCardsCorrect: 0,
      displayQuestion: true
		};
  }


  onSubmitCorrect = () => {
    console.log('true');
  }

  onSubmitIncorrect = () => {
    console.log('false');
  }

  onSubmitDeckView = () => {
    this.props.navigation.navigate('DeckView', {title: this.state.title})
    console.log('go back to deck');
  }

  onSubmitResetQuiz = () => {
    this.props.navigation.navigate('Quiz', {
        title: this.state.title,
        cards: this.state.questions
      }
    )
    console.log('reset quiz');
  }

  onSubmitShowButton = () => {
    this.setState({
      displayQuestion: !this.state.displayQuestion
    })
  }

  render() {

    if (this.state.displayQuestion) {
      cardMessage = 'q';
      buttonMessage = 'Show Answer';
    } else {
      cardMessage = 'a';
      buttonMessage = 'Show Question';
    }
    return (
      <KeyboardAvoidingView style={styles.containCenter}>
        <Text style={styles.deckTitle}>
          Quiz
        </Text>
        <Text>{ this.state.countCardsTotal - this.state.countCardsSeen } remaining</Text>

        <Text>{ cardMessage }</Text>

        <TouchableOpacity
          style={styles.deckButton}
          onPress={() => this.onSubmitShowButton()}
        >
 				  <View>
            <Text>{ buttonMessage }</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deckButton}
          onPress={() => this.onSubmitCorrect()}
        >
 				  <View>
            <Text>Correct</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deckButton}
          onPress={() => this.onSubmitIncorrect()}
        >
 				  <View>
            <Text>Incorrect</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deckButton}
          onPress={() => this.onSubmitDeckView()}
        >
 				  <View>
            <Text>Back to Deck</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deckButton}
          onPress={() => this.onSubmitResetQuiz()}
        >
 				  <View>
            <Text>Reset Quiz</Text>
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
