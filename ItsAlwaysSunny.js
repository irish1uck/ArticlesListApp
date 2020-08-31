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
        <Text>2005</Text>
        <Text style={styles.description}>"This dark comedy follows the owners of a bar in south Phila and all the mischief they get themselves into."</Text>
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

export default ItsAlwaysSunny
