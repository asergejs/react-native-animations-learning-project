import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import MainScreen from "./src/screens/MainScreen";
import FadeScreen from "./src/screens/FadeScreen";
import TransitionScreen from "./src/screens/TransitionsScreen";
import Progress from "./src/screens/examples/Progress";
import Sequence from "./src/screens/examples/Sequence";

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
            </Stack.Navigator>
        </NavigationContainer>
    );
}



