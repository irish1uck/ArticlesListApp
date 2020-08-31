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
        <Text>2008</Text>
        <Text style={styles.description}>A school teacher diagnosed with terminal cancer, determined to provide for his family, starts cooking meth with a former student and all hell breaks lose.</Text>
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

export default BreakingBad
