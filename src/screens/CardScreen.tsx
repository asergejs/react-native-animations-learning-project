import React, {useState} from 'react';
import {Button, StyleSheet, View} from "react-native";
import Animated, {
    add,
    Clock,
    cond,
    eq,
    Extrapolate,
    interpolate,
    not, proc,
    set,
    startClock,
    useCode,
    Value
} from "react-native-reanimated"
import Card, {cards} from "../components/Card"
import {useClock, useValues} from "react-native-redash";


const CardScreen = () => {
    const [show, setShow] = useState(true);

    console.log('rerender on show change : ', show);

    const duration = 2000;

    const runAnimation = proc(
        (
        startAnimation: Animated.Value<number>,
        clock: Animated.Clock,
        from: Animated.Value<number>,
        to: Animated.Value<number>,
        startTime: Animated.Value<number>,
        opacity: Animated.Node<number>
    ) =>
        cond(eq(startAnimation, 1), [
            startClock(clock),
            set(from, opacity),
            set(to, not(to)),
            set(startTime, clock),
            set(startAnimation, 0)
        ])
    );

    const clock = useClock([]);
    const startAnimation = new Value(1);
    const [startTime, from, to] = useValues(0, 0, 0);
    const endTime = add(startTime, duration);
    const opacity = interpolate(clock, {
        inputRange: [startTime, endTime],
        outputRange: [from, to],
        extrapolate: Extrapolate.CLAMP
    });

    useCode(
        () => runAnimation(startAnimation, clock, from, to, startTime, opacity),
        [clock, from, opacity, startAnimation, startTime, to]);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Animated.View style={{opacity}}>
                    <Card card={cards[0]}/>
                </Animated.View>
            </View>

            <View style={{flex: 0.1}}>
                <Button title={show ? "Hide" : "Show"}
                        onPress={() => setShow(prev => !prev)}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default CardScreen;