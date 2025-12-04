import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SponsorsFooter } from '../../components/SponsorsFooter';

interface Comment {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

export default function CommentsScreen() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    try {
      const stored = await AsyncStorage.getItem('genz_comments');
      if (stored) {
        setComments(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading comments:', error);
    }
  };

  const saveComment = async () => {
    if (!name.trim() || !message.trim()) return;
    
    setIsSubmitting(true);
    
    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      timestamp: Date.now(),
    };

    try {
      const updatedComments = [newComment, ...comments];
      await AsyncStorage.setItem('genz_comments', JSON.stringify(updatedComments));
      setComments(updatedComments);
      setName('');
      setMessage('');
    } catch (error) {
      console.error('Error saving comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerIcon}>💬</Text>
          <Text style={styles.title}>Community Comments</Text>
          <Text style={styles.subtitle}>
            Share your thoughts, ask questions, and connect with others on their mentorship journey
          </Text>
        </View>

        {/* Comment Form */}
        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Leave a Comment</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Your Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name..."
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
              maxLength={50}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Your Message</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Share your thoughts, questions, or experiences..."
              placeholderTextColor="#999"
              value={message}
              onChangeText={setMessage}
              multiline
              numberOfLines={4}
              maxLength={500}
              textAlignVertical="top"
            />
            <Text style={styles.charCount}>{message.length}/500</Text>
          </View>

          <TouchableOpacity 
            style={[styles.submitButton, (!name.trim() || !message.trim()) && styles.submitButtonDisabled]}
            onPress={saveComment}
            disabled={!name.trim() || !message.trim() || isSubmitting}
          >
            <Text style={styles.submitButtonText}>
              {isSubmitting ? '⏳ Posting...' : '📝 Post Comment'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Guidelines */}
        <View style={styles.guidelinesCard}>
          <Text style={styles.guidelinesTitle}>📋 Community Guidelines</Text>
          <Text style={styles.guidelinesText}>
            • Be respectful and supportive{'\n'}
            • Share constructive feedback{'\n'}
            • Ask questions about construction careers{'\n'}
            • Inspire and motivate others
          </Text>
        </View>

        {/* Comments List */}
        <View style={styles.commentsSection}>
          <Text style={styles.sectionTitle}>
            {comments.length > 0 ? `💭 Recent Comments (${comments.length})` : '💭 Be the first to comment!'}
          </Text>
          
          {comments.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyIcon}>🎤</Text>
              <Text style={styles.emptyText}>No comments yet</Text>
              <Text style={styles.emptySubtext}>Start the conversation by sharing your thoughts!</Text>
            </View>
          ) : (
            comments.map((comment) => (
              <View key={comment.id} style={styles.commentCard}>
                <View style={styles.commentHeader}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{comment.name.charAt(0).toUpperCase()}</Text>
                  </View>
                  <View style={styles.commentMeta}>
                    <Text style={styles.commentName}>{comment.name}</Text>
                    <Text style={styles.commentDate}>{formatDate(comment.timestamp)}</Text>
                  </View>
                </View>
                <Text style={styles.commentMessage}>{comment.message}</Text>
              </View>
            ))
          )}
        </View>

        {/* Encouragement */}
        <View style={styles.quoteCard}>
          <Text style={styles.quote}>
            "Your voice matters. Share your journey and inspire the next generation of builders."
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
    alignItems: 'center',
    marginBottom: 24,
  },
  headerIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  formCard: {
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
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
  },
  textArea: {
    minHeight: 100,
    paddingTop: 12,
  },
  charCount: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
    marginTop: 4,
  },
  submitButton: {
    backgroundColor: '#1a4d3a',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#ccc',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  guidelinesCard: {
    backgroundColor: '#e8f5e9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#1a4d3a',
  },
  guidelinesTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginBottom: 8,
  },
  guidelinesText: {
    fontSize: 13,
    color: '#555',
    lineHeight: 22,
  },
  commentsSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a4d3a',
    marginBottom: 12,
  },
  emptyState: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  commentCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1a4d3a',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  commentMeta: {
    flex: 1,
  },
  commentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  commentDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  commentMessage: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
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
    fontSize: 15,
    fontStyle: 'italic',
    color: '#333',
    textAlign: 'center',
    lineHeight: 24,
  },
});

