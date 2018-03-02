import { AsyncStorage } from 'react-native'
import initialDecks from './initialDecks'

const STORAGE_KEY = 'udacicards'

// get decks object from asyncstorage
export const getDecksFromStorage = () =>
  AsyncStorage.getItem(STORAGE_KEY)
    .then(checkStorageDecks)

// if the decks object exists in AsyncStorage,
// parse it and return
export function checkStorageDecks(decks) {
  console.log(decks);
  if (decks) {
    return JSON.parse(decks)
  } else {
    return setInitialDecks()
  }
}
// reset the decks object in AsyncStorage
// then return the object
export function setInitialDecks() {
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initialDecks));
  console.log('test');
  return initialDecks
}

