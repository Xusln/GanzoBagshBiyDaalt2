import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Сүү',
    price: '2500₮',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    name: 'Тараг',
    price: '1800₮',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '3',
    name: 'Талх',
    price: '1200₮',
    image: 'https://via.placeholder.com/100',
  },
];

export default function ProductSection() {
  return (
    <View>
      <Text style={styles.title}>Шинэ бүтээгдэхүүн</Text>
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  card: {
    width: 120,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
    marginRight: 12,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 14,
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#008CBA',
  },
});
