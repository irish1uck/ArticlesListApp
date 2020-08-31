import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView, 
  View, 
  TextInput, 
  Button,
  Image, 
  FlatList,
} from 'react-native';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Adam's App!</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Username"/>
        <TextInput 
          style={styles.input} 
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.btnContainer}>
          <Button
            title="Login"
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.btnText}>Login</Text>
          </Button>
          </View>
          <View style={styles.btnContainer}>
          <Button
            title="Sign up"           
            style={styles.button} 
            onPress={() => alert("Sign up successful!")}
          >
            <Text style={styles.btnText}>Sign Up</Text>
          </Button>
        </View>
      </View>
  );
}

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


function HomeScreen({ navigation }) {
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home'}}/>
        <Stack.Screen name="1111" component={BreakingBad} options={{ title: "Breaking Bad - AMC"}} />
        <Stack.Screen name="1112" component={GameOfThrones} options={{ title: "Game of Thrones - HBO"}} />
        <Stack.Screen name="1113" component={SiliconValley} options={{ title: "Silicon Valley - HBO"}} />
        <Stack.Screen name="1114" component={TheWire} options={{ title: "The Wire - HBO"}} />
        <Stack.Screen name="1115" component={ItsAlwaysSunny} options={{ title: "It's Always Sunny in Philadelphia - FX"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87ceeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pages: {
    alignItems: 'center',
    flex: 1,
    padding: 15,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 15,
    fontStyle: 'italic',
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    textAlign: 'center',
    margin: 7,
    height: 35,
    borderRadius: 5, 
  },
  btnContainer: {
    marginTop: 15,
    width: 220,
    textAlign: "center",
  },
  button: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
  },
 
  listItem: {
    backgroundColor: '#00FFFF',
    borderStyle: "solid",
    borderWidth: 1,
    margin: 10,
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
  images: {
    width: 400,
    height: 300,
  },
});
