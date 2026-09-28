import React, { useState } from "react";

function AdminPage({ businesses, setBusinesses, isBackendConnected, theme, onOpenAddModal, onEditBusiness }) {
  const [activeTab, setActiveTab] = useState("businesses");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const isDark = theme.mode === "dark";

  const filteredBusinesses = businesses.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || (b.status || "published") === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleTogglePublish = (id) => {
    setBusinesses((prev) =>
      prev.map((b) => {
        if (b.id === id) {
          const newStatus = (b.status || "published") === "published" ? "draft" : "published";
          return { ...b, status: newStatus };
        }
        return b;
      })
    );
  };

  const handleArchive = (id) => {
    if (window.confirm("Are you sure you want to archive this business profile?")) {
      setBusinesses((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: "archived" } : b))
      );
    }
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 24px",
  };

  const cardStyle = {
    padding: "28px",
    borderRadius: "16px",
    backgroundColor: theme.surface,
    border: `1px solid ${theme.border}`,
    boxShadow: theme.cardShadow || "0 8px 24px rgba(0, 0, 0, 0.06)",
    marginBottom: "28px",
  };

  const statGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "32px",
  };

  const statCardStyle = {
    padding: "22px",
    borderRadius: "14px",
    backgroundColor: theme.soft,
    border: `1px solid ${theme.border}`,
    textAlign: "center",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "18px",
  };

  const thTdStyle = {
    padding: "16px",
    borderBottom: `1px solid ${theme.border}`,
    textAlign: "left",
    fontSize: "14px",
    color: theme.text,
  };

  const buttonStyle = {
    padding: "8px 14px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "13px",
  };

  const publishedCount = businesses.filter((b) => (b.status || "published") === "published").length;
  const draftCount = businesses.filter((b) => b.status === "draft").length;
  const archivedCount = businesses.filter((b) => b.status === "archived").length;

  return (
    <div style={containerStyle} className="animate-fade-in">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", marginBottom: "24px" }}>
        <div>
          <h1 style={{ margin: "0 0 8px", color: theme.primary, fontSize: "36px", fontWeight: "900" }}>⚡ Admin Command Center</h1>
          <p style={{ margin: 0, color: theme.text, opacity: 0.9, fontSize: "16px" }}>
            Manage catalog entries, categories, licenses, equipment, vendors, and location profiles.
          </p>
        </div>

        <button
          onClick={onOpenAddModal}
          style={{
            padding: "14px 24px",
            borderRadius: "12px",
            backgroundColor: theme.accent,
            color: "#ffffff",
            fontWeight: "800",
            border: "none",
            cursor: "pointer",
            fontSize: "15px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          }}
        >
          + Add New Business Profile
        </button>
      </div>

      {/* SYSTEM STATUS BANNER */}
      <div style={{ padding: "16px 22px", borderRadius: "12px", backgroundColor: isBackendConnected ? (isDark ? "#064e3b" : "#e6f4ea") : (isDark ? "#78350f" : "#fff3e0"), border: `1px solid ${isBackendConnected ? (isDark ? "#10b981" : "#ceead6") : (isDark ? "#f59e0b" : "#ffe0b2")}`, color: isBackendConnected ? (isDark ? "#a7f3d0" : "#137333") : (isDark ? "#fef3c7" : "#b06000"), fontWeight: "bold", marginBottom: "28px" }}>
        {isBackendConnected
          ? "● Connected to Production Supabase DB (RLS Authorization Active)"
          : "⚠️ Operating in Offline Seed Data Mode. Changes update current session memory."}
      </div>

      {/* DASHBOARD STATS */}
      <div style={statGridStyle}>
        <div style={statCardStyle}>
          <div style={{ fontSize: "32px", fontWeight: "900", color: theme.primary }}>{businesses.length}</div>
          <div style={{ fontSize: "13px", fontWeight: "bold", opacity: 0.8, marginTop: "4px", color: theme.text }}>Total Catalog Entries</div>
        </div>
        <div style={statCardStyle}>
          <div style={{ fontSize: "32px", fontWeight: "900", color: isDark ? "#34d399" : "#137333" }}>{publishedCount}</div>
          <div style={{ fontSize: "13px", fontWeight: "bold", opacity: 0.8, marginTop: "4px", color: theme.text }}>Published & Public</div>
        </div>
        <div style={statCardStyle}>
          <div style={{ fontSize: "32px", fontWeight: "900", color: isDark ? "#fbbf24" : "#b06000" }}>{draftCount}</div>
          <div style={{ fontSize: "13px", fontWeight: "bold", opacity: 0.8, marginTop: "4px", color: theme.text }}>Drafts / Pending</div>
        </div>
        <div style={statCardStyle}>
          <div style={{ fontSize: "32px", fontWeight: "900", color: isDark ? "#f87171" : "#c5221f" }}>{archivedCount}</div>
          <div style={{ fontSize: "13px", fontWeight: "bold", opacity: 0.8, marginTop: "4px", color: theme.text }}>Archived Records</div>
        </div>
      </div>

      {/* CONTENT TABS */}
      <div style={{ display: "flex", gap: "12px", borderBottom: `2px solid ${theme.border}`, marginBottom: "24px" }}>
        <button
          onClick={() => setActiveTab("businesses")}
          style={{
            padding: "12px 20px",
            border: "none",
            borderBottom: activeTab === "businesses" ? `3px solid ${theme.accent}` : "3px solid transparent",
            backgroundColor: "transparent",
            fontWeight: "800",
            fontSize: "15px",
            color: activeTab === "businesses" ? theme.accent : theme.text,
            cursor: "pointer",
          }}
        >
          Manage Businesses
        </button>
        <button
          onClick={() => setActiveTab("licenses")}
          style={{
            padding: "12px 20px",
            border: "none",
            borderBottom: activeTab === "licenses" ? `3px solid ${theme.accent}` : "3px solid transparent",
            backgroundColor: "transparent",
            fontWeight: "800",
            fontSize: "15px",
            color: activeTab === "licenses" ? theme.accent : theme.text,
            cursor: "pointer",
          }}
        >
          Licenses & Legal
        </button>
        <button
          onClick={() => setActiveTab("equipment")}
          style={{
            padding: "12px 20px",
            border: "none",
            borderBottom: activeTab === "equipment" ? `3px solid ${theme.accent}` : "3px solid transparent",
            backgroundColor: "transparent",
            fontWeight: "800",
            fontSize: "15px",
            color: activeTab === "equipment" ? theme.accent : theme.text,
            cursor: "pointer",
          }}
        >
          Equipment Records
        </button>
      </div>

      {/* TAB 1: MANAGING BUSINESSES */}
      {activeTab === "businesses" && (
        <div style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Search admin records..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: "12px 16px",
                borderRadius: "10px",
                border: `1px solid ${theme.border}`,
                backgroundColor: theme.soft,
                color: theme.text,
                width: "300px",
                fontSize: "14px",
              }}
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{
                padding: "12px 16px",
                borderRadius: "10px",
                border: `1px solid ${theme.border}`,
                backgroundColor: theme.soft,
                color: theme.text,
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              <option value="All">All Statuses</option>
              <option value="published">Published Only</option>
              <option value="draft">Drafts Only</option>
              <option value="archived">Archived Only</option>
            </select>
          </div>

          <table style={tableStyle}>
            <thead>
              <tr style={{ backgroundColor: theme.soft }}>
                <th style={thTdStyle}>Business Name</th>
                <th style={thTdStyle}>Category</th>
                <th style={thTdStyle}>Typical Investment</th>
                <th style={thTdStyle}>Difficulty</th>
                <th style={thTdStyle}>Status</th>
                <th style={thTdStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBusinesses.map((b) => {
                const status = b.status || "published";
                return (
                  <tr key={b.id}>
                    <td style={{ ...thTdStyle, fontWeight: "bold", color: theme.primary }}>{b.name}</td>
                    <td style={thTdStyle}>{b.category}</td>
                    <td style={thTdStyle}>{b.comfortableInvestment}</td>
                    <td style={thTdStyle}>{b.difficulty}</td>
                    <td style={thTdStyle}>
                      <span
                        style={{
                          padding: "4px 10px",
                          borderRadius: "6px",
                          fontSize: "12px",
                          fontWeight: "bold",
                          backgroundColor: status === "published" ? (isDark ? "#064e3b" : "#e6f4ea") : status === "draft" ? (isDark ? "#78350f" : "#fff3e0") : (isDark ? "#7f1d1d" : "#fce8e6"),
                          color: status === "published" ? (isDark ? "#a7f3d0" : "#137333") : status === "draft" ? (isDark ? "#fef3c7" : "#b06000") : (isDark ? "#fca5a5" : "#c5221f"),
                          border: `1px solid ${status === "published" ? (isDark ? "#10b981" : "#ceead6") : status === "draft" ? (isDark ? "#f59e0b" : "#ffe0b2") : (isDark ? "#ef4444" : "#fad2cf")}`,
                        }}
                      >
                        {status.toUpperCase()}
                      </span>
                    </td>
                    <td style={thTdStyle}>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          style={{ ...buttonStyle, backgroundColor: theme.soft, color: theme.text, border: `1px solid ${theme.border}` }}
                          onClick={() => onEditBusiness(b)}
                        >
                          Edit
                        </button>
                        <button
                          style={{
                            ...buttonStyle,
                            backgroundColor: status === "published" ? (isDark ? "#78350f" : "#fff3e0") : (isDark ? "#064e3b" : "#e6f4ea"),
                            color: status === "published" ? (isDark ? "#fef3c7" : "#b06000") : (isDark ? "#a7f3d0" : "#137333"),
                          }}
                          onClick={() => handleTogglePublish(b.id)}
                        >
                          {status === "published" ? "Unpublish" : "Publish"}
                        </button>
                        {status !== "archived" && (
                          <button
                            style={{ ...buttonStyle, backgroundColor: isDark ? "#7f1d1d" : "#fce8e6", color: isDark ? "#fca5a5" : "#c5221f" }}
                            onClick={() => handleArchive(b.id)}
                          >
                            Archive
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* TAB 2: LICENSES */}
      {activeTab === "licenses" && (
        <div style={cardStyle}>
          <h3 style={{ color: theme.primary, fontSize: "22px" }}>Reusable Master Licenses Records</h3>
          <p style={{ fontSize: "15px", opacity: 0.9, color: theme.text, margin: "8px 0 16px" }}>
            Master list of statutory permissions in India. Businesses reference these records to avoid duplication.
          </p>
          <ul style={{ paddingLeft: "20px", color: theme.text, lineHeight: 1.8 }}>
            <li><strong>FSSAI Food License (Basic & State)</strong> - Food Safety & Standards Authority</li>
            <li><strong>GST Registration (GSTIN)</strong> - Central Board of Indirect Taxes</li>
            <li><strong>Udyam MSME Registration</strong> - Ministry of Micro, Small and Medium Enterprises</li>
            <li><strong>Shop & Establishment License</strong> - State Labour Dept / Municipal Corporation</li>
            <li><strong>State Pollution Control Board Consent</strong> - SPCB (Automotive & Chemical)</li>
          </ul>
        </div>
      )}

      {/* TAB 3: EQUIPMENT */}
      {activeTab === "equipment" && (
        <div style={cardStyle}>
          <h3 style={{ color: theme.primary, fontSize: "22px" }}>Master Equipment & Machinery Directory</h3>
          <p style={{ fontSize: "15px", opacity: 0.9, color: theme.text, margin: "8px 0 16px" }}>
            Reusable catalog of commercial machinery, tools, and hardware required across Indian small businesses.
          </p>
          <ul style={{ paddingLeft: "20px", color: theme.text, lineHeight: 1.8 }}>
            <li>Commercial Burners & Gas Ranges</li>
            <li>OTG Oven & Planetary Stand Mixers</li>
            <li>Hydraulic Bike Lifts & Air Compressors</li>
            <li>Floor Scrubbers & Wet Vacuum Cleaners</li>
            <li>OCA Screen Lamination & SMD Soldering Stations</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
