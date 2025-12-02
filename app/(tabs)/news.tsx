import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { SponsorsFooter } from '../../components/SponsorsFooter';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'industry' | 'opportunity' | 'success' | 'tips';
  url?: string;
}

// Sample news articles - you can update these regularly
const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Construction Jobs Expected to Grow 4% in 2025',
    excerpt: 'The construction industry continues to show strong growth with thousands of new job openings for skilled workers. Gen Z workers are finding excellent opportunities in the trades.',
    date: 'December 2024',
    category: 'industry',
  },
  {
    id: '2',
    title: 'Why Gen Z is Choosing Blue Collar Careers',
    excerpt: 'More young people are discovering the financial stability, job satisfaction, and entrepreneurial opportunities in construction and skilled trades. Learn why the shift is happening.',
    date: 'December 2024',
    category: 'opportunity',
  },
  {
    id: '3',
    title: 'Local Apprentice Becomes Lead Carpenter in 3 Years',
    excerpt: 'Meet Marcus, who started as a paid intern and is now leading construction projects. His journey shows how dedication and mentorship can fast-track your career.',
    date: 'November 2024',
    category: 'success',
  },
  {
    id: '4',
    title: '5 Essential Skills Every New Construction Worker Needs',
    excerpt: 'Starting in construction? These fundamental skills will set you up for success: safety awareness, measurement accuracy, tool knowledge, teamwork, and problem-solving.',
    date: 'November 2024',
    category: 'tips',
  },
  {
    id: '5',
    title: 'Breaking the Stigma: College Isn\'t the Only Path',
    excerpt: 'Society is finally recognizing that skilled trades offer viable, lucrative career paths. Learn how blue collar workers are changing perceptions and building wealth.',
    date: 'October 2024',
    category: 'industry',
  },
  {
    id: '6',
    title: 'Apprenticeship Programs Now Offering $20+/Hour Starting Pay',
    excerpt: 'Construction companies are competing for talent by offering competitive wages, benefits, and clear career progression. Many apprentices earn while they learn.',
    date: 'October 2024',
    category: 'opportunity',
  },
];

const categoryColors = {
  industry: '#1a4d3a',
  opportunity: '#ff6b35',
  success: '#2d6a4f',
  tips: '#52b788',
};

const categoryLabels = {
  industry: 'Industry News',
  opportunity: 'Opportunities',
  success: 'Success Stories',
  tips: 'Tips & Advice',
};

export default function NewsScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = selectedCategory
    ? newsArticles.filter(article => article.category === selectedCategory)
    : newsArticles;

  function handleArticlePress(article: NewsArticle) {
    if (article.url) {
      Linking.openURL(article.url);
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Blue Collar News</Text>
          <Text style={styles.subtitle}>
            Stay updated on construction industry trends, opportunities, and success stories
          </Text>
        </View>

        <View style={styles.filterContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={[
                styles.filterChip,
                !selectedCategory && styles.filterChipActive,
              ]}
              onPress={() => setSelectedCategory(null)}
            >
              <Text style={[
                styles.filterChipText,
                !selectedCategory && styles.filterChipTextActive,
              ]}>
                All News
              </Text>
            </TouchableOpacity>

            {Object.entries(categoryLabels).map(([key, label]) => (
              <TouchableOpacity
                key={key}
                style={[
                  styles.filterChip,
                  selectedCategory === key && styles.filterChipActive,
                ]}
                onPress={() => setSelectedCategory(key)}
              >
                <Text style={[
                  styles.filterChipText,
                  selectedCategory === key && styles.filterChipTextActive,
                ]}>
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {filteredArticles.map((article) => (
          <TouchableOpacity
            key={article.id}
            style={styles.articleCard}
            onPress={() => handleArticlePress(article)}
          >
            <View style={styles.articleHeader}>
              <View
                style={[
                  styles.categoryBadge,
                  { backgroundColor: categoryColors[article.category] },
                ]}
              >
                <Text style={styles.categoryBadgeText}>
                  {categoryLabels[article.category]}
                </Text>
              </View>
              <Text style={styles.articleDate}>{article.date}</Text>
            </View>

            <Text style={styles.articleTitle}>{article.title}</Text>
            <Text style={styles.articleExcerpt}>{article.excerpt}</Text>

            <View style={styles.articleFooter}>
              <MaterialIcons name="access-time" size={16} color="#999" />
              <Text style={styles.readTime}>3 min read</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.infoCard}>
          <MaterialIcons name="info" size={24} color="#1a4d3a" />
          <Text style={styles.infoText}>
            News articles are regularly updated to keep you informed about the construction industry and blue collar opportunities.
          </Text>
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
  filterContainer: {
    marginBottom: 20,
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  filterChipActive: {
    backgroundColor: '#1a4d3a',
    borderColor: '#1a4d3a',
  },
  filterChipText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  filterChipTextActive: {
    color: '#fff',
  },
  articleCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryBadgeText: {
    fontSize: 11,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  articleDate: {
    fontSize: 12,
    color: '#999',
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginBottom: 8,
    lineHeight: 26,
  },
  articleExcerpt: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 12,
  },
  articleFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  readTime: {
    fontSize: 12,
    color: '#999',
  },
  infoCard: {
    backgroundColor: '#f0f7f4',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    color: '#1a4d3a',
    lineHeight: 20,
  },
});

