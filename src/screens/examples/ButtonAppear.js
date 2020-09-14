import React, {useEffect, useMemo, useState} from 'react'
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native'


import Animated, {
    Easing,
    clockRunning,
    cond,
    timing,
    interpolate,
    stopClock,
    block,
    set,
    eq,
    startClock,
    useCode,
    Value,
    Clock
} from "react-native-reanimated"

function runTiming(clock, from, to) {
    const state = {
        finished: new Value(0),
        position: new Value(from),
        time: new Value(0),
        frameTime: new Value(0),
    };

    const config = {
        duration: 200,
        toValue: new Value(to),
        easing: Easing.inOut(Easing.ease),
    };

    return block([
        cond(
            clockRunning(clock),
            [],
            startClock(clock),
        ),
        timing(clock, state, config),
        cond(state.finished, stopClock(clock)),
        state.position,
    ]);
}

const ButtonAppear = () => {
    const [show, setShow] = useState(false);
    const {clock, animatedValue} = useMemo(() => ({
        clock: new Clock(),
        animatedValue: new Value(0),
    }), []);

    // useEffect(() => {
    //     console.log('huemoe', animatedValue);
    //
    // }, [show]);

    useCode(() => block([
        show
            ? set(animatedValue, runTiming(clock, 0, 1))
            : set(animatedValue, runTiming(clock, 1, 0))
    ]), [show]);

    const opacity = interpolate(animatedValue, {
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    const translateY = interpolate(animatedValue, {
        inputRange: [0, 1],
        outputRange: [120, 0],
    });

    return (
        <TouchableWithoutFeedback onPress={() => {
            setShow(!show);
        }}>
            <View style={styles.buttonContainer}>
                <Animated.View style={{
                    opacity,
                    transform: [{ translateY }]
                }}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => {setShow(!show);}}>
                        <Text style={{fontSize: 40}}>Lalka</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    buttonStyle: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#f33184'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700'
    }
});

export default ButtonAppear;