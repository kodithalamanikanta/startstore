import React, { useState } from "react";

function BusinessDetail({ business, onBack, isSaved, onToggleSave, userProgress, onToggleChecklist, theme }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeTooltip, setActiveTooltip] = useState(null);

  if (!business) {
    return (
      <div style={{ padding: "60px 20px", textAlign: "center", color: theme.text }}>
        <h2>Business Profile Not Found</h2>
        <button onClick={onBack} style={{ marginTop: "16px", padding: "12px 24px", borderRadius: "10px", backgroundColor: theme.primary, color: "white", border: "none", cursor: "pointer", fontWeight: "bold" }}>
          ← Back to Catalog
        </button>
      </div>
    );
  }

  const isDark = theme.mode === "dark";

  // Calculate totals
  const totalSetupCost = business.startupCosts
    ? business.startupCosts.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0)
    : 0;

  const totalMonthlyCost = business.monthlyOperatingCosts
    ? business.monthlyOperatingCosts.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0)
    : 0;

  const completedTasks = userProgress[business.id] || [];
  const checklistItems = business.checklist || [];
  const progressPercent = checklistItems.length > 0
    ? Math.round((completedTasks.length / checklistItems.length) * 100)
    : 0;

  // Glossary terms tooltips
  const termsGlossary = {
    "Working Capital": "Money you keep available for ongoing daily expenses such as raw materials, rent, salaries, and utilities before revenues stabilize.",
    "Capex": "Capital Expenditure: The upfront one-time money spent buying long-term assets like equipment, furniture, and kitchen stoves.",
    "Opex": "Operating Expenditure: Recurring ongoing monthly costs to run the business like rent, electricity, and staff wages.",
    "FSSAI": "Food Safety and Standards Authority of India: Government body that regulates food safety and issues mandatory food licenses.",
    "GST Threshold": "In India, GST registration is required if annual turnover exceeds ₹40 Lakhs for goods (₹20 Lakhs for services or special states).",
    "Break-even": "The point at which total revenues equal total expenses, meaning the business starts generating net profit."
  };

  const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "36px 20px",
  };

  const heroStyle = {
    padding: "36px",
    borderRadius: "20px",
    backgroundColor: theme.surface,
    border: `1px solid ${theme.border}`,
    boxShadow: theme.cardShadow || "0 12px 30px rgba(0, 0, 0, 0.08)",
    marginBottom: "32px",
  };

  const tagStyle = {
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "bold",
    backgroundColor: theme.soft,
    color: theme.accent,
    border: `1px solid ${theme.border}`,
    marginRight: "8px",
    marginBottom: "8px",
  };

  const metricBoxStyle = {
    padding: "18px",
    borderRadius: "14px",
    backgroundColor: theme.soft,
    border: `1px solid ${theme.border}`,
    textAlign: "center",
  };

  const tabContainerStyle = {
    display: "flex",
    gap: "10px",
    overflowX: "auto",
    borderBottom: `2px solid ${theme.border}`,
    marginBottom: "28px",
    paddingBottom: "4px",
  };

  const getTabStyle = (tabKey) => ({
    padding: "14px 22px",
    fontWeight: "800",
    fontSize: "15px",
    border: "none",
    borderBottom: activeTab === tabKey ? `3px solid ${theme.accent}` : "3px solid transparent",
    backgroundColor: "transparent",
    color: activeTab === tabKey ? theme.accent : theme.text,
    cursor: "pointer",
    whiteSpace: "nowrap",
  });

  const sectionCardStyle = {
    padding: "30px",
    borderRadius: "16px",
    backgroundColor: theme.surface,
    border: `1px solid ${theme.border}`,
    boxShadow: theme.cardShadow || "0 8px 20px rgba(0, 0, 0, 0.05)",
    marginBottom: "28px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "16px",
  };

  const thTdStyle = {
    padding: "14px 16px",
    borderBottom: `1px solid ${theme.border}`,
    textAlign: "left",
    fontSize: "14px",
    color: theme.text,
  };

  return (
    <div style={containerStyle} className="animate-fade-in">
      <button
        onClick={onBack}
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          border: `1px solid ${theme.border}`,
          backgroundColor: theme.surface,
          color: theme.primary,
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: "24px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        ← Back to Catalog & Search
      </button>

      {/* HERO SECTION */}
      <div style={heroStyle}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <div style={{ marginBottom: "12px" }}>
              <span style={tagStyle}>{business.category}</span>
              <span style={tagStyle}>Difficulty: {business.difficulty}</span>
              <span style={tagStyle}>Type: {business.businessType || "Offline"}</span>
            </div>
            <h1 style={{ margin: "0 0 12px", fontSize: "40px", fontWeight: "900", color: theme.primary }}>
              {business.name}
            </h1>
            <p style={{ fontSize: "18px", color: theme.text, opacity: 0.9, maxWidth: "780px", margin: 0, lineHeight: 1.6 }}>
              {business.description}
            </p>
          </div>

          <button
            onClick={() => onToggleSave(business.id)}
            style={{
              padding: "14px 26px",
              borderRadius: "12px",
              border: isSaved ? `2px solid ${theme.accent}` : `1px solid ${theme.primary}`,
              backgroundColor: isSaved ? theme.accent : theme.primary,
              color: "#ffffff",
              fontWeight: "800",
              fontSize: "15px",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
          >
            {isSaved ? "★ Saved in My List" : "☆ Bookmark / Save Idea"}
          </button>
        </div>

        {/* METRICS GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px", marginTop: "28px" }}>
          <div style={metricBoxStyle}>
            <span style={{ fontSize: "12px", textTransform: "uppercase", fontWeight: "bold", opacity: 0.7, color: theme.text }}>Min Capital</span>
            <div style={{ fontSize: "22px", fontWeight: "900", color: theme.primary, marginTop: "6px" }}>{business.minimumInvestment}</div>
          </div>
          <div style={metricBoxStyle}>
            <span style={{ fontSize: "12px", textTransform: "uppercase", fontWeight: "bold", opacity: 0.7, color: theme.text }}>Typical Estimate</span>
            <div style={{ fontSize: "22px", fontWeight: "900", color: theme.accent, marginTop: "6px" }}>{business.comfortableInvestment}</div>
          </div>
          <div style={metricBoxStyle}>
            <span style={{ fontSize: "12px", textTransform: "uppercase", fontWeight: "bold", opacity: 0.7, color: theme.text }}>Scalability</span>
            <div style={{ fontSize: "22px", fontWeight: "900", color: theme.primary, marginTop: "6px" }}>{business.scalability || "Medium"}</div>
          </div>
          <div style={metricBoxStyle}>
            <span style={{ fontSize: "12px", textTransform: "uppercase", fontWeight: "bold", opacity: 0.7, color: theme.text }}>Margin Profile</span>
            <div style={{ fontSize: "16px", fontWeight: "800", color: theme.primary, marginTop: "6px" }}>{business.profitPotential}</div>
          </div>
        </div>

        {/* GLOSSARY TOOLTIP BANNER */}
        <div style={{ marginTop: "24px", padding: "14px 18px", backgroundColor: theme.soft, borderRadius: "12px", fontSize: "14px", border: `1px solid ${theme.border}`, color: theme.text }}>
          <strong>💡 Beginner Terms Quick Help:</strong> Click any highlighted term to view explanation:{" "}
          {Object.keys(termsGlossary).map((term) => (
            <button
              key={term}
              onClick={() => setActiveTooltip(activeTooltip === term ? null : term)}
              style={{
                background: "none",
                border: "none",
                color: theme.accent,
                textDecoration: "underline",
                fontWeight: "bold",
                cursor: "pointer",
                marginRight: "12px",
              }}
            >
              {term}
            </button>
          ))}
          {activeTooltip && (
            <div style={{ marginTop: "12px", padding: "12px 16px", backgroundColor: theme.surface, borderRadius: "8px", border: `1px solid ${theme.accent}`, color: theme.text, lineHeight: 1.5 }}>
              <strong>{activeTooltip}:</strong> {termsGlossary[activeTooltip]}
            </div>
          )}
        </div>
      </div>

      {/* NAV TABS */}
      <div style={tabContainerStyle}>
        <button style={getTabStyle("overview")} onClick={() => setActiveTab("overview")}>Overview & Costs</button>
        <button style={getTabStyle("licenses")} onClick={() => setActiveTab("licenses")}>Licenses & Equipment</button>
        <button style={getTabStyle("location")} onClick={() => setActiveTab("location")}>Location & Sourcing</button>
        <button style={getTabStyle("roadmap")} onClick={() => setActiveTab("roadmap")}>Roadmap & Checklist ({progressPercent}%)</button>
        <button style={getTabStyle("marketing")} onClick={() => setActiveTab("marketing")}>Marketing & Risks</button>
      </div>

      {/* TAB 1: OVERVIEW & FINANCIAL COSTS */}
      {activeTab === "overview" && (
        <>
          <div style={sectionCardStyle}>
            <h3 style={{ color: theme.primary, margin: "0 0 12px", fontSize: "22px" }}>Who This Business Is For</h3>
            <p style={{ lineHeight: 1.6, margin: 0, color: theme.text, fontSize: "16px" }}>{business.bestFor}</p>

            <h4 style={{ color: theme.primary, marginTop: "24px", marginBottom: "12px" }}>Required Core Skills</h4>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {business.skillsRequired?.map((skill, i) => (
                <span key={i} style={{ padding: "8px 16px", backgroundColor: theme.soft, borderRadius: "20px", fontSize: "14px", border: `1px solid ${theme.border}`, fontWeight: "bold", color: theme.text }}>
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>

          <div style={sectionCardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ color: theme.primary, margin: 0, fontSize: "22px" }}>1. Upfront Setup Costs (Capex)</h3>
              <span style={{ fontSize: "16px", fontWeight: "bold", color: theme.accent }}>Est Total: ₹{totalSetupCost.toLocaleString("en-IN")}</span>
            </div>
            <p style={{ fontSize: "13px", color: theme.text, opacity: 0.8, marginTop: "6px" }}>
              ⚠️ Estimates only. Actual setup cost varies depending on equipment brand, city, and scale.
            </p>

            <table style={tableStyle}>
              <thead>
                <tr style={{ backgroundColor: theme.soft }}>
                  <th style={thTdStyle}>Item / Expense</th>
                  <th style={thTdStyle}>Approximate Amount (INR)</th>
                </tr>
              </thead>
              <tbody>
                {business.startupCosts?.map((item, idx) => (
                  <tr key={idx}>
                    <td style={thTdStyle}>{item.name}</td>
                    <td style={{ ...thTdStyle, fontWeight: "bold", color: theme.accent }}>₹{Number(item.amount).toLocaleString("en-IN")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={sectionCardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ color: theme.primary, margin: 0, fontSize: "22px" }}>2. Monthly Operating Expenses (Opex)</h3>
              <span style={{ fontSize: "16px", fontWeight: "bold", color: theme.accent }}>Est Monthly: ₹{totalMonthlyCost.toLocaleString("en-IN")}</span>
            </div>

            <table style={tableStyle}>
              <thead>
                <tr style={{ backgroundColor: theme.soft }}>
                  <th style={thTdStyle}>Operating Item</th>
                  <th style={thTdStyle}>Estimated Monthly Cost</th>
                </tr>
              </thead>
              <tbody>
                {business.monthlyOperatingCosts?.map((item, idx) => (
                  <tr key={idx}>
                    <td style={thTdStyle}>{item.name}</td>
                    <td style={{ ...thTdStyle, fontWeight: "bold", color: theme.accent }}>₹{Number(item.amount).toLocaleString("en-IN")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={sectionCardStyle}>
            <h3 style={{ color: theme.primary, margin: "0 0 12px", fontSize: "22px" }}>Revenue Model & Profit Guidance</h3>
            <p style={{ lineHeight: 1.6, color: theme.text }}><strong>Revenue Stream:</strong> {business.revenueModel}</p>
            <p style={{ lineHeight: 1.6, color: theme.text, marginTop: "8px" }}><strong>Profit Considerations:</strong> {business.profitConsiderations}</p>
            <div style={{ padding: "14px 18px", backgroundColor: isDark ? "#3b2a1a" : "#fff8e1", border: `1px solid ${isDark ? "#78350f" : "#ffe082"}`, borderRadius: "10px", fontSize: "13px", color: isDark ? "#fef3c7" : "#795548", marginTop: "16px", lineHeight: 1.5 }}>
              <strong>Disclaimer:</strong> Financial figures are rough ballpark estimates based on typical Indian market benchmarks. Revenue and profit are never guaranteed and depend heavily on location, footfall, overhead control, and execution.
            </div>
          </div>
        </>
      )}

      {/* TAB 2: LICENSES & EQUIPMENT */}
      {activeTab === "licenses" && (
        <>
          <div style={sectionCardStyle}>
            <h3 style={{ color: theme.primary, margin: "0 0 12px", fontSize: "22px" }}>Licenses & Legal Compliance</h3>
            <p style={{ fontSize: "14px", opacity: 0.85, color: theme.text, marginTop: 0 }}>
              Verify local requirements with official portals. Licensing varies by state, municipality, and business scale.
            </p>

            <div style={{ display: "grid", gap: "18px", marginTop: "20px" }}>
              {business.licenses?.map((lic, idx) => (
                <div key={idx} style={{ padding: "20px", borderRadius: "12px", backgroundColor: theme.soft, border: `1px solid ${theme.border}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                    <h4 style={{ margin: 0, color: theme.primary, fontSize: "18px" }}>{lic.name}</h4>
                    <span style={{ fontSize: "12px", fontWeight: "bold", padding: "4px 10px", backgroundColor: isDark ? "#1e3a8a" : "#e3f2fd", color: isDark ? "#93c5fd" : "#1565c0", borderRadius: "6px" }}>
                      Fee: {lic.fee || "Varies"}
                    </span>
                  </div>
                  <p style={{ fontSize: "14px", margin: "8px 0", color: theme.text }}><strong>Issuing Authority:</strong> {lic.authority}</p>
                  <p style={{ fontSize: "14px", margin: "4px 0", lineHeight: 1.5, color: theme.text }}>{lic.description}</p>
                  {lic.sourceUrl && (
                    <a href={lic.sourceUrl} target="_blank" rel="noreferrer" style={{ fontSize: "13px", color: theme.accent, fontWeight: "bold", display: "inline-block", marginTop: "8px" }}>
                      🔗 Official Portal Link →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={sectionCardStyle}>
            <h3 style={{ color: theme.primary, margin: "0 0 16px", fontSize: "22px" }}>Required Equipment & Tools</h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "18px" }}>
              {business.equipment?.map((eq, idx) => (
                <div key={idx} style={{ padding: "18px", borderRadius: "12px", backgroundColor: theme.soft, border: `1px solid ${theme.border}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <strong style={{ color: theme.primary, fontSize: "16px" }}>{eq.name}</strong>
                    <span style={{ fontSize: "12px", fontWeight: "bold", padding: "2px 8px", borderRadius: "4px", backgroundColor: eq.required ? "#fce8e6" : theme.surface, color: eq.required ? "#c5221f" : theme.text }}>
                      {eq.required ? "Required" : "Optional"}
                    </span>
                  </div>
                  <div style={{ marginTop: "12px", fontSize: "14px", color: theme.text }}>
                    <div>Quantity: <strong>{eq.quantity || "1 Unit"}</strong></div>
                    <div>Est Cost: <strong style={{ color: theme.accent }}>{eq.estCost || "Varies"}</strong></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* TAB 3: LOCATION & VENDORS */}
      {activeTab === "location" && (
        <>
          <div style={sectionCardStyle}>
            <h3 style={{ color: theme.primary, margin: "0 0 16px", fontSize: "22px" }}>Location & Real-Estate Guidance</h3>

            {business.locationGuidance ? (
              <div style={{ display: "grid", gap: "16px" }}>
                <div style={{ padding: "18px", backgroundColor: theme.soft, borderRadius: "12px", border: `1px solid ${theme.border}` }}>
                  <strong style={{ color: theme.primary }}>🏬 Demand Drivers:</strong>
                  <p style={{ margin: "6px 0 0", fontSize: "15px", color: theme.text, lineHeight: 1.5 }}>{business.locationGuidance.demandDrivers}</p>
                </div>
                <div style={{ padding: "18px", backgroundColor: theme.soft, borderRadius: "12px", border: `1px solid ${theme.border}` }}>
                  <strong style={{ color: theme.primary }}>💰 Rent Guidelines:</strong>
                  <p style={{ margin: "6px 0 0", fontSize: "15px", color: theme.text, lineHeight: 1.5 }}>{business.locationGuidance.rentConsideration}</p>
                </div>
                <div style={{ padding: "18px", backgroundColor: theme.soft, borderRadius: "12px", border: `1px solid ${theme.border}` }}>
                  <strong style={{ color: theme.primary }}>🚶 Footfall Considerations:</strong>
                  <p style={{ margin: "6px 0 0", fontSize: "15px", color: theme.text, lineHeight: 1.5 }}>{business.locationGuidance.footfall}</p>
                </div>
              </div>
            ) : (
              <p style={{ color: theme.text }}>Standard commercial high-footfall location recommended.</p>
            )}
          </div>

          <div style={sectionCardStyle}>
            <h3 style={{ color: theme.primary, margin: "0 0 16px", fontSize: "22px" }}>Vendor & Sourcing Guidance</h3>

            <div style={{ display: "grid", gap: "16px" }}>
              {business.vendors?.map((v, idx) => (
                <div key={idx} style={{ padding: "18px", borderRadius: "12px", backgroundColor: theme.soft, border: `1px solid ${theme.border}` }}>
                  <h4 style={{ margin: "0 0 6px", color: theme.primary, fontSize: "17px" }}>{v.category}</h4>
                  <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: theme.text }}>{v.guidance}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* TAB 4: ROADMAP & CHECKLIST */}
      {activeTab === "roadmap" && (
        <>
          <div style={sectionCardStyle}>
            <h3 style={{ color: theme.primary, margin: "0 0 16px", fontSize: "22px" }}>Step-by-Step Startup Roadmap</h3>

            <ol style={{ paddingLeft: "22px", lineHeight: 1.9, color: theme.text }}>
              {business.launchPlan?.map((step, idx) => (
                <li key={idx} style={{ marginBottom: "12px", fontSize: "16px" }}>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div style={sectionCardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
              <h3 style={{ color: theme.primary, margin: 0, fontSize: "22px" }}>Actionable Launch Checklist</h3>
              <span style={{ fontWeight: "bold", color: theme.accent, fontSize: "16px" }}>
                {completedTasks.length} / {checklistItems.length} Completed ({progressPercent}%)
              </span>
            </div>

            <div style={{ height: "10px", backgroundColor: theme.soft, borderRadius: "5px", overflow: "hidden", marginBottom: "24px" }}>
              <div style={{ height: "100%", width: `${progressPercent}%`, backgroundColor: theme.primary, transition: "width 0.3s ease" }} />
            </div>

            <div style={{ display: "grid", gap: "14px" }}>
              {checklistItems.map((item, idx) => {
                const isDone = completedTasks.includes(item);
                return (
                  <label
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "16px 20px",
                      borderRadius: "10px",
                      backgroundColor: isDone ? (isDark ? "#064e3b" : "#e6f4ea") : theme.soft,
                      border: `1px solid ${isDone ? (isDark ? "#10b981" : "#ceead6") : theme.border}`,
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: isDone ? "bold" : "normal",
                      color: isDone ? (isDark ? "#a7f3d0" : "#137333") : theme.text,
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={isDone}
                      onChange={() => onToggleChecklist(business.id, item)}
                      style={{ width: "20px", height: "20px", accentColor: theme.accent }}
                    />
                    {item}
                  </label>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* TAB 5: MARKETING & RISKS */}
      {activeTab === "marketing" && (
        <>
          <div style={sectionCardStyle}>
            <h3 style={{ color: theme.primary, margin: "0 0 12px", fontSize: "22px" }}>Marketing & Client Acquisition</h3>
            <p style={{ lineHeight: 1.7, fontSize: "16px", color: theme.text }}>{business.marketingPlan || "Focus on local neighborhood flyers, Google My Business profile, and social media reels."}</p>
          </div>

          <div style={sectionCardStyle}>
            <h3 style={{ color: theme.primary, margin: "0 0 16px", fontSize: "22px" }}>Common Mistakes & Risk Factors</h3>
            <ul style={{ paddingLeft: "22px", lineHeight: 1.9, color: theme.text }}>
              {business.commonMistakes?.map((m, idx) => (
                <li key={idx} style={{ color: isDark ? "#fca5a5" : "#d93025", fontSize: "16px", marginBottom: "8px" }}>
                  ⚠️ {m}
                </li>
              ))}
            </ul>
          </div>

          {business.faqs && business.faqs.length > 0 && (
            <div style={sectionCardStyle}>
              <h3 style={{ color: theme.primary, margin: "0 0 20px", fontSize: "22px" }}>Frequently Asked Questions</h3>
              {business.faqs.map((faq, idx) => (
                <div key={idx} style={{ marginBottom: "18px", padding: "18px", backgroundColor: theme.soft, borderRadius: "12px", border: `1px solid ${theme.border}` }}>
                  <strong style={{ color: theme.primary, fontSize: "16px", display: "block", marginBottom: "6px" }}>
                    Q: {faq.q}
                  </strong>
                  <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: theme.text }}>{faq.a}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default BusinessDetail;
