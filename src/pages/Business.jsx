import React from "react";

function Business({ business, onSelect, theme }) {
  const isDark = theme.mode === "dark";

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "330px",
    padding: "24px",
    border: `1px solid ${theme.border}`,
    borderRadius: "16px",
    backgroundColor: theme.surface,
    boxShadow: theme.cardShadow || "0 10px 30px rgba(0, 0, 0, 0.08)",
    position: "relative",
    overflow: "hidden",
  };

  const titleRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    alignItems: "flex-start",
  };

  const titleStyle = {
    margin: "0",
    color: theme.primary,
    fontSize: "20px",
    fontWeight: "800",
    lineHeight: "1.3",
  };

  const tagStyle = {
    padding: "6px 12px",
    borderRadius: "20px",
    backgroundColor: theme.soft,
    color: theme.accent,
    fontWeight: "700",
    fontSize: "12px",
    whiteSpace: "nowrap",
    border: `1px solid ${theme.border}`,
  };

  const descriptionStyle = {
    margin: "14px 0 20px",
    lineHeight: "1.5",
    color: theme.text,
    opacity: isDark ? 0.9 : 0.85,
    fontSize: "14px",
  };

  const metricsStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginTop: "auto",
  };

  const metricStyle = {
    padding: "10px 12px",
    borderRadius: "10px",
    backgroundColor: theme.soft,
    border: `1px solid ${theme.border}`,
    fontSize: "13px",
  };

  const buttonStyle = {
    width: "100%",
    marginTop: "18px",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: theme.accent,
    color: "#ffffff",
    fontWeight: "800",
    fontSize: "15px",
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
  };

  return (
    <section className="glass-card animate-fade-in" style={cardStyle}>
      <div style={titleRowStyle}>
        <h3 style={titleStyle}>{business.name}</h3>
        <span style={tagStyle}>{business.category}</span>
      </div>

      <p style={descriptionStyle}>{business.shortDescription || business.description}</p>

      <div style={metricsStyle}>
        <div style={metricStyle}>
          <span style={{ fontSize: "11px", textTransform: "uppercase", opacity: 0.7, fontWeight: "bold", display: "block" }}>
            Min Capital
          </span>
          <strong style={{ color: theme.primary, fontSize: "14px" }}>{business.minimumInvestment}</strong>
        </div>
        <div style={metricStyle}>
          <span style={{ fontSize: "11px", textTransform: "uppercase", opacity: 0.7, fontWeight: "bold", display: "block" }}>
            Typical Est.
          </span>
          <strong style={{ color: theme.accent, fontSize: "14px" }}>{business.comfortableInvestment}</strong>
        </div>
        <div style={metricStyle}>
          <span style={{ fontSize: "11px", textTransform: "uppercase", opacity: 0.7, fontWeight: "bold", display: "block" }}>
            Difficulty
          </span>
          <strong style={{ color: theme.primary, fontSize: "14px" }}>{business.difficulty}</strong>
        </div>
        <div style={metricStyle}>
          <span style={{ fontSize: "11px", textTransform: "uppercase", opacity: 0.7, fontWeight: "bold", display: "block" }}>
            Mode
          </span>
          <strong style={{ color: theme.primary, fontSize: "14px" }}>{business.businessType || "Offline"}</strong>
        </div>
      </div>

      <button style={buttonStyle} onClick={onSelect}>
        Open Guide →
      </button>
    </section>
  );
}

export default Business;
