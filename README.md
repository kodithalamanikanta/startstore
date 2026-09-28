# START SHOP — Practical Launch Desk for First-Time Founders in India

START SHOP is a production-ready web platform designed to help aspiring entrepreneurs in India discover, plan, launch, and manage small businesses.

---

## 🌟 Key Features

### 1. Business Discovery & Recommendation Engine
- **Type A Users ("I don't know what to start")**: Interactive **Business Finder Quiz** asking for capital budget, time commitment, business mode (Home-based, Online, Offline, Mobile), difficulty level, and category to produce scored, tailored matches with clear "Why this fits" explanations.
- **Type B Users ("I know what business I want")**: Instant search bar with direct autocomplete jump to detailed business guides (e.g. searching "cloud kitchen" or "tea stall" opens the guide directly).

### 2. Comprehensive 100+ India Business Catalog
Structured business profiles across 16 major Indian market categories:
- **Food & Beverage**: Tea Stall, Cloud Kitchen, Home Bakery, Fresh Juice Counter, Dosa Stall, Biryani Takeaway, Tiffin Service, Sweets Shop, Food Truck, etc.
- **Retail**: Kirana / Grocery, Mobile Accessories & Repair, Stationery, Boutique Clothing, Footwear, Cosmetics, Pet Supplies, Hardware, etc.
- **Home-Based**: Tailoring, Handmade Jewellery, Candle & Soap Making, Gift Hampers, T-Shirt Printing, Beauty Services, Incense Sticks, etc.
- **Digital & Professional Services**: Web Design Agency, Graphic Design, Video Editing, Digital Marketing, Bookkeeping & GST Filing, IT Support, etc.
- **Beauty & Personal**: Unisex Salon, Barber Shop, Nail Studio, Bridal Makeup Studio, Mobile Grooming Van.
- **Education & Coaching**: Tuition Center, Computer Institute, Spoken English Classes, Music & Dance Academy.
- **Automotive**: Two-Wheeler Workshop, Car Wash & Detailing, Tyre & Alignment, Auto Battery & Electricals, EV Charging Station.
- **Home & Maintenance**: Deep Cleaning Service, Pest Control, Plumbing & Electrical, AC Repair, RO Purifier Service, Packers & Movers.
- **Health & Wellness**: Fitness Gym, Yoga Studio, Healthy Meal Prep, Sports Academy.
- **Agriculture & Rural**: Plant Nursery, Mushroom Farming, Beekeeping, Poultry Farm, Organic Produce.
- **Logistics & Local Services**: Courier Franchise Counter, Hyperlocal Delivery, Corrugated Box Packaging.
- **Tourism & Hospitality**: Homestay & B&B, Local Tour Operator, Event Planning & Decoration, Wedding Photography.
- **Online & E-Commerce**: D2C Niche Brand, Amazon/Flipkart Seller, Print-on-Demand Store, Digital Products.

### 3. Actionable Business Guides
Every business guide includes:
- **Financial Estimates**: Upfront Capital Costs (Capex) and Monthly Operating Expenses (Opex) explicitly presented as realistic ballpark estimates.
- **Glossary Tooltips**: Beginner-friendly explanations for terms like *Working Capital*, *Capex*, *Opex*, *FSSAI*, *GST Threshold*, and *Break-even*.
- **Required Equipment**: Itemized machinery & tool lists with quantity guidance and approximate costs.
- **Licenses & Legal Compliance**: Detailed statutory requirements (FSSAI, GST, MSME Udyam, Municipal Shop & Establishment, SPCB Consent) with direct official portal links.
- **Vendor & Sourcing Guidance**: Practical wholesale market hubs in Indian cities (e.g. Crawford Market Mumbai, Chandni Chowk Delhi, SP Road Bangalore) and B2B platforms.
- **Location Intelligence**: Demand drivers (colleges, offices, transit hubs), footfall guidelines, and rent-to-turnover recommendations.
- **Step-by-Step Launch Roadmap**: Chronological launch stages from day 1 to opening day.
- **Interactive Startup Launch Checklist**: Progress tracker checklist synced to user state.
- **Marketing Strategy & Common Mistakes**: Risk mitigation tips and proven client acquisition tactics.

### 4. Admin Management Platform
- Complete administrative control center for managing business listings, categories, statutory licenses, machinery directory, and locations.
- Support for **Publish / Unpublish / Archive** content lifecycles.
- Role-based authorization enforced via Supabase Row-Level Security (RLS) policies.

---

## 🏗️ Architecture & Stack

- **Frontend**: React 19, React Router, Vanilla CSS with custom Theme Engine (Sunrise, City, Fresh).
- **Backend & Database**: Supabase PostgreSQL with Row Level Security (RLS).
- **Authentication**: Supabase Auth (Email/Password) with custom profile roles (`customer` & `admin`).
- **Build Tool**: Vite 6.

---

## ⚡ Quick Start & Local Setup

### 1. Clone & Install Dependencies
```bash
npm install
```

### 2. Environment Variables (.env)
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 🗄️ Database Setup & Migration

### Apply Schema Migration
Run the SQL migration script located at `supabase/migrations/20260928000000_init_schema.sql` inside your Supabase SQL Editor or via Supabase CLI:

```bash
supabase db push
# OR execute supabase/migrations/20260928000000_init_schema.sql in Supabase Dashboard SQL Editor
```

### Securely Promote First Admin User
1. Create a user account via the START SHOP UI Sign-Up modal.
2. In Supabase Dashboard SQL Editor, run:
```sql
UPDATE public.profiles
SET role = 'admin'
WHERE id = (SELECT id FROM auth.users WHERE email = 'your-admin-email@example.com');
```

---

## 🚀 Production Build & Deployment

### Build Command
```bash
npm run build
```

### Deployment (Vercel / Netlify)
1. Push project repository to GitHub.
2. Import repository into Vercel or Netlify.
3. Set Environment Variables (`VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`).
4. Set Build Command: `npm run build`
5. Set Output Directory: `dist`
