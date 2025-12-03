import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SponsorsFooter } from '../../components/SponsorsFooter';

interface CareerStage {
  title: string;
  description: string;
  emoji: string;
  thumbnail: string;
  duration: string;
  benefits: string[];
}

const careerStages: CareerStage[] = [
  {
    title: 'Paid Internship',
    description: 'Get started with hands-on experience while earning money',
    emoji: '🎓',
    thumbnail: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=250&fit=crop',
    duration: '3-6 months',
    benefits: [
      'Learn basic construction skills',
      'Earn while you learn',
      'Work with experienced mentors',
      'Build your professional resume',
    ],
  },
  {
    title: 'Apprentice',
    description: 'Develop your skills under master craftspeople',
    emoji: '🔨',
    thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=250&fit=crop',
    duration: '1-2 years',
    benefits: [
      'Hands-on training every day',
      'Competitive apprentice wages',
      'Learn from industry veterans',
      'Start building your specialty',
    ],
  },
  {
    title: 'Journeyman',
    description: 'Work independently with full skill recognition',
    emoji: '🛠️',
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=250&fit=crop',
    duration: '2-4 years',
    benefits: [
      'Full professional wages',
      'Lead small projects',
      'Train new apprentices',
      'Specialize in your craft',
    ],
  },
  {
    title: 'Master Craftsperson',
    description: 'Lead teams and shape the next generation',
    emoji: '⭐',
    thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=250&fit=crop',
    duration: '5+ years',
    benefits: [
      'Top-tier compensation',
      'Run major projects',
      'Start your own business',
      'Mentor the next generation',
    ],
  },
];

export default function CareerPathScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>📈 Your Career Path</Text>
          <Text style={styles.subtitle}>
            From intern to master craftsperson—build your future step by step
          </Text>
        </View>

        {careerStages.map((stage, index) => (
          <View key={index}>
            <View style={styles.stageCard}>
              <Image 
                source={{ uri: stage.thumbnail }} 
                style={styles.stageImage}
                resizeMode="cover"
              />
              <View style={styles.stageContent}>
                <View style={styles.stageHeader}>
                  <View style={styles.iconContainer}>
                    <Text style={styles.stageEmoji}>{stage.emoji}</Text>
                  </View>
                  <View style={styles.stageTitleContainer}>
                    <Text style={styles.stageTitle}>{stage.title}</Text>
                    <View style={styles.durationBadge}>
                      <Text style={styles.durationText}>⏱️ {stage.duration}</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.stageDescription}>{stage.description}</Text>

                <View style={styles.benefitsContainer}>
                  <Text style={styles.benefitsTitle}>Benefits:</Text>
                  {stage.benefits.map((benefit, benefitIndex) => (
                    <View key={benefitIndex} style={styles.benefitItem}>
                      <Text style={styles.benefitEmoji}>✅</Text>
                      <Text style={styles.benefitText}>{benefit}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            {index < careerStages.length - 1 && (
              <View style={styles.connector}>
                <Text style={styles.connectorEmoji}>⬇️</Text>
              </View>
            )}
          </View>
        ))}

        <View style={styles.opportunityCard}>
          <Text style={styles.opportunityEmoji}>🚀</Text>
          <Text style={styles.opportunityTitle}>Create Opportunities</Text>
          <Text style={styles.opportunityText}>
            As you progress in your career, you'll be able to:
          </Text>
          <View style={styles.opportunityList}>
            <Text style={styles.opportunityItem}>💰 Provide for your family</Text>
            <Text style={styles.opportunityItem}>🏠 Build financial stability</Text>
            <Text style={styles.opportunityItem}>🏢 Start your own business</Text>
            <Text style={styles.opportunityItem}>🤝 Mentor others in your community</Text>
            <Text style={styles.opportunityItem}>🌟 Create lasting impact</Text>
          </View>
        </View>

        <View style={styles.quoteCard}>
          <Text style={styles.quote}>
            "There is something very satisfying about seeing something built, where nothing stood before. 
            Pride in a job well done."
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
  stageCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  stageImage: {
    width: '100%',
    height: 160,
    backgroundColor: '#e0e0e0',
  },
  stageContent: {
    padding: 20,
  },
  stageHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f7f4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  stageEmoji: {
    fontSize: 28,
  },
  stageTitleContainer: {
    flex: 1,
  },
  stageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginBottom: 4,
  },
  durationBadge: {
    backgroundColor: '#ff6b35',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  durationText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  stageDescription: {
    fontSize: 15,
    color: '#666',
    marginBottom: 16,
    lineHeight: 22,
  },
  benefitsContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
  },
  benefitsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginBottom: 8,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  benefitEmoji: {
    fontSize: 16,
    marginRight: 8,
  },
  benefitText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  connector: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  connectorEmoji: {
    fontSize: 28,
  },
  opportunityCard: {
    backgroundColor: '#1a4d3a',
    borderRadius: 12,
    padding: 24,
    marginTop: 24,
    alignItems: 'center',
  },
  opportunityEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  opportunityTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  opportunityText: {
    fontSize: 15,
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  opportunityList: {
    alignSelf: 'stretch',
  },
  opportunityItem: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    paddingLeft: 8,
  },
  quoteCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginTop: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#ff6b35',
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#333',
    lineHeight: 24,
    marginBottom: 12,
  },
  quoteAuthor: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
    textAlign: 'right',
  },
});
