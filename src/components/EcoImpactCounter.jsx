import React, { useState } from "react";
import { Leaf, Recycle, ShieldCheck, Sparkles, Droplets } from "lucide-react";

export default function EcoImpactCounter() {
  const [litersPerDay, setLitersPerDay] = useState(2);

  const annualPouchesSaved = litersPerDay * 365;
  const carbonSavingsKg = +(litersPerDay * 365 * 0.45).toFixed(1);
  const waterSavedLiters = litersPerDay * 365 * 3;

  return (
    <div className="eco-impact-counter card" style={{ padding: "40px", backgroundColor: "var(--primary-green-dark)", color: "#FFF", border: "1px solid rgba(255,255,255,0.15)" }}>
      <div className="section-header" style={{ marginBottom: "32px", textAlign: "left" }}>
        <span className="eyebrow eyebrow-dark">
          <Leaf size={14} /> YOUR PERSONAL ECO-IMPACT
        </span>
        <h2 style={{ color: "#FFF" }}>Calculate Your Household Plastic Savings</h2>
        <p style={{ color: "rgba(255,255,255,0.85)", margin: 0 }}>
          See how switching from plastic pouches to AAVINARA reusable glass bottles helps the planet.
        </p>
      </div>

      <div style={{ marginBottom: "32px" }}>
        <label style={{ display: "block", fontSize: "0.95rem", fontWeight: 700, color: "var(--accent-yellow)", marginBottom: "12px" }}>
          Daily Household Milk Consumption: {litersPerDay} Liter(s) / Day
        </label>
        <input
          type="range"
          min="1"
          max="10"
          step="1"
          value={litersPerDay}
          onChange={(e) => setLitersPerDay(parseInt(e.target.value))}
          style={{ width: "100%", accentColor: "var(--accent-yellow)", cursor: "pointer", height: "8px" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", marginTop: "6px" }}>
          <span>1 Liter (Small Household)</span>
          <span>5 Liters (Large Family)</span>
          <span>10 Liters (Joint Family / Café)</span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
        <div style={{ background: "rgba(255,255,255,0.08)", padding: "24px", borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.12)", textAlign: "center" }}>
          <Recycle size={28} color="var(--accent-yellow)" style={{ margin: "0 auto 10px auto" }} />
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.4rem", color: "var(--accent-yellow)" }}>
            {annualPouchesSaved.toLocaleString()}
          </div>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFF", display: "block" }}>
            Single-Use Plastic Pouches Saved / Year
          </span>
        </div>

        <div style={{ background: "rgba(255,255,255,0.08)", padding: "24px", borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.12)", textAlign: "center" }}>
          <Leaf size={28} color="#4ADE80" style={{ margin: "0 auto 10px auto" }} />
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.4rem", color: "#4ADE80" }}>
            {carbonSavingsKg} kg
          </div>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFF", display: "block" }}>
            CO₂ Carbon Emissions Avoided
          </span>
        </div>

        <div style={{ background: "rgba(255,255,255,0.08)", padding: "24px", borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.12)", textAlign: "center" }}>
          <Droplets size={28} color="#93C5FD" style={{ margin: "0 auto 10px auto" }} />
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.4rem", color: "#93C5FD" }}>
            {waterSavedLiters.toLocaleString()} L
          </div>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFF", display: "block" }}>
            Water Saved in Plastic Manufacturing
          </span>
        </div>
      </div>
    </div>
  );
}
