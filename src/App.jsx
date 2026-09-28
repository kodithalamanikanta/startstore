import React, { useState, useEffect } from "react";
import staticBusinesses, { categoriesList } from "./data/businesses.js";
import { supabase } from "./lib/supabaseClient.js";
import AuthModal from "./components/AuthModal.jsx";
import AdminAddModal from "./components/AdminAddModal.jsx";
import BusinessDetail from "./pages/BusinessDetail.jsx";
import BusinessFinderQuiz from "./components/BusinessFinderQuiz.jsx";
import SavedBusinesses from "./pages/SavedBusinesses.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import BusinessCard from "./pages/Business.jsx";

const themes = {
  darkCyber: {
    id: "darkCyber",
    name: "🌙 Dark Cyber",
    mode: "dark",
    page: "#0b0f19",
    surface: "#161e2e",
    soft: "#232f45",
    border: "#334155",
    text: "#f8fafc",
    primary: "#a5b4fc",
    accent: "#f43f5e",
    hero: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #311b92 100%)",
    cardShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
  },
  darkEmerald: {
    id: "darkEmerald",
    name: "🌙 Dark Emerald",
    mode: "dark",
    page: "#022c22",
    surface: "#064e3b",
    soft: "#047857",
    border: "#10b981",
    text: "#ecfdf5",
    primary: "#34d399",
    accent: "#fbbf24",
    hero: "linear-gradient(135deg, #022c22 0%, #064e3b 50%, #047857 100%)",
    cardShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
  },
  lightSunrise: {
    id: "lightSunrise",
    name: "☀️ Light Sunrise",
    mode: "light",
    page: "#faf8f5",
    surface: "#ffffff",
    soft: "#f5efe6",
    border: "#e2d9cc",
    text: "#1e293b",
    primary: "#1e3a8a",
    accent: "#ea580c",
    hero: "linear-gradient(135deg, #ffedd5 0%, #fff7ed 50%, #fef3c7 100%)",
    cardShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
  },
  lightCity: {
    id: "lightCity",
    name: "☀️ Light City",
    mode: "light",
    page: "#f8fafc",
    surface: "#ffffff",
    soft: "#f1f5f9",
    border: "#cbd5e1",
    text: "#0f172a",
    primary: "#0f172a",
    accent: "#2563eb",
    hero: "linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #e0e7ff 100%)",
    cardShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
  },
};

export default function App() {
  const [businesses, setBusinesses] = useState(staticBusinesses);
  const [isBackendConnected, setIsBackendConnected] = useState(false);
  const [themeKey, setThemeKey] = useState("darkCyber");
  const theme = themes[themeKey] || themes.darkCyber;
  const isDark = theme.mode === "dark";

  // Toggle Mode (Light / Dark)
  const toggleLightDarkMode = () => {
    if (isDark) {
      setThemeKey("lightSunrise");
    } else {
      setThemeKey("darkCyber");
    }
  };

  // View state: 'home', 'detail', 'quiz', 'saved', 'admin'
  const [currentView, setCurrentView] = useState("home");
  const [selectedBusinessId, setSelectedBusinessId] = useState(null);

  // Filters state
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [investmentFilter, setInvestmentFilter] = useState("All");

  // Auth & Admin State
  const [authUser, setAuthUser] = useState(null);
  const [userRole, setUserRole] = useState("customer");
  const [displayName, setDisplayName] = useState("");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [editingBusiness, setEditingBusiness] = useState(null);

  // Saved & Progress State
  const [savedBusinessIds, setSavedBusinessIds] = useState(() => {
    try {
      const stored = localStorage.getItem("startshop_saved");
      return stored ? JSON.parse(stored) : ["cloud-kitchen", "tea-stall"];
    } catch (e) {
      return ["cloud-kitchen", "tea-stall"];
    }
  });

  const [userProgress, setUserProgress] = useState(() => {
    try {
      const stored = localStorage.getItem("startshop_progress");
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  });

  // Save state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("startshop_saved", JSON.stringify(savedBusinessIds));
    } catch (e) {}
  }, [savedBusinessIds]);

  useEffect(() => {
    try {
      localStorage.setItem("startshop_progress", JSON.stringify(userProgress));
    } catch (e) {}
  }, [userProgress]);

  // Supabase Sync
  const fetchSupabaseData = async () => {
    try {
      const { data, error } = await supabase
        .from("businesses")
        .select(`
          *,
          categories (name),
          business_guides (*),
          business_costs (*),
          business_licenses (licenses (*)),
          business_equipment (equipment (*)),
          business_vendors (vendors (*)),
          checklists (checklist_items (*))
        `)
        .eq("status", "published");

      if (error) throw error;

      if (data && data.length > 0) {
        const transformed = data.map((b) => {
          const guide = b.business_guides?.[0] || {};
          const checklist = b.checklists?.[0] || {};
          const items = checklist.checklist_items || [];

          return {
            id: b.slug || b.id,
            slug: b.slug || b.id,
            name: b.name,
            category: b.categories?.name || "General",
            description: b.description || b.short_description,
            shortDescription: b.short_description || b.description,
            minimumInvestment: `Rs. ${Number(b.min_investment_estimate).toLocaleString("en-IN")}`,
            comfortableInvestment: `Rs. ${Number(b.typical_investment_estimate).toLocaleString("en-IN")}`,
            minInvestmentNum: Number(b.min_investment_estimate),
            typicalInvestmentNum: Number(b.typical_investment_estimate),
            investmentLevel: b.investment_level,
            difficulty: b.difficulty,
            riskLevel: b.risk_level,
            scalability: b.scalability,
            businessType: b.business_type || "Offline",
            profitPotential: b.profit_potential,
            bestFor: b.best_for,
            status: b.status,
            skillsRequired: ["Management", "Customer Relations", "Operations"],
            startupCosts: b.business_costs && b.business_costs.length > 0
              ? b.business_costs.map((c) => ({ name: c.item_name, amount: Number(c.typical_amount) }))
              : [{ name: "Initial Setup", amount: Number(b.min_investment_estimate) }],
            monthlyOperatingCosts: [
              { name: "Rent & Utilities", amount: Math.round(Number(b.typical_investment_estimate) * 0.1) },
              { name: "Staff & Materials", amount: Math.round(Number(b.typical_investment_estimate) * 0.15) },
            ],
            equipment: b.business_equipment?.map((e) => ({
              name: e.equipment?.name || "Standard Equipment",
              quantity: e.quantity_guidance || "1 Unit",
              estCost: e.equipment?.approx_price || "Varies",
              required: true,
            })) || [{ name: "Core Commercial Tools", quantity: "1 Set", estCost: "Varies", required: true }],
            licenses: b.business_licenses?.map((l) => ({
              name: l.licenses?.name || "Shop License",
              authority: l.licenses?.authority || "Local Authority",
              description: l.licenses?.description || "Municipal permission",
              fee: l.licenses?.estimated_fee || "Varies",
              sourceUrl: l.licenses?.official_source_url,
            })) || [{ name: "Shop & Establishment License", authority: "Local Municipality", description: "Standard trade permit." }],
            vendors: b.business_vendors?.map((v) => ({
              category: v.vendors?.category || "Supplies",
              guidance: v.vendors?.notes || "Local wholesale market supplier",
            })) || [{ category: "Suppliers", guidance: "Local wholesale market distributors." }],
            locationGuidance: {
              demandDrivers: "Main market or residential area",
              rentConsideration: "Keep rent within budget",
              footfall: "Good pedestrian footfall",
            },
            launchPlan: items.length > 0 ? items.map((i) => i.title) : ["Step 1: Planning", "Step 2: Licenses", "Step 3: Setup", "Step 4: Launch"],
            checklist: items.length > 0 ? items.map((i) => i.title) : ["Location lease", "Get MSME License", "Buy equipment", "Opening marketing"],
            commonMistakes: guide.common_mistakes || ["Under-estimating capital requirements", "Neglecting marketing"],
            marketingPlan: guide.marketing_plan || "Local flyer distribution and Google My Business profile setup.",
            faqs: guide.faqs || [{ q: "How to get started?", a: "Follow the step-by-step roadmap in this guide." }],
          };
        });

        // Merge Supabase items with local extended seeds
        const supabaseSlugs = new Set(transformed.map((t) => t.slug));
        const merged = [...transformed, ...staticBusinesses.filter((sb) => !supabaseSlugs.has(sb.slug))];

        setBusinesses(merged);
        setIsBackendConnected(true);
      }
    } catch (err) {
      console.warn("Operating in offline seed mode:", err.message);
      setIsBackendConnected(false);
    }
  };

  useEffect(() => {
    fetchSupabaseData();

    const fetchUserProfile = async (user) => {
      if (!user) {
        setAuthUser(null);
        setUserRole("customer");
        setDisplayName("");
        return;
      }
      setAuthUser(user);
      try {
        const { data: profile } = await supabase
          .from("profiles")
          .select("role, display_name")
          .eq("id", user.id)
          .single();

        if (profile) {
          setUserRole(profile.role || "customer");
          setDisplayName(profile.display_name || user.email.split("@")[0]);
        } else {
          setDisplayName(user.email.split("@")[0]);
        }
      } catch (e) {
        setDisplayName(user.email.split("@")[0]);
      }
    };

    supabase.auth.getUser().then(({ data: { user } }) => fetchUserProfile(user));
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      fetchUserProfile(session?.user || null);
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setAuthUser(null);
    setUserRole("customer");
    setDisplayName("");
  };

  // Direct business selection
  const handleSelectBusiness = (id) => {
    setSelectedBusinessId(id);
    setCurrentView("detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Instant direct search jump (Rule 3 requirement)
  const handleSearchChange = (val) => {
    setSearchTerm(val);
    if (val.trim()) {
      const match = businesses.find(
        (b) => b.name.toLowerCase() === val.trim().toLowerCase() || b.slug === val.trim().toLowerCase()
      );
      if (match) {
        handleSelectBusiness(match.id);
      }
    }
  };

  // Toggle Save
  const handleToggleSave = (id) => {
    setSavedBusinessIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Toggle Checklist Item
  const handleToggleChecklist = (businessId, itemTitle) => {
    setUserProgress((prev) => {
      const currentList = prev[businessId] || [];
      const updated = currentList.includes(itemTitle)
        ? currentList.filter((i) => i !== itemTitle)
        : [...currentList, itemTitle];
      return { ...prev, [businessId]: updated };
    });
  };

  // Save new or updated business
  const handleSaveBusiness = (businessData) => {
    setBusinesses((prev) => {
      const exists = prev.some((b) => b.id === businessData.id);
      if (exists) {
        return prev.map((b) => (b.id === businessData.id ? { ...b, ...businessData } : b));
      } else {
        return [businessData, ...prev];
      }
    });
    setEditingBusiness(null);
  };

  // Filtered Business Catalog
  const filteredBusinesses = businesses.filter((b) => {
    const text = searchTerm.toLowerCase();
    const matchesSearch =
      !searchTerm ||
      b.name.toLowerCase().includes(text) ||
      b.category.toLowerCase().includes(text) ||
      b.description.toLowerCase().includes(text);

    const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
    const matchesDifficulty = difficultyFilter === "All" || b.difficulty === difficultyFilter;
    const matchesInvestment = investmentFilter === "All" || b.investmentLevel === investmentFilter;

    return matchesSearch && matchesCategory && matchesDifficulty && matchesInvestment;
  });

  const selectedBusiness = businesses.find((b) => b.id === selectedBusinessId || b.slug === selectedBusinessId);

  // Styles
  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: theme.page,
    color: theme.text,
  };

  const navStyle = {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    padding: "16px 28px",
    backgroundColor: theme.surface,
    borderBottom: `1px solid ${theme.border}`,
    boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.5)" : "0 4px 16px rgba(0,0,0,0.05)",
  };

  const logoStyle = {
    fontSize: "22px",
    fontWeight: "900",
    color: theme.primary,
    cursor: "pointer",
    letterSpacing: "-0.5px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const navLinkStyle = (isActive) => ({
    padding: "10px 16px",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "14px",
    color: isActive ? theme.accent : theme.text,
    backgroundColor: isActive ? theme.soft : "transparent",
    border: `1px solid ${isActive ? theme.border : "transparent"}`,
    cursor: "pointer",
  });

  const dbBadgeStyle = {
    padding: "4px 12px",
    borderRadius: "16px",
    fontSize: "12px",
    fontWeight: "700",
    backgroundColor: isBackendConnected ? (isDark ? "#064e3b" : "#e6f4ea") : (isDark ? "#78350f" : "#fff3e0"),
    color: isBackendConnected ? (isDark ? "#a7f3d0" : "#137333") : (isDark ? "#fef3c7" : "#b06000"),
    border: `1px solid ${isBackendConnected ? (isDark ? "#10b981" : "#ceead6") : (isDark ? "#f59e0b" : "#ffe0b2")}`,
  };

  const themeToggleButtonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 14px",
    borderRadius: "20px",
    border: `1px solid ${theme.border}`,
    backgroundColor: theme.soft,
    color: theme.text,
    fontWeight: "bold",
    fontSize: "13px",
    cursor: "pointer",
  };

  const selectDropdownStyle = {
    padding: "8px 14px",
    borderRadius: "10px",
    border: `1px solid ${theme.border}`,
    backgroundColor: theme.surface,
    color: theme.text,
    fontSize: "13px",
    fontWeight: "600",
  };

  return (
    <div style={pageStyle}>
      {/* HEADER NAVBAR */}
      <nav style={navStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={logoStyle} onClick={() => setCurrentView("home")}>
            <span style={{ fontSize: "26px" }}>🏬</span> START SHOP
          </div>
          <span style={dbBadgeStyle}>
            {isBackendConnected ? "● Supabase DB" : "● Offline Seed Data"}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <button style={navLinkStyle(currentView === "home")} onClick={() => setCurrentView("home")}>
            Explore Catalog
          </button>
          <button style={navLinkStyle(currentView === "quiz")} onClick={() => setCurrentView("quiz")}>
            🎯 Finder Quiz
          </button>
          <button style={navLinkStyle(currentView === "saved")} onClick={() => setCurrentView("saved")}>
            🔖 Saved ({savedBusinessIds.length})
          </button>

          {userRole === "admin" && (
            <button
              style={{ ...navLinkStyle(currentView === "admin"), backgroundColor: isDark ? "#831843" : "#fff0f6", color: isDark ? "#fbcfe8" : "#c2185b" }}
              onClick={() => setCurrentView("admin")}
            >
              ⚡ Admin Center
            </button>
          )}

          {/* LIGHT / DARK MODE TOGGLE BUTTON */}
          <button style={themeToggleButtonStyle} onClick={toggleLightDarkMode} title="Toggle Light / Dark Mode">
            {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>

          {/* PALETTE SELECTOR DROPDOWN */}
          <select
            value={themeKey}
            onChange={(e) => setThemeKey(e.target.value)}
            style={selectDropdownStyle}
          >
            <option value="darkCyber">🌙 Dark Cyber</option>
            <option value="darkEmerald">🌙 Dark Emerald</option>
            <option value="lightSunrise">☀️ Light Sunrise</option>
            <option value="lightCity">☀️ Light City</option>
          </select>

          {authUser ? (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "bold", padding: "8px 14px", backgroundColor: theme.soft, borderRadius: "20px", border: `1px solid ${theme.border}` }}>
                👤 {displayName}
              </span>
              <button
                onClick={handleLogout}
                style={{ padding: "8px 14px", border: "none", borderRadius: "8px", backgroundColor: "#fce8e6", color: "#c5221f", fontWeight: "bold", cursor: "pointer", fontSize: "13px" }}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              style={{ padding: "10px 20px", border: "none", borderRadius: "10px", backgroundColor: theme.primary, color: isDark ? "#0f172a" : "#ffffff", fontWeight: "800", cursor: "pointer", fontSize: "14px", boxShadow: "0 4px 14px rgba(0,0,0,0.15)" }}
            >
              Sign In / Account
            </button>
          )}
        </div>
      </nav>

      {/* VIEW 1: HOME & BUSINESS CATALOG */}
      {currentView === "home" && (
        <main className="animate-fade-in">
          {/* HERO BANNER */}
          <div style={{ backgroundImage: theme.hero, padding: "60px 24px", textAlign: "center", borderBottom: `1px solid ${theme.border}`, boxShadow: "inset 0 -20px 30px rgba(0,0,0,0.1)" }}>
            <h1 style={{ margin: "0 0 12px", fontSize: "52px", fontWeight: "900", color: theme.primary, letterSpacing: "-1px" }}>
              START SHOP
            </h1>
            <p style={{ maxWidth: "720px", margin: "0 auto 28px", fontSize: "20px", color: theme.text, lineHeight: 1.6, opacity: 0.95 }}>
              India's practical launch desk for first-time founders. Discover high-potential business opportunities, calculate setup costs, and follow step-by-step startup guides.
            </p>

            {/* INSTANT SEARCH BAR (Type B requirement) */}
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <input
                type="text"
                placeholder="Search specific business (e.g. 'cloud kitchen', 'tea stall', 'grocery')..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                style={{
                  width: "100%",
                  padding: "18px 24px",
                  fontSize: "17px",
                  borderRadius: "14px",
                  border: `2px solid ${theme.primary}`,
                  backgroundColor: theme.surface,
                  color: theme.text,
                  boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          {/* CATALOG CONTENT */}
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", marginBottom: "28px" }}>
              <div>
                <h2 style={{ margin: 0, color: theme.primary, fontSize: "28px", fontWeight: "800" }}>
                  Explore India Business Catalog ({filteredBusinesses.length} Profiles)
                </h2>
                <p style={{ margin: "6px 0 0", color: theme.text, opacity: 0.85, fontSize: "15px" }}>
                  Filter by investment size, category, difficulty, and operating mode.
                </p>
              </div>

              <button
                onClick={() => setCurrentView("quiz")}
                style={{
                  padding: "14px 24px",
                  borderRadius: "12px",
                  border: "none",
                  backgroundColor: theme.accent,
                  color: "#ffffff",
                  fontWeight: "800",
                  cursor: "pointer",
                  fontSize: "15px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                }}
              >
                🎯 Don't know what to start? Take Finder Quiz
              </button>
            </div>

            {/* FILTERS BAR */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "32px", padding: "20px", backgroundColor: theme.surface, borderRadius: "14px", border: `1px solid ${theme.border}`, boxShadow: theme.cardShadow }}>
              <div>
                <label style={{ fontSize: "12px", fontWeight: "bold", display: "block", marginBottom: "6px", color: theme.primary, textTransform: "uppercase" }}>Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{ padding: "10px 14px", borderRadius: "8px", border: `1px solid ${theme.border}`, backgroundColor: theme.soft, color: theme.text, fontSize: "14px", fontWeight: "600" }}
                >
                  <option value="All">All Categories ({businesses.length})</option>
                  {categoriesList.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: "bold", display: "block", marginBottom: "6px", color: theme.primary, textTransform: "uppercase" }}>Capital Investment</label>
                <select
                  value={investmentFilter}
                  onChange={(e) => setInvestmentFilter(e.target.value)}
                  style={{ padding: "10px 14px", borderRadius: "8px", border: `1px solid ${theme.border}`, backgroundColor: theme.soft, color: theme.text, fontSize: "14px", fontWeight: "600" }}
                >
                  <option value="All">All Capital Levels</option>
                  <option value="Low">Low Capital (&lt; ₹1L)</option>
                  <option value="Medium">Medium (₹1L - ₹5L)</option>
                  <option value="High">High Capital (&gt; ₹5L)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: "bold", display: "block", marginBottom: "6px", color: theme.primary, textTransform: "uppercase" }}>Difficulty</label>
                <select
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  style={{ padding: "10px 14px", borderRadius: "8px", border: `1px solid ${theme.border}`, backgroundColor: theme.soft, color: theme.text, fontSize: "14px", fontWeight: "600" }}
                >
                  <option value="All">All Difficulties</option>
                  <option value="Easy">Easy (Beginner)</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard (Advanced)</option>
                </select>
              </div>
            </div>

            {/* CATALOG CARDS GRID */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {filteredBusinesses.map((b) => (
                <BusinessCard
                  key={b.id}
                  business={b}
                  onSelect={() => handleSelectBusiness(b.id)}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        </main>
      )}

      {/* VIEW 2: BUSINESS FINDER QUIZ */}
      {currentView === "quiz" && (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px" }}>
          <BusinessFinderQuiz
            businesses={businesses}
            onSelectBusiness={handleSelectBusiness}
            theme={theme}
          />
        </div>
      )}

      {/* VIEW 3: SAVED BUSINESSES */}
      {currentView === "saved" && (
        <SavedBusinesses
          savedBusinessIds={savedBusinessIds}
          allBusinesses={businesses}
          userProgress={userProgress}
          onSelectBusiness={handleSelectBusiness}
          onRemoveSaved={handleToggleSave}
          theme={theme}
        />
      )}

      {/* VIEW 4: DETAILED BUSINESS GUIDE */}
      {currentView === "detail" && selectedBusiness && (
        <BusinessDetail
          business={selectedBusiness}
          onBack={() => setCurrentView("home")}
          isSaved={savedBusinessIds.includes(selectedBusiness.id)}
          onToggleSave={handleToggleSave}
          userProgress={userProgress}
          onToggleChecklist={handleToggleChecklist}
          theme={theme}
        />
      )}

      {/* VIEW 5: ADMIN PLATFORM */}
      {currentView === "admin" && (
        <AdminPage
          businesses={businesses}
          setBusinesses={setBusinesses}
          isBackendConnected={isBackendConnected}
          theme={theme}
          onOpenAddModal={() => {
            setEditingBusiness(null);
            setIsAdminModalOpen(true);
          }}
          onEditBusiness={(b) => {
            setEditingBusiness(b);
            setIsAdminModalOpen(true);
          }}
        />
      )}

      {/* MODALS */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        theme={theme}
        onAuthSuccess={({ user, role, displayName }) => {
          setAuthUser(user);
          setUserRole(role);
          setDisplayName(displayName);
        }}
      />

      <AdminAddModal
        isOpen={isAdminModalOpen}
        onClose={() => {
          setIsAdminModalOpen(false);
          setEditingBusiness(null);
        }}
        onSave={handleSaveBusiness}
        editingBusiness={editingBusiness}
        theme={theme}
      />
    </div>
  );
}
