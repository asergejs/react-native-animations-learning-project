import React from 'react';
import {StyleSheet, View} from "react-native";
import MainMenuButton from "../components/MainMenuButton";


const MainScreen = () => {


    return (
        <View style={styles.container}>
            <MainMenuButton buttonText={"Fading card animation"}
                            navigationSource={"FadeScreen"}/>
            <MainMenuButton buttonText={"Card transitions"}
                            navigationSource={"TransitionScreen"}/>
            <MainMenuButton buttonText={"Progress transition example"}
                            navigationSource={"Progress"}/>
            <MainMenuButton buttonText={"Sequence transition example"}
                            navigationSource={"Sequence"}/>
            <MainMenuButton buttonText={"Shuffle transition example"}
                            navigationSource={"Shuffle"}/>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'green'
    },
});

export default MainScreen;