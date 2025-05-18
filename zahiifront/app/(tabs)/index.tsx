import { Image } from 'expo-image';
import { Platform, StyleSheet, Dimensions, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('@/assets/images/banner.jpg')}
        style={styles.banner}
        contentFit="cover"
      />

      <ThemedView style={styles.section}>
        <ThemedText type="title">Санал болгох бүтээгдэхүүнүүд</ThemedText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Сүү', 'Иогурт', 'Тараг'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              <Image
                source={require('@/assets/images/product-sample.png')}
                style={styles.productImage}
              />
              <Text style={styles.productText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Таны сүүлд захиалсан</ThemedText>
        <View style={styles.lastOrder}>
          <Text>Ингэний сүү 1л • Хүргэлт 20мин</Text>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  banner: {
    width: width,
    height: 180,
  },
  section: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  card: {
    width: 120,
    height: 140,
    backgroundColor: '#f5f5f5',
    marginRight: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  productText: {
    fontWeight: '600',
  },
  lastOrder: {
    backgroundColor: '#e0f7fa',
    padding: 16,
    borderRadius: 10,
    marginTop: 8,
  },
});
