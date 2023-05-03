import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { data } from '../data';

export function Accordion() {
  const [currentCardIndex, setCurrentCardIndex] = useState(-1);

  function handleToggleCard(cardIndex: number) {
    if (cardIndex === currentCardIndex) {
      setCurrentCardIndex(-1);
    } else {
      setCurrentCardIndex(cardIndex);
    }
  }

  return (
    <>
      {data.map(
        ({ backgroundColor, category, color, subCategories }, index) => (
          <TouchableOpacity
            key={category}
            onPress={() => handleToggleCard(index)}
            activeOpacity={0.9}
            style={styles.container}
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
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
