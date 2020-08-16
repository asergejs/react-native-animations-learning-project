
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import Animated from 'react-native-reanimated';
import MainScreen from "./src/screens/MainScreen";
import CardScreen from "./src/screens/CardScreen";

const Stack = createStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="MainScreen">
            <Stack.Screen name="MainScreen"
                          component={MainScreen}/>
            <Stack.Screen name="CardScreen"
                          component={CardScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}



