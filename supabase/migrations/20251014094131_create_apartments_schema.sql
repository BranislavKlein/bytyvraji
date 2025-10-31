/*
  # Apartment Sales Platform Schema

  1. New Tables
    - `apartments`
      - `id` (uuid, primary key)
      - `apartment_number` (text, unique)
      - `floor` (integer)
      - `rooms` (numeric)
      - `area_sqm` (numeric)
      - `price` (numeric)
      - `status` (text) - available, reserved, sold
      - `balcony` (boolean)
      - `terrace` (boolean)
      - `layout_image_url` (text, optional)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `contact_inquiries`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `message` (text)
      - `apartment_id` (uuid, optional, foreign key)
      - `created_at` (timestamptz)
    
    - `gallery_images`
      - `id` (uuid, primary key)
      - `title` (text)
      - `image_url` (text)
      - `display_order` (integer)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for apartments and gallery (no auth required)
    - Contact inquiries can be inserted by anyone
    - Only authenticated admins can modify data (future enhancement)
*/

-- Create apartments table
CREATE TABLE IF NOT EXISTS apartments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  apartment_number text UNIQUE NOT NULL,
  floor integer NOT NULL,
  rooms numeric NOT NULL,
  area_sqm numeric NOT NULL,
  price numeric NOT NULL,
  status text NOT NULL DEFAULT 'available',
  balcony boolean DEFAULT false,
  terrace boolean DEFAULT false,
  layout_image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  apartment_id uuid REFERENCES apartments(id),
  created_at timestamptz DEFAULT now()
);

-- Create gallery images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  image_url text NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE apartments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- Apartments policies (public read)
CREATE POLICY "Anyone can view apartments"
  ON apartments FOR SELECT
  TO anon, authenticated
  USING (true);

-- Gallery policies (public read)
CREATE POLICY "Anyone can view gallery images"
  ON gallery_images FOR SELECT
  TO anon, authenticated
  USING (true);

-- Contact inquiries policies (anyone can insert)
CREATE POLICY "Anyone can submit contact inquiry"
  ON contact_inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_apartments_floor ON apartments(floor);
CREATE INDEX IF NOT EXISTS idx_apartments_status ON apartments(status);
CREATE INDEX IF NOT EXISTS idx_gallery_display_order ON gallery_images(display_order);