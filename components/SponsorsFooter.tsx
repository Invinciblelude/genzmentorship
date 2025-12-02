import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function SponsorsFooter() {
  function handleNestingHome() {
    Linking.openURL('https://www.nestinghomesolutions.com');
  }

  function handleCameronConstruction() {
    Linking.openURL('https://www.cameronconstruction.info');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proudly Sponsored By</Text>
      
      <TouchableOpacity style={styles.sponsorCard} onPress={handleNestingHome}>
        <MaterialIcons name="home-work" size={32} color="#1a4d3a" />
        <View style={styles.sponsorInfo}>
          <Text style={styles.sponsorName}>Nesting Home Solutions</Text>
          <Text style={styles.sponsorTagline}>Building Dreams, Creating Homes</Text>
        </View>
        <MaterialIcons name="open-in-new" size={20} color="#666" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.sponsorCard} onPress={handleCameronConstruction}>
        <MaterialIcons name="construction" size={32} color="#1a4d3a" />
        <View style={styles.sponsorInfo}>
          <Text style={styles.sponsorName}>Cameron Construction</Text>
          <Text style={styles.sponsorTagline}>27 Years of Elite Craftsmanship</Text>
        </View>
        <MaterialIcons name="open-in-new" size={20} color="#666" />
      </TouchableOpacity>

      <View style={styles.partnershipText}>
        <MaterialIcons name="handshake" size={20} color="#ff6b35" />
        <Text style={styles.partnershipDescription}>
          In partnership to create opportunities for Gen Z in construction trades
        </Text>
      </View>

      <Text style={styles.footer}>
        Gen Z Mentorship © 2024 • Building Futures Together
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    padding: 24,
    marginTop: 32,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a4d3a',
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sponsorCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sponsorInfo: {
    flex: 1,
    marginLeft: 16,
  },
  sponsorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginBottom: 4,
  },
  sponsorTagline: {
    fontSize: 13,
    color: '#666',
  },
  partnershipText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    gap: 8,
  },
  partnershipDescription: {
    fontSize: 13,
    color: '#666',
    fontStyle: 'italic',
    flex: 1,
    lineHeight: 18,
  },
  footer: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 16,
  },
});

