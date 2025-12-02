import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { SponsorsFooter } from '../../components/SponsorsFooter';

export default function MentorScreen() {
  function handleWebsite() {
    Linking.openURL('https://www.nestinghomesolutions.com/experience');
  }

  function handleContact() {
    Linking.openURL('https://www.nestinghomesolutions.com');
  }

  function handleCall() {
    Linking.openURL('tel:9164082256');
  }

  function handleEmail() {
    Linking.openURL('mailto:vince@nestinghomesolutions.com');
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.heroCard}>
          <View style={styles.avatarContainer}>
            <Image 
              source={require('../../assets/mentor-photo.png')} 
              style={styles.avatar}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.heroTitle}>Your Mentor</Text>
          <Text style={styles.heroSubtitle}>Building Communities, Inspiring Futures</Text>
        </View>

        <View style={styles.card}>
          <MaterialIcons name="star" size={28} color="#ff6b35" />
          <Text style={styles.cardTitle}>My Mission</Text>
          <Text style={styles.cardText}>
            I believe in the power of construction to transform lives and communities. Through Gen Z Mentorship, 
            I'm dedicated to helping young people discover their potential in the trades and create opportunities 
            for themselves and their families.
          </Text>
        </View>

        <View style={styles.card}>
          <MaterialIcons name="build" size={28} color="#1a4d3a" />
          <Text style={styles.cardTitle}>My Journey</Text>
          <Text style={styles.cardText}>
            As the founder of Nesting Home Solutions, I've seen firsthand how construction skills can change lives. 
            From building homes to building careers, I've dedicated my career to creating pathways for others to succeed.
          </Text>
          <Text style={styles.cardText}>
            {'\n'}Every structure we build is more than walls and roofs—it's opportunity, pride, and community impact.
          </Text>
        </View>

        <View style={styles.card}>
          <MaterialIcons name="school" size={28} color="#1a4d3a" />
          <Text style={styles.cardTitle}>What I Teach</Text>
          <View style={styles.skillsList}>
            <View style={styles.skillItem}>
              <MaterialIcons name="check-circle" size={20} color="#1a4d3a" />
              <Text style={styles.skillText}>Construction fundamentals and advanced techniques</Text>
            </View>
            <View style={styles.skillItem}>
              <MaterialIcons name="check-circle" size={20} color="#1a4d3a" />
              <Text style={styles.skillText}>Professional craftsmanship and quality standards</Text>
            </View>
            <View style={styles.skillItem}>
              <MaterialIcons name="check-circle" size={20} color="#1a4d3a" />
              <Text style={styles.skillText}>Leadership and team collaboration</Text>
            </View>
            <View style={styles.skillItem}>
              <MaterialIcons name="check-circle" size={20} color="#1a4d3a" />
              <Text style={styles.skillText}>Business development and entrepreneurship</Text>
            </View>
            <View style={styles.skillItem}>
              <MaterialIcons name="check-circle" size={20} color="#1a4d3a" />
              <Text style={styles.skillText}>Community impact and giving back</Text>
            </View>
          </View>
        </View>

        <View style={styles.philosophyCard}>
          <MaterialIcons name="lightbulb" size={32} color="#ff6b35" />
          <Text style={styles.philosophyTitle}>My Philosophy</Text>
          <Text style={styles.philosophyText}>
            "Construction isn't just about building structures—it's about building lives, communities, and futures. 
            Every young person deserves the opportunity to create something meaningful with their hands and build 
            a career they can be proud of."
          </Text>
        </View>

        <View style={styles.card}>
          <MaterialIcons name="volunteer-activism" size={28} color="#1a4d3a" />
          <Text style={styles.cardTitle}>Why I Mentor</Text>
          <Text style={styles.cardText}>
            Society has told young people that working with their hands isn't valuable. I'm here to change that narrative. 
            Construction offers incredible opportunities for growth, financial stability, and community impact.
          </Text>
          <Text style={styles.cardText}>
            {'\n'}Through this mentorship program, I want to help you:
          </Text>
          <Text style={styles.bulletText}>• Discover your strengths and potential</Text>
          <Text style={styles.bulletText}>• Build valuable skills that last a lifetime</Text>
          <Text style={styles.bulletText}>• Create opportunities for yourself and your family</Text>
          <Text style={styles.bulletText}>• Make a positive impact in your community</Text>
          <Text style={styles.bulletText}>• Build pride in your work and yourself</Text>
        </View>

        <View style={styles.experienceCard}>
          <MaterialIcons name="apartment" size={28} color="#fff" />
          <Text style={styles.experienceCardTitle}>Nesting Home Solutions</Text>
          <Text style={styles.experienceCardText}>
            Through my company, Nesting Home Solutions, I've helped countless families build their dream homes 
            and create lasting value in their communities. Now I want to help you build your dream career.
          </Text>
          
          <TouchableOpacity style={styles.websiteButton} onPress={handleWebsite}>
            <MaterialIcons name="web" size={20} color="#fff" />
            <Text style={styles.websiteButtonText}>View My Experience</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inspirationCard}>
          <Text style={styles.inspirationTitle}>Let's Build Together</Text>
          <Text style={styles.inspirationText}>
            Whether you're interested in construction, want to learn a trade, or looking to create opportunities 
            for your family—I'm here to guide you. Let's reflect on who you are, explore what's possible, and 
            build your future together.
          </Text>
        </View>

        <View style={styles.ctaCard}>
          <Text style={styles.ctaTitle}>Ready to Start Your Journey?</Text>
          <Text style={styles.ctaText}>
            Begin with self-reflection, explore the apprenticeship program, and let's create your path to success.
          </Text>
          
          <View style={styles.contactInfo}>
            <Text style={styles.contactName}>Vince Dang</Text>
            <Text style={styles.contactRole}>CEO, Nesting Home Solutions</Text>
          </View>

          <TouchableOpacity style={styles.ctaButton} onPress={handleCall}>
            <MaterialIcons name="phone" size={20} color="#fff" />
            <Text style={styles.ctaButtonText}>Call: (916) 408-2256</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ctaButtonSecondary} onPress={handleEmail}>
            <MaterialIcons name="email" size={20} color="#1a4d3a" />
            <Text style={styles.ctaButtonSecondaryText}>Email Me</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ctaButtonSecondary} onPress={handleContact}>
            <MaterialIcons name="web" size={20} color="#1a4d3a" />
            <Text style={styles.ctaButtonSecondaryText}>Visit Website</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quoteCard}>
          <Text style={styles.quote}>
            "The best way to predict your future is to build it—literally."
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
  heroCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 32,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    marginBottom: 16,
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#1a4d3a',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginBottom: 8,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
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
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginTop: 12,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
  },
  bulletText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
    marginLeft: 8,
  },
  skillsList: {
    marginTop: 8,
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  skillText: {
    fontSize: 15,
    color: '#333',
    marginLeft: 12,
    flex: 1,
    lineHeight: 22,
  },
  philosophyCard: {
    backgroundColor: '#fff8f0',
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#ff6b35',
  },
  philosophyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginTop: 12,
    marginBottom: 16,
  },
  philosophyText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 26,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  experienceCard: {
    backgroundColor: '#1a4d3a',
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
  },
  experienceCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 12,
    marginBottom: 12,
  },
  experienceCardText: {
    fontSize: 15,
    color: '#fff',
    lineHeight: 24,
  },
  websiteButton: {
    backgroundColor: '#ff6b35',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 16,
    gap: 8,
  },
  websiteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inspirationCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    borderTopWidth: 4,
    borderTopColor: '#1a4d3a',
  },
  inspirationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginBottom: 12,
    textAlign: 'center',
  },
  inspirationText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
  },
  ctaCard: {
    backgroundColor: '#1a4d3a',
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaText: {
    fontSize: 15,
    color: '#fff',
    marginBottom: 20,
    lineHeight: 24,
    textAlign: 'center',
  },
  contactInfo: {
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    width: '100%',
  },
  contactName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  contactRole: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  ctaButton: {
    backgroundColor: '#ff6b35',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    gap: 8,
    width: '100%',
    marginBottom: 12,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ctaButtonSecondary: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    gap: 8,
    width: '100%',
    marginBottom: 12,
  },
  ctaButtonSecondaryText: {
    color: '#1a4d3a',
    fontSize: 16,
    fontWeight: '600',
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
    fontSize: 18,
    fontStyle: 'italic',
    color: '#1a4d3a',
    lineHeight: 28,
    textAlign: 'center',
    fontWeight: '600',
  },
});

