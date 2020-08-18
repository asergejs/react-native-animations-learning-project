import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import MainScreen from "./src/screens/MainScreen";
import {Progress} from "./src/screens/examples";
import Sequence from "./src/screens/examples/Sequence";
import Shuffle from "./src/screens/examples/Shuffle";
import {FadeScreen, TransitionScreen, UseTransition} from "./src/screens";

const Stack = createStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainScreen">
                <Stack.Screen name="MainScreen"
                              component={MainScreen}/>
                <Stack.Screen name="FadeScreen"
                              component={FadeScreen}/>
                <Stack.Screen name="TransitionScreen"
                              component={TransitionScreen}/>
                <Stack.Screen name="Progress"
                              component={Progress}/>
                <Stack.Screen name="Sequence"
                              component={Sequence}/>
                <Stack.Screen name="Shuffle"
                              component={Shuffle}/>
                <Stack.Screen name="UseTransition"
                              component={UseTransition}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}



