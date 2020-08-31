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
        <Text>2011</Text>
        <Text style={styles.description}>Seven kingdoms and one king rules them all. The one true king. Did I mention there are dragons?</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginTop: 2,
        textAlign: "center",
        fontWeight: "700",
    },
    description: {
        fontSize: 15,
        marginBottom: 7
    },
    pages: {
        alignItems: 'center',
        flex: 1,
        padding: 15,
        backgroundColor: '#87ceeb',
      },
      images: {
        width: 400,
        height: 300,
      },
  });

export default GameOfThrones
