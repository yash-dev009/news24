import { createClient } from '@supabase/supabase-js'
const SUPABASE_URL = process.env.NEXT_PUBLIC_SB_URL 
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SB_KEY
export const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);
