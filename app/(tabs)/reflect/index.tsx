import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function ReflectScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.title}>Reflection & Journaling</Text>
        <Text style={styles.subtitle}>
          Take time to reflect on yourself and society. Discover your path forward.
        </Text>

        <Link href="/(tabs)/reflect/self-reflection" asChild>
          <TouchableOpacity style={styles.reflectionCard}>
            <MaterialIcons name="person" size={32} color="#1a4d3a" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Self Reflection</Text>
              <Text style={styles.cardDescription}>
                Reflect on your strengths, goals, and what matters to you. Understand yourself better.
              </Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
        </Link>

        <Link href="/(tabs)/reflect/society-reflection" asChild>
          <TouchableOpacity style={styles.reflectionCard}>
            <MaterialIcons name="groups" size={32} color="#1a4d3a" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Society Reflection</Text>
              <Text style={styles.cardDescription}>
                Think about your community, society, and how you can make a positive impact.
              </Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
        </Link>

        <Link href="/(tabs)/reflect/journal" asChild>
          <TouchableOpacity style={styles.reflectionCard}>
            <MaterialIcons name="book" size={32} color="#1a4d3a" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>My Journal</Text>
              <Text style={styles.cardDescription}>
                View and continue your previous reflections and journal entries.
              </Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
        </Link>

        <View style={styles.tipCard}>
          <MaterialIcons name="lightbulb" size={24} color="#ff6b35" />
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
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
    marginLeft: 16,
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
  tipText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginLeft: 12,
    lineHeight: 20,
  },
});

