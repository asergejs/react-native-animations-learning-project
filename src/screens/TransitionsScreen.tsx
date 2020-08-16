import React from "react";
import { StyleSheet, View } from "react-native";

import {cards, FlexibleCard as Card} from "../components/Card";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const TransitionsScreen = () => {
    return (
        <View style={styles.container}>
            {cards.map((card) => (
                <Card key={card.id} style={{}} {...{ card }} />
            ))}
        </View>
    );
};

export default TransitionsScreen;
