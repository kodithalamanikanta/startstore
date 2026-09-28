import React, { useState } from "react";

function BusinessFinderQuiz({ businesses, onSelectBusiness, theme }) {
  const [budget, setBudget] = useState("all");
  const [mode, setMode] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [category, setCategory] = useState("all");

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const categories = Array.from(new Set(businesses.map((b) => b.category)));
  const isDark = theme.mode === "dark";

  const handleReset = () => {
    setBudget("all");
    setMode("all");
    setDifficulty("all");
    setCategory("all");
    setHasSubmitted(false);
  };

  // Match Scoring Algorithm
  const scoredBusinesses = businesses.map((b) => {
    let score = 100;
    const reasons = [];

    // Budget match
    const typVal = b.typicalInvestmentNum || 50000;
    if (budget === "under50k") {
      if (typVal <= 50000) {
        reasons.push("Matches low capital budget (under ₹50,000)");
      } else {
        score -= 40;
      }
    } else if (budget === "50kTo2L") {
      if (typVal >= 30000 && typVal <= 250000) {
        reasons.push("Fits comfortable budget of ₹50,000 - ₹2.5 Lakhs");
      } else {
        score -= 30;
      }
    } else if (budget === "above2L") {
      if (typVal >= 150000) {
        reasons.push("Suitable for capital deployment above ₹2 Lakhs");
      } else {
        score -= 20;
      }
    }

    // Mode match
    if (mode !== "all") {
      const bType = (b.businessType || "").toLowerCase();
      if (mode === "home" && (bType.includes("home") || bType.includes("online"))) {
        reasons.push("Operated from home or online with no separate shop rent");
      } else if (mode === "online" && bType.includes("online")) {
        reasons.push("Direct digital/online business model");
      } else if (mode === "offline" && (bType.includes("offline") || bType.includes("mobile") || bType.includes("field"))) {
        reasons.push("Physical customer-facing or field service operation");
      } else if (mode !== "all") {
        score -= 25;
      }
    }

    // Difficulty match
    if (difficulty !== "all") {
      if (b.difficulty === difficulty) {
        reasons.push(`Matches preferred ${difficulty} operational complexity`);
      } else {
        score -= 20;
      }
    }

    // Category match
    if (category !== "all") {
      if (b.category === category) {
        reasons.push(`In your selected category: ${category}`);
      } else {
        score -= 30;
      }
    }

    if (reasons.length === 0) {
      reasons.push("Matches general small-business startup parameters");
    }

    return {
      business: b,
      score: Math.max(score, 10),
      reasons,
    };
  });

  const sortedMatches = scoredBusinesses
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  const containerStyle = {
    padding: "36px",
    backgroundColor: theme.surface,
    border: `1px solid ${theme.border}`,
    borderRadius: "20px",
    boxShadow: theme.cardShadow || "0 10px 30px rgba(0, 0, 0, 0.08)",
    margin: "24px 0",
  };

  const formGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "24px",
  };

  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    marginBottom: "8px",
    color: theme.primary,
    fontSize: "14px",
  };

  const selectStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border: `1px solid ${theme.border}`,
    backgroundColor: theme.soft,
    color: theme.text,
    fontSize: "15px",
    fontWeight: "600",
  };

  const buttonStyle = {
    padding: "14px 28px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: theme.accent,
    color: "#ffffff",
    fontWeight: "800",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "24px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
  };

  const cardGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginTop: "28px",
  };

  const resultCardStyle = {
    padding: "24px",
    borderRadius: "14px",
    border: `1px solid ${theme.border}`,
    backgroundColor: theme.soft,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const badgeStyle = (score) => ({
    padding: "4px 12px",
    borderRadius: "20px",
    fontWeight: "800",
    fontSize: "12px",
    backgroundColor: score >= 80 ? (isDark ? "#064e3b" : "#e6f4ea") : score >= 50 ? (isDark ? "#78350f" : "#fff3e0") : (isDark ? "#7f1d1d" : "#fce8e6"),
    color: score >= 80 ? (isDark ? "#a7f3d0" : "#137333") : score >= 50 ? (isDark ? "#fef3c7" : "#b06000") : (isDark ? "#fca5a5" : "#c5221f"),
    border: `1px solid ${score >= 80 ? (isDark ? "#10b981" : "#ceead6") : score >= 50 ? (isDark ? "#f59e0b" : "#ffe0b2") : (isDark ? "#ef4444" : "#fad2cf")}`,
  });

  return (
    <div style={containerStyle} className="animate-fade-in">
      <h2 style={{ margin: "0 0 10px", color: theme.primary, fontSize: "28px", fontWeight: "900" }}>
        🎯 Business Finder & Recommendation Engine
      </h2>
      <p style={{ margin: 0, color: theme.text, opacity: 0.9, fontSize: "16px" }}>
        Not sure which business to start? Select your preferences below to discover tailored opportunities.
      </p>

      <div style={formGridStyle}>
        <div>
          <label style={labelStyle}>1. Investment Capital Budget</label>
          <select style={selectStyle} value={budget} onChange={(e) => setBudget(e.target.value)}>
            <option value="all">Any Budget</option>
            <option value="under50k">Under ₹50,000 (Low Capital)</option>
            <option value="50kTo2L">₹50,000 - ₹2.5 Lakhs (Medium)</option>
            <option value="above2L">Above ₹2.5 Lakhs (Capital Scale)</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>2. Business Model Preference</label>
          <select style={selectStyle} value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="all">Any Mode</option>
            <option value="home">Home-Based / Remote</option>
            <option value="online">Digital / Online</option>
            <option value="offline">Physical Store / Counter</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>3. Execution Complexity</label>
          <select style={selectStyle} value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="all">Any Level</option>
            <option value="Easy">Easy (Beginner Friendly)</option>
            <option value="Medium">Medium (Requires Prep)</option>
            <option value="Hard">Hard (Advanced Setup)</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>4. Industry Category</label>
          <select style={selectStyle} value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
        <button style={buttonStyle} onClick={() => setHasSubmitted(true)}>
          Find Matching Opportunities
        </button>
        {hasSubmitted && (
          <button
            style={{ ...buttonStyle, backgroundColor: theme.primary, color: isDark ? "#0f172a" : "#ffffff" }}
            onClick={handleReset}
          >
            Reset Questionnaire
          </button>
        )}
      </div>

      {hasSubmitted && (
        <div style={{ marginTop: "36px" }}>
          <h3 style={{ color: theme.primary, fontSize: "22px" }}>
            Top Recommended Businesses for You ({sortedMatches.length} Matches)
          </h3>
          <p style={{ fontSize: "14px", color: theme.text, opacity: 0.8, marginTop: "4px" }}>
            Note: We present several matched opportunities. You choose the final idea that inspires you.
          </p>

          <div style={cardGridStyle}>
            {sortedMatches.map(({ business, score, reasons }) => (
              <div key={business.id} style={resultCardStyle}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                    <h4 style={{ margin: "0 0 6px", color: theme.primary, fontSize: "19px", fontWeight: "800" }}>
                      {business.name}
                    </h4>
                    <span style={badgeStyle(score)}>{score}% Match</span>
                  </div>

                  <span style={{ fontSize: "13px", fontWeight: "bold", color: theme.accent }}>
                    {business.category} • Est. {business.comfortableInvestment}
                  </span>

                  <p style={{ fontSize: "14px", margin: "14px 0", lineHeight: 1.5, color: theme.text }}>
                    {business.shortDescription}
                  </p>

                  <div style={{ backgroundColor: theme.surface, padding: "12px", borderRadius: "8px", fontSize: "13px", border: `1px solid ${theme.border}`, color: theme.text }}>
                    <strong>Why this fits:</strong>
                    <ul style={{ margin: "6px 0 0", paddingLeft: "18px", lineHeight: 1.5 }}>
                      {reasons.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    padding: "12px",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: theme.primary,
                    color: isDark ? "#0f172a" : "#ffffff",
                    fontWeight: "800",
                    cursor: "pointer",
                    fontSize: "15px",
                  }}
                  onClick={() => onSelectBusiness(business.id)}
                >
                  Open Business Guide →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BusinessFinderQuiz;
