import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import {useNavigation} from '@react-navigation/native'


const MainScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>MAIN SCREEN</Text>
            <Button onPress={() => navigation.navigate("CardScreen")}
                    title={"Card"}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MainScreen;