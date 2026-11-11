import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://zougunydbztuqmudymrn.supabase.co';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_WswCqmyE85SiQKo_D_kT_w_nG5HBsmh';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
