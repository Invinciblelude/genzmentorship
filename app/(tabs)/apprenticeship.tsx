import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { SponsorsFooter } from '../../components/SponsorsFooter';

export default function ApprenticeshipScreen() {
  function handleApply() {
    Linking.openURL('https://www.cameronconstruction.info/careers-with-cameron-construction');
  }

  function handleCall() {
    Linking.openURL('tel:9167174172');
  }

  function handleEmail() {
    Linking.openURL('mailto:Cameronconstruction@live.com');
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Cameron Construction</Text>
          <Text style={styles.subtitle}>Apprenticeship Program</Text>
        </View>

        <View style={styles.card}>
          <MaterialIcons name="info" size={28} color="#1a4d3a" />
          <Text style={styles.cardTitle}>About the Program</Text>
          <Text style={styles.cardText}>
            Cameron Construction's apprenticeship program is designed to create a ladder of opportunity 
            in the construction industry through developing jobsite skills and leadership.
          </Text>
        </View>

        <View style={styles.card}>
          <MaterialIcons name="school" size={28} color="#1a4d3a" />
          <Text style={styles.cardTitle}>What You'll Learn</Text>
          <Text style={styles.cardText}>
            • Hands-on construction skills{'\n'}
            • Leadership and teamwork{'\n'}
            • Professional craftsmanship{'\n'}
            • Jobsite safety and best practices{'\n'}
            • Building techniques from experienced masters
          </Text>
        </View>

        <View style={styles.card}>
          <MaterialIcons name="attach-money" size={28} color="#1a4d3a" />
          <Text style={styles.cardTitle}>Opportunities</Text>
          <Text style={styles.cardText}>
            • Paid internships available{'\n'}
            • Apprenticeship positions{'\n'}
            • Full career path in construction{'\n'}
            • Learn while you earn{'\n'}
            • Build your future with your hands
          </Text>
        </View>

        <View style={styles.quoteCard}>
          <Text style={styles.quote}>
            "I got into this career as a teenager. I was 15. I learned from masters at their craft 
            and I saw how through creating walls and floors, roofs and doors, I could create my own future."
          </Text>
          <Text style={styles.quoteAuthor}>— Stephen Cameron, Owner</Text>
        </View>

        <View style={styles.card}>
          <MaterialIcons name="lightbulb" size={28} color="#ff6b35" />
          <Text style={styles.cardTitle}>Why Construction?</Text>
          <Text style={styles.cardText}>
            Working with your hands is fulfilling and fun. The team atmosphere pushes you to do better. 
            There's nothing like standing up on the peak of a roof, yelling down a measurement to your 
            cut guy, him throwing you a cut piece of wood from below, you catching it and installing it 
            for a perfect fit. Teamwork, Accomplishment, and you get paid!
          </Text>
          <Text style={styles.cardText}>
            {'\n'}It's not for everyone—it's hard, sweaty work. It takes perseverance. It's old school. 
            Learn a skill and become something. Be proud of what you do.
          </Text>
        </View>

        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Ready to Apply?</Text>
          <Text style={styles.contactText}>
            Contact Cameron Construction to learn more about apprenticeship opportunities.
          </Text>
          
          <TouchableOpacity style={styles.contactButton} onPress={handleCall}>
            <MaterialIcons name="phone" size={20} color="#fff" />
            <Text style={styles.contactButtonText}>Call: (916) 717-4172</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactButton} onPress={handleEmail}>
            <MaterialIcons name="email" size={20} color="#fff" />
            <Text style={styles.contactButtonText}>Email Us</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
            <MaterialIcons name="open-in-new" size={20} color="#fff" />
            <Text style={styles.applyButtonText}>Apply Online</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsCard}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>27</Text>
            <Text style={styles.statLabel}>Years Experience</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statNumber}>20</Text>
            <Text style={styles.statLabel}>Years in Business</Text>
          </View>
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
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
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
  quoteCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
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
  },
  contactCard: {
    backgroundColor: '#1a4d3a',
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
  },
  contactTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 15,
    color: '#fff',
    marginBottom: 20,
    lineHeight: 22,
  },
  contactButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 12,
    gap: 8,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  applyButton: {
    backgroundColor: '#ff6b35',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 8,
    gap: 8,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statsCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 20,
  },
});

