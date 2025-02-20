import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oekyzijvzufptqqklrab.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9la3l6aWp2enVmcHRxcWtscmFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwMTcxNTIsImV4cCI6MjA1NTU5MzE1Mn0.xL6Ql9MCixCSYGiiVhBu5GmDQcaKE57r3whXjD8yWRw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
