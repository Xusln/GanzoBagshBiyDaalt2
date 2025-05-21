import { Image } from 'expo-image';
import { ScrollView, View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import BannerCarousel from '@/components/ui/BannerCarousel';
import CategoryButtons from '@/components/ui/CategoryButtons';
import ProductSection from '@/components/ui/ProductSection';
import SearchBar from '@/components/ui/SearchBar';

const { width } = Dimensions.get('window');

export default function ExploreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.headerImageContainer}>
        <Ionicons
          name="chevron-forward-circle-outline"
          size={310}
          color="#808080"
          style={styles.headerIcon}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.description}>Энэ апп нь эхлүүлэхэд зориулсан жишээ код агуулсан.</Text>

        {/* Search bar */}
        <SearchBar />

        {/* Banner carousel */}
        <BannerCarousel />

        {/* Category buttons */}
        <CategoryButtons />

        {/* Product section */}
        <ProductSection title="Онцлох бүтээгдэхүүн" />

        {/* Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Файл дээр суурилсан чиглүүлэлт</Text>
          <Text style={styles.text}>Энэ апп нь 2 дэлгэцтэй: index.tsx болон explore.tsx</Text>
          <Text style={styles.text}>_layout.tsx файл нь таб навигацын бүтэц зохионо.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Android, iOS болон Web дэмжлэг</Text>
          <Text style={styles.text}>Та энэ төслийг бүх платформ дээр туршиж болно.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Зураг ашиглалт</Text>
          <Text style={styles.text}>Өндөр нягтаршилтай дэлгэцэд зориулж @2x, @3x зургийг ашиглаж болно.</Text>
          <Image
            source={require('@/assets/images/react-logo.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Custom фонт</Text>
          <Text style={styles.text}>SpaceMono фонтыг жишээ болгон ашигласан.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Гэрэл болон харанхуй горим</Text>
          <Text style={styles.text}>useColorScheme() hook ашиглан хэрэглэгчийн сонголтыг мэдэж болно.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Animations</Text>
          <Text style={styles.text}>react-native-reanimated ашиглан хөдөлгөөнт компонент хийсэн.</Text>
          {Platform.OS === 'ios' && (
            <Text style={styles.text}>ParallaxScrollView нь header зурагт параллакс эффект үүсгэнэ.</Text>
          )}
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  headerImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  headerIcon: {
    width: width * 0.9,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  image: {
    alignSelf: 'center',
    marginTop: 16,
    width: 200,
    height: 200,
  },
});
