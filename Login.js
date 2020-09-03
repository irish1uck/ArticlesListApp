
import React, { useState } from 'react';
import { 
    StyleSheet,
    Text, 
    View, 
    TextInput, 
    Button,
  } from 'react-native';
  

function Login({ navigation }) {
    const [blank, setBlank] = useState("");
    
    return (
    
      <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.welcome}>Adam's Favorite TV Shows</Text>
          <Text style={styles.welcome}>React Native App</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter username here">{blank}</TextInput>
          <TextInput 
            style={styles.input} 
            placeholder="Enter password here"
            secureTextEntry>{blank}</TextInput>
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
              onPress={() => {
                alert("Sign up successful!")
                setBlank("")
              }}
            >
              <Text style={styles.btnText}>Sign Up</Text>
            </Button>
          </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#87ceeb',
        alignItems: 'center',
        justifyContent: 'center',
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
      welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 2,
        fontStyle: 'italic',
        color: '#fff',
        textDecorationLine: "underline",
        fontWeight: "700",
      },
      input: {
        backgroundColor: '#fff',
        width: '80%',
        textAlign: 'center',
        margin: 7,
        height: 35,
        borderRadius: 5, 
      },

  });


export default Login;
