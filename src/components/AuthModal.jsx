import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient.js";

function AuthModal({ isOpen, onClose, theme, onAuthSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [role, setRole] = useState("customer");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isDark = theme.mode === "dark";

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      let formattedEmail = email.trim();
      if (!formattedEmail.includes("@")) {
        formattedEmail = `${formattedEmail}@gmail.com`;
      }

      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email: formattedEmail,
          password: password,
          options: {
            data: {
              display_name: displayName || formattedEmail.split("@")[0],
              role: role,
            },
          },
        });

        if (error) throw error;

        if (data.user) {
          await supabase.from("profiles").upsert({
            id: data.user.id,
            display_name: displayName || formattedEmail.split("@")[0],
            role: role,
          });
        }

        alert(`Account created successfully as ${role === "admin" ? "Admin" : "Founder/Customer"}! Please log in.`);
        setIsSignUp(false);
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formattedEmail,
          password: password,
        });

        if (error) throw error;

        let userRole = "customer";
        let userDisplayName = formattedEmail.split("@")[0];

        if (data.user) {
          const { data: profile } = await supabase
            .from("profiles")
            .select("role, display_name")
            .eq("id", data.user.id)
            .single();

          if (profile) {
            userRole = profile.role || "customer";
            userDisplayName = profile.display_name || userDisplayName;
          }
        }

        onAuthSuccess({
          user: data.user,
          role: userRole,
          displayName: userDisplayName,
        });
        onClose();
      }
    } catch (err) {
      setErrorMessage(err.message || "Authentication failed. Please check your Email and Password.");
    } finally {
      setLoading(false);
    }
  };

  const backdropStyle = {
    position: "fixed",
    inset: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    backdropFilter: "blur(4px)",
  };

  const modalStyle = {
    width: "100%",
    maxWidth: "460px",
    padding: "32px",
    borderRadius: "16px",
    backgroundColor: theme.surface,
    color: theme.text,
    boxShadow: "0 24px 64px rgba(0, 0, 0, 0.4)",
    border: `1px solid ${theme.border}`,
  };

  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px 16px",
    margin: "8px 0 18px",
    border: `1px solid ${theme.border}`,
    borderRadius: "10px",
    fontSize: "15px",
    backgroundColor: theme.soft,
    color: theme.text,
  };

  const roleOptionStyle = (selected) => ({
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: selected ? `2px solid ${theme.accent}` : `1px solid ${theme.border}`,
    backgroundColor: selected ? theme.soft : theme.surface,
    color: theme.text,
    fontWeight: selected ? "bold" : "normal",
    cursor: "pointer",
    textAlign: "center",
    fontSize: "14px",
  });

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: theme.primary,
    color: isDark ? "#0f172a" : "#ffffff",
    fontWeight: "800",
    fontSize: "16px",
    cursor: loading ? "not-allowed" : "pointer",
    marginTop: "10px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
  };

  return (
    <div style={backdropStyle}>
      <div style={modalStyle} className="animate-fade-in">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0, color: theme.primary, fontSize: "24px", fontWeight: "900" }}>
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>
          <button
            onClick={onClose}
            style={{ border: "none", background: "none", fontSize: "26px", cursor: "pointer", color: theme.text }}
          >
            ×
          </button>
        </div>

        <p style={{ fontSize: "14px", opacity: 0.85, margin: "8px 0 24px", color: theme.text }}>
          {isSignUp
            ? "Sign up with your email and password to START SHOP."
            : "Sign in with your email and password."}
        </p>

        {errorMessage && (
          <div
            style={{
              padding: "12px 16px",
              backgroundColor: isDark ? "#7f1d1d" : "#fce8e6",
              color: isDark ? "#fca5a5" : "#c5221f",
              borderRadius: "10px",
              marginBottom: "16px",
              fontSize: "14px",
              border: `1px solid ${isDark ? "#ef4444" : "#fad2cf"}`,
            }}
          >
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <label style={{ fontSize: "13px", fontWeight: "bold", color: theme.primary }}>Account Role</label>
              <div style={{ display: "flex", gap: "10px", margin: "8px 0 18px" }}>
                <div style={roleOptionStyle(role === "customer")} onClick={() => setRole("customer")}>
                  🛍️ Customer / Founder
                </div>
                <div style={roleOptionStyle(role === "admin")} onClick={() => setRole("admin")}>
                  ⚡ Admin
                </div>
              </div>

              <label style={{ fontSize: "13px", fontWeight: "bold", color: theme.primary }}>Full Name / Display Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Founder"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                style={inputStyle}
              />
            </>
          )}

          <label style={{ fontSize: "13px", fontWeight: "bold", color: theme.primary }}>Email Address</label>
          <input
            type="email"
            required
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <label style={{ fontSize: "13px", fontWeight: "bold", color: theme.primary }}>Password</label>
          <input
            type="password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div style={{ marginTop: "20px", textAlign: "center", fontSize: "14px" }}>
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setErrorMessage("");
            }}
            style={{ background: "none", border: "none", color: theme.accent, fontWeight: "bold", cursor: "pointer" }}
          >
            {isSignUp ? "Sign In" : "Create One"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
