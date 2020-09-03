import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Login";
import Home from "./Home";
import ItsAlwaysSunny from './ItsAlwaysSunny';
import TheWire from './TheWire';
import GameOfThrones from './GameOfThrones';
import BreakingBad from './BreakingBad';
import SiliconValley from './SiliconValley';
import Demo from "./Demo";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} options={{ title: "Adam's Favorite TV Shows" }}/>
        <Stack.Screen name="1111" component={BreakingBad} options={{ title: "Breaking Bad - AMC"}} />
        <Stack.Screen name="1112" component={GameOfThrones} options={{ title: "Game of Thrones - HBO"}} />
        <Stack.Screen name="1113" component={SiliconValley} options={{ title: "Silicon Valley - HBO"}} />
        <Stack.Screen name="1114" component={TheWire} options={{ title: "The Wire - HBO"}} />
        <Stack.Screen name="1115" component={ItsAlwaysSunny} options={{ title: "It's Always Sunny in Philadelphia - FX"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

