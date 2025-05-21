import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Бүтээгдэхүүн 1',
    price: '₮10,000',
    image: require('@/assets/images/product1.jpg'),
  },
  {
    id: '2',
    name: 'Бүтээгдэхүүн 2',
    price: '₮20,000',
    image: require('@/assets/images/product2.jpg'),
  },
  {
    id: '3',
    name: 'Бүтээгдэхүүн 3',
    price: '₮15,000',
    image: require('@/assets/images/product3.jpg'),
  },
];

export default function ProductSection({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        horizontal
        data={products}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productCard}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  productCard: {
    marginRight: 16,
    width: 140,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 6,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 13,
    color: '#888',
  },
});
