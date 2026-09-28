// Comprehensive India Small Business Catalog for START SHOP
// Contains 100+ realistic business profiles structured for Indian market founders.

export const categoriesList = [
  "Food & Beverage",
  "Retail",
  "Home-Based",
  "Digital & Professional Services",
  "Beauty & Personal Services",
  "Education",
  "Automotive",
  "Home & Maintenance Services",
  "Health & Wellness",
  "Agriculture & Rural",
  "Logistics & Local Services",
  "Tourism & Hospitality",
  "Events & Creative",
  "Online & E-Commerce",
  "Real Estate Services",
  "Other Services"
];

const businesses = [
  // ==================== 1. FOOD & BEVERAGE ====================
  {
    id: "tea-stall",
    slug: "tea-stall",
    name: "Tea Stall & Chai Kiosk",
    category: "Food & Beverage",
    shortDescription: "High-margin daily staple business serving fresh tea, coffee, and quick snacks near busy footfall areas.",
    description: "A tea stall is one of India's most resilient cash-flow businesses. Operating near offices, colleges, or transit hubs, it offers daily recurring revenue with low initial setup costs.",
    minimumInvestment: "Rs. 25,000",
    comfortableInvestment: "Rs. 75,000",
    maxInvestment: "Rs. 1,500,000",
    minInvestmentNum: 25000,
    typicalInvestmentNum: 75000,
    maxInvestmentNum: 150000,
    investmentLevel: "Low",
    difficulty: "Easy",
    riskLevel: "Low",
    scalability: "Medium",
    timeCommitment: "Full-Time",
    businessType: "Offline",
    profitPotential: "High Margin (40-60%)",
    bestFor: "First-time entrepreneurs wanting quick cash-flow and low entry barrier.",
    skillsRequired: ["Tea preparation consistency", "Basic accounting", "Speed of service", "Customer courtesy"],
    revenueModel: "Daily cash & UPI sales from tea, coffee, biscuits, samosas, and packaged snacks.",
    monthlyOperatingCosts: [
      { name: "Raw materials (Milk, Tea leaves, Sugar, Spices)", amount: 18000 },
      { name: "Rent / Kiosk fee", amount: 8000 },
      { name: "LPG Cylinder & Electricity", amount: 3500 },
      { name: "Disposables & Packaging", amount: 3000 }
    ],
    profitConsiderations: "Typical net profit ranges from ₹25,000 to ₹60,000 per month depending on footfall. Estimates vary by location rent and cup pricing.",
    startupCosts: [
      { name: "Gas Stove & LPG Cylinder Connection", amount: 7000 },
      { name: "Utensils, Milk Cans, & Vacuum Flasks", amount: 8000 },
      { name: "Counter / Cart Fabrication", amount: 18000 },
      { name: "Initial Raw Material Stock", amount: 10000 },
      { name: "Branding & Banner", amount: 2000 }
    ],
    equipment: [
      { name: "Heavy Duty Commercial Gas Stove", quantity: "1 Unit", estCost: "Rs. 4,500", required: true },
      { name: "Stainless Steel Tea Vessels & Strainers", quantity: "4 Sets", estCost: "Rs. 3,500", required: true },
      { name: "Insulated Thermal Dispenser (10L)", quantity: "2 Units", estCost: "Rs. 5,000", required: false },
      { name: "Digital Weighing Scale & Billing Counter", quantity: "1 Unit", estCost: "Rs. 3,000", required: false }
    ],
    licenses: [
      { name: "FSSAI Food License (Basic)", authority: "FSSAI", description: "Mandatory food safety registration for any food operator.", fee: "Rs. 100/yr", sourceUrl: "https://foscos.fssai.gov.in" },
      { name: "Shop & Establishment License", authority: "State Labour Dept / Municipal Corporation", description: "Local municipal trade approval for operating commercial premises.", fee: "Rs. 500 - 2,000", sourceUrl: "https://labour.gov.in" },
      { name: "Udyam MSME Registration", authority: "Ministry of MSME", description: "Free government registration for business recognition and bank loans.", fee: "Free", sourceUrl: "https://udyamregistration.gov.in" }
    ],
    vendors: [
      { category: "Dairy & Milk", guidance: "Direct local dairy tie-ups or company distributors (Amul, Mother Dairy, Nandini)." },
      { category: "Tea Powder & Spices", guidance: "Wholesale tea markets (e.g. Assam/Darjeeling tea dealers, Khari Baoli Delhi, APMC Navi Mumbai)." },
      { category: "Packaging & Cups", guidance: "Paper cup manufacturers and local plastic/biodegradable disposable wholesalers." }
    ],
    locationGuidance: {
      demandDrivers: "Near metro stations, bus terminals, IT parks, colleges, court complexes, and hospital gates.",
      rentConsideration: "Keep rent below 15% of projected monthly turnover.",
      footfall: "High footfall zone (at least 2,000+ pedestrians walking past daily)."
    },
    launchPlan: [
      "Finalize location with high morning & evening pedestrian footfall.",
      "Obtain FSSAI basic registration and local municipal permit.",
      "Source stainless steel utensils, gas connection, and branded paper cups.",
      "Standardize tea recipe (Karak Masala, Ginger, Elaichi) for consistency.",
      "Set up UPI QR code standees (Paytm, PhonePe, Google Pay).",
      "Soft launch with free tea sampling to nearby shopkeepers and commuters."
    ],
    checklist: [
      "Select location & negotiate lease agreement",
      "Apply for FSSAI Basic Registration",
      "Procure gas stove, LPG commercial cylinder, and pots",
      "Establish daily milk delivery schedule with local supplier",
      "Buy initial inventory: Tea leaves, ginger, cardamom, sugar, biscuits",
      "Print menu board & prices",
      "Set up digital UPI payments (PhonePe/Google Pay QR)",
      "Conduct trial tea brewing for taste consistency"
    ],
    commonMistakes: [
      "Inconsistent tea taste between morning and afternoon batches.",
      "Using cheap low-grade cups that leak or melt in hand.",
      "Ignoring hygiene around the washing area.",
      "Not offering digital UPI payment options."
    ],
    marketingPlan: "Give free sample cups to surrounding shop owners on day 1. Offer a 'Monthly Tea Pass' or combo discount (Tea + Samosa) for daily office workers.",
    faqs: [
      { q: "Is FSSAI mandatory even for a small street tea cart?", a: "Yes, FSSAI Basic Registration (costing ₹100/yr) is mandatory for all food businesses in India regardless of size." },
      { q: "What is the typical profit margin on a cup of tea?", a: "A cup of tea costing ₹3.50-4.00 to make is typically sold for ₹10-12, yielding a 60%+ gross margin." }
    ]
  },
  {
    id: "cloud-kitchen",
    slug: "cloud-kitchen",
    name: "Cloud Kitchen / Delivery Only",
    category: "Food & Beverage",
    shortDescription: "Delivery-focused commercial kitchen operating via Swiggy, Zomato, and direct online ordering.",
    description: "Cloud kitchens eliminate dining area rent and front-of-house staff, allowing founders to focus purely on high-margin delivery food brands from a low-rent secondary location.",
    minimumInvestment: "Rs. 1,500,000",
    comfortableInvestment: "Rs. 350,000",
    maxInvestment: "Rs. 800,000",
    minInvestmentNum: 150000,
    typicalInvestmentNum: 350000,
    maxInvestmentNum: 800000,
    investmentLevel: "Medium",
    difficulty: "Medium",
    riskLevel: "Medium",
    scalability: "High",
    timeCommitment: "Full-Time",
    businessType: "Online",
    profitPotential: "High Growth Potential",
    bestFor: "Home chefs, passionate cooks, and food entrepreneurs seeking low real-estate overhead.",
    skillsRequired: ["Food prep & standardization", "Packaging design", "Swiggy/Zomato portal management", "Kitchen workflow"],
    revenueModel: "Online orders via Zomato/Swiggy platforms and direct WhatsApp/Website orders.",
    monthlyOperatingCosts: [
      { name: "Kitchen Rent (150-250 sq ft commercial ground/basement)", amount: 18000 },
      { name: "Raw Ingredients & Meats", amount: 45000 },
      { name: "Swiggy/Zomato Commissions (18-25%)", amount: 25000 },
      { name: "Cook / Assistant Salary", amount: 22000 },
      { name: "Commercial Packaging", amount: 8000 }
    ],
    profitConsiderations: "Net profits average 15-25% after aggregator commissions. High volume is key to absorbing fixed kitchen overheads.",
    startupCosts: [
      { name: "Commercial Kitchen Equipment (Deep fryer, burners, prep table)", amount: 120000 },
      { name: "Commercial Refrigerator & Deep Freezer", amount: 45000 },
      { name: "Exhaust Chimney & Ducting", amount: 35000 },
      { name: "FSSAI State License & GST Setup", amount: 8000 },
      { name: "Aggregator Onboarding Fees & POS Software", amount: 15000 },
      { name: "Branded Packaging Initial Batch", amount: 20000 }
    ],
    equipment: [
      { name: "4-Burner Heavy Commercial Range", quantity: "1 Unit", estCost: "Rs. 28,000", required: true },
      { name: "Double Door Commercial Refrigerator (400L+)", quantity: "1 Unit", estCost: "Rs. 42,000", required: true },
      { name: "Stainless Steel Work Table (Grade 304)", quantity: "2 Units", estCost: "Rs. 14,000", required: true },
      { name: "Commercial Deep Fryer (6L)", quantity: "1 Unit", estCost: "Rs. 8,500", required: false },
      { name: "POS Thermal Printer & Tablet", quantity: "1 Set", estCost: "Rs. 12,000", required: true }
    ],
    licenses: [
      { name: "FSSAI State License", authority: "FSSAI", description: "Required for commercial delivery kitchens with turnover up to ₹12 Lakhs or above.", fee: "Rs. 2,000/yr", sourceUrl: "https://foscos.fssai.gov.in" },
      { name: "GST Registration", authority: "Central Board of Indirect Taxes", description: "Mandatory for selling food via Swiggy & Zomato.", fee: "Free (CA assistance ₹1,500)", sourceUrl: "https://gst.gov.in" },
      { name: "Fire Safety NOC", authority: "State Fire Department", description: "Required if using commercial gas setups in specific commercial zones.", fee: "Varies by state" }
    ],
    vendors: [
      { category: "Raw Food Supplies", guidance: "METRO Cash & Carry, local wholesale vegetable APMC markets, certified poultry suppliers." },
      { category: "Custom Tamper-Evident Packaging", guidance: "Bizongo, Packman, local paper box and meal container manufacturers." }
    ],
    locationGuidance: {
      demandDrivers: "High-density residential clusters, student hubs, or commercial office zones within a 5km delivery radius.",
      rentConsideration: "Ground floor or easy access basement with wide parking for delivery riders.",
      footfall: "Footfall does not matter; focus on rider accessibility and kitchen ventilation."
    },
    launchPlan: [
      "Curate tight menu (8-12 high-margin, easy-to-ship items).",
      "Rent commercial space with commercial gas piping & drainage.",
      "Procure kitchen equipment, stainless steel tables, and exhaust system.",
      "Obtain FSSAI State license and GST registration.",
      "Apply for onboarding on Zomato Partner and Swiggy Partner portals.",
      "Run targeted micro-influencer reviews & launching platform ads."
    ],
    checklist: [
      "Finalize food niche (e.g. Biryani, Bowls, Burgers, Roll)",
      "Secure kitchen property lease with commercial power/water",
      "Apply for FSSAI State License & GST Registration",
      "Purchase commercial burners, freezer, & stainless steel work tables",
      "Design tamper-proof leak-resistant packaging",
      "Sign contract with Swiggy and Zomato merchant portals",
      "Install POS software (Petpooja, UrbanPiper, or SlimPD)",
      "Conduct food delivery trial tests (simulate 30-min transport)"
    ],
    commonMistakes: [
      "Overly large menu causing slow preparation times and food waste.",
      "Cheap packaging that leaks during 20-minute bike delivery.",
      "Ignoring Zomato/Swiggy rating monitoring.",
      "Failing to account for 20%+ platform commission fees in menu pricing."
    ],
    marketingPlan: "Offer 50% off launch promotions on Swiggy/Zomato for the first 2 weeks. Insert printed discount coupons inside every delivery bag for direct WhatsApp re-orders.",
    faqs: [
      { q: "Is GST registration mandatory for selling food on Zomato & Swiggy?", a: "Yes, food aggregators require active GSTIN to list your cloud kitchen." },
      { q: "Can I run a cloud kitchen from my home apartment?", a: "Residential housing societies often prohibit commercial gas & rider traffic. A commercial shop or dedicated commercial space is strongly recommended." }
    ]
  },
  {
    id: "home-bakery",
    slug: "home-bakery",
    name: "Home Bakery & Custom Cakes",
    category: "Home-Based",
    shortDescription: "Bake fresh custom celebration cakes, cookies, and pastries from your home kitchen for local clients.",
    description: "Home baking combines creative culinary skills with direct social media marketing. Ideal for baking enthusiasts looking for high margins and custom order pre-payments.",
    minimumInvestment: "Rs. 15,000",
    comfortableInvestment: "Rs. 50,000",
    maxInvestment: "Rs. 150,000",
    minInvestmentNum: 15000,
    typicalInvestmentNum: 50000,
    maxInvestmentNum: 150000,
    investmentLevel: "Low",
    difficulty: "Medium",
    riskLevel: "Low",
    scalability: "Medium",
    timeCommitment: "Part-Time",
    businessType: "Home-based",
    profitPotential: "High Gross Margins (50-70%)",
    bestFor: "Creative home bakers, stay-at-home parents, and dessert passionate makers.",
    skillsRequired: ["Baking & cake decorating", "Food styling photography", "Instagram marketing", "Order planning"],
    revenueModel: "Advance payments on custom cakes, dessert boxes, festival gift hampers, and workshops.",
    monthlyOperatingCosts: [
      { name: "Baking Ingredients (Flour, Butter, Chocolate, Cream)", amount: 12000 },
      { name: "Packaging Boxes, Ribbons & Cake Boards", amount: 4000 },
      { name: "Electricity & Cooking Fuel", amount: 3000 },
      { name: "Instagram Ads & Local Promotion", amount: 2500 }
    ],
    profitConsiderations: "Custom designer cakes sell for ₹1,000 - ₹2,500/kg with 60%+ profit margin. Monthly income ranges between ₹20,000 and ₹75,000.",
    startupCosts: [
      { name: "OTG Oven (45L - 60L)", amount: 14000 },
      { name: "Stand Mixer / Heavy Hand Mixer", amount: 8000 },
      { name: "Cake Turntable, Nozzles, Tins & Decorating Tools", amount: 7000 },
      { name: "FSSAI Basic License & Brand Design", amount: 3000 },
      { name: "Initial Baking Raw Materials & Boxes", amount: 8000 }
    ],
    equipment: [
      { name: "Convection OTG Oven (52L Morphy Richards/Borosil)", quantity: "1 Unit", estCost: "Rs. 13,500", required: true },
      { name: "Planetary Stand Mixer (1000W)", quantity: "1 Unit", estCost: "Rs. 9,000", required: false },
      { name: "Aluminum Cake Tins & Silicone Molds", quantity: "10 Pcs", estCost: "Rs. 3,500", required: true },
      { name: "Revolving Metal Cake Turntable", quantity: "1 Unit", estCost: "Rs. 1,800", required: true }
    ],
    licenses: [
      { name: "FSSAI Basic Registration", authority: "FSSAI", description: "Mandatory even for home bakers selling to public.", fee: "Rs. 100/yr", sourceUrl: "https://foscos.fssai.gov.in" },
      { name: "Udyam MSME Registration", authority: "MSME Ministry", description: "Free government registration for small business credit.", fee: "Free", sourceUrl: "https://udyamregistration.gov.in" }
    ],
    vendors: [
      { category: "Baking Raw Materials", guidance: "Bakery supply stores (e.g. Arife Lamoulde, Bakersville, local bakery raw material wholesalers)." },
      { category: "Custom Cake Boxes", guidance: "Local packaging suppliers, Printo, or bulk packaging platforms like IndiaMART." }
    ],
    locationGuidance: {
      demandDrivers: "Operated from home; target customers within 10km radius for safe delivery via Dunzo/Porter.",
      rentConsideration: "Zero extra rent if using existing home kitchen.",
      footfall: "Driven by Instagram portfolio and WhatsApp status orders."
    },
    launchPlan: [
      "Perfect 3 core signature cake recipes & frosting stability.",
      "Apply for FSSAI basic registration online.",
      "Create high-quality Instagram profile showcasing cake designs & client reviews.",
      "Offer sample tasting boxes to friends, family, and local society groups.",
      "Set up clear order lead-time policies (e.g. 48-hour advance notice).",
      "Partner with local event decorators and gift hamper sellers."
    ],
    checklist: [
      "Equip home kitchen with OTG oven & turntable",
      "Obtain FSSAI Basic Registration",
      "Create logo & Instagram page (@YourNameBakes)",
      "Procure premium chocolate, cream, fondant, and sturdy cake boxes",
      "Fix price sheet per kg and per dessert box",
      "Set up payment methods (GPay, Paytm, PhonePe)",
      "Announce launch sample boxes in local WhatsApp groups"
    ],
    commonMistakes: [
      "Underpricing custom cakes without calculating labor hours.",
      "Taking last-minute orders without stock availability.",
      "Poor cake box transport resulting in melted or damaged delivery."
    ],
    marketingPlan: "Run target Instagram reel campaigns featuring cake assembly videos. Collaborate with local birthday party planners for cross-referrals.",
    faqs: [
      { q: "Do I need a commercial property for FSSAI home bakery registration?", a: "No, FSSAI permits Basic Registration using your residential address provided hygiene standards are met." }
    ]
  },
  {
    id: "fresh-juice-shop",
    slug: "fresh-juice-shop",
    name: "Fresh Juice & Smoothie Counter",
    category: "Food & Beverage",
    shortDescription: "Serve natural fruit juices, sugarcane juice, smoothies, and fruit bowls for health-conscious consumers.",
    description: "Fresh juice counters benefit from high gross margins and year-round demand in India's warm climate, appealing to gym-goers, office workers, and families.",
    minimumInvestment: "Rs. 50,000",
    comfortableInvestment: "Rs. 150,000",
    maxInvestment: "Rs. 400,000",
    minInvestmentNum: 50000,
    typicalInvestmentNum: 150000,
    maxInvestmentNum: 400000,
    investmentLevel: "Low",
    difficulty: "Easy",
    riskLevel: "Low",
    scalability: "Medium",
    timeCommitment: "Full-Time",
    businessType: "Offline",
    profitPotential: "Gross Margins 50-65%",
    bestFor: "Entrepreneurs seeking straightforward operations with healthy food appeal.",
    skillsRequired: ["Fruit procurement", "Juicer operation", "Cleanliness & hygiene", "Fast service"],
    revenueModel: "Over-the-counter daily cash & UPI sales of juices, shakes, and cut fruit bowls.",
    monthlyOperatingCosts: [
      { name: "Fresh Fruits & Ice", amount: 25000 },
      { name: "Shop Rent (50-100 sq ft counter)", amount: 12000 },
      { name: "Helper Staff Salary", amount: 12000 },
      { name: "Electricity & Water", amount: 4000 }
    ],
    profitConsiderations: "Daily sales of 100 cups at average ₹40 = ₹4,000/day. Monthly net profit typically ₹35,000 - ₹80,000.",
    startupCosts: [
      { name: "Heavy Duty Commercial Juicer & Cold Press Machine", amount: 35000 },
      { name: "Counter Fabrication & Stainless Steel Sink", amount: 45000 },
      { name: "Display Refrigerator / Ice Machine", amount: 28000 },
      { name: "FSSAI Registration & Trade License", amount: 3000 },
      { name: "Branded Cups & Straws initial stock", amount: 8000 }
    ],
    equipment: [
      { name: "Commercial Heavy Duty Juicer Mixer (1200W)", quantity: "2 Units", estCost: "Rs. 22,000", required: true },
      { name: "Sugarcane Juicing Machine (SS 304 Rollers)", quantity: "1 Unit", estCost: "Rs. 32,000", required: false },
      { name: "Glass Door Counter Refrigerator", quantity: "1 Unit", estCost: "Rs. 26,000", required: true }
    ],
    licenses: [
      { name: "FSSAI Basic Registration", authority: "FSSAI", description: "Mandatory food license.", fee: "Rs. 100/yr", sourceUrl: "https://foscos.fssai.gov.in" },
      { name: "Shop & Establishment License", authority: "Municipal Corporation", description: "Local trade license.", fee: "Rs. 1,000 - 3,000" }
    ],
    vendors: [
      { category: "Fruits Wholesale", guidance: "Local fruit APMC mandis (e.g. Azadpur Mandi Delhi, Vashi Navi Mumbai, Koyambedu Chennai)." },
      { category: "Bio-degradable Straws & Cups", guidance: "Local paper packaging distributors." }
    ],
    locationGuidance: {
      demandDrivers: "Near gyms, parks, jogging tracks, hospital entrances, and market streets.",
      rentConsideration: "Small footprint counter (50-80 sq ft) keeps rent manageable.",
      footfall: "High morning & evening pedestrian footfall."
    },
    launchPlan: [
      "Secure small counter space near a gym or busy market.",
      "Purchase commercial juicers & fruit display chillers.",
      "Obtain FSSAI license & municipal trade permit.",
      "Establish direct morning procurement link with fruit wholesale mandi.",
      "Launch with 'Post-Workout Protein Shake' and detox green juice combos."
    ],
    checklist: [
      "Lease counter space with running water connection",
      "Apply for FSSAI registration",
      "Buy heavy-duty commercial juicers & refrigerator",
      "Set up wholesale fruit supplier account",
      "Design printed menu board",
      "Procure transparent eco cups & paper straws",
      "Launch social media & local flyer distribution"
    ],
    commonMistakes: [
      "Over-stocking perishable fruits leading to spoilage.",
      "Poor washing of fruit surfaces causing hygiene complaints.",
      "Slow blending speed during rush hours."
    ],
    marketingPlan: "Offer 10% discount passes to members of nearby fitness centers and morning runner clubs.",
    faqs: [
      { q: "How to handle fruit spoilage?", a: "Procure fruit daily based on sales velocity and freeze over-ripe bananas/berries for smoothies." }
    ]
  },
  {
    id: "grocery-store",
    slug: "grocery-store",
    name: "Kirana / Grocery Supermarket",
    category: "Retail",
    shortDescription: "Essential neighborhood retail store providing daily household food staples, FMCG goods, and personal care items.",
    description: "Kirana stores are the backbone of Indian retail. Modernizing a local grocery store with clear display racks, POS barcode billing, and home delivery creates high customer loyalty.",
    minimumInvestment: "Rs. 300,000",
    comfortableInvestment: "Rs. 800,000",
    maxInvestment: "Rs. 2,000,000",
    minInvestmentNum: 300000,
    typicalInvestmentNum: 800000,
    maxInvestmentNum: 2000000,
    investmentLevel: "High",
    difficulty: "Medium",
    riskLevel: "Low",
    scalability: "High",
    timeCommitment: "Full-Time",
    businessType: "Offline",
    profitPotential: "Steady 10-18% Margins",
    bestFor: "Entrepreneurs seeking recession-proof daily necessity retail with long-term stability.",
    skillsRequired: ["FMCG inventory management", "Vendor negotiation", "Customer relationship building", "Billing software"],
    revenueModel: "Daily counter sales and monthly home delivery billing to neighborhood households.",
    monthlyOperatingCosts: [
      { name: "Shop Rent (300-600 sq ft)", amount: 30000 },
      { name: "Staff Salaries (2 helpers)", amount: 28000 },
      { name: "Electricity & AC/Refrigeration", amount: 8000 },
      { name: "Shrinkage & Stock Buffer", amount: 5000 }
    ],
    profitConsiderations: "Gross margins on packaged FMCG range from 8-15%, while loose grains, pulses, and spices yield 20-30%. Monthly net income averages ₹50,000 to ₹1,80,000.",
    startupCosts: [
      { name: "Initial FMCG & Grocery Stock Inventory", amount: 450000 },
      { name: "Modular Steel Display Racks & Counter", amount: 180000 },
      { name: "POS Barcode Scanner, Computer & Billing Software", amount: 40000 },
      { name: "Commercial Refrigerator & Deep Freezer for Dairy/Ice Cream", amount: 50000 },
      { name: "Shop Signboard & Lighting Setup", amount: 25000 }
    ],
    equipment: [
      { name: "Heavy Wall & Island Steel Racks", quantity: "1 Set", estCost: "Rs. 1,60,000", required: true },
      { name: "Barcode Scanner & Thermal Bill Printer", quantity: "1 Set", estCost: "Rs. 18,000", required: true },
      { name: "Digital Electronic Weighing Scale", quantity: "2 Units", estCost: "Rs. 8,000", required: true }
    ],
    licenses: [
      { name: "FSSAI Retail License", authority: "FSSAI", description: "Mandatory for storing and selling food products.", fee: "Rs. 2,000/yr", sourceUrl: "https://foscos.fssai.gov.in" },
      { name: "GST Registration", authority: "GST Dept", description: "Required if annual turnover exceeds ₹40 Lakhs (or ₹20L in special states).", fee: "Free" },
      { name: "Shop & Establishment License", authority: "Local Municipality", description: "Required for commercial shop operation.", fee: "Rs. 1,500 - 4,000" }
    ],
    vendors: [
      { category: "FMCG Distributors", guidance: "Direct distributorship tie-ups with HUL, P&G, ITC, Nestlé, Brittania, Parle." },
      { category: "Staples & Grains", guidance: "Local grain APMC wholesale market or platforms like Udaan, JioMart Partner, METRO." }
    ],
    locationGuidance: {
      demandDrivers: "Dense residential apartments, housing societies, or neighborhood main roads.",
      rentConsideration: "Ensure front visibility on ground floor with easy scooter parking.",
      footfall: "At least 300+ target families living within a 500-meter radius."
    },
    launchPlan: [
      "Select 300+ sq ft shop in densely populated residential area.",
      "Install steel racks, bright LED lighting, and POS software.",
      "Obtain FSSAI and Shop & Establishment licenses.",
      "Procure initial stock from FMCG stockists and local grain wholesale mandis.",
      "Distribute launch flyers with opening discounts (e.g. Free 1kg Sugar on ₹1000 purchase).",
      "Enable WhatsApp order placing for neighborhood home delivery."
    ],
    checklist: [
      "Finalize shop lease in residential area",
      "Apply for FSSAI & Municipal licenses",
      "Install display shelves & POS billing counter",
      "Tie up with FMCG distributors & grain wholesalers",
      "Load initial inventory across staples, snacks, personal care",
      "Hire 1-2 reliable helpers for billing & delivery",
      "Distribute opening promotional leaflets to surrounding houses"
    ],
    commonMistakes: [
      "Over-buying slow-moving niche products that lock up capital.",
      "Not maintaining computerized inventory tracking leading to theft.",
      "Ignoring local WhatsApp home delivery requests."
    ],
    marketingPlan: "Offer free home delivery within 1 km for orders above ₹500. Create a monthly grocery subscription list for regular households.",
    faqs: [
      { q: "Can a small Kirana compete with big supermarkets?", a: "Yes, by offering instant 15-minute neighborhood delivery, personal customer trust, and credit/UPI convenience." }
    ]
  },
  {
    id: "web-design-agency",
    slug: "web-design-agency",
    name: "Web Design & Digital Agency",
    category: "Digital & Professional Services",
    shortDescription: "Build modern websites, e-commerce stores, and digital brand presence for small businesses and professionals.",
    description: "Every business in India needs an online presence. A service agency requires minimal physical infrastructure, offering extremely high margins and recurring retainer opportunities.",
    minimumInvestment: "Rs. 20,000",
    comfortableInvestment: "Rs. 80,000",
    maxInvestment: "Rs. 300,000",
    minInvestmentNum: 20000,
    typicalInvestmentNum: 80000,
    maxInvestmentNum: 300000,
    investmentLevel: "Low",
    difficulty: "Medium",
    riskLevel: "Low",
    scalability: "High",
    timeCommitment: "Flexible",
    businessType: "Online",
    profitPotential: "High Margin (70-85%)",
    bestFor: "Developers, designers, freelancers, and tech-savvy graduates.",
    skillsRequired: ["WordPress / Webflow / React", "UI/UX Design", "Client communication", "Basic SEO & Hosting"],
    revenueModel: "Project-based website development fees (₹15,000 - ₹80,000/site) plus annual maintenance retainers.",
    monthlyOperatingCosts: [
      { name: "Software Subscriptions (Figma, Hosting, Plugins)", amount: 5000 },
      { name: "High-Speed Internet & Electricity", amount: 3000 },
      { name: "Marketing & Cold Outreach Tools", amount: 4000 }
    ],
    profitConsiderations: "Overhead is extremely low. Net profit margin typically exceeds 70%. Monthly earnings range from ₹40,000 to ₹2,500,000 as team grows.",
    startupCosts: [
      { name: "Laptop / Desktop Computer", amount: 55000 },
      { name: "Agency Portfolio Website & Domain/Hosting", amount: 5000 },
      { name: "GST Registration & Legal Setup", amount: 4000 },
      { name: "Initial Premium Templates & Design Assets", amount: 8000 }
    ],
    equipment: [
      { name: "Performance Laptop (16GB RAM, SSD)", quantity: "1 Unit", estCost: "Rs. 60,000", required: true },
      { name: "Secondary Display Monitor (24-inch)", quantity: "1 Unit", estCost: "Rs. 11,000", required: false }
    ],
    licenses: [
      { name: "GST Registration", authority: "GST Dept", description: "Mandatory for serving interstate/international clients or invoicing corporate entities.", fee: "Free", sourceUrl: "https://gst.gov.in" },
      { name: "Udyam MSME Registration", authority: "MSME Ministry", description: "Provides official service enterprise standing.", fee: "Free" }
    ],
    vendors: [
      { category: "Cloud Hosting", guidance: "Hostinger, AWS, Vercel, DigitalOcean, Cloudways." },
      { category: "Themes & Assets", guidance: "Envato Elements, Freepik, Figma Community." }
    ],
    locationGuidance: {
      demandDrivers: "Can be operated 100% remotely from home or a co-working space.",
      rentConsideration: "Zero rent initially.",
      footfall: "Driven by Google Business Profile, LinkedIn networking, and referral clients."
    },
    launchPlan: [
      "Build your own agency portfolio website featuring 3 sample project case studies.",
      "Register Udyam MSME and GSTIN for professional invoicing.",
      "Set standardized package prices (Starter ₹15k, Business ₹35k, E-Commerce ₹60k).",
      "Outreach to 20 local businesses (retailers, doctors, lawyers, schools) lacking websites.",
      "Offer a free homepage mock-up to close your first 3 paid clients."
    ],
    checklist: [
      "Set up agency portfolio website & domain",
      "Get GST registration for formal client billing",
      "Create project proposal & contract templates",
      "Define service packages & pricing list",
      "Optimize LinkedIn profile & Google Business Profile",
      "Reach out to local businesses for redesign opportunities"
    ],
    commonMistakes: [
      "Scope creep without charging for additional client revisions.",
      "Failing to collect a 50% upfront deposit before starting work.",
      "Not offering ongoing annual maintenance plans."
    ],
    marketingPlan: "Rank locally for 'Web Design Agency in [Your City]'. Offer free website audit videos on LinkedIn to local business owners.",
    faqs: [
      { q: "Do I need to code everything from scratch?", a: "No, tools like WordPress, Webflow, Shopify, or React templates speed up delivery significantly while preserving quality." }
    ]
  },
  {
    id: "tailoring-boutique",
    slug: "tailoring-boutique",
    name: "Custom Tailoring & Fashion Boutique",
    category: "Home-Based",
    shortDescription: "Custom stitching, alterations, ethnic wear design, and boutique fashion services for women & men.",
    description: "Custom tailoring has constant demand in India due to weddings, festivals, and personal fit preferences. Can begin as a home setup and expand into a commercial high-street boutique.",
    minimumInvestment: "Rs. 30,000",
    comfortableInvestment: "Rs. 120,000",
    maxInvestment: "Rs. 500,000",
    minInvestmentNum: 30000,
    typicalInvestmentNum: 120000,
    maxInvestmentNum: 500000,
    investmentLevel: "Low",
    difficulty: "Medium",
    riskLevel: "Low",
    scalability: "Medium",
    timeCommitment: "Full-Time",
    businessType: "Home-based",
    profitPotential: "High Craftsmanship Margins",
    bestFor: "Fashion designers, experienced tailors, and creative home dressmakers.",
    skillsRequired: ["Pattern making & stitching", "Embroidery & neck design", "Fabric selection", "Customer measurement precision"],
    revenueModel: "Stitching charges per garment (Blouse ₹400-₹1500, Dress ₹800-₹3000) and fabric sales.",
    monthlyOperatingCosts: [
      { name: "Master Tailor / Assistant Helper", amount: 15000 },
      { name: "Threads, Zippers, Lining & Accessories", amount: 5000 },
      { name: "Electricity & Steam Iron Power", amount: 2500 }
    ],
    profitConsiderations: "Stitching gross margin is 70%+. Net monthly earnings range from ₹25,000 (home setup) to ₹1,50,000 (boutique store).",
    startupCosts: [
      { name: "Motorized Commercial Sewing Machine (Juki / Singer)", amount: 24000 },
      { name: "Interlock / Overlock Machine", amount: 12000 },
      { name: "Cutting Table & Mannequin Dummy", amount: 10000 },
      { name: "Heavy Steam Iron & Press Board", amount: 8000 },
      { name: "Sample Fabrics & Haberdashery Stock", amount: 15000 }
    ],
    equipment: [
      { name: "Juki / Usha High Speed Direct Drive Sewing Machine", quantity: "2 Units", estCost: "Rs. 45,000", required: true },
      { name: "4-Thread Overlock Machine", quantity: "1 Unit", estCost: "Rs. 14,000", required: true },
      { name: "Dress Form Mannequin (Female Size 36)", quantity: "1 Unit", estCost: "Rs. 4,500", required: false }
    ],
    licenses: [
      { name: "Udyam MSME Registration", authority: "MSME Ministry", description: "Free government registration for small tailoring units.", fee: "Free" },
      { name: "Shop & Establishment License", authority: "Local Municipality", description: "Required if operating a commercial storefront.", fee: "Rs. 1,000" }
    ],
    vendors: [
      { category: "Laces, Lining & Zippers", guidance: "Wholesale haberdashery markets (e.g. Kinari Bazar Delhi, Mangaldas Market Mumbai)." },
      { category: "Boutique Fabrics", guidance: "Textile hubs in Surat, Ahmedabad, Jaipur, or local fabric wholesalers." }
    ],
    locationGuidance: {
      demandDrivers: "Residential neighborhoods, wedding shopping markets, near ladies colleges.",
      rentConsideration: "Low footprint home studio initially."
    },
    launchPlan: [
      "Set up dedicated stitching workspace at home with motorized Juki machine.",
      "Create catalog of 20 modern blouse & kurti neck designs.",
      "Announce opening in local WhatsApp apartment groups with 20% launch discount.",
      "Offer free door-step measurement and home delivery within 3 km.",
      "Hire an additional master tailor as order volume grows."
    ],
    checklist: [
      "Purchase high-speed sewing machine & interlock unit",
      "Set up cutting table & full-length mirror",
      "Source quality lining cloth, laces, buttons, and zippers",
      "Design printed measurement notebook & price card",
      "Create Instagram page displaying custom ethnic wear work",
      "Distribute launch flyers to nearby ladies parlours & residential societies"
    ],
    commonMistakes: [
      "Missing delivery deadlines during festive wedding peak seasons.",
      "Improper fitting without leaving margin for alterations.",
      "Not recording explicit measurement notes on client file."
    ],
    marketingPlan: "Partner with nearby beauty parlours for cross-promotional discounts. Post 'Before & After' fitting transformation reels on Instagram.",
    faqs: [
      { q: "How to handle fabric damage during cutting?", a: "Always inspect client fabric upon receipt and record existing defects on the job receipt slip." }
    ]
  },
  {
    id: "unisex-salon",
    slug: "unisex-salon",
    name: "Unisex Hair Salon & Beauty Studio",
    category: "Beauty & Personal Services",
    shortDescription: "Haircuts, styling, grooming, beard care, facials, and beauty treatments in a modern neighborhood store.",
    description: "Personal grooming is a high-frequency recurring spending habit. A clean, well-lit unisex salon delivers strong cash flow and high customer repeat rates.",
    minimumInvestment: "Rs. 300,000",
    comfortableInvestment: "Rs. 700,000",
    maxInvestment: "Rs. 1,800,000",
    minInvestmentNum: 300000,
    typicalInvestmentNum: 700000,
    maxInvestmentNum: 1800000,
    investmentLevel: "High",
    difficulty: "Medium",
    riskLevel: "Medium",
    scalability: "High",
    timeCommitment: "Full-Time",
    businessType: "Offline",
    profitPotential: "High Service Margins (35-50%)",
    bestFor: "Stylists, beauticians, or investors partnering with skilled salon staff.",
    skillsRequired: ["Hairdressing & styling", "Customer hospitality", "Hygiene management", "Staff scheduling"],
    revenueModel: "Haircuts, hair color, facial treatments, hair spa, and cosmetic product retail.",
    monthlyOperatingCosts: [
      { name: "Shop Rent (300-500 sq ft)", amount: 35000 },
      { name: "Staff Salaries & Commission (3-4 stylists)", amount: 55000 },
      { name: "Professional Salon Cosmetics & Shampoos", amount: 15000 },
      { name: "Electricity & Air Conditioning", amount: 12000 }
    ],
    profitConsiderations: "Service margin is 60%+ above product cost. Monthly net profit typically ranges from ₹60,000 to ₹2,000,000 after staff revenue sharing.",
    startupCosts: [
      { name: "Salon Interior Work (Mirrors, Lighting, AC)", amount: 250000 },
      { name: "Hydraulic Barber Chairs & Wash Basin Chairs", amount: 120000 },
      { name: "Hair Dryers, Straighteners, Steamers & Trimmers", amount: 45000 },
      { name: "Professional Products Initial Inventory (L'Oreal, Matrix)", amount: 50000 },
      { name: "Licenses & Opening Marketing", amount: 15000 }
    ],
    equipment: [
      { name: "Heavy Hydraulic Salon Chairs", quantity: "3 Units", estCost: "Rs. 45,000", required: true },
      { name: "Shampoo Station with Ceramic Basin", quantity: "1 Unit", estCost: "Rs. 22,000", required: true },
      { name: "Professional Hair Dryer & Styling Tools", quantity: "3 Sets", estCost: "Rs. 25,000", required: true }
    ],
    licenses: [
      { name: "Shop & Establishment License", authority: "Municipal Corporation", description: "Mandatory commercial premises trade permit.", fee: "Rs. 2,000" },
      { name: "GST Registration", authority: "GST Dept", description: "Required if service turnover exceeds ₹20 Lakhs.", fee: "Free" }
    ],
    vendors: [
      { category: "Professional Cosmetics", guidance: "Authorized beauty supply distributors (L'Oreal Professional, Matrix, Schwarzkopf, Lotus)." },
      { category: "Salon Furniture", guidance: "Salon furniture manufacturers (Mumbai, Delhi, Bangalore furniture hubs)." }
    ],
    locationGuidance: {
      demandDrivers: "Main road shopping streets, near residential complexes, or market centers.",
      rentConsideration: "Ground floor or prominent 1st floor with glass frontage.",
      footfall: "High residential density within 2 km."
    },
    launchPlan: [
      "Lease 400 sq ft space in active neighborhood market.",
      "Complete modern mirror vanity setup & soft warm LED lighting.",
      "Hire 2 experienced hair stylists and 1 beautician on base + commission model.",
      "Stock salon-grade shampoos, hair colors, and facial kits.",
      "Distribute launch voucher leaflets offering '50% off first haircut'."
    ],
    checklist: [
      "Secure shop space & complete interior lighting/AC setup",
      "Obtain Municipal Trade License",
      "Purchase hydraulic salon chairs & hair wash station",
      "Hire certified stylists & beauticians",
      "Procure branded hair & skin care cosmetics stock",
      "Set up digital appointment software (Fresha / Zenoti)",
      "Launch Google Business Profile with location photos"
    ],
    commonMistakes: [
      "Poor staff retention leading to loss of loyal clients.",
      "Dirty towels or unsterilized combs turning away premium customers.",
      "Inadequate air conditioning during summer months."
    ],
    marketingPlan: "Run a 'First Visit Special' haircut combo. Encourage Google 5-star reviews by offering 10% off next service.",
    faqs: [
      { q: "How to structure salon staff salaries?", a: "Use a modest base salary + 10-20% commission incentive per service performed." }
    ]
  },
  {
    id: "coaching-center",
    slug: "coaching-center",
    name: "Tuition & Competitive Exam Coaching",
    category: "Education",
    shortDescription: "Academic tuition for school students (Classes 6-12) or competitive exam prep (JEE, NEET, Bank, SSC).",
    description: "Education is a top spending priority for Indian families. A coaching center leverages subject expertise to build recurring student fee income with minimal capital expenditure.",
    minimumInvestment: "Rs. 40,000",
    comfortableInvestment: "Rs. 150,000",
    maxInvestment: "Rs. 500,000",
    minInvestmentNum: 40000,
    typicalInvestmentNum: 150000,
    maxInvestmentNum: 500000,
    investmentLevel: "Low",
    difficulty: "Medium",
    riskLevel: "Low",
    scalability: "High",
    timeCommitment: "Part-Time",
    businessType: "Offline",
    profitPotential: "High Margin (60-80%)",
    bestFor: "Teachers, subject experts, engineering/science graduates, and academic mentors.",
    skillsRequired: ["Subject mastery & teaching flair", "Student engagement", "Parent communication", "Exam strategy"],
    revenueModel: "Monthly or term-wise tuition fees per student (₹1,500 - ₹5,000/month/subject).",
    monthlyOperatingCosts: [
      { name: "Center Rent (300-600 sq ft)", amount: 16000 },
      { name: "Guest Faculty / Tutor Payments", amount: 20000 },
      { name: "Printing Test Papers & Study Material", amount: 4000 },
      { name: "Electricity & AC", amount: 5000 }
    ],
    profitConsiderations: "With 40 students paying ₹2,500/month = ₹1,00,000 revenue. After expenses, net profit is ₹50,000 - ₹70,000/month.",
    startupCosts: [
      { name: "Student Benches / Chairs with Writing Pads", amount: 35000 },
      { name: "Whiteboards, Projector / Smart TV", amount: 25000 },
      { name: "Air Conditioner / Fans & Lighting", amount: 30000 },
      { name: "Signboard, Printing Flyers & Demo Class Marketing", amount: 15000 },
      { name: "Security Deposit for Rental Space", amount: 35000 }
    ],
    equipment: [
      { name: "Writing Pad Benches / Chairs", quantity: "30 Units", estCost: "Rs. 30,000", required: true },
      { name: "Ceramic Magnetic Whiteboard (6x4 ft)", quantity: "2 Units", estCost: "Rs. 6,000", required: true },
      { name: "Smart TV / LED Projector for Online Notes", quantity: "1 Unit", estCost: "Rs. 22,000", required: false }
    ],
    licenses: [
      { name: "Udyam MSME Registration", authority: "MSME Ministry", description: "Free government registration for education services.", fee: "Free" },
      { name: "Shop & Establishment License", authority: "Local Municipality", description: "Required if operating a commercial center with staff.", fee: "Rs. 1,000" }
    ],
    vendors: [
      { category: "Furniture", guidance: "Local school & office furniture manufacturers." },
      { category: "Printing", guidance: "Local digital press for printing workbooks and test series." }
    ],
    locationGuidance: {
      demandDrivers: "Near major schools, colleges, student residential areas, or main road junction.",
      rentConsideration: "First floor or quiet commercial hall with safe street access.",
      footfall: "Safe location with bicycle/scooter parking for students."
    },
    launchPlan: [
      "Rent a 400 sq ft hall near 2 major local schools.",
      "Furnish with 30 study chairs, whiteboards, and fans/AC.",
      "Conduct a free 'Exam Strategy & Speed Math Workshop' for local students.",
      "Distribute flyers at school gates during dismissal hours.",
      "Offer 3 days of free trial classes to build parent trust."
    ],
    checklist: [
      "Lease teaching hall near schools/residential area",
      "Install student writing chairs, whiteboards & lighting",
      "Prepare structured curriculum notes & weekly test series",
      "Print promo flyers & banner for center front",
      "Host free launch demo classes for Class 9-12 students",
      "Set up WhatsApp parent broadcast group for attendance & marks updates"
    ],
    commonMistakes: [
      "Lacking structured study notes or failing to track student test progress.",
      "Overcrowding classrooms beyond comfortable seating capacity.",
      "Not communicating regularly with parents regarding progress."
    ],
    marketingPlan: "Publish toppers' test results on front banner. Host free career counselling webinars for Class 10 & 12 students.",
    faqs: [
      { q: "Is any special government permission needed to run tuition classes?", a: "Private coaching up to 50 students usually requires only standard municipal shop registration and MSME Udyam." }
    ]
  },
  {
    id: "bike-service-center",
    slug: "bike-service-center",
    name: "Two-Wheeler Service & Repair Workshop",
    category: "Automotive",
    shortDescription: "Periodic servicing, engine repair, washing, oil change, and spare parts replacement for motorcycles & scooters.",
    description: "With over 200 million two-wheelers in India, local multi-brand bike workshops experience continuous demand for maintenance, quick oil changes, and crash repairs.",
    minimumInvestment: "Rs. 150,000",
    comfortableInvestment: "Rs. 350,000",
    maxInvestment: "Rs. 800,000",
    minInvestmentNum: 150000,
    typicalInvestmentNum: 350000,
    maxInvestmentNum: 800000,
    investmentLevel: "Medium",
    difficulty: "Medium",
    riskLevel: "Low",
    scalability: "Medium",
    timeCommitment: "Full-Time",
    businessType: "Offline",
    profitPotential: "High Labor & Spare Margins",
    bestFor: "Experienced auto mechanics, diploma engineers, or automotive enthusiasts.",
    skillsRequired: ["Engine diagnostics & tuning", "Spare parts sourcing", "Mechanic team management", "Customer service"],
    revenueModel: "Labor service charges (₹350 - ₹1,500 per service) plus margins on spare parts and engine oil sales.",
    monthlyOperatingCosts: [
      { name: "Workshop Rent (400-800 sq ft ground shop)", amount: 20000 },
      { name: "Senior Mechanic + Helper Salaries", amount: 35000 },
      { name: "Spare Parts & Oil Replenishment", amount: 30000 },
      { name: "Electricity & Air Compressor Power", amount: 4500 }
    ],
    profitConsiderations: "Labor carries 80%+ margin; spare parts yield 15-25%. Net monthly income ranges between ₹45,000 and ₹1,40,000.",
    startupCosts: [
      { name: "Hydraulic Bike Lift Ramps (2 Bay)", amount: 75000 },
      { name: "Air Compressor & Pneumatic Impact Tools", amount: 45000 },
      { name: "Tool Chests, Spanners, Jacks & Diagnostic Scanners", amount: 40000 },
      { name: "Pressure Washer & Foam Washing Setup", amount: 25000 },
      { name: "Initial Engine Oil & Fast-Moving Spares Inventory", amount: 50000 },
      { name: "Shop Signboard & Municipal License", amount: 15000 }
    ],
    equipment: [
      { name: "Hydraulic Motorcycle Lift Ramp", quantity: "2 Units", estCost: "Rs. 70,000", required: true },
      { name: "Twin-Cylinder Air Compressor (3HP, 100L)", quantity: "1 Unit", estCost: "Rs. 38,000", required: true },
      { name: "Pneumatic Wrench & Hand Tool Kit", quantity: "2 Sets", estCost: "Rs. 22,000", required: true },
      { name: "High Pressure Car/Bike Washer Pump", quantity: "1 Unit", estCost: "Rs. 18,000", required: true }
    ],
    licenses: [
      { name: "Shop & Establishment License", authority: "Municipal Corporation", description: "Mandatory workshop license.", fee: "Rs. 2,000" },
      { name: "State Pollution Control Board Consent", authority: "SPCB", description: "Required for commercial oil disposal & vehicle washing.", fee: "Rs. 2,500 - 5,000" },
      { name: "GST Registration", authority: "GST Dept", description: "Required for invoicing spare parts.", fee: "Free" }
    ],
    vendors: [
      { category: "Engine Oils", guidance: "Direct distributors of Castrol, Motul, Shell, Gulf, TVS Tru4." },
      { category: "OEM Spare Parts", guidance: "Wholesale auto spare markets (e.g. Kashmere Gate Delhi, Opera House Mumbai, JC Road Bangalore)." }
    ],
    locationGuidance: {
      demandDrivers: "Main petrol pump road, auto market cluster, or near major residential colonies.",
      rentConsideration: "Ground floor with wide ramp access and front parking space for 10+ bikes.",
      footfall: "High vehicular traffic corridor."
    },
    launchPlan: [
      "Lease 500 sq ft ground garage space with washing drain.",
      "Install 2 hydraulic ramps and air compressor setup.",
      "Hire 1 master mechanic and 1 assistant helper.",
      "Stock fast-moving oils, brake pads, spark plugs, and filters.",
      "Distribute launch flyers offering 'Free Foam Wash with Every General Service'."
    ],
    checklist: [
      "Lease commercial garage shop space",
      "Apply for Municipal Trade & Pollution consent",
      "Install hydraulic ramps, compressor & pressure washer",
      "Procure tool chests & diagnostic scanner tools",
      "Tie up with engine oil & spare parts distributors",
      "Hire experienced mechanics",
      "Create job card slips & WhatsApp pickup reminder system"
    ],
    commonMistakes: [
      "Using counterfeit engine oil causing engine damage.",
      "Failing to maintain clean customer waiting lounge.",
      "Unclear job-card estimates leading to billing disputes."
    ],
    marketingPlan: "Offer doorstep bike pick-and-drop service for corporate employees. Provide free chain lubrication with every oil change.",
    faqs: [
      { q: "What is the warranty policy on spare parts?", a: "Pass through standard manufacturer warranties for electrical parts; guarantee labor work for 15 days." }
    ]
  },
  {
    id: "deep-cleaning-service",
    slug: "deep-cleaning-service",
    name: "Home & Office Deep Cleaning Service",
    category: "Home & Maintenance Services",
    shortDescription: "Specialized deep cleaning for homes, sofa shampooing, bathroom sanitization, and post-renovation cleaning.",
    description: "Urban nuclear families and busy professionals increasingly outsource deep cleaning. This service business requires low fixed assets and generates high job tickets.",
    minimumInvestment: "Rs. 40,000",
    comfortableInvestment: "Rs. 120,000",
    maxInvestment: "Rs. 300,000",
    minInvestmentNum: 40000,
    typicalInvestmentNum: 120000,
    maxInvestmentNum: 300000,
    investmentLevel: "Low",
    difficulty: "Easy",
    riskLevel: "Low",
    scalability: "High",
    timeCommitment: "Full-Time",
    businessType: "Field Service",
    profitPotential: "High Margin (50-65%)",
    bestFor: "Service operators, energetic managers, or teams seeking mobile service business.",
    skillsRequired: ["Machine operation (Single disc, Vacuum)", "Chemical safety knowledge", "Team supervision", "Customer relations"],
    revenueModel: "Per-job service pricing (1BHK ₹3,000, 3BHK ₹7,000, Sofa set ₹1,500, Office ₹10/sq ft).",
    monthlyOperatingCosts: [
      { name: "Staff Wages (3 field cleaning staff)", amount: 36000 },
      { name: "Specialized Cleaning Chemicals (Diversey/Taski)", amount: 6000 },
      { name: "Local Travel & Transport (Auto / Tempo)", amount: 8000 },
      { name: "Google & Instagram Ads", amount: 6000 }
    ],
    profitConsiderations: "Average ticket size is ₹4,500 with 60% gross margin. Monthly net profit typically ranges from ₹40,000 to ₹1,50,000.",
    startupCosts: [
      { name: "Single Disc Floor Scrubbing Machine", amount: 32000 },
      { name: "Wet & Dry Commercial Vacuum Cleaner (30L)", amount: 14000 },
      { name: "Sofa & Upholstery Injection-Extraction Machine", amount: 28000 },
      { name: "Ladders, Pressure Washer, Steam Cleaner & Chemical Kit", amount: 22000 },
      { name: "Staff Uniforms, Safety Gear & Marketing", amount: 8000 }
    ],
    equipment: [
      { name: "Single Disc Floor Polishing Machine (1.5 HP)", quantity: "1 Unit", estCost: "Rs. 30,000", required: true },
      { name: "Wet & Dry Vacuum Cleaner (Stainless Tank)", quantity: "1 Unit", estCost: "Rs. 13,000", required: true },
      { name: "Upholstery & Carpet Extraction Cleaner", quantity: "1 Unit", estCost: "Rs. 26,000", required: true }
    ],
    licenses: [
      { name: "Udyam MSME Registration", authority: "MSME Ministry", description: "Official registration for service enterprises.", fee: "Free" },
      { name: "GST Registration", authority: "GST Dept", description: "Required for B2B corporate contracts.", fee: "Free" }
    ],
    vendors: [
      { category: "Cleaning Chemicals", guidance: "Diversey (Taski R1-R9), Buzil Rossari, Schevaran authorized dealers." },
      { category: "Cleaning Equipment", guidance: "Kärcher, Roots Multiclean, Eureka Forbes commercial dealers." }
    ],
    locationGuidance: {
      demandDrivers: "Gated apartment societies, newly handed-over residential towers, commercial offices.",
      rentConsideration: "Home office base; equipment stored in small garage or storeroom.",
      footfall: "Driven by online leads, Urban Company platform, and society WhatsApp groups."
    },
    launchPlan: [
      "Procure commercial floor scrubber, wet/dry vacuum, and Taski chemical kit.",
      "Hire and train 2 energetic field staff on professional cleaning protocols.",
      "List service on Urban Company / Justdial and launch local Instagram video ads.",
      "Distribute flyers in newly constructed apartment societies before festive seasons (Diwali/New Year).",
      "Offer introductory 15% discount on 3BHK deep cleaning orders."
    ],
    checklist: [
      "Purchase floor scrubber, wet vacuum & upholstery machines",
      "Source professional Taski chemical concentrates & microfiber cloths",
      "Provide branded T-shirts & ID cards for cleaning staff",
      "Register Google Business Profile & Urban Company partner listing",
      "Create video demonstrations of sofa & tile cleaning",
      "Implement client feedback sign-off checklist"
    ],
    commonMistakes: [
      "Using harsh acidic chemicals that damage delicate marble or bathroom fittings.",
      "Untrained staff causing accidental property breakage.",
      "Late arrival at client home."
    ],
    marketingPlan: "Run before/after video ads on Instagram showing sofa stain removal. Partner with local real estate agents for move-in cleaning referrals.",
    faqs: [
      { q: "How long does a 2BHK deep cleaning job take?", a: "A trained 3-person team completes a thorough 2BHK deep clean in 4 to 5 hours." }
    ]
  },
  {
    id: "plant-nursery",
    slug: "plant-nursery",
    name: "Plant Nursery & Garden Store",
    category: "Agriculture & Rural",
    shortDescription: "Indoor plants, flowering saplings, ceramic pots, organic fertilizers, and landscaping supplies.",
    description: "Gardening and indoor greenery have surged across urban homes and office spaces. A nursery offers strong profit margins on plants, pots, and gardening consultancies.",
    minimumInvestment: "Rs. 100,000",
    comfortableInvestment: "Rs. 300,000",
    maxInvestment: "Rs. 800,000",
    minInvestmentNum: 100000,
    typicalInvestmentNum: 300000,
    maxInvestmentNum: 800000,
    investmentLevel: "Medium",
    difficulty: "Easy",
    riskLevel: "Low",
    scalability: "High",
    timeCommitment: "Full-Time",
    businessType: "Offline",
    profitPotential: "High Retail Margins (40-65%)",
    bestFor: "Nature lovers, botany enthusiasts, and green space designers.",
    skillsRequired: ["Plant care & soil mixing", "Pest identification", "Merchandising layout", "Customer advice"],
    revenueModel: "Over-the-counter sales of potted plants, seeds, planters, potting mix, and home balcony setup services.",
    monthlyOperatingCosts: [
      { name: "Land / Plot Rent (1000-2000 sq ft open plot)", amount: 15000 },
      { name: "Plant Saplings & Pot Stock Replenishment", amount: 20000 },
      { name: "Gardener Helper Salary", amount: 14000 },
      { name: "Water & Shade Net Maintenance", amount: 3000 }
    ],
    profitConsiderations: "Plant markup is typically 100-200% over wholesale nursery cost. Monthly net income averages ₹40,000 to ₹1,30,000.",
    startupCosts: [
      { name: "Greenhouse Shade Net & Bamboo Frame Setup", amount: 45000 },
      { name: "Initial Wholesale Plant Stock (Indoor, Outdoor, Succulents)", amount: 80000 },
      { name: "Ceramic, Terracotta & Plastic Planters Inventory", amount: 50000 },
      { name: "Soil Mix, Vermicompost, Coco Peat & Fertilizers", amount: 25000 },
      { name: "Drip Irrigation / Hose Pipe Setup & Signboard", amount: 15000 }
    ],
    equipment: [
      { name: "Green Agro Shade Net 75%", quantity: "1 Set", estCost: "Rs. 18,000", required: true },
      { name: "Water Storage Tank (1000L) & Pump", quantity: "1 Unit", estCost: "Rs. 12,000", required: true },
      { name: "Display Wooden Stands & Racks", quantity: "6 Units", estCost: "Rs. 15,000", required: false }
    ],
    licenses: [
      { name: "Udyam MSME Registration", authority: "MSME Ministry", description: "Free government enterprise registration.", fee: "Free" },
      { name: "Pesticide / Seed License (if selling chemical pesticides)", authority: "State Agriculture Dept", description: "Required only for chemical seed/pesticide retail.", fee: "Rs. 1,000" }
    ],
    vendors: [
      { category: "Wholesale Plants", guidance: "Nursery hubs in Kadiyam (Andhra Pradesh), Pune (Maharashtra), Rajahmundry, or local government nurseries." },
      { category: "Pots & Planters", guidance: "Khurja pottery hub, Morbi plastic planters, local terracotta potters." }
    ],
    locationGuidance: {
      demandDrivers: "Main road bypass near residential colonies, highway stretch, or near home decor market.",
      rentConsideration: "Open plot land rent is far cheaper per sq ft than retail shop space.",
      footfall: "High weekend family vehicle traffic."
    },
    launchPlan: [
      "Lease 1,500 sq ft open plot on main roadside.",
      "Erect 75% green shade net with bamboo/iron pipes.",
      "Procure wholesale indoor succulents, air-purifiers, and flowering plants.",
      "Create attractive displays grouping plants by light requirements (Indoor vs Full Sun).",
      "Launch 'Balcony Garden Makeover' package for apartment owners."
    ],
    checklist: [
      "Lease open plot space with abundant water source",
      "Erect shade net structure & display tables",
      "Source healthy plant inventory from wholesale nurseries",
      "Stock potting mix, vermicompost, & ceramic planters",
      "Create Instagram page & Google My Business listing",
      "Host weekend 'Plant Care Workshop' for local society members"
    ],
    commonMistakes: [
      "Over-watering causing root rot in indoor succulents.",
      "Not labeling light/water instructions on pots.",
      "Neglecting pest control on stock plants."
    ],
    marketingPlan: "Offer home balcony plant setup consultations. Partner with interior designers for indoor plant styling in new flats.",
    faqs: [
      { q: "Which plants are most profitable?", a: "Indoor air-purifying plants (Monstera, Snake plant, ZZ plant) and decorative ceramic pot combos yield highest margins." }
    ]
  },
  {
    id: "courier-franchise",
    slug: "courier-franchise",
    name: "Courier & Parcel Delivery Counter",
    category: "Logistics & Local Services",
    shortDescription: "Domestic & international parcel booking, e-commerce return collection, and express document shipping.",
    description: "E-commerce expansion and personal parcel shipping ensure steady walk-in traffic for local courier outlets operating under established brand networks.",
    minimumInvestment: "Rs. 80,000",
    comfortableInvestment: "Rs. 200,000",
    maxInvestment: "Rs. 500,000",
    minInvestmentNum: 80000,
    typicalInvestmentNum: 200000,
    maxInvestmentNum: 500000,
    investmentLevel: "Low",
    difficulty: "Easy",
    riskLevel: "Low",
    scalability: "Medium",
    timeCommitment: "Full-Time",
    businessType: "Offline",
    profitPotential: "Commission 20-35%",
    bestFor: "First-time retail operators seeking stable brand tie-ups.",
    skillsRequired: ["Weight & volumetric calculation", "Customer counter service", "Computer barcode scanning", "Basic packing"],
    revenueModel: "Booking commissions on domestic/international shipments (20-35%) plus packaging material fees.",
    monthlyOperatingCosts: [
      { name: "Shop Rent (100-200 sq ft counter shop)", amount: 12000 },
      { name: "Counter Operator / Helper Salary", amount: 12000 },
      { name: "Electricity, Internet & Printer Ink", amount: 3000 }
    ],
    profitConsiderations: "Monthly bookings of ₹2,50,000 generate ₹60,000 - ₹75,000 in gross commission. Net monthly profit is ₹35,000 - ₹55,000.",
    startupCosts: [
      { name: "Franchise Security Deposit & Onboarding Fee (DTDC / Blue Dart / Maruti)", amount: 60000 },
      { name: "Counter Table, Customer Seating & Brand Signage", amount: 35000 },
      { name: "Digital Weighing Scale & Computer/Printer", amount: 30000 },
      { name: "Barcode Thermal Printer & Label Stock", amount: 12000 },
      { name: "Packaging Supplies (Bubble wrap, boxes, tapes, flyers)", amount: 10000 }
    ],
    equipment: [
      { name: "Precision Digital Weighing Scale (50kg / 1g accuracy)", quantity: "1 Unit", estCost: "Rs. 6,500", required: true },
      { name: "Thermal Label Barcode Printer", quantity: "1 Unit", estCost: "Rs. 11,000", required: true },
      { name: "Desktop Computer & All-in-One Printer", quantity: "1 Set", estCost: "Rs. 28,000", required: true }
    ],
    licenses: [
      { name: "Franchise Authorization Agreement", authority: "Parent Courier Brand", description: "Official franchise contract (DTDC, Trackon, Delhivery, Professional).", fee: "Varies by brand" },
      { name: "Shop & Establishment License", authority: "Municipal Corporation", description: "Standard commercial counter license.", fee: "Rs. 1,500" }
    ],
    vendors: [
      { category: "Couriers Network", guidance: "Franchise network managers of DTDC, Delhivery, Blue Dart, Trackon, Tirupati Courier." },
      { category: "Packaging Tapes & Boxes", guidance: "Local corrugated box manufacturers & poly-courier bag suppliers." }
    ],
    locationGuidance: {
      demandDrivers: "Near commercial offices, industrial estates, university campus, or main market.",
      rentConsideration: "Small 100-150 sq ft storefront keeps overhead minimal.",
      footfall: "Good street access for parcel drop-offs."
    },
    launchPlan: [
      "Apply for authorized franchise of DTDC / Delhivery / Trackon in your pincode.",
      "Lease 150 sq ft shop and install brand-standard signage board.",
      "Install digital weighing scale, computer, and label printer.",
      "Undergo parent company software portal training for parcel tracking.",
      "Distribute promotional flyers to nearby corporate offices & e-commerce sellers."
    ],
    checklist: [
      "Finalize franchise agreement & pincode allocation",
      "Lease shop counter space",
      "Setup branded signboard, computer, weighing scale & thermal printer",
      "Stock courier satchels, bubble wrap & corrugated boxes",
      "Complete courier portal software operational training",
      "Visit surrounding corporate offices & offer monthly billing corporate accounts"
    ],
    commonMistakes: [
      "Incorrect volumetric weight calculations causing company debit notes.",
      "Improper packing of fragile items resulting in damage claims.",
      "Delaying daily evening dispatch pickup."
    ],
    marketingPlan: "Offer corporate pickup services for local businesses and bulk discounts for Amazon/Flipkart sellers in your area.",
    faqs: [
      { q: "What is volumetric weight calculation?", a: "Volumetric weight (Length x Width x Height in cm / 5000) is charged whenever it exceeds actual physical weight." }
    ]
  },
  {
    id: "homestay-bnb",
    slug: "homestay-bnb",
    name: "Homestay & Boutique B&B",
    category: "Tourism & Hospitality",
    shortDescription: "Host tourists and travelers in spare residential rooms or ancestral property with personalized local hospitality.",
    description: "India's domestic tourism boom has made homestays listed on Airbnb and MakeMyTrip a lucrative asset-light hospitality model for property owners.",
    minimumInvestment: "Rs. 100,000",
    comfortableInvestment: "Rs. 350,000",
    maxInvestment: "Rs. 1,200,000",
    minInvestmentNum: 100000,
    typicalInvestmentNum: 350000,
    maxInvestmentNum: 1200000,
    investmentLevel: "Medium",
    difficulty: "Medium",
    riskLevel: "Low",
    scalability: "Medium",
    timeCommitment: "Flexible",
    businessType: "Offline",
    profitPotential: "High Room Yield (50-70%)",
    bestFor: "Property owners, villa holders, or families with underutilized home rooms.",
    skillsRequired: ["Guest hospitality & communication", "Interior aesthetics & cleanliness", "OTA platform management (Airbnb, Agoda)", "Local tourism guidance"],
    revenueModel: "Per-night room rental (₹1,800 - ₹6,000/night) plus home-cooked meal charges.",
    monthlyOperatingCosts: [
      { name: "Housekeeping & Laundry Service", amount: 12000 },
      { name: "Electricity, Water & High-Speed WiFi", amount: 8000 },
      { name: "Breakfast & Beverage Ingredients", amount: 7000 },
      { name: "OTA Platform Commissions (12-18%)", amount: 10000 }
    ],
    profitConsiderations: "At 60% monthly occupancy for 2 rooms @ ₹2,500/night = ₹90,000 income. Net monthly profit is ₹50,000 - ₹65,000.",
    startupCosts: [
      { name: "Room Refurbishment, Decor & Aesthetic Lighting", amount: 150000 },
      { name: "Premium Mattresses, Hotel-Grade Linens & Towels", amount: 65000 },
      { name: "Air Conditioners, Smart TVs & Geysers", amount: 80000 },
      { name: "State Tourism Registration & Safety Locks", amount: 15000 },
      { name: "Professional Room Photography & OTA Listing", amount: 10000 }
    ],
    equipment: [
      { name: "Spring Mattress 8-inch & Hotel Bedding", quantity: "2 Sets", estCost: "Rs. 38,000", required: true },
      { name: "Instant Water Geyser & Rain Shower", quantity: "2 Sets", estCost: "Rs. 16,000", required: true },
      { name: "Smart Keyless Digital Door Locks", quantity: "2 Units", estCost: "Rs. 14,000", required: false }
    ],
    licenses: [
      { name: "State Tourism Department Homestay Registration", authority: "State Tourism Board", description: "Mandatory homestay scheme registration (e.g. Maharashtra Bed & Breakfast scheme, Himachal Homestay rules).", fee: "Rs. 1,000 - 3,000", sourceUrl: "https://tourism.gov.in" },
      { name: "Police Intimation / C-Form for Foreign Guests", authority: "Local Police Station / FRRO", description: "Mandatory guest ID recording.", fee: "Free" }
    ],
    vendors: [
      { category: "Hotel Linen Supply", guidance: "Wholesale linen suppliers (300 TC cotton sheets, duvet inserts, white plush towels)." },
      { category: "Toiletries & Amenities", guidance: "Eco-friendly hotel amenity distributors." }
    ],
    locationGuidance: {
      demandDrivers: "Tourist destinations, hill stations, heritage towns, near pilgrimage centers, or near major hospital complexes.",
      rentConsideration: "Best operated on self-owned or family property.",
      footfall: "Driven by online Airbnb / MakeMyTrip search visibility and 5-star guest reviews."
    },
    launchPlan: [
      "Upgrade 2 spare rooms with hotel-grade mattresses, warm lighting, and spotless bathrooms.",
      "Register with State Tourism Department Homestay Scheme.",
      "Hire professional photographer to capture bright room & balcony photos.",
      "List property on Airbnb, MakeMyTrip, Goibibo, and Booking.com.",
      "Provide complimentary authentic home-cooked breakfast & local sightseeing tip sheet."
    ],
    checklist: [
      "Furnish guest rooms with premium bedding & air conditioning",
      "Install safety locks & first aid kit",
      "Register with State Tourism Department",
      "Hire professional photographer for room listing photos",
      "Publish listings on Airbnb, MakeMyTrip & Booking.com",
      "Set up guest ID check-in verification logbook",
      "Prepare welcoming local itinerary recommendations binder"
    ],
    commonMistakes: [
      "Poor bathroom cleanliness or weak hot water pressure.",
      "Slow response time to guest booking inquiries.",
      "Misrepresenting room size or location photos on booking platforms."
    ],
    marketingPlan: "Create an Instagram page highlighting local food and experiences. Encourage happy guests to leave detailed 5-star reviews on Airbnb.",
    faqs: [
      { q: "Is commercial electricity tariff required for homestays?", a: "Most state homestay policies allow residential electricity tariffs for up to 5 registered guest rooms." }
    ]
  },
  {
    id: "niche-ecommerce",
    slug: "niche-ecommerce",
    name: "Niche E-Commerce Brand (D2C)",
    category: "Online & E-Commerce",
    shortDescription: "Direct-to-consumer online store selling specialized products like organic tea, eco-stationery, or handicraft wear.",
    description: "D2C brands bypass traditional distributor markups by selling specialized niche products directly to consumers nationwide via Shopify/WooCommerce and digital ads.",
    minimumInvestment: "Rs. 50,000",
    comfortableInvestment: "Rs. 200,000",
    maxInvestment: "Rs. 800,000",
    minInvestmentNum: 50000,
    typicalInvestmentNum: 200000,
    maxInvestmentNum: 800000,
    investmentLevel: "Low",
    difficulty: "Medium",
    riskLevel: "Medium",
    scalability: "High",
    timeCommitment: "Full-Time",
    businessType: "Online",
    profitPotential: "High Scalability Potential",
    bestFor: "Digital marketers, product creators, and online entrepreneurs.",
    skillsRequired: ["Shopify / WooCommerce setup", "Meta & Google ad management", "Product packaging & branding", "Logistics integration"],
    revenueModel: "Direct online website sales via Razorpay/Cashfree payment gateway and Cash-on-Delivery (COD).",
    monthlyOperatingCosts: [
      { name: "Meta & Google Performance Ads", amount: 35000 },
      { name: "Shipping & Courier Charges (Shiprocket)", amount: 20000 },
      { name: "Shopify / Web Hosting Subscriptions", amount: 3000 },
      { name: "Product Re-stocking Inventory", amount: 30000 }
    ],
    profitConsiderations: "Gross product margins should be 60-70% to absorb customer acquisition costs (CAC) of 20-30%. Net profits range from 15% to 30%.",
    startupCosts: [
      { name: "Initial Product Batch Production / Sourcing", amount: 60000 },
      { name: "Brand Identity, Logo & Custom Box Packaging", amount: 25000 },
      { name: "Shopify Store Setup & Premium App Plugins", amount: 15000 },
      { name: "GST Registration & Legal Setup", amount: 4000 },
      { name: "Product Shoot & Initial Ad Creatives", amount: 16000 },
      { name: "Shiprocket Logistics & Razorpay Gateway Deposit", amount: 5000 }
    ],
    equipment: [
      { name: "Thermal Shipping Label Printer", quantity: "1 Unit", estCost: "Rs. 10,000", required: true },
      { name: "Digital Weighing Scale (Precision 1g)", quantity: "1 Unit", estCost: "Rs. 2,500", required: true }
    ],
    licenses: [
      { name: "GST Registration", authority: "GST Dept", description: "Mandatory for shipping goods inter-state and integrating payment gateways.", fee: "Free", sourceUrl: "https://gst.gov.in" },
      { name: "Import Export Code (IEC)", authority: "DGFT", description: "Required if planning to export products internationally.", fee: "Rs. 500", sourceUrl: "https://dgft.gov.in" }
    ],
    vendors: [
      { category: "Logistics Aggregators", guidance: "Shiprocket, Pickrr, NimbusPost, Blue Dart, Delhivery." },
      { category: "Payment Gateways", guidance: "Razorpay, Cashfree, Paytm Payment Gateway." }
    ],
    locationGuidance: {
      demandDrivers: "Operated from home or small warehouse anywhere in India.",
      rentConsideration: "Zero rental overhead initially.",
      footfall: "Driven by Instagram / Facebook video ads and Google Search Ads."
    },
    launchPlan: [
      "Select high-margin niche product (e.g. Herbal hair oil, organic millet snacks, handmade leather wallets).",
      "Procure initial 200-unit product batch with custom logo packaging.",
      "Build Shopify website integrated with Razorpay gateway and Shiprocket shipping.",
      "Create 3 engaging Instagram video ads demonstrating product benefits.",
      "Launch Meta ad campaign targeted at relevant customer interest demographics.",
      "Fulfill orders daily with automated COD verification WhatsApp notifications."
    ],
    checklist: [
      "Source product & design custom eco packaging",
      "Get GST registration & open business bank account",
      "Build Shopify online store & domain name",
      "Integrate Razorpay payment gateway & Shiprocket shipping",
      "Shoot high-quality product photos & ad videos",
      "Set up Meta Pixel & Google Analytics",
      "Launch initial Facebook/Instagram conversion ad campaigns"
    ],
    commonMistakes: [
      "Selling low-margin products where shipping cost eats up all profit.",
      "High Cash-on-Delivery (COD) order rejection rate (RTO). Use WhatsApp verification apps.",
      "Ignoring customer review follow-ups."
    ],
    marketingPlan: "Run Instagram user-generated content (UGC) ad reels. Offer 10% discount on first prepaid order to reduce COD risk.",
    faqs: [
      { q: "How to reduce COD return-to-origin (RTO) losses in India?", a: "Use automated WhatsApp OTP verification before dispatching COD orders to confirm customer address validity." }
    ]
  },
  {
    id: "mobile-repair-accessories",
    slug: "mobile-repair-accessories",
    name: "Mobile Accessories & Repair Shop",
    category: "Retail",
    shortDescription: "Smartphone screen replacement, battery repair, charger sales, back covers, and tempered glass installation.",
    description: "Smartphones are indispensable daily tools. Mobile repair and accessory retail enjoy constant demand with exceptionally high margins on screen guards and protective covers.",
    minimumInvestment: "Rs. 100,000",
    comfortableInvestment: "Rs. 300,000",
    maxInvestment: "Rs. 700,000",
    minInvestmentNum: 100000,
    typicalInvestmentNum: 300000,
    maxInvestmentNum: 700000,
    investmentLevel: "Medium",
    difficulty: "Medium",
    riskLevel: "Low",
    scalability: "Medium",
    timeCommitment: "Full-Time",
    businessType: "Offline",
    profitPotential: "Accessories Margins 100-300%",
    bestFor: "Hardware technicians, electronics diploma holders, and retail entrepreneurs.",
    skillsRequired: ["SMD soldering & screen lamination", "Mobile troubleshooting", "Inventory stocking", "Customer communication"],
    revenueModel: "Repair labor fees (₹300 - ₹2,500) plus high-margin retail sales of back covers, tempered glass, cables, and ear-buds.",
    monthlyOperatingCosts: [
      { name: "Shop Rent (100-250 sq ft)", amount: 18000 },
      { name: "Technician / Helper Salary", amount: 18000 },
      { name: "Accessory Stock Replenishment", amount: 20000 },
      { name: "Electricity & AC", amount: 4000 }
    ],
    profitConsiderations: "Tempered glass costing ₹15 wholesale sells for ₹100-₹150 (800%+ margin). Monthly net profit typically ranges from ₹45,000 to ₹1,40,000.",
    startupCosts: [
      { name: "Display Counter Glass Cabinets & Shop Lighting", amount: 65000 },
      { name: "OCA Screen Lamination Machine & Separator", amount: 45000 },
      { name: "SMD Rework Station, DC Power Supply & Soldering Kit", amount: 18000 },
      { name: "Initial Mobile Cover, Charger & Glass Stock", amount: 80000 },
      { name: "Shop Signboard & Municipal License", amount: 12000 }
    ],
    equipment: [
      { name: "OCA Vacuum Laminating Machine for Touch Screen Repair", quantity: "1 Unit", estCost: "Rs. 42,000", required: true },
      { name: "LCD Screen Separator Machine", quantity: "1 Unit", estCost: "Rs. 4,500", required: true },
      { name: "SMD Rework Soldering Station", quantity: "1 Unit", estCost: "Rs. 7,500", required: true }
    ],
    licenses: [
      { name: "Shop & Establishment License", authority: "Municipal Corporation", description: "Mandatory retail shop license.", fee: "Rs. 1,500" },
      { name: "GST Registration", authority: "GST Dept", description: "Required for purchasing branded accessories and corporate billing.", fee: "Free" }
    ],
    vendors: [
      { category: "Mobile Accessories Wholesale", guidance: "Gaffar Market Delhi, Manish Market Mumbai, SP Road Bangalore, Burma Bazar Chennai." },
      { category: "Spare Parts (LCDs/Batteries)", guidance: "Authorized mobile spare part importers & wholesale vendors." }
    ],
    locationGuidance: {
      demandDrivers: "High footfall market street, near bus stands, railway stations, or college campus area.",
      rentConsideration: "Small 100 sq ft shop with prominent glass display counter.",
      footfall: "High pedestrian footfall corridor."
    },
    launchPlan: [
      "Lease 150 sq ft shop in busy electronics or mobile market zone.",
      "Install bright LED glass display counters and repair work-bench.",
      "Procure wholesale trending mobile covers, TWS earbuds, fast chargers, and screens.",
      "Distribute flyers offering 'Free Tempered Glass with Every Mobile Repair'.",
      "Offer 90-day warranty on screen replacement repairs to build customer trust."
    ],
    checklist: [
      "Secure shop in mobile market hub",
      "Install glass display cabinets & technician workbench",
      "Buy OCA lamination machine & SMD soldering station",
      "Stock trending phone covers, screen guards, chargers & ear-buds",
      "Tie up with wholesale spare part suppliers for quick screen delivery",
      "Create Google My Business profile for 'Mobile Repair Near Me'"
    ],
    commonMistakes: [
      "Damaging customer phone motherboards due to poor soldering technique.",
      "Overstocking covers for older phone models that quickly become obsolete.",
      "Not offering repair warranty."
    ],
    marketingPlan: "Rank #1 on Google Maps for local 'iPhone screen repair' queries. Offer 10-minute instant screen guard fitting."
  }
];

// Additional Business Profiles Generator to reach 100+ Catalog Target cleanly
const catalogCategories = [
  "Food & Beverage", "Retail", "Home-Based", "Digital & Professional Services",
  "Beauty & Personal Services", "Education", "Automotive", "Home & Maintenance Services",
  "Health & Wellness", "Agriculture & Rural", "Logistics & Local Services",
  "Tourism & Hospitality", "Events & Creative", "Online & E-Commerce", "Real Estate Services", "Other Services"
];

const seedExtendedTemplates = [
  // F&B
  { name: "Dosa & Idli Stall", category: "Food & Beverage", min: 30000, typ: 80000, max: 200000, diff: "Easy", type: "Offline", desc: "Fresh south Indian breakfast stall serving hot crispy dosas and idlis with chutneys." },
  { name: "Biryani Takeaway Counter", category: "Food & Beverage", min: 100000, typ: 250000, max: 600000, diff: "Medium", type: "Offline", desc: "Specialty dum biryani takeaway outlet serving chicken, mutton, and veg biryanis in eco pots." },
  { name: "Tiffin & Mess Service", category: "Food & Beverage", min: 20000, typ: 60000, max: 150000, diff: "Easy", type: "Home-based", desc: "Daily home-style thali meals delivered to office workers and college students." },
  { name: "Spice & Pickle Business", category: "Food & Beverage", min: 15000, typ: 45000, max: 120000, diff: "Easy", type: "Home-based", desc: "Homemade authentic regional pickles, garms masalas, and direct packaged spices." },
  { name: "Ice Cream & Waffle Parlour", category: "Food & Beverage", min: 250000, typ: 600000, max: 1400000, diff: "Medium", type: "Offline", desc: "Scooped ice cream, thick shakes, and fresh hot waffles in a vibrant dessert shop." },
  { name: "Sweets & Mithai Shop", category: "Food & Beverage", min: 300000, typ: 750000, max: 1800000, diff: "Medium", type: "Offline", desc: "Traditional Indian sweets, festive mithai boxes, and dry fruit gift hampers." },
  { name: "Street Snack Cart (Chaat/Pani Puri)", category: "Food & Beverage", min: 20000, typ: 50000, max: 100000, diff: "Easy", type: "Offline", desc: "Popular evening street food cart serving hygienic Pani Puri, Sev Puri, and Bhel." },
  { name: "Millet & Health Food Kiosk", category: "Food & Beverage", min: 60000, typ: 180000, max: 400000, diff: "Easy", type: "Offline", desc: "Healthy millet snacks, ragi drinks, and organic grain quick bites." },
  { name: "Small Restaurant / Dhaba", category: "Food & Beverage", min: 400000, typ: 900000, max: 2500000, diff: "Hard", type: "Offline", desc: "Full-fledged casual dining eatery serving popular regional thalis, curries, and breads." },
  { name: "Food Truck", category: "Food & Beverage", min: 500000, typ: 1000000, max: 2000000, diff: "Medium", type: "Mobile", desc: "Mobile gourmet food truck serving fusion burgers, wraps, and quick continental bites." },

  // Retail
  { name: "Stationery & Book Shop", category: "Retail", min: 150000, typ: 350000, max: 800000, diff: "Easy", type: "Offline", desc: "School supplies, office stationery, art materials, printing, and xerox services." },
  { name: "Clothing Boutique", category: "Retail", min: 250000, typ: 600000, max: 1500000, diff: "Medium", type: "Offline", desc: "Trendy ethnic and western wear apparel store for women and kids." },
  { name: "Footwear & Shoe Store", category: "Retail", min: 200000, typ: 500000, max: 1200000, diff: "Medium", type: "Offline", desc: "Daily casual footwear, formal shoes, and sports sneakers retail store." },
  { name: "Cosmetics & Beauty Supply", category: "Retail", min: 150000, typ: 400000, max: 900000, diff: "Easy", type: "Offline", desc: "Skincare products, makeup items, hair accessories, and perfume counter." },
  { name: "Gift & Toy Shop", category: "Retail", min: 150000, typ: 350000, max: 750000, diff: "Easy", type: "Offline", desc: "Children's educational toys, birthday gifts, greeting cards, and party props." },
  { name: "Hardware & Paint Store", category: "Retail", min: 400000, typ: 900000, max: 2200000, diff: "Medium", type: "Offline", desc: "Construction hardware, plumbing fittings, paints, electrical wires, and tools." },
  { name: "Pet Supplies & Food Store", category: "Retail", min: 120000, typ: 300000, max: 700000, diff: "Easy", type: "Offline", desc: "Dog/cat food, pet accessories, grooming supplies, and aquarium fish products." },
  { name: "Electronics & Accessories", category: "Retail", min: 300000, typ: 700000, max: 1600000, diff: "Medium", type: "Offline", desc: "Home appliances, audio speakers, smartwatches, and electronic gadgets." },
  { name: "Optical & Eyewear Store", category: "Retail", min: 250000, typ: 600000, max: 1400000, diff: "Medium", type: "Offline", desc: "Prescription spectacles, trendy sunglasses, contact lenses, and vision testing." },
  { name: "Convenience Mini Store", category: "Retail", min: 200000, typ: 450000, max: 1000000, diff: "Easy", type: "Offline", desc: "Late-night snacks, beverages, toiletries, and instant emergency household items." },

  // Home-Based
  { name: "Handmade Jewellery & Crafts", category: "Home-Based", min: 10000, typ: 35000, max: 100000, diff: "Easy", type: "Home-based", desc: "Terracotta, resin, and beaded handmade designer fashion jewellery." },
  { name: "Candle & Soap Making", category: "Home-Based", min: 15000, typ: 40000, max: 110000, diff: "Easy", type: "Home-based", desc: "Scented soy wax candles, organic cold-process soaps, and aromatherapy products." },
  { name: "Gift Hamper Business", category: "Home-Based", min: 20000, typ: 55000, max: 150000, diff: "Easy", type: "Home-based", desc: "Curated corporate, festive, and wedding return gift hampers in custom boxes." },
  { name: "Home Printing & T-Shirts", category: "Home-Based", min: 40000, typ: 110000, max: 250000, diff: "Easy", type: "Home-based", desc: "Sublimation heat press printing for custom t-shirts, mugs, and keychains." },
  { name: "Embroidery & Aari Work", category: "Home-Based", min: 15000, typ: 45000, max: 130000, diff: "Medium", type: "Home-based", desc: "Intricate bridal blouse Aari embroidery and hand-crafted designer thread work." },
  { name: "Beauty Services from Home", category: "Home-Based", min: 25000, typ: 65000, max: 160000, diff: "Easy", type: "Home-based", desc: "Threading, facials, waxing, and bridal makeup services offered in home setup." },
  { name: "Incense & Dhoop Sticks", category: "Home-Based", min: 15000, typ: 35000, max: 90000, diff: "Easy", type: "Home-based", desc: "Natural organic herbal incense sticks and dhoop cones made from floral waste." },
  { name: "Home Cooked Snacks & Sweets", category: "Home-Based", min: 10000, typ: 30000, max: 80000, diff: "Easy", type: "Home-based", desc: "Traditional mathri, namkeen, laddus, and festival snacks packaged for resale." },

  // Digital & Professional Services
  { name: "Graphic Design & Branding", category: "Digital & Professional Services", min: 15000, typ: 45000, max: 120000, diff: "Easy", type: "Online", desc: "Logo design, social media posts, brand guidelines, and marketing graphics." },
  { name: "Video Editing & Motion Graphics", category: "Digital & Professional Services", min: 35000, typ: 90000, max: 250000, diff: "Medium", type: "Online", desc: "YouTube video editing, Instagram reels, corporate promo videos, and animations." },
  { name: "Digital Marketing Agency", category: "Digital & Professional Services", min: 25000, typ: 75000, max: 220000, diff: "Medium", type: "Online", desc: "Lead generation, Meta ads, Google Ads, and social media account management." },
  { name: "Bookkeeping & GST Filing", category: "Digital & Professional Services", min: 15000, typ: 40000, max: 100000, diff: "Medium", type: "Online", desc: "Tally accounting, GST returns, income tax filing, and financial bookkeeping for small shops." },
  { name: "Content Writing & Copywriting", category: "Digital & Professional Services", min: 10000, typ: 25000, max: 70000, diff: "Easy", type: "Online", desc: "SEO website articles, ad copy, product descriptions, and newsletter writing." },
  { name: "IT Support & PC Repair", category: "Digital & Professional Services", min: 25000, typ: 65000, max: 160000, diff: "Easy", type: "Field Service", desc: "Computer hardware repair, OS installation, network setup, and printer servicing." },
  { name: "Virtual Assistant Agency", category: "Digital & Professional Services", min: 10000, typ: 30000, max: 85000, diff: "Easy", type: "Online", desc: "Administrative support, email management, scheduling, and data entry for global clients." },
  { name: "SEO Consultancy", category: "Digital & Professional Services", min: 15000, typ: 50000, max: 140000, diff: "Medium", type: "Online", desc: "Search engine optimization audits, backlink building, and local Google Business ranking." },

  // Beauty & Personal Services
  { name: "Barber Shop & Gents Salon", category: "Beauty & Personal Services", min: 80000, typ: 220000, max: 500000, diff: "Easy", type: "Offline", desc: "Traditional gents haircuts, shaving, beard styling, and scalp massages." },
  { name: "Nail Studio & Art", category: "Beauty & Personal Services", min: 60000, typ: 180000, max: 400000, diff: "Medium", type: "Offline", desc: "Gel nail extensions, nail art designs, manicures, and pedicures." },
  { name: "Bridal Makeup Studio", category: "Beauty & Personal Services", min: 50000, typ: 150000, max: 450000, diff: "Medium", type: "Field Service", desc: "HD & Airbrush bridal makeup, hair styling, and saree draping for weddings." },
  { name: "Barber & Grooming Van", category: "Beauty & Personal Services", min: 250000, typ: 550000, max: 1100000, diff: "Medium", type: "Mobile", desc: "Mobile air-conditioned grooming van offering doorstep haircuts and styling." },

  // Education
  { name: "Computer Training Institute", category: "Education", min: 150000, typ: 350000, max: 850000, diff: "Medium", type: "Offline", desc: "Basic computer courses, Tally accounting, MS Office, and web development classes." },
  { name: "Language & Spoken English Classes", category: "Education", min: 30000, typ: 90000, max: 220000, diff: "Easy", type: "Offline", desc: "Spoken English fluency, IELTS test prep, and corporate personality development." },
  { name: "Music & Dance Academy", category: "Education", min: 60000, typ: 180000, max: 450000, diff: "Easy", type: "Offline", desc: "Classical & Bollywood dance styles, guitar, keyboard, and vocal music training." },
  { name: "Skill Training Center", category: "Education", min: 100000, typ: 280000, max: 650000, diff: "Medium", type: "Offline", desc: "Vocational courses in electrician, AC repair, mobile repair, and tailoring." },

  // Automotive
  { name: "Car Wash & Detailing Studio", category: "Automotive", min: 200000, typ: 500000, max: 1300000, diff: "Medium", type: "Offline", desc: "High-pressure foam washing, ceramic coating, interior deep cleaning, and paint protection." },
  { name: "Tyre & Wheel Alignment Shop", category: "Automotive", min: 300000, typ: 700000, max: 1500000, diff: "Medium", type: "Offline", desc: "New tyre sales, computer wheel alignment, 3D balancing, and nitrogen filling." },
  { name: "Auto Battery & Electricals", category: "Automotive", min: 150000, typ: 380000, max: 850000, diff: "Easy", type: "Offline", desc: "Exide/Amaron car & inverter batteries, charging, alternator repairs, and wiring." },
  { name: "EV Charging & Service Kiosk", category: "Automotive", min: 180000, typ: 450000, max: 1100000, diff: "Medium", type: "Offline", desc: "Fast EV charging station for two-wheelers/three-wheelers and battery swapping." },

  // Home & Maintenance Services
  { name: "Pest Control Service", category: "Home & Maintenance Services", min: 35000, typ: 90000, max: 220000, diff: "Easy", type: "Field Service", desc: "Termite treatment, cockroach herbal gel, bed bug spray, and rodent control." },
  { name: "Plumbing & Electrical Agency", category: "Home & Maintenance Services", min: 25000, typ: 70000, max: 180000, diff: "Easy", type: "Field Service", desc: "On-demand home plumbing, wiring fixes, switchboard installation, and pump repairs." },
  { name: "AC Repair & Servicing", category: "Home & Maintenance Services", min: 40000, typ: 110000, max: 260000, diff: "Easy", type: "Field Service", desc: "Split AC installation, jet foam servicing, gas charging, and PCB circuit repair." },
  { name: "RO Water Purifier Service", category: "Home & Maintenance Services", min: 30000, typ: 80000, max: 190000, diff: "Easy", type: "Field Service", desc: "RO filter replacement, membrane cleaning, new purifier sales, and annual maintenance." },
  { name: "Packers & Movers Agency", category: "Home & Maintenance Services", min: 80000, typ: 250000, max: 650000, diff: "Medium", type: "Field Service", desc: "Household shifting, furniture packing, vehicle transport, and local logistics." },

  // Health & Wellness
  { name: "Fitness Gym & Studio", category: "Health & Wellness", min: 500000, typ: 1200000, max: 3000000, diff: "Hard", type: "Offline", desc: "Weight training machines, cardio section, personal trainers, and fitness memberships." },
  { name: "Yoga & Wellness Studio", category: "Health & Wellness", min: 50000, typ: 150000, max: 400000, diff: "Easy", type: "Offline", desc: "Hatha yoga, power yoga, pranayama, and meditation sessions for mental & physical health." },
  { name: "Healthy Salad & Meal Prep", category: "Health & Wellness", min: 60000, typ: 180000, max: 450000, diff: "Easy", type: "Online", desc: "Subscription-based high-protein fitness salad bowls, keto meals, and detox juices." },
  { name: "Sports Coaching Academy", category: "Health & Wellness", min: 80000, typ: 220000, max: 600000, diff: "Medium", type: "Offline", desc: "Cricket, badminton, football, or skating coaching for kids and young adults." },

  // Agriculture & Rural
  { name: "Mushroom Farming", category: "Agriculture & Rural", min: 35000, typ: 95000, max: 250000, diff: "Easy", type: "Offline", desc: "Cultivation of high-demand Oyster and Button mushrooms in climate-controlled rooms." },
  { name: "Beekeeping & Honey Production", category: "Agriculture & Rural", min: 40000, typ: 110000, max: 300000, diff: "Medium", type: "Offline", desc: "Beehive box management, raw natural honey extraction, and beeswax products." },
  { name: "Poultry Farming (Egg/Broiler)", category: "Agriculture & Rural", min: 150000, typ: 450000, max: 1200000, diff: "Medium", type: "Offline", desc: "Small scale broiler chicken or country egg layer farm with direct meat shop tie-ups." },
  { name: "Organic Produce Distribution", category: "Agriculture & Rural", min: 50000, typ: 150000, max: 400000, diff: "Easy", type: "Offline", desc: "Sourcing chemical-free organic vegetables directly from farmers for city delivery." },

  // Logistics & Local Services
  { name: "Hyperlocal Delivery Service", category: "Logistics & Local Services", min: 30000, typ: 90000, max: 240000, diff: "Easy", type: "Field Service", desc: "Same-day bike runner parcel delivery for local shops, bakeries, and documents." },
  { name: "Packaging & Corrugated Boxes", category: "Logistics & Local Services", min: 100000, typ: 280000, max: 700000, diff: "Medium", type: "Offline", desc: "Custom cardboard shipping boxes, bubble wraps, tapes, and e-commerce polybags." },

  // Tourism & Hospitality & Events
  { name: "Event Planning & Decoration", category: "Events & Creative", min: 60000, typ: 200000, max: 600000, diff: "Medium", type: "Field Service", desc: "Birthday party themes, stage balloon/flower decor, sound systems, and management." },
  { name: "Wedding Photography & Video", category: "Events & Creative", min: 100000, typ: 300000, max: 800000, diff: "Medium", type: "Field Service", desc: "Candid wedding photography, cinematic teaser films, pre-wedding shoots, and albums." },
  { name: "Local Tour & Travel Operator", category: "Tourism & Hospitality", min: 40000, typ: 120000, max: 350000, diff: "Easy", type: "Offline", desc: "Outstation taxi bookings, flight/train ticketing, holiday package itineraries, and visa support." },

  // Online & E-Commerce
  { name: "Amazon & Flipkart Seller", category: "Online & E-Commerce", min: 40000, typ: 150000, max: 500000, diff: "Medium", type: "Online", desc: "List high-demand kitchenware, home decor, or fashion items on major marketplaces." },
  { name: "Print-on-Demand Store", category: "Online & E-Commerce", min: 15000, typ: 40000, max: 100000, diff: "Easy", type: "Online", desc: "Sell custom designed hoodies, phone cases, and mugs zero-inventory via POD suppliers." },
  { name: "Digital Products & Courses", category: "Online & E-Commerce", min: 10000, typ: 30000, max: 80000, diff: "Easy", type: "Online", desc: "Sell downloadable eBooks, Excel templates, design assets, and video masterclasses." },

  // Real Estate Services
  { name: "Property Management & Cleaning", category: "Real Estate Services", min: 30000, typ: 85000, max: 220000, diff: "Easy", type: "Field Service", desc: "Key holding, tenant inspection, cleaning, and rent collection for NRI property owners." },
  { name: "Property Photography & Tours", category: "Real Estate Services", min: 40000, typ: 110000, max: 280000, diff: "Easy", type: "Field Service", desc: "HDR real estate photography, 360-degree virtual tours, and drone videos for property listings." },

  // Other Services
  { name: "Xerox, Print & DTP Center", category: "Other Services", min: 80000, typ: 200000, max: 450000, diff: "Easy", type: "Offline", desc: "Color printing, document laminating, spiral binding, Aadhaar print, and online form filing." },
  { name: "Dry Cleaning & Laundry Kiosk", category: "Other Services", min: 120000, typ: 320000, max: 750000, diff: "Medium", type: "Offline", desc: "Steam pressing, suit dry cleaning, shoe laundering, and daily weight-wash service." },
  { name: "Key Duplication & Lock Repair", category: "Other Services", min: 20000, typ: 50000, max: 110000, diff: "Easy", type: "Offline", desc: "Computerized key cutting, emergency door unlocking, sensor key programming, and locks." }
];

// Generate structured catalog objects for extended templates
const extendedBusinesses = seedExtendedTemplates.map((t, idx) => {
  const slug = t.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return {
    id: slug,
    slug: slug,
    name: t.name,
    category: t.category,
    shortDescription: t.desc,
    description: `${t.name} is a highly practical small business opportunity in India. ${t.desc} It provides steady earning potential for motivated founders.`,
    minimumInvestment: `Rs. ${t.min.toLocaleString("en-IN")}`,
    comfortableInvestment: `Rs. ${t.typ.toLocaleString("en-IN")}`,
    maxInvestment: `Rs. ${t.max.toLocaleString("en-IN")}`,
    minInvestmentNum: t.min,
    typicalInvestmentNum: t.typ,
    maxInvestmentNum: t.max,
    investmentLevel: t.typ <= 100000 ? "Low" : t.typ <= 500000 ? "Medium" : "High",
    difficulty: t.diff,
    riskLevel: t.diff === "Hard" ? "Medium" : "Low",
    scalability: t.type === "Online" ? "High" : "Medium",
    timeCommitment: "Full-Time",
    businessType: t.type,
    profitPotential: `Typical Gross Margin ${t.type === "Online" ? "50-70%" : "25-45%"}`,
    bestFor: `Aspiring entrepreneurs looking to launch in the ${t.category} sector.`,
    skillsRequired: ["Business management", "Customer service", "Quality control", "Local marketing"],
    revenueModel: `Daily counter sales or service fees. Income varies by location footfall and client base.`,
    monthlyOperatingCosts: [
      { name: "Premises Rent / Utility Overhead", amount: Math.round(t.typ * 0.1) },
      { name: "Raw Material / Stock Replenishment", amount: Math.round(t.typ * 0.2) },
      { name: "Staff / Helper Expenses", amount: Math.round(t.typ * 0.12) }
    ],
    profitConsiderations: `Estimated net monthly profits range from ₹25,000 to ₹1,20,000 depending on volume, location rent, and scale.`,
    startupCosts: [
      { name: "Initial Equipment & Machinery", amount: Math.round(t.typ * 0.45) },
      { name: "Shop / Studio Setup & Furnishing", amount: Math.round(t.typ * 0.3) },
      { name: "Opening Stock & Inventory", amount: Math.round(t.typ * 0.2) },
      { name: "Licenses & Opening Marketing", amount: Math.round(t.typ * 0.05) }
    ],
    equipment: [
      { name: "Primary Commercial Equipment / Tools", quantity: "1 Set", estCost: `Rs. ${Math.round(t.typ * 0.4).toLocaleString("en-IN")}`, required: true },
      { name: "Point of Sale & Billing Terminal", quantity: "1 Unit", estCost: "Rs. 12,000", required: false }
    ],
    licenses: [
      { name: "Shop & Establishment License", authority: "Local Municipal Body", description: "Standard trade operating permit.", fee: "Rs. 1,000 - 3,000" },
      { name: "Udyam MSME Registration", authority: "Ministry of MSME", description: "Free government registration for small business benefits.", fee: "Free", sourceUrl: "https://udyamregistration.gov.in" }
    ],
    vendors: [
      { category: "Primary Machinery & Supplies", guidance: "Local wholesale markets, verified IndiaMART suppliers, or city distributors." }
    ],
    locationGuidance: {
      demandDrivers: "High pedestrian footfall main street, near residential colonies, or office hubs.",
      rentConsideration: "Keep rent under 15% of projected monthly gross turnover.",
      footfall: "Accessible location with good visibility."
    },
    launchPlan: [
      "Conduct local market demand research and finalize location.",
      "Obtain MSME Udyam registration and necessary municipal permits.",
      "Procure core equipment, stock inventory, and setup payment standees.",
      "Run targeted local neighborhood marketing (flyers, GPay standee, WhatsApp groups)."
    ],
    checklist: [
      "Select location & finalize lease terms",
      "Apply for Udyam MSME & trade licenses",
      "Purchase core equipment & setup counter",
      "Stock initial raw material or retail inventory",
      "Setup digital UPI payments (GPay/PhonePe)",
      "Launch opening promotion offer"
    ],
    commonMistakes: [
      "Not estimating working capital for the first 3 months.",
      "Neglecting customer feedback during initial launch weeks."
    ],
    marketingPlan: "Distribute inaugural promotional flyers locally and leverage Google My Business reviews.",
    faqs: [
      { q: "How long does it take to reach break-even?", a: "Most well-located small businesses reach cash break-even within 3 to 6 months." }
    ]
  };
});

// Full combined 100+ Catalog export
const allBusinesses = [...businesses, ...extendedBusinesses];

export default allBusinesses;
