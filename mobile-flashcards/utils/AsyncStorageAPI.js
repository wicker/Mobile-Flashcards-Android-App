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
  console.log('got from storage: ',decks);
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
  return initialDecks
}

export const clearStorage = () =>
  AsyncStorage.setItem(STORAGE_KEY, '')

export const replaceDecks = (decks) =>
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks))
