import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Decks extends React.Component {

  render() {
    return (
      <View style={styles.contain}>
      <Text>Testing</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

