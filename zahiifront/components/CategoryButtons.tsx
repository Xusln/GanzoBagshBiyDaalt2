import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const categories = [
  { id: '1', name: 'Шинэ' },
  { id: '2', name: 'Хямдралтай' },
  { id: '3', name: 'Төрөл бүр' },
  { id: '4', name: 'Шилдэг' },
];

export default function CategoryButtons() {
  return (
    <View style={styles.container}>
      {categories.map(cat => (
        <TouchableOpacity key={cat.id} style={styles.button}>
          <Text style={styles.buttonText}>{cat.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
