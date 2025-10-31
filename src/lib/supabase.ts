import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Apartment = {
  id: string;
  apartment_number: string;
  floor: number;
  rooms: number;
  area_sqm: number;
  price: number;
  status: 'available' | 'reserved' | 'sold';
  balcony: boolean;
  terrace: boolean;
  layout_image_url: string | null;
  created_at: string;
  updated_at: string;
};

export type GalleryImage = {
  id: string;
  title: string;
  image_url: string;
  display_order: number;
  created_at: string;
};

export type ContactInquiry = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  apartment_id?: string;
};
