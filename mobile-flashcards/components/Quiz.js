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
    this.setState({
      countCardsSeen: this.state.countCardsSeen + 1,
      countCardsCorrect: this.state.countCardsCorrect +1,
      displayQuestion: true
    })
  }

  onSubmitIncorrect = () => {
    this.setState({
      countCardsSeen: this.state.countCardsSeen + 1,
      displayQuestion: true
    })
  }

  onSubmitDeckView = () => {
    this.props.navigation.goBack()
  }

  onSubmitResetQuiz = () => {
    this.setState({
      countCardsSeen: 0,
      countCardsCorrect: 0,
      displayQuestion: true
    })
  }

  render() {

    if (
        this.state.countCardsTotal - this.state.countCardsSeen > 0) {
      if (this.state.displayQuestion) {
        cardMessage = this.state.questions[this.state.countCardsSeen].question;
        buttonMessage = 'Show Answer';
      } else {
        cardMessage = this.state.questions[this.state.countCardsSeen].answer;
        buttonMessage = 'Show Question';

      }
    }
    return (
      <KeyboardAvoidingView style={styles.containCenter}>
        <Text style={styles.deckTitle}>
          Quiz
        </Text>

        { this.state.countCardsTotal - this.state.countCardsSeen > 0
          ? <View>
             <Text>{ this.state.countCardsTotal - this.state.countCardsSeen } remaining</Text>
             <Text>{ cardMessage }</Text>
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
            </View>
          :  <Text>{ this.state.countCardsCorrect } / { this.state.countCardsTotal } correct!</Text>

        }

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
