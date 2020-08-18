import React from "react";
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import Animated from "react-native-reanimated";

import Card, {cards} from "../components/Card"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
});

const UseTransition = () => {
    return (
      <View style={styles.container}>
          {cards.map((card : Card)=> {
              return (
                  <Animated.View key={card.id}>
                      <Card {...{ card }} />
                  </Animated.View>
              );
          })}
          <TouchableOpacity onPress={() => true}>
              <View style={{width: 50, backgroundColor: 'cyan'}}>
                  <Text>Button</Text>
              </View>
          </TouchableOpacity>
      </View>
    );
};

export default UseTransition;