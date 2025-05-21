import { Image } from 'expo-image';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

const { width } = Dimensions.get('window');

const categories = [
  { name: 'Хөлдөөсөн хүнс', image: require('@/assets/images/cat-frozen.jpg') },
  { name: 'Багцаар нь авья', image: require('@/assets/images/cat-bundle.png') },
  { name: '+18 Электрон', image: require('@/assets/images/cat-18plus.png') },
  { name: 'Маргаашийн хүргэлт', image: require('@/assets/images/cat-fresh.png') },
  { name: 'Бэлэг', image: require('@/assets/images/cat-gift.png') },
  { name: 'Тэжээвэр амьтан', image: require('@/assets/images/cat-pet.jpg') },
];

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.52:8000/products/') // Өөрийн backend IP-г ашиглана
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeText}>Сайн уу, <Text style={styles.loginText}>Нэвтрэх үү?</Text></Text>
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={16} color="gray" />
          <Text style={styles.locationText}>Байршил тогтоогоогүй байна</Text>
        </View>
      </View>

      {/* Banner */}
      <Image
        source={require('@/assets/images/banner.png')}
        style={styles.banner}
        contentFit="cover"
      />

      {/* Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ангилал</Text>
        <View style={styles.grid}>
          {categories.map((cat, i) => (
            <TouchableOpacity key={i} style={styles.catCard}>
              <Image source={cat.image} style={styles.catImage} />
              <Text style={styles.catText}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.viewAllBtn}>
          <Text style={styles.viewAllText}>Бүгдийг харах</Text>
        </TouchableOpacity>
      </View>

      {/* Suggested Products */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Санал болгох бүтээгдэхүүнүүд</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.length > 0 ? (
            products.map((item, index) => (
              <TouchableOpacity key={index} style={styles.card}>
                <Image
                  source={{ uri: item.image }} // backend-с ирж буй зураг URL
                  style={styles.productImage}
                />
                <Text style={styles.productText}>{item.name}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text>Уншиж байна...</Text>
          )}
        </ScrollView>
      </View>

      {/* Last Order */}
      <View style={styles.section}>
        <Text style={styles.sectionSubtitle}>Таны сүүлд захиалсан</Text>
        <View style={styles.lastOrder}>
          <Text>Ингэний сүү 1л • Хүргэлт 20мин</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  headerContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '700',
  },
  loginText: {
    color: '#007bff',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    color: 'gray',
    marginLeft: 4,
  },
  banner: {
    width: width,
    height: 180,
    marginTop: 12,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  sectionSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  catCard: {
    width: '30%',
    marginBottom: 16,
    alignItems: 'center',
  },
  catImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginBottom: 6,
  },
  catText: {
    textAlign: 'center',
    fontSize: 13,
  },
  viewAllBtn: {
    marginTop: 8,
    alignSelf: 'center',
    padding: 6,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
  },
  viewAllText: {
    color: '#007bff',
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
    textAlign: 'center',
  },
  lastOrder: {
    backgroundColor: '#e0f7fa',
    padding: 16,
    borderRadius: 10,
  },
});
