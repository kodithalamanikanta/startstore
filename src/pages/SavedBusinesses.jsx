import React from "react";

function SavedBusinesses({ savedBusinessIds, allBusinesses, userProgress, onSelectBusiness, onRemoveSaved, theme }) {
  const savedList = allBusinesses.filter((b) => savedBusinessIds.includes(b.id));
  const isDark = theme.mode === "dark";

  const containerStyle = {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "40px 24px",
  };

  const titleStyle = {
    fontSize: "36px",
    fontWeight: "900",
    color: theme.primary,
    margin: "0 0 10px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
    marginTop: "28px",
  };

  const cardStyle = {
    padding: "26px",
    border: `1px solid ${theme.border}`,
    borderRadius: "16px",
    backgroundColor: theme.surface,
    boxShadow: theme.cardShadow || "0 10px 24px rgba(0, 0, 0, 0.06)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <div style={containerStyle} className="animate-fade-in">
      <h1 style={titleStyle}>🔖 My Saved Businesses</h1>
      <p style={{ color: theme.text, opacity: 0.9, margin: 0, fontSize: "17px" }}>
        Track your bookmarked startup ideas and monitor your launch checklist progress.
      </p>

      {savedList.length === 0 ? (
        <div
          style={{
            padding: "60px 24px",
            textAlign: "center",
            backgroundColor: theme.surface,
            border: `1px dashed ${theme.border}`,
            borderRadius: "16px",
            marginTop: "32px",
          }}
        >
          <h3 style={{ color: theme.primary, margin: "0 0 12px", fontSize: "22px" }}>No Saved Businesses Yet</h3>
          <p style={{ color: theme.text, maxWidth: "500px", margin: "0 auto 20px", fontSize: "15px", lineHeight: 1.5 }}>
            Browse the business catalog or use the finder quiz, then click "Bookmark / Save" on any guide to track your progress here.
          </p>
        </div>
      ) : (
        <div style={gridStyle}>
          {savedList.map((business) => {
            const completedCount = userProgress[business.id]?.length || 0;
            const totalChecklist = business.checklist?.length || 8;
            const percent = Math.round((completedCount / totalChecklist) * 100);

            return (
              <div key={business.id} style={cardStyle} className="glass-card">
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                    <h3 style={{ margin: "0 0 8px", color: theme.primary, fontSize: "22px", fontWeight: "800" }}>
                      {business.name}
                    </h3>
                    <button
                      onClick={() => onRemoveSaved(business.id)}
                      style={{
                        background: "none",
                        border: "none",
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "#ef4444",
                        padding: "4px",
                      }}
                      title="Remove from saved"
                    >
                      ✕
                    </button>
                  </div>

                  <span style={{ fontSize: "13px", fontWeight: "bold", color: theme.accent }}>
                    {business.category} • Est. {business.comfortableInvestment}
                  </span>

                  <p style={{ fontSize: "15px", margin: "16px 0", lineHeight: 1.5, color: theme.text }}>
                    {business.shortDescription}
                  </p>

                  <div style={{ marginTop: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "bold", marginBottom: "8px", color: theme.text }}>
                      <span>Checklist Progress</span>
                      <span style={{ color: theme.accent }}>{completedCount} / {totalChecklist} Tasks ({percent}%)</span>
                    </div>
                    <div
                      style={{
                        height: "10px",
                        backgroundColor: theme.soft,
                        borderRadius: "5px",
                        overflow: "hidden",
                        border: `1px solid ${theme.border}`,
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${percent}%`,
                          backgroundColor: theme.primary,
                          transition: "width 0.3s ease",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectBusiness(business.id)}
                  style={{
                    width: "100%",
                    marginTop: "24px",
                    padding: "14px",
                    border: "none",
                    borderRadius: "10px",
                    backgroundColor: theme.primary,
                    color: isDark ? "#0f172a" : "#ffffff",
                    fontWeight: "800",
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                >
                  Continue Startup Roadmap →
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SavedBusinesses;
