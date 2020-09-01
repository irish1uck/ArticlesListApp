import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';

function TheWire({ navigation }) {
    return (
      <View style={styles.pages}>
        <Image 
          source={{uri: 'https://images.indianexpress.com/2020/05/the-wire-1200.jpg'}}
          style={styles.images} 
        />
        <Text style={styles.title}>The Wire</Text>
        <Text style={styles.date}>2002</Text>
        <Text style={styles.description}>The streets of Baltimore are dangerous and unpredictable. The narcotics division of the Baltimore police department use wire taps to take down the drug kingpins and gangsters.</Text>
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

export default TheWire
