import { createClient } from "@supabase/supabase-js"


const SUPABASE_URL = "https://atxiinowantcqotnprab.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0eGlpbm93YW50Y3FvdG5wcmFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxOTU1ODcsImV4cCI6MjA3OTc3MTU4N30.ZDy75rPEztjgWyDRUBFQEGJgL1oXLD7JENiYbgbG8iU"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
