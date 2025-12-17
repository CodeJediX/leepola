// config.js
// This file checks if we are on Vercel or Local
const CONFIG = {
    SUPABASE_URL: window.SUPABASE_URL || 'YOUR_LOCAL_SUPABASE_URL',
    SUPABASE_KEY: window.SUPABASE_KEY || 'YOUR_LOCAL_ANON_KEY'
};