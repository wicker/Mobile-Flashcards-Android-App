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

  onSubmitShowButton = () => {
    this.setState({
      displayQuestion: !this.state.displayQuestion
    })
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
        <Text style={styles.title}>
        { this.state.title } Quiz
        </Text>

        { this.state.countCardsTotal > 0 &&
          (this.state.countCardsTotal - this.state.countCardsSeen > 0)
          ? <View>
              <View style={styles.containCenter}>
                <Text style={styles.text}>{ this.state.countCardsTotal - this.state.countCardsSeen } remaining</Text>
                <Text style={styles.cardText}>{ cardMessage }</Text>
                <TouchableOpacity
                  style={styles.showButton}
                  onPress={() => this.onSubmitShowButton()}
                >
                  <View>
                    <Text>{ buttonMessage }</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.containCenter}>
                <TouchableOpacity
                  style={styles.correctButton}
                  onPress={() => this.onSubmitCorrect()}
                >
                  <View>
                    <Text>Correct</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.incorrectButton}
                  onPress={() => this.onSubmitIncorrect()}
                >
                  <View>
                    <Text>Incorrect</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          : this.state.countCardsTotal > 0
              ? <View>
                  <Text style={styles.text}>
                    { this.state.countCardsCorrect } / { this.state.countCardsTotal } correct!
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.onSubmitDeckView()}
                  >
                    <View>
                      <Text>Back to Deck</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.onSubmitResetQuiz()}
                  >
                    <View>
                      <Text>Reset Quiz</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              : <View>
                  <Text style={styles.text}>
                    This deck has no cards!
                  </Text>
                </View>

        }

      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  containCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  showButton: {
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 20,
    padding: 10,
    borderColor: '#000',
    borderWidth: 2,
  },
  correctButton: {
    borderRadius: 10,
    backgroundColor: '#00E676',
    margin: 20,
    marginBottom: 10,
    padding: 20,
  },
  incorrectButton: {
    borderRadius: 10,
    backgroundColor: '#F44336',
    margin: 20,
    padding: 20,
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#4DD0E1',
    margin: 20,
    marginBottom: 10,
    padding: 20,
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

export default connect(mapStateToProps, null)(Quiz)
