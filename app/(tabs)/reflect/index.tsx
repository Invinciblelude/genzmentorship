import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function ReflectScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.title}>✍️ Reflection & Journaling</Text>
        <Text style={styles.subtitle}>
          Take time to reflect on yourself and society. Discover your path forward.
        </Text>

        <Link href="/(tabs)/reflect/self-reflection" asChild>
          <TouchableOpacity style={styles.reflectionCard}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=150&fit=crop' }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardEmoji}>🧘</Text>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Self Reflection</Text>
                <Text style={styles.cardDescription}>
                  Reflect on your strengths, goals, and what matters to you. Understand yourself better.
                </Text>
              </View>
              <Text style={styles.cardArrow}>→</Text>
            </View>
          </TouchableOpacity>
        </Link>

        <Link href="/(tabs)/reflect/society-reflection" asChild>
          <TouchableOpacity style={styles.reflectionCard}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=150&fit=crop' }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardEmoji}>🌍</Text>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Society Reflection</Text>
                <Text style={styles.cardDescription}>
                  Think about your community, society, and how you can make a positive impact.
                </Text>
              </View>
              <Text style={styles.cardArrow}>→</Text>
            </View>
          </TouchableOpacity>
        </Link>

        <Link href="/(tabs)/reflect/journal" asChild>
          <TouchableOpacity style={styles.reflectionCard}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=150&fit=crop' }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardEmoji}>📖</Text>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>My Journal</Text>
                <Text style={styles.cardDescription}>
                  View and continue your previous reflections and journal entries.
                </Text>
              </View>
              <Text style={styles.cardArrow}>→</Text>
            </View>
          </TouchableOpacity>
        </Link>

        <View style={styles.tipCard}>
          <Text style={styles.tipEmoji}>💡</Text>
          <Text style={styles.tipText}>
            Regular reflection helps you understand your values and create meaningful goals for your future.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    lineHeight: 22,
  },
  reflectionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 120,
    backgroundColor: '#e0e0e0',
  },
  cardContent: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  cardArrow: {
    fontSize: 24,
    color: '#1a4d3a',
    fontWeight: 'bold',
  },
  tipCard: {
    backgroundColor: '#fff8f0',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderLeftWidth: 4,
    borderLeftColor: '#ff6b35',
  },
  tipEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});
