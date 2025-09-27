import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Notice {
  id: number
  title: string
  content: string
  views: number
  created_at: string
  updated_at: string
}

export interface NoticeInsert {
  title: string
  content: string
}