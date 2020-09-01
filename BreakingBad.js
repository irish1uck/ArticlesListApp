import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function BreakingBad({ navigation }) {
  
    return (
      <View style={styles.pages}>
        <Image 
          source={{uri: 'https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_UX477_CR0,0,477,268_AL_.jpg'}}
          style={styles.images} 
        />
        <Text style={styles.title}>Breaking Bad</Text>
        <Text style={styles.date}>2008</Text>
        <Text style={styles.description}>A school teacher diagnosed with terminal cancer, determined to provide for his family, starts cooking meth with a former student and all hell breaks lose.</Text>
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

export default BreakingBad
