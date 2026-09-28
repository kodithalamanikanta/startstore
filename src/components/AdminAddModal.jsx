import React, { useState, useEffect } from "react";
import { categoriesList } from "../data/businesses.js";

function AdminAddModal({ isOpen, onClose, onSave, editingBusiness, theme }) {
  const [formData, setFormData] = useState({
    name: "",
    category: categoriesList[0],
    description: "",
    shortDescription: "",
    minimumInvestment: "Rs. 50,000",
    comfortableInvestment: "Rs. 150,000",
    difficulty: "Medium",
    investmentLevel: "Medium",
    profitPotential: "Typical Margin 30-50%",
    businessType: "Offline",
    scalability: "Medium",
    bestFor: "",
    skillsRequiredText: "Customer service, Accounting, Operations",
    launchPlanText: "Step 1: Market research\nStep 2: Obtain licenses\nStep 3: Setup premises\nStep 4: Launch",
    checklistText: "Select location\nApply for licenses\nBuy equipment\nLaunch marketing",
  });

  const isDark = theme.mode === "dark";

  useEffect(() => {
    if (editingBusiness) {
      setFormData({
        name: editingBusiness.name || "",
        category: editingBusiness.category || categoriesList[0],
        description: editingBusiness.description || "",
        shortDescription: editingBusiness.shortDescription || "",
        minimumInvestment: editingBusiness.minimumInvestment || "Rs. 50,000",
        comfortableInvestment: editingBusiness.comfortableInvestment || "Rs. 150,000",
        difficulty: editingBusiness.difficulty || "Medium",
        investmentLevel: editingBusiness.investmentLevel || "Medium",
        profitPotential: editingBusiness.profitPotential || "Typical Margin 30-50%",
        businessType: editingBusiness.businessType || "Offline",
        scalability: editingBusiness.scalability || "Medium",
        bestFor: editingBusiness.bestFor || "",
        skillsRequiredText: Array.isArray(editingBusiness.skillsRequired)
          ? editingBusiness.skillsRequired.join(", ")
          : editingBusiness.skillsRequiredText || "",
        launchPlanText: Array.isArray(editingBusiness.launchPlan)
          ? editingBusiness.launchPlan.join("\n")
          : editingBusiness.launchPlanText || "",
        checklistText: Array.isArray(editingBusiness.checklist)
          ? editingBusiness.checklist.join("\n")
          : editingBusiness.checklistText || "",
      });
    } else {
      setFormData({
        name: "",
        category: categoriesList[0],
        description: "",
        shortDescription: "",
        minimumInvestment: "Rs. 50,000",
        comfortableInvestment: "Rs. 150,000",
        difficulty: "Medium",
        investmentLevel: "Medium",
        profitPotential: "Typical Margin 30-50%",
        businessType: "Offline",
        scalability: "Medium",
        bestFor: "",
        skillsRequiredText: "Customer service, Accounting, Operations",
        launchPlanText: "Step 1: Market research\nStep 2: Obtain licenses\nStep 3: Setup premises\nStep 4: Launch",
        checklistText: "Select location\nApply for licenses\nBuy equipment\nLaunch marketing",
      });
    }
  }, [editingBusiness, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const minNum = Number(formData.minimumInvestment.replace(/[^0-9]/g, "")) || 50000;
    const typNum = Number(formData.comfortableInvestment.replace(/[^0-9]/g, "")) || 150000;
    const slug = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

    const newBusiness = {
      id: editingBusiness ? editingBusiness.id : slug,
      slug: slug,
      name: formData.name,
      category: formData.category,
      description: formData.description || formData.shortDescription,
      shortDescription: formData.shortDescription || formData.description,
      minimumInvestment: formData.minimumInvestment,
      comfortableInvestment: formData.comfortableInvestment,
      minInvestmentNum: minNum,
      typicalInvestmentNum: typNum,
      difficulty: formData.difficulty,
      investmentLevel: formData.investmentLevel,
      profitPotential: formData.profitPotential,
      businessType: formData.businessType,
      scalability: formData.scalability,
      bestFor: formData.bestFor || `Entrepreneurs starting in ${formData.category}`,
      status: editingBusiness ? editingBusiness.status || "published" : "published",
      skillsRequired: formData.skillsRequiredText.split(",").map((s) => s.trim()).filter(Boolean),
      launchPlan: formData.launchPlanText.split("\n").map((s) => s.trim()).filter(Boolean),
      checklist: formData.checklistText.split("\n").map((s) => s.trim()).filter(Boolean),
      startupCosts: [
        { name: "Core Equipment & Machinery", amount: Math.round(typNum * 0.5) },
        { name: "Premises & Furnishing", amount: Math.round(typNum * 0.3) },
        { name: "Initial Stock & Working Capital", amount: Math.round(typNum * 0.2) },
      ],
      monthlyOperatingCosts: [
        { name: "Rent & Utilities", amount: Math.round(typNum * 0.1) },
        { name: "Staff & Materials", amount: Math.round(typNum * 0.12) },
      ],
      equipment: [
        { name: "Primary Commercial Setup", quantity: "1 Set", estCost: formData.comfortableInvestment, required: true },
      ],
      licenses: [
        { name: "Shop & Establishment License", authority: "Local Municipality", description: "Standard trade permit." },
        { name: "Udyam MSME Registration", authority: "Ministry of MSME", description: "Government registration." },
      ],
    };

    onSave(newBusiness);
    onClose();
  };

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    backdropFilter: "blur(4px)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  const modalBoxStyle = {
    backgroundColor: theme.surface,
    color: theme.text,
    border: `1px solid ${theme.border}`,
    borderRadius: "16px",
    width: "100%",
    maxWidth: "700px",
    maxHeight: "90vh",
    overflowY: "auto",
    padding: "32px",
    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.4)",
  };

  const formGroupStyle = {
    marginBottom: "18px",
  };

  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    marginBottom: "8px",
    fontSize: "14px",
    color: theme.primary,
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: `1px solid ${theme.border}`,
    backgroundColor: theme.soft,
    color: theme.text,
    fontSize: "15px",
    boxSizing: "border-box",
  };

  const rowGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalBoxStyle} className="animate-fade-in">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h2 style={{ margin: 0, color: theme.primary, fontSize: "24px", fontWeight: "900" }}>
            {editingBusiness ? "Edit Business Profile" : "+ Create New Business Profile"}
          </h2>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: "26px", cursor: "pointer", color: theme.text }}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Business Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Organic Millet Cafe"
              style={inputStyle}
            />
          </div>

          <div style={rowGridStyle}>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                style={inputStyle}
              >
                {categoriesList.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Business Mode</label>
              <select
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                style={inputStyle}
              >
                <option value="Offline">Offline / Physical Store</option>
                <option value="Online">Online / Digital</option>
                <option value="Home-based">Home-based</option>
                <option value="Field Service">Field Service</option>
                <option value="Mobile">Mobile Unit</option>
              </select>
            </div>
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Short Summary Description</label>
            <input
              type="text"
              required
              value={formData.shortDescription}
              onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              placeholder="1-2 sentences summarizing the business model..."
              style={inputStyle}
            />
          </div>

          <div style={rowGridStyle}>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Minimum Capital</label>
              <input
                type="text"
                value={formData.minimumInvestment}
                onChange={(e) => setFormData({ ...formData, minimumInvestment: e.target.value })}
                placeholder="Rs. 50,000"
                style={inputStyle}
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Typical Estimate</label>
              <input
                type="text"
                value={formData.comfortableInvestment}
                onChange={(e) => setFormData({ ...formData, comfortableInvestment: e.target.value })}
                placeholder="Rs. 150,000"
                style={inputStyle}
              />
            </div>
          </div>

          <div style={rowGridStyle}>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Difficulty Level</label>
              <select
                value={formData.difficulty}
                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                style={inputStyle}
              >
                <option value="Easy">Easy (Beginner)</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard (Advanced)</option>
              </select>
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Margin Profile</label>
              <input
                type="text"
                value={formData.profitPotential}
                onChange={(e) => setFormData({ ...formData, profitPotential: e.target.value })}
                placeholder="Gross Margin 30-50%"
                style={inputStyle}
              />
            </div>
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Required Skills (Comma separated)</label>
            <input
              type="text"
              value={formData.skillsRequiredText}
              onChange={(e) => setFormData({ ...formData, skillsRequiredText: e.target.value })}
              style={inputStyle}
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Actionable Launch Checklist (1 item per line)</label>
            <textarea
              rows={4}
              value={formData.checklistText}
              onChange={(e) => setFormData({ ...formData, checklistText: e.target.value })}
              style={{ ...inputStyle, fontFamily: "inherit" }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "14px", marginTop: "24px" }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: "12px 22px",
                borderRadius: "10px",
                border: `1px solid ${theme.border}`,
                backgroundColor: theme.soft,
                color: theme.text,
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: "12px 24px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: theme.accent,
                color: "#ffffff",
                fontWeight: "800",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              {editingBusiness ? "Save Changes" : "Create Business Profile"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminAddModal;
