import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import SearchBar from '@/components/SearchBar';
import BannerCarousel from '@/components/BannerCarousel';
import CategoryButtons from '@/components/CategoryButtons';
import ProductSection from '@/components/ProductSection';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SearchBar />

      <BannerCarousel />

      <CategoryButtons />

      <ProductSection title="Онцлох бүтээгдэхүүн" />
      <ProductSection title="Шинээр нэмэгдсэн" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 100,
    gap: 24,
  },
});
