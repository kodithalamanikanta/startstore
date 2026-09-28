-- ========================================================
-- START SHOP — SUPABASE / POSTGRESQL DATABASE MIGRATION V3
-- ========================================================

-- 1. CUSTOM ENUM TYPES
CREATE TYPE public.user_role AS ENUM ('customer', 'admin');
CREATE TYPE public.content_status AS ENUM ('draft', 'published', 'archived');
CREATE TYPE public.investment_level_type AS ENUM ('Low', 'Medium', 'High');
CREATE TYPE public.difficulty_level_type AS ENUM ('Easy', 'Medium', 'Advanced');
CREATE TYPE public.profit_potential_type AS ENUM ('Low', 'Medium', 'High', 'Very High');
CREATE TYPE public.license_requirement_type AS ENUM ('required', 'conditional', 'recommended');
CREATE TYPE public.cost_frequency_type AS ENUM ('one_time', 'monthly', 'annual');

-- 2. PUBLIC PROFILES TABLE (Linked to auth.users)
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT NOT NULL,
  avatar_url TEXT,
  role public.user_role NOT NULL DEFAULT 'customer',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. CATEGORIES MASTER TABLE
CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  status public.content_status NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. BUSINESSES TABLE
CREATE TABLE public.businesses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  primary_category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE RESTRICT,
  short_description TEXT NOT NULL,
  description TEXT NOT NULL,
  min_investment_estimate NUMERIC(12,2) NOT NULL CHECK (min_investment_estimate >= 0),
  typical_investment_estimate NUMERIC(12,2) NOT NULL CHECK (typical_investment_estimate >= min_investment_estimate),
  max_investment_estimate NUMERIC(12,2) NOT NULL CHECK (max_investment_estimate >= typical_investment_estimate),
  currency TEXT NOT NULL DEFAULT 'INR',
  investment_level public.investment_level_type NOT NULL,
  difficulty public.difficulty_level_type NOT NULL,
  profit_potential public.profit_potential_type NOT NULL,
  best_for TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  status public.content_status NOT NULL DEFAULT 'draft',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  updated_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL
);

-- 5. BUSINESS GUIDES TABLE (1:1 with businesses)
CREATE TABLE public.business_guides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID NOT NULL UNIQUE REFERENCES public.businesses(id) ON DELETE CASCADE,
  overview TEXT NOT NULL,
  market_insights TEXT,
  marketing_guidance TEXT[] DEFAULT '{}',
  common_mistakes TEXT[] DEFAULT '{}',
  faqs JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. BUSINESS COSTS TABLE
CREATE TABLE public.business_costs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  item_name TEXT NOT NULL,
  cost_category TEXT NOT NULL,
  min_amount NUMERIC(12,2) NOT NULL CHECK (min_amount >= 0),
  typical_amount NUMERIC(12,2) NOT NULL CHECK (typical_amount >= min_amount),
  max_amount NUMERIC(12,2) NOT NULL CHECK (max_amount >= typical_amount),
  currency TEXT NOT NULL DEFAULT 'INR',
  frequency public.cost_frequency_type NOT NULL DEFAULT 'one_time',
  is_mandatory BOOLEAN NOT NULL DEFAULT true,
  assumptions TEXT,
  source_url TEXT,
  last_verified_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 7. MASTER LICENSES TABLE
CREATE TABLE public.licenses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  authority TEXT NOT NULL,
  description TEXT NOT NULL,
  official_source_url TEXT NOT NULL,
  jurisdiction TEXT NOT NULL DEFAULT 'National',
  estimated_fee NUMERIC(10,2) CHECK (estimated_fee >= 0),
  estimated_days INTEGER CHECK (estimated_days > 0),
  documents_required TEXT[] DEFAULT '{}',
  status public.content_status NOT NULL DEFAULT 'published',
  last_verified_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  verified_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 8. BUSINESS LICENSES JUNCTION TABLE
CREATE TABLE public.business_licenses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  license_id UUID NOT NULL REFERENCES public.licenses(id) ON DELETE RESTRICT,
  requirement_type public.license_requirement_type NOT NULL DEFAULT 'required',
  applicability_condition TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT unique_business_license UNIQUE (business_id, license_id)
);

-- 9. MASTER EQUIPMENT TABLE
CREATE TABLE public.equipment (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  description TEXT,
  price_min NUMERIC(12,2) NOT NULL CHECK (price_min >= 0),
  price_max NUMERIC(12,2) NOT NULL CHECK (price_max >= price_min),
  currency TEXT NOT NULL DEFAULT 'INR',
  specifications JSONB DEFAULT '{}'::jsonb,
  price_source_url TEXT,
  last_price_verified_at TIMESTAMPTZ,
  status public.content_status NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 10. BUSINESS EQUIPMENT JUNCTION TABLE
CREATE TABLE public.business_equipment (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  equipment_id UUID NOT NULL REFERENCES public.equipment(id) ON DELETE RESTRICT,
  quantity_estimate INTEGER NOT NULL DEFAULT 1 CHECK (quantity_estimate > 0),
  is_required BOOLEAN NOT NULL DEFAULT true,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT unique_business_equipment UNIQUE (business_id, equipment_id)
);

-- 11. MASTER VENDORS TABLE
CREATE TABLE public.vendors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  description TEXT,
  city TEXT,
  state TEXT,
  address TEXT,
  phone TEXT,
  website TEXT,
  delivery_available BOOLEAN NOT NULL DEFAULT false,
  service_area TEXT DEFAULT 'Local',
  is_verified BOOLEAN NOT NULL DEFAULT false,
  status public.content_status NOT NULL DEFAULT 'published',
  last_verified_at TIMESTAMPTZ,
  verified_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 12. BUSINESS VENDORS JUNCTION TABLE
CREATE TABLE public.business_vendors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  vendor_id UUID NOT NULL REFERENCES public.vendors(id) ON DELETE RESTRICT,
  relationship_type TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT unique_business_vendor UNIQUE (business_id, vendor_id)
);

-- 13. CHECKLISTS & CHECKLIST ITEMS TABLES
CREATE TABLE public.checklists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  version INTEGER NOT NULL DEFAULT 1 CHECK (version > 0),
  status public.content_status NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT unique_business_checklist_version UNIQUE (business_id, version)
);

CREATE TABLE public.checklist_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  checklist_id UUID NOT NULL REFERENCES public.checklists(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  order_index INTEGER NOT NULL CHECK (order_index >= 0),
  is_required BOOLEAN NOT NULL DEFAULT true,
  estimated_days INTEGER CHECK (estimated_days > 0),
  category TEXT NOT NULL DEFAULT 'Setup',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT unique_checklist_order UNIQUE (checklist_id, order_index)
);

-- 14. B-TREE PERFORMANCE INDEXES
CREATE INDEX idx_businesses_slug ON public.businesses(slug);
CREATE INDEX idx_businesses_cat_status ON public.businesses(primary_category_id, status) WHERE status = 'published';
CREATE INDEX idx_businesses_filters ON public.businesses(difficulty, investment_level, min_investment_estimate) WHERE status = 'published';
CREATE INDEX idx_biz_licenses_biz_id ON public.business_licenses(business_id);
CREATE INDEX idx_biz_equipment_biz_id ON public.business_equipment(business_id);
CREATE INDEX idx_biz_vendors_biz_id ON public.business_vendors(business_id);
CREATE INDEX idx_checklist_items_order ON public.checklist_items(checklist_id, order_index);

-- 15. SECURITY DEFINER FUNCTION FOR ADMIN CHECK
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = (select auth.uid()) AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 16. ENABLE ROW LEVEL SECURITY ON ALL TABLES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_guides ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_costs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.licenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_licenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.equipment ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_equipment ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vendors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_vendors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.checklists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.checklist_items ENABLE ROW LEVEL SECURITY;

-- 17. ROW LEVEL SECURITY POLICIES

-- Profiles RLS
CREATE POLICY "Public profile view" ON public.profiles FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "User edit own profile details" ON public.profiles FOR UPDATE TO authenticated USING ((select auth.uid()) = id) WITH CHECK ((select auth.uid()) = id AND role = 'customer');

-- Public Catalog Read Access Policies (Published items)
CREATE POLICY "Public categories select" ON public.categories FOR SELECT TO anon, authenticated USING (status = 'published' OR public.is_admin());
CREATE POLICY "Public businesses select" ON public.businesses FOR SELECT TO anon, authenticated USING (status = 'published' OR public.is_admin());
CREATE POLICY "Public business guides select" ON public.business_guides FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.businesses WHERE id = business_id AND (status = 'published' OR public.is_admin())));
CREATE POLICY "Public business costs select" ON public.business_costs FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.businesses WHERE id = business_id AND (status = 'published' OR public.is_admin())));
CREATE POLICY "Public licenses select" ON public.licenses FOR SELECT TO anon, authenticated USING (status = 'published' OR public.is_admin());
CREATE POLICY "Public business licenses select" ON public.business_licenses FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public equipment select" ON public.equipment FOR SELECT TO anon, authenticated USING (status = 'published' OR public.is_admin());
CREATE POLICY "Public business equipment select" ON public.business_equipment FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public vendors select" ON public.vendors FOR SELECT TO anon, authenticated USING (status = 'published' OR public.is_admin());
CREATE POLICY "Public business vendors select" ON public.business_vendors FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public checklists select" ON public.checklists FOR SELECT TO anon, authenticated USING (status = 'published' OR public.is_admin());
CREATE POLICY "Public checklist items select" ON public.checklist_items FOR SELECT TO anon, authenticated USING (true);

-- Admin Full Write Policies
CREATE POLICY "Admin categories insert" ON public.categories FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admin categories update" ON public.categories FOR UPDATE TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin businesses insert" ON public.businesses FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admin businesses update" ON public.businesses FOR UPDATE TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin business guides full access" ON public.business_guides FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin business costs full access" ON public.business_costs FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin licenses full access" ON public.licenses FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin business licenses full access" ON public.business_licenses FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin equipment full access" ON public.equipment FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin business equipment full access" ON public.business_equipment FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin vendors full access" ON public.vendors FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin business vendors full access" ON public.business_vendors FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin checklists full access" ON public.checklists FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin checklist items full access" ON public.checklist_items FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
