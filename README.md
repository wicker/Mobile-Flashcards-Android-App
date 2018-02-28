# Udacicards
Mobile flashcards app using React Native for final Udacity React Nanodegree project

### Usage

```
yarn install
yarn start
```

### Design

This is an Android app.

**Five views**

- ListAllDecks (deck title, card count)
- ListAllCardsInADeck (deck title, card count, start a quiz option, add a new card option)
- Quiz (display question, flip card option, correct button, incorrect button, number of cards complete, number of cards left, total deck card count, display percentage correct)
- NewDeckView (enter title for new deck, submit new deck title)
- NewQuestionView (enter question, enter answer, submit new question)

Initial view is the ListAllDecks view, lists created decks and inclues name of deck and card count.

Routing? Animate.

**Notifications**

Notify the user at a certain time if they haven't completed quizzes for the day.

**Data in AsyncStorage**

Helper functions:

- getDecks: returns all decks along with titles, questions, and answers
- getDeck: return deck associated with a single deck id
- addNewDeck: take in single title and add it to the decks
- addCardToDeck: take in deck title and card to add the card to that deck

Data object: 

```
{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
```
