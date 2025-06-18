// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xkdgbndlvsgfqjmgkkdh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZGdibmRsdnNnZnFqbWdra2RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NTIxNjgsImV4cCI6MjA2MDMyODE2OH0.xZaOQX4kiBVGdsWITble9ol_aVRLBVQig-yRqcvOYn0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
