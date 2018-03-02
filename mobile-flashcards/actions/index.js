export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

/* update the store with the decks
   from AsyncStorage */
export const getDecks = () => ({
  type: GET_DECKS,
  decks
})

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
