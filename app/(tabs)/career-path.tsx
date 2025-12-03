import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SponsorsFooter } from '../../components/SponsorsFooter';

interface CareerStage {
  title: string;
  description: string;
  emoji: string;
  duration: string;
  benefits: string[];
  thumbnail: string;
}

const careerStages: CareerStage[] = [
  {
    title: 'Paid Internship',
    description: 'Get started with hands-on experience while earning',
    emoji: '🎓',
    duration: '3-6 months',
    benefits: [
      'Learn basic construction skills',
      'Earn while you learn',
      'Work with experienced mentors',
      'Build your resume',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=200&fit=crop',
  },
  {
    title: 'Apprentice',
    description: 'Formal apprenticeship program with structured learning',
    emoji: '🔨',
    duration: '1-2 years',
    benefits: [
      'Structured skill development',
      'Increased pay as you progress',
      'Learn from master craftspeople',
      'Teamwork and leadership skills',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=200&fit=crop',
  },
  {
    title: 'Journeyman',
    description: 'Skilled craftsperson with proven abilities',
    emoji: '🛠️',
    duration: '2-4 years',
    benefits: [
      'Full journeyman wages',
      'Lead projects and teams',
      'Teach apprentices',
      'Specialized skills development',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=200&fit=crop',
  },
  {
    title: 'Master Craftsperson',
    description: 'Expert level with leadership opportunities',
    emoji: '⭐',
    duration: '5+ years',
    benefits: [
      'Top-tier compensation',
      'Project management',
      'Business development',
      'Mentor the next generation',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=200&fit=crop',
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
                  <View style={styles.emojiContainer}>
                    <Text style={styles.stageEmoji}>{stage.emoji}</Text>
                  </View>
                  <View style={styles.stageTitleContainer}>
                    <Text style={styles.stageTitle}>{stage.title}</Text>
                    <Text style={styles.stageDuration}>⏱️ {stage.duration}</Text>
                  </View>
                </View>
                <Text style={styles.stageDescription}>{stage.description}</Text>
                
                <View style={styles.benefitsContainer}>
                  <Text style={styles.benefitsTitle}>✅ Benefits:</Text>
                  {stage.benefits.map((benefit, benefitIndex) => (
                    <View key={benefitIndex} style={styles.benefitItem}>
                      <Text style={styles.benefitBullet}>•</Text>
                      <Text style={styles.benefitText}>{benefit}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            {index < careerStages.length - 1 && (
              <View style={styles.connector}>
                <Text style={styles.connectorArrow}>⬇️</Text>
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
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  stageImage: {
    width: '100%',
    height: 140,
    backgroundColor: '#e0e0e0',
  },
  stageContent: {
    padding: 16,
  },
  stageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  emojiContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f7f4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stageEmoji: {
    fontSize: 24,
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
  stageDuration: {
    fontSize: 14,
    color: '#666',
  },
  stageDescription: {
    fontSize: 15,
    color: '#333',
    marginBottom: 16,
    lineHeight: 22,
  },
  benefitsContainer: {
    marginTop: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
  },
  benefitsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a4d3a',
    marginBottom: 8,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  benefitBullet: {
    fontSize: 14,
    color: '#1a4d3a',
    marginRight: 8,
    fontWeight: 'bold',
  },
  benefitText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    lineHeight: 20,
  },
  connector: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  connectorArrow: {
    fontSize: 24,
  },
  opportunityCard: {
    backgroundColor: '#fff8f0',
    borderRadius: 12,
    padding: 24,
    marginTop: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#ff6b35',
    alignItems: 'center',
  },
  opportunityEmoji: {
    fontSize: 40,
    marginBottom: 12,
  },
  opportunityTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginBottom: 8,
  },
  opportunityText: {
    fontSize: 15,
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  opportunityList: {
    width: '100%',
  },
  opportunityItem: {
    fontSize: 15,
    color: '#333',
    marginBottom: 8,
    lineHeight: 22,
  },
  quoteCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginTop: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#1a4d3a',
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 12,
    lineHeight: 24,
  },
  quoteAuthor: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
    textAlign: 'right',
  },
});
