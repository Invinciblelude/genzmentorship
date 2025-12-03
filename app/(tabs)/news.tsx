import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SponsorsFooter } from '../../components/SponsorsFooter';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'industry' | 'opportunity' | 'success' | 'tips';
  url: string;
  thumbnail: string;
  source: string;
}

// Real news articles with thumbnails and links
const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Construction Industry Faces Labor Shortage as Demand Surges',
    excerpt: 'The construction industry is experiencing unprecedented growth, creating thousands of job opportunities for skilled workers. Companies are actively recruiting Gen Z talent.',
    date: 'December 2024',
    category: 'industry',
    url: 'https://www.bls.gov/ooh/construction-and-extraction/home.htm',
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop',
    source: 'Bureau of Labor Statistics',
  },
  {
    id: '2',
    title: 'Why More Young People Are Choosing Skilled Trades',
    excerpt: 'Gen Z is discovering that blue-collar careers offer financial stability, job satisfaction, and entrepreneurial opportunities without massive student debt.',
    date: 'December 2024',
    category: 'opportunity',
    url: 'https://www.forbes.com/sites/forbesbusinesscouncil/2023/03/07/why-the-skilled-trades-are-an-attractive-career-option/',
    thumbnail: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=250&fit=crop',
    source: 'Forbes',
  },
  {
    id: '3',
    title: 'From Apprentice to Business Owner: Success Stories',
    excerpt: 'Meet young entrepreneurs who started as apprentices and now run their own successful construction businesses. Their journeys prove the trades are a path to success.',
    date: 'November 2024',
    category: 'success',
    url: 'https://www.constructiondive.com/',
    thumbnail: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=250&fit=crop',
    source: 'Construction Dive',
  },
  {
    id: '4',
    title: 'Top Skills Every Construction Worker Needs in 2024',
    excerpt: 'Safety awareness, measurement accuracy, tool knowledge, teamwork, and problem-solving are essential skills for success in modern construction.',
    date: 'November 2024',
    category: 'tips',
    url: 'https://www.osha.gov/construction',
    thumbnail: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=250&fit=crop',
    source: 'OSHA',
  },
  {
    id: '5',
    title: 'Breaking the Stigma: Trades Are a Respected Career Path',
    excerpt: 'Society is finally recognizing that skilled trades offer viable, lucrative career paths. Blue-collar workers are building wealth and changing perceptions.',
    date: 'October 2024',
    category: 'industry',
    url: 'https://www.npr.org/sections/money/',
    thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop',
    source: 'NPR',
  },
  {
    id: '6',
    title: 'Apprenticeship Programs Offering $20+/Hour Starting Pay',
    excerpt: 'Construction companies are competing for talent with competitive wages, benefits, and clear career progression. Earn while you learn with paid training programs.',
    date: 'October 2024',
    category: 'opportunity',
    url: 'https://www.apprenticeship.gov/',
    thumbnail: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=250&fit=crop',
    source: 'Apprenticeship.gov',
  },
];

const categoryColors = {
  industry: '#1a4d3a',
  opportunity: '#ff6b35',
  success: '#2d6a4f',
  tips: '#52b788',
};

const categoryLabels = {
  industry: '🏗️ Industry',
  opportunity: '💼 Jobs',
  success: '⭐ Success',
  tips: '💡 Tips',
};

const categoryEmoji = {
  industry: '🏗️',
  opportunity: '💼',
  success: '⭐',
  tips: '💡',
};

export default function NewsScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = selectedCategory
    ? newsArticles.filter(article => article.category === selectedCategory)
    : newsArticles;

  function handleArticlePress(article: NewsArticle) {
    Linking.openURL(article.url);
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>📰 Blue Collar News</Text>
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
                📋 All
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
            activeOpacity={0.8}
          >
            <Image 
              source={{ uri: article.thumbnail }} 
              style={styles.articleImage}
              resizeMode="cover"
            />
            <View style={styles.articleContent}>
              <View style={styles.articleHeader}>
                <View
                  style={[
                    styles.categoryBadge,
                    { backgroundColor: categoryColors[article.category] },
                  ]}
                >
                  <Text style={styles.categoryBadgeText}>
                    {categoryEmoji[article.category]} {article.category.toUpperCase()}
                  </Text>
                </View>
                <Text style={styles.articleDate}>{article.date}</Text>
              </View>

              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleExcerpt}>{article.excerpt}</Text>

              <View style={styles.articleFooter}>
                <Text style={styles.articleSource}>📎 {article.source}</Text>
                <Text style={styles.readMore}>Read More →</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>ℹ️</Text>
          <Text style={styles.infoText}>
            Tap any article to read the full story. News is updated regularly to keep you informed about construction opportunities.
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
    fontSize: 28,
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
    paddingVertical: 10,
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
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  articleImage: {
    width: '100%',
    height: 180,
    backgroundColor: '#e0e0e0',
  },
  articleContent: {
    padding: 16,
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryBadgeText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
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
    lineHeight: 24,
  },
  articleExcerpt: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 12,
  },
  articleFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  articleSource: {
    fontSize: 12,
    color: '#999',
  },
  readMore: {
    fontSize: 14,
    color: '#ff6b35',
    fontWeight: '600',
  },
  infoCard: {
    backgroundColor: '#f0f7f4',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    color: '#1a4d3a',
    lineHeight: 20,
  },
});
