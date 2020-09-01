import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function ItsAlwaysSunny({ navigation }) {
    return (
      <View style={styles.pages}>
        <Image 
          source={{uri: 'https://images.theconversation.com/files/348773/original/file-20200722-21-16izgb9.jpg?ixlib=rb-1.1.0&rect=19%2C10%2C1401%2C700&q=45&auto=format&w=1356&h=668&fit=crop'}}
          style={styles.images} 
        />
        <Text style={styles.title}>It's Always Sunny In Philadelphia</Text>
        <Text style={styles.date}>2005</Text>
        <Text style={styles.description}>"This dark comedy follows the owners of a bar in south Phila and all the mischief they get themselves into."</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    title: {
      fontSize: 35,
      marginTop: 2,
      textAlign: "center",
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

export default ItsAlwaysSunny
