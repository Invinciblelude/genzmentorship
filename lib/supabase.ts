import { createClient } from '@supabase/supabase-js';

// ============================================
// 🔧 SUPABASE CONFIGURATION
// ============================================
// Replace these with your actual Supabase project credentials
// Get them from: https://supabase.com/dashboard/project/YOUR_PROJECT/settings/api

const SUPABASE_URL = 'https://facprtpfcckrcdprjuak.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhY3BydHBmY2NrcmNkcHJqdWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MTcxODEsImV4cCI6MjA4MDM5MzE4MX0.QfjjRgcVgpgVEE-i8CUE4Qfw3WyPzsDb9wA5b9IfEt0';

// ============================================

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Comment type
export interface Comment {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

// Fetch all comments (newest first)
export async function getComments(): Promise<Comment[]> {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching comments:', error);
    return [];
  }

  return data || [];
}

// Add a new comment
export async function addComment(name: string, message: string): Promise<Comment | null> {
  const { data, error } = await supabase
    .from('comments')
    .insert([{ name, message }])
    .select()
    .single();

  if (error) {
    console.error('Error adding comment:', error);
    return null;
  }

  return data;
}

// Delete a comment (optional - for moderation)
export async function deleteComment(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('comments')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting comment:', error);
    return false;
  }

  return true;
}

