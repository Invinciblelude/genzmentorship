import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

interface ReflectionEntry {
  id: string;
  date: string;
  content: string;
  type: 'self' | 'society';
}

export default function JournalScreen() {
  const [reflections, setReflections] = useState<ReflectionEntry[]>([]);

  useEffect(() => {
    loadReflections();
  }, []);

  async function loadReflections() {
    try {
      const stored = await AsyncStorage.getItem('reflections');
      if (stored) {
        const parsed = JSON.parse(stored) as ReflectionEntry[];
        setReflections(parsed.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
      }
    } catch (error) {
      console.error('Failed to load reflections:', error);
    }
  }

  async function deleteReflection(id: string) {
    Alert.alert(
      'Delete Reflection',
      'Are you sure you want to delete this reflection?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              const updated = reflections.filter((r) => r.id !== id);
              await AsyncStorage.setItem('reflections', JSON.stringify(updated));
              setReflections(updated);
            } catch (error) {
              Alert.alert('Error', 'Failed to delete reflection.');
            }
          },
        },
      ]
    );
  }

  if (reflections.length === 0) {
    return (
      <SafeAreaView style={styles.container} edges={['bottom']}>
        <View style={styles.emptyContainer}>
          <MaterialIcons name="book" size={64} color="#ccc" />
          <Text style={styles.emptyText}>No journal entries yet</Text>
          <Text style={styles.emptySubtext}>
            Start reflecting to see your entries here
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {reflections.map((reflection) => (
          <View key={reflection.id} style={styles.entryCard}>
            <View style={styles.entryHeader}>
              <View style={styles.entryMeta}>
                <MaterialIcons
                  name={reflection.type === 'self' ? 'person' : 'groups'}
                  size={20}
                  color="#1a4d3a"
                />
                <Text style={styles.entryType}>
                  {reflection.type === 'self' ? 'Self Reflection' : 'Society Reflection'}
                </Text>
                <Text style={styles.entryDate}>
                  {format(new Date(reflection.date), 'MMM d, yyyy')}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => deleteReflection(reflection.id)}
                style={styles.deleteButton}
              >
                <MaterialIcons name="delete" size={20} color="#ff6b35" />
              </TouchableOpacity>
            </View>
            <Text style={styles.entryContent}>{reflection.content}</Text>
          </View>
        ))}
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#666',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  entryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  entryMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  entryType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a4d3a',
  },
  entryDate: {
    fontSize: 12,
    color: '#999',
    marginLeft: 'auto',
  },
  deleteButton: {
    padding: 4,
  },
  entryContent: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
});

