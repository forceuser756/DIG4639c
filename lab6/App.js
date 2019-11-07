import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';


const styles = StyleSheet.create({
  title: {
    backgroundColor: "brown",
    color: "black",
    fontSize: 40,
    textAlign: "center",
    paddingTop: 20
  },
  head: {
    backgroundColor: "brown",
    fontSize: 20,
    textAlign: "center",
    color: "grey"
  },
  body: {
    backgroundColor: "brown",
    textAlign: "center",
    color: "lightgrey"
  }

});

 class App extends React.Component {

  render() {
    return (
      <View>
        <Text style={styles.title}>
        Favorite Video Game
        </Text>
        <Text style={styles.head}>
          Old School RuneScape
        </Text>
        <Text style={styles.body}>
          This is my favorite game of all time. I have played Old School RuneScape since I was 4 or 5 years old. My father made my account for me, and I've been playing on and off ever since. I currently have still not maxed out my stats in the game, as the experience needed to max one skill goes up exponentially. Therefore, since the max of a skill is 99, level 92 would be technically halfway to 99 in terms of experience points.
        </Text>
      </View>
    );
  }
}

export default App;
