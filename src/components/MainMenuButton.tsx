import * as React from "react";
import {Dimensions, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";

const {width} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 0.05,
        margin: 5
    },
    buttonContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'cyan',
        backgroundColor: 'cyan',
        borderRadius: 10,
        width: width / 1.4,
        alignItems: 'center'
    }, buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 5
    }
});

export interface MainMenuButtonProps {
    navigationSource: string;
    buttonText: string;
}

const MainMenuButton = ({navigationSource, buttonText}: MainMenuButtonProps) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(navigationSource)}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default MainMenuButton;