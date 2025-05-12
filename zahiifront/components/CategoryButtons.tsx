import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const categories = ['Амттан', 'Сүү', 'Талх', 'Ундаа', 'Ногоо'];

export default function CategoryButtons() {
  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity key={category} style={styles.button}>
          <Text style={styles.text}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#F1F1F1',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  text: {
    color: '#333',
    fontSize: 14,
  },
});
