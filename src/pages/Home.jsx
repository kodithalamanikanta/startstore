import React from "react";

function Home({ activeSection, setActiveSection, searchTerm, setSearchTerm, theme }) {
  const heroStyle = {
    minHeight: "52vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "54px 24px",
    textAlign: "center",
    backgroundImage: theme.hero,
    borderBottom: `1px solid ${theme.border}`,
  };

  const titleStyle = {
    margin: "0",
    fontSize: "56px",
    fontWeight: "900",
    letterSpacing: "0",
    color: theme.primary,
  };

  const subtitleStyle = {
    maxWidth: "620px",
    margin: "14px 0 0",
    fontSize: "20px",
    lineHeight: "1.6",
    color: theme.text,
  };

  const buttonRowStyle = {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "28px",
    marginBottom: "22px",
  };

  const getButtonStyle = (sectionName) => ({
    padding: "15px 22px",
    minWidth: "180px",
    fontSize: "17px",
    fontWeight: "800",
    border: `2px solid ${theme.primary}`,
    borderRadius: "8px",
    backgroundColor: activeSection === sectionName ? theme.primary : theme.surface,
    color: activeSection === sectionName ? "white" : theme.primary,
    cursor: "pointer",
    boxShadow: "0 10px 24px rgba(0, 0, 0, 0.14)",
  });

  const inputStyle = {
    width: "100%",
    maxWidth: "520px",
    padding: "16px",
    fontSize: "16px",
    border: `2px solid ${theme.primary}`,
    borderRadius: "8px",
    outline: "none",
    boxShadow: "0 10px 24px rgba(0, 0, 0, 0.12)",
  };

  return (
    <main style={heroStyle}>
      <h1 style={titleStyle}>START SHOP</h1>
      <p style={subtitleStyle}>A practical launch desk for first-time founders.</p>

      <div style={buttonRowStyle}>
        <button style={getButtonStyle("businesses")} onClick={() => setActiveSection("businesses")}>
          Find My Business
        </button>
        <button style={getButtonStyle("guides")} onClick={() => setActiveSection("guides")}>
          Business Guides
        </button>
      </div>

      {activeSection === "businesses" && (
        <input
          type="text"
          placeholder="Search tea, design, cleaning, food..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          style={inputStyle}
        />
      )}
    </main>
  );
}

export default Home;
