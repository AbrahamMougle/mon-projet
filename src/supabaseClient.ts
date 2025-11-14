import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://vbwyrfqfsusxtgvobzqu.supabase.co"; // à récupérer dans Supabase > Settings > API
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZid3lyZnFmc3VzeHRndm9ienF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3OTc5MzcsImV4cCI6MjA3ODM3MzkzN30.HUgUlcYxAQ-x3veGkZJo9Q9zpw_Cv2kwi61kyCCaHxc"; // idem

export  const supabase = createClient(supabaseUrl, supabaseAnonKey);