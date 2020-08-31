import React from 'react';
import {
    StyleSheet, 
    View,
    Text,
    TouchableWithoutFeedback,
    SafeAreaView, 
    FlatList
} from "react-native";


const DATA = [
    {
      id: "1111",
      title: "Breaking Bad",
      description: "A school teacher diagnosed with terminal cancer, determined to provide for his family, starts cooking meth with a former student and all hell breaks lose."
    },
    {
      id: "1112",
      title: "Game of Thrones",
      description: "Seven kingdoms and one king rules them all. The one true king."
    },
    {
      id: "1113",
      title: "Silicon Valley",
      description: "A group of coders make it big when Richards creates a very popular app called 'Pied Piper'."
    },
    {
      id: "1114",
      title: "The Wire",
      description: "Gang life in Baltimore is a dangerous, unpredictable life. The narcotics division of the police department uses wire taps to take down the main players."
    },
    {
      id: "1115",
      title: "It's Always Sunny In Philadelphia",
      description: "This dark comedy follows the owners of a bar in south Phila and all the mischief they get themselves into."
    }
  ]
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  
  function Home({ navigation }) {
    const renderItem = ({ item }) => (
      <TouchableWithoutFeedback onPress={ () => navigation.navigate(item.id)}>
        <View style={styles.listItem}>
          <Text style={styles.title} >{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#00FFFF',
        borderStyle: "solid",
        borderWidth: 1,
        margin: 8,
        padding: 10,
      },
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
      container: {
        flex: 1,
        backgroundColor: '#87ceeb',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

export default Home
