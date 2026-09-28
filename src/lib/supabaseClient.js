import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://hcvxlenwxffozlwxekqa.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjdnhsZW53eGZmb3psd3hla3FhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NTEyMTgsImV4cCI6MjEwMjUyNzIxOH0.tlPX9kvv96_A3ovS1HXPaLixR35eqZpKJQ0HRs2so2E";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
