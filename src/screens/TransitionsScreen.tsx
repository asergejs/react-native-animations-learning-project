import React, {useRef, useState} from "react";
import {Dimensions, ImageStyle, StyleSheet, ViewStyle} from "react-native";

import {cards, FlexibleCard as Card} from "../components/Card";
import Selection from "../components/Selection";
import {Transition, Transitioning, TransitioningView} from "react-native-reanimated";

const {width} = Dimensions.get("window");

interface Layout {
    id: string;
    name: string;
    layout: {
        container: ViewStyle;
        child?: ImageStyle;
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const column: Layout = {
    id: "column",
    name: "Column",
    layout: {
        container: {
            flexDirection: 'column'
        }
    }
};

const row: Layout = {
    id: "row",
    name: "Row",
    layout: {
        container: {
            flexDirection: 'row',
            alignItems: 'center'
        }
    }
};

const wrap: Layout = {
    id: "wrap",
    name: "Wrap",
    layout: {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap'
        }, child: {
            flex: 0,
            width: width / 2 - 8 * 2
        }
    },
};

const layouts = [column, row, wrap];
const transition = <Transition.Change durationMs={400} interpolation="easeIn"/>;

const TransitionsScreen = () => {
    const ref = useRef<TransitioningView>(null);
    const [currentLayout, setCurrentLayout] = useState(layouts[0].layout);
    return (
        <>
            <Transitioning.View style={[styles.container, currentLayout.container]} {...{ref, transition}}>
                {cards.map((card) => (
                    <Card key={card.id} style={currentLayout.child} {...{card}} />
                ))}
            </Transitioning.View>
            {
                layouts.map(layout => (
                    <Selection key={layout.id}
                               name={layout.name}
                               onPress={() => {
                                   if(ref.current) {
                                       ref.current.animateNextTransition();
                                   }
                                   setCurrentLayout(layout.layout);
                               }}
                               isSelected={layout.layout === currentLayout}/>
                ))
            }
        </>
    );
};

export default TransitionsScreen;
