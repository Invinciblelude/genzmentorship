import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { SponsorsFooter } from '../../components/SponsorsFooter';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to Gen Z Mentorship</Text>
          <Text style={styles.subtitle}>
            Your journey to building a better future starts here
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>📰</Text>
          <Text style={styles.cardTitle}>Blue Collar News</Text>
          <Text style={styles.cardDescription}>
            Stay updated on construction industry trends, opportunities, and inspiring success stories from Gen Z workers.
          </Text>
          <Link href="/(tabs)/news" asChild>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Read News</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>✍️</Text>
          <Text style={styles.cardTitle}>Reflect</Text>
          <Text style={styles.cardDescription}>
            Take time to reflect on yourself and society. Journal your thoughts and discover your path.
          </Text>
          <Link href="/(tabs)/reflect" asChild>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Start Reflecting</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>👷</Text>
          <Text style={styles.cardTitle}>Apprenticeship Program</Text>
          <Text style={styles.cardDescription}>
            Learn about Cameron Construction's apprenticeship program. Get hands-on experience and build your skills.
          </Text>
          <Link href="/(tabs)/apprenticeship" asChild>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Learn More</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>📈</Text>
          <Text style={styles.cardTitle}>Career Path</Text>
          <Text style={styles.cardDescription}>
            Explore your career opportunities in construction. See how you can grow and create opportunities for your family.
          </Text>
          <Link href="/(tabs)/career-path" asChild>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>View Career Path</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>🧑‍🏫</Text>
          <Text style={styles.cardTitle}>Meet Your Mentor</Text>
          <Text style={styles.cardDescription}>
            Learn about the mentor behind this program and how their journey can inspire yours.
          </Text>
          <Link href="/(tabs)/mentor" asChild>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Meet Your Mentor</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.quoteCard}>
          <Text style={styles.quote}>
            "Learn a skill and become something. Be proud of what you do."
          </Text>
          <Text style={styles.quoteAuthor}>— Stephen Cameron</Text>
        </View>

        <SponsorsFooter />
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
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  cardIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginTop: 4,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  cardButton: {
    backgroundColor: '#1a4d3a',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 150,
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  quoteCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginTop: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#ff6b35',
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 8,
    lineHeight: 24,
  },
  quoteAuthor: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
    textAlign: 'right',
  },
});
