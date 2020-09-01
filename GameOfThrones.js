import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function GameOfThrones({ navigation }) {
    return (
      <View style={styles.pages}>
        <Image 
          source={{uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-game-of-thrones-season-8-fan-theories-1554917935.jpg'}}
          style={styles.images} 
        />
        <Text style={styles.title}>Game of Thrones</Text>
        <Text style={styles.date}>2011</Text>
        <Text style={styles.description}>Seven kingdoms and one king rules them all. The one true king. Did I mention there are dragons? There are also 'White Walkers' coming with the Winter to kill everyone.</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    title: {
      fontSize: 35,
      textAlign: "center",
      marginTop: 2,
      fontWeight: "700",
      color: '#fff',
      fontStyle: "italic",
      textDecorationLine: "underline",
    },
    description: {
      fontSize: 20,
      marginBottom: 7,
      textAlign: 'center',
      padding: 10,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderColor: "#fff",
      borderRadius: 9,
      color: "#fff",
    },
    pages: {
        alignItems: 'center',
        flex: 1,
        padding: 15,
        backgroundColor: '#87ceeb',
      },
      images: {
        width: 390,
        height: 300,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 9,
      },
      date: {
        fontSize: 25,
        fontWeight: "500",
        color: "#fff",
      },
  });

export default GameOfThrones
