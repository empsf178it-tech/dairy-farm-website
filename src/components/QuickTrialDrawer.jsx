import React, { useState } from "react";
import { X, Gift, CheckCircle2, ArrowRight, Phone, Sparkles } from "lucide-react";

export default function QuickTrialDrawer({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    sampleChoice: "Fresh Whole Milk 1L"
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(18, 40, 29, 0.6)",
          backdropFilter: "blur(6px)",
          zIndex: 1200,
          animation: "fadeIn 0.3s ease forwards"
        }}
      />

      {/* Drawer Panel */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          maxWidth: "420px",
          height: "100vh",
          height: "100dvh",
          backgroundColor: "var(--bg-main)",
          zIndex: 1250,
          padding: "32px 24px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "-10px 0 40px rgba(0, 0, 0, 0.25)",
          overflowY: "auto"
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--primary-green)", fontWeight: 800, fontSize: "1.1rem" }}>
            <Gift size={20} color="var(--accent-yellow)" />
            <span>Claim Fresh Trial Sample</span>
          </div>
          <button onClick={onClose} style={{ color: "var(--text-secondary)", padding: "4px" }}>
            <X size={24} />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px", flexGrow: 1 }}>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              Experience single-origin morning milk delivered to your doorstep at 6:30 AM tomorrow. Fill out your details in 30 seconds!
            </p>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Anand Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Whatsapp / Mobile Number *</label>
              <input
                type="tel"
                required
                placeholder="e.g. +91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Delivery Apartment & Address *</label>
              <textarea
                required
                rows={3}
                placeholder="Door No, Apartment Name, Street, Locality"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="form-textarea"
              />
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Select Sample Pack</label>
              <select
                value={formData.sampleChoice}
                onChange={(e) => setFormData({ ...formData, sampleChoice: e.target.value })}
                className="form-select"
              >
                <option value="Fresh Whole Milk 1L">Fresh Whole Milk (1 Litre Glass Bottle)</option>
                <option value="Full Cream Milk 1L">Full Cream Malai Milk (1 Litre Pouch)</option>
                <option value="Set Curd 400g">Farm Fresh Set Curd (400g Tub)</option>
              </select>
            </div>

            <div style={{ marginTop: "auto", paddingTop: "16px" }}>
              <button type="submit" className="btn btn-accent" style={{ width: "100%", padding: "14px", fontSize: "1rem" }}>
                <span>Confirm 6:30 AM Tomorrow Delivery</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </form>
        ) : (
          <div style={{ textAlign: "center", margin: "auto 0", padding: "20px 0" }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "var(--primary-green-subtle)", color: "#2E7D32", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px auto" }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>Trial Sample Confirmed!</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "24px" }}>
              Thank you <strong>{formData.name}</strong>! Your sample pack of <strong>{formData.sampleChoice}</strong> will be delivered to your doorstep before 6:30 AM tomorrow.
            </p>
            <div style={{ background: "var(--bg-alt)", padding: "14px", borderRadius: "var(--radius-sm)", fontSize: "0.85rem", color: "var(--primary-green)", fontWeight: 600, marginBottom: "28px" }}>
              📲 SMS confirmation sent to {formData.phone}
            </div>
            <button onClick={onClose} className="btn btn-primary" style={{ width: "100%" }}>
              <span>Done & Close</span>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
