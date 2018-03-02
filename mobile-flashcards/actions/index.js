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
    AsyncStorageAPI.addDeck(decks)
      .then(() => dispatch(getAllDecks()));
  }
}

/* create a new deck in the store
  using the deck title argument */
export const addDeck = (title) => ({
  type: ADD_DECK,
  title
})

/* add a new card to the given deck
  using the given deck id, question,
  and answer. */
export const addCard = (deck_id, card) => ({
  type: ADD_CARD,
  deck_id,
  card
})

