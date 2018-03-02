import initialDecks from '../utils/initialDecks'
import * as AsyncStorageAPI from '../utils/AsyncStorageAPI'

export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

/* update the store with the decks
   from AsyncStorage */
export const updateDecks = (decks) => ({
  type: GET_DECKS,
  decks
})

export const getAllDecks = () => dispatch =>
  AsyncStorageAPI.getDecksFromStorage()
    .then(decks => dispatch(updateDecks(decks)));

export const addNewDeck = (decks, title) => dispatch => {
  if (!decks[title]) {
    decks[title] = {
      title: title,
      questions: []
    }
    AsyncStorageAPI.replaceDecks(decks)
      .then(() => dispatch(getAllDecks()));
  }
}

export const addNewCard = (decks, title, question, answer) => dispatch => {

  decks[title]['questions'].push({ question, answer })

  AsyncStorageAPI.replaceDecks(decks)
    .then(() => dispatch(getAllDecks()));

}

