import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated';
import { data } from '../data';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export function Accordion() {
  const [currentCardIndex, setCurrentCardIndex] = useState(-1);
  const viewRef = useRef<TransitioningView>(null);

  function handleToggleCard(cardIndex: number) {
    viewRef.current?.animateNextTransition();

    if (cardIndex === currentCardIndex) {
      setCurrentCardIndex(-1);
    } else {
      setCurrentCardIndex(cardIndex);
    }
  }

  return (
    <Transitioning.View
      ref={viewRef}
      transition={transition}
      style={styles.container}
    >
      {data.map(
        ({ backgroundColor, category, color, subCategories }, index) => (
          <TouchableOpacity
            key={category}
            onPress={() => handleToggleCard(index)}
            activeOpacity={0.9}
            style={styles.cardContainer}
          >
            <View style={[styles.card, { backgroundColor }]}>
              <Text style={[styles.heading, { color }]}>{category}</Text>
              {index === currentCardIndex && (
                <View style={styles.subCategoryList}>
                  {subCategories.map((subCategory) => (
                    <Text
                      key={subCategory}
                      style={[styles.cardContent, { color }]}
                    >
                      {subCategory}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          </TouchableOpacity>
        )
      )}
    </Transitioning.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 38,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -2,
  },
  cardContent: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
  },
  subCategoryList: {},
});
