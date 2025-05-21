import React from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const banners = [
  require('@/assets/images/banner1.jpg'),
  require('@/assets/images/banner2.jpg'),
  require('@/assets/images/banner3.jpg'),
];

export default function BannerCarousel() {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {banners.map((banner, index) => (
        <Image key={index} source={banner} style={styles.image} resizeMode="cover" />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    marginBottom: 20,
  },
  image: {
    width,
    height: 180,
  },
});
