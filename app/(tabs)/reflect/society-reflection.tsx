import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ReflectionEntry {
  id: string;
  date: string;
  content: string;
  type: 'self' | 'society';
}

export default function SocietyReflectionScreen() {
  const router = useRouter();
  const [reflection, setReflection] = useState('');
  const [prompts] = useState([
    "How can I contribute to my community?",
    "What opportunities exist in my area that I haven't explored?",
    "How can I create opportunities for my family?",
    "What role do I want to play in building a better future?",
    "How can learning a trade help me and my community?",
  ]);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

  async function saveReflection() {
    if (!reflection.trim()) {
      Alert.alert('Empty Reflection', 'Please write something before saving.');
      return;
    }

    try {
      const entry: ReflectionEntry = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        content: reflection,
        type: 'society',
      };

      const existing = await AsyncStorage.getItem('reflections');
      const reflections: ReflectionEntry[] = existing ? JSON.parse(existing) : [];
      reflections.push(entry);
      await AsyncStorage.setItem('reflections', JSON.stringify(reflections));

      Alert.alert('Saved!', 'Your reflection has been saved.', [
        { text: 'OK', onPress: () => router.back() },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to save reflection. Please try again.');
    }
  }

  function nextPrompt() {
    setCurrentPromptIndex((prev) => (prev + 1) % prompts.length);
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.promptCard}>
          <Text style={styles.promptLabel}>Reflection Prompt</Text>
          <Text style={styles.promptText}>{prompts[currentPromptIndex]}</Text>
          <TouchableOpacity style={styles.nextButton} onPress={nextPrompt}>
            <Text style={styles.nextButtonText}>Next Prompt</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Your Reflection</Text>
          <TextInput
            style={styles.textInput}
            multiline
            numberOfLines={10}
            placeholder="Write your thoughts here..."
            value={reflection}
            onChangeText={setReflection}
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={saveReflection}>
          <MaterialIcons name="save" size={20} color="#fff" />
          <Text style={styles.saveButtonText}>Save Reflection</Text>
        </TouchableOpacity>
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
  promptCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  promptLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  promptText: {
    fontSize: 18,
    color: '#1a4d3a',
    fontWeight: '600',
    marginBottom: 12,
    lineHeight: 26,
  },
  nextButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
  },
  nextButtonText: {
    color: '#1a4d3a',
    fontSize: 14,
    fontWeight: '600',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a4d3a',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#333',
    minHeight: 200,
    textAlignVertical: 'top',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  saveButton: {
    backgroundColor: '#1a4d3a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

