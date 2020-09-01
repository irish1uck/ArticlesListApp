import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function SiliconValley({ navigation }) {
    return (
      <View style={styles.pages}>
        <Image 
          source={{uri: 'https://cdn.vox-cdn.com/thumbor/7agamiK3RAShiy1GCRUQTuJf3LM=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/54950149/7032_1458680567.0.jpg'}}
          style={styles.images} 
        />
        <Text style={styles.title}>Silicon Valley</Text>
        <Text style={styles.date}>2014</Text>
        <Text style={styles.description}>A group of coders make it big when Richards code for a file compression app called 'Pied Piper' breaks the record for fastest data transfer.</Text>
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

export default SiliconValley
