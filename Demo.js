import React, { useState } from 'react';
import {
    StyleSheet, 
    View,
    Text,
} from "react-native";


function Demo() {
    const [counter, setCounter] = useState(0)
    // Todo
    return (
    <View style={styles.container}>
        <Button 
            id="@id/increase"
            text="Ranodom number"
            style={styles.button}
            onPress={() => setCounter(Math.round(Math.random() * 10))}
        />
        <Text stlye={styles.title}>Random Number: {counter}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00FFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        backgroundColor: '#FF0000'
    },
    count: {

    },
    title: {

    }
});

export default Demo;
