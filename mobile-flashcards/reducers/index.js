import initialDecks from '../utils/initialDecks'

import {
  GET_DECKS,
  ADD_DECK,
  ADD_CARD
} from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return action.decks

    case ADD_DECK:
      return state
    case ADD_CARD:
      return state
    default:
      return state
  }
}

export default decks
