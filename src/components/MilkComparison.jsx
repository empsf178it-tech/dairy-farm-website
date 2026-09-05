import React, { useState } from "react";
import { Check, X, ShieldAlert, Sparkles } from "lucide-react";

export default function MilkComparison() {
  const [activeTab, setActiveTab] = useState("all");

  const comparisonItems = [
    {
      title: "1. Sourcing & Origin",
      commercial: "Pooled from 500+ unverified collection centers",
      aavinara: "100% Single-Origin from our 120-acre Tamil Nadu estate",
      commercialBad: true
    },
    {
      title: "2. Thermal Processing",
      commercial: "Ultra High Temp (UHT 140°C) destroying natural enzymes",
      aavinara: "Gentle Low-Temp Pasteurization (LTLT 63°C) preserving immunoglobulins",
      commercialBad: true
    },
    {
      title: "3. Milk Fat & Cream",
      commercial: "Mechanically homogenized and skimmed with milk powder solids",
      aavinara: "100% Natural cream intact; thick malai layer forms upon boiling",
      commercialBad: true
    },
    {
      title: "4. Eco Packaging",
      commercial: "Single-use plastic pouches (Leaches microplastics & land waste)",
      aavinara: "Steam-sterilized reusable glass bottles (Zero plastic, zero leaching)",
      commercialBad: true
    },
    {
      title: "5. Batch Traceability",
      commercial: "Zero traceability; unknown milking date or cow healthcare",
      aavinara: "24-Point lab batch report traceable directly on bottle label",
      commercialBad: true
    }
  ];

  return (
    <div className="card milk-comparison-card" style={{ padding: "36px 30px", background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-light)" }}>
      <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 32px auto" }}>
        <span className="eyebrow eyebrow-yellow" style={{ marginBottom: "12px" }}>
          <Sparkles size={14} /> THE CLEAR DIFFERENCE
        </span>
        <h3 style={{ fontSize: "2.1rem", marginBottom: "10px" }}>Commercial Pooled Milk vs. AAVINARA</h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
          See how single-origin care and glass packaging set our farm dairy apart from standard supermarket brands.
        </p>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", minWidth: "560px" }}>
          <thead>
            <tr>
              <th style={{ padding: "14px 16px", borderBottom: "2px solid var(--border-light)", fontSize: "0.85rem", textTransform: "uppercase", color: "var(--text-muted)", width: "25%" }}>
                Pillar
              </th>
              <th style={{ padding: "14px 16px", borderBottom: "2px solid var(--border-light)", fontSize: "0.85rem", textTransform: "uppercase", color: "#C62828", background: "rgba(198, 40, 40, 0.04)", width: "37.5%", borderRadius: "var(--radius-sm) 0 0 0" }}>
                Commercial Supermarket Milk
              </th>
              <th style={{ padding: "14px 16px", borderBottom: "2px solid var(--border-light)", fontSize: "0.85rem", textTransform: "uppercase", color: "var(--primary-green)", background: "var(--primary-green-subtle)", width: "37.5%", borderRadius: "0 var(--radius-sm) 0 0" }}>
                AAVINARA Farm Fresh Dairy
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonItems.map((item, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid var(--border-light)" }}>
                <td style={{ padding: "16px", fontWeight: 700, fontSize: "0.9rem", color: "var(--text-primary)" }}>
                  {item.title}
                </td>
                <td style={{ padding: "16px", fontSize: "0.88rem", color: "var(--text-secondary)", background: "rgba(198, 40, 40, 0.02)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <X size={16} color="#C62828" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span>{item.commercial}</span>
                  </div>
                </td>
                <td style={{ padding: "16px", fontSize: "0.88rem", fontWeight: 600, color: "var(--primary-green)", background: "rgba(46, 125, 50, 0.05)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <Check size={16} color="#2E7D32" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span>{item.aavinara}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
