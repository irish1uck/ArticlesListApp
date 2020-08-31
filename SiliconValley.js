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
        <Text>2014</Text>
        <Text style={styles.description}>A group of coders make it big when Richards creates a very popular app called 'Pied Piper'.</Text>
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

export default SiliconValley
