import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Decks from './components/Decks.js'
import DeckView from './components/DeckView.js'
import AddDeck from './components/AddDeck.js'
import AddCard from './components/AddCard.js'
import Quiz from './components/Quiz.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { TabNavigator, StackNavigator } from 'react-navigation'

const MainNav = StackNavigator({
  DeckTab: {
    screen:

			TabNavigator(
				{
					Decks: {
						screen: Decks,
						navigationOptions: {
							title: 'All Decks',
						},
					},
					'Add Deck': {
						screen: AddDeck,
					}
				},
			  { tabBarOptions: {
						activeTintColor: 'black',
						inactiveTintColor: 'white',
            style: {
              backgroundColor: '#00ACC1'
						},
            indicatorStyle: {
              backgroundColor: '#006064'
            }
					},
				}
			),

    navigationOptions: {
      title: 'Mobile Flashcards App',
      headerStyle: {
        backgroundColor: '#00BCD4',
      }
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#00BCD4',
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#00BCD4',
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#00BCD4',
      }
    }
  }

}, {
  headerMode: 'screen'
});

export default class App extends React.Component {

  render() {

    const store = createStore(
      reducer, undefined,
      applyMiddleware(thunk)
    )

    return (
      <Provider store={store}>
        <MainNav style={styles.bg}/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B2EBF2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

