import React, {useState} from "react";
import {StyleSheet, TouchableOpacity, View, Text, Dimensions} from "react-native";
import Animated, {interpolate, multiply, not} from "react-native-reanimated";

import Card, {cards} from "../components/Card"
import {useTransition} from "react-native-redash";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, //or position : 'absolute', left: 0 etc...
        justifyContent: 'center',
        alignItems: 'center'
    }, buttonContainer: {
        alignSelf: 'center',
        flex: 0.2
    }, button: {
        width: 150,
        height: 50,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center'
    }, buttonText: {
        fontSize: 20
    }
});

const { width } = Dimensions.get('window');
const transformOrigin = -1 * (width / 2 - 8 * 2);

const UseTransition = () => {
    const [toggled, setToggled] = useState<0 | 1>(0);
    const transition = useTransition(toggled, not(toggled), toggled);
    return (
        <>
            <View style={styles.container}>
                {cards.map((card: Card, index: number) => {
                    // let direction = 0;
                    // if(index === 0) {
                    //     direction = -1;
                    // } else if (index === 2) {
                    //     direction = 1;
                    // }
                    const direction = interpolate(index, {
                        inputRange: [0, 1, 2],
                        outputRange: [-1, 0, 1]
                    });
                    // const rotate = direction * (toggled ? Math.PI / 6 : 0);
                    const rotate = multiply(direction, interpolate(transition, {
                        inputRange: [0, 1],
                        outputRange: [0, Math.PI / 6]
                    }));
                    return (
                        <Animated.View key={card.id} style={[styles.overlay, {
                            transform: [
                                {translateX: transformOrigin },
                                { rotate },
                                {translateX: -transformOrigin },
                            ]
                        }]}>
                            <Card {...{card}} />
                        </Animated.View>
                    );
                })}
            </View>
            <TouchableOpacity style={styles.buttonContainer}
                              onPress={() => setToggled(() => toggled ^ 1)}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{toggled ? "Reset" : "Start"}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
};

export default UseTransition;