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
        <Text>2002</Text>
        <Text style={styles.description}>Gang life in Baltimore is a dangerous, unpredictable life. The narcotics division of the police department uses wire taps to take down the main players.</Text>
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

export default TheWire
