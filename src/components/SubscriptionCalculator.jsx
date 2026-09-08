import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calculator, Calendar, Check, ArrowRight, Leaf } from "lucide-react";

export default function SubscriptionCalculator() {
  const navigate = useNavigate();
  const [familySize, setFamilySize] = useState("family"); // 'couple', 'family', 'large'
  const [dailyLitres, setDailyLitres] = useState(1.5);
  const [frequency, setFrequency] = useState(30); // 30 days, 15 days (alternate), 22 days (mon-fri)
  const [includeCurd, setIncludeCurd] = useState(true);
  const [includeGhee, setIncludeGhee] = useState(false);

  // Pricing constants
  const milkPricePerLitre = 70;
  const curdPricePerMonth = 240; // 400g 6 times a month
  const gheePricePerMonth = 720; // 500ml jar monthly

  const monthlyMilkLitres = Math.round(dailyLitres * frequency);
  const monthlyMilkCost = monthlyMilkLitres * milkPricePerLitre;
  const totalMonthlyCost = monthlyMilkCost + (includeCurd ? curdPricePerMonth : 0) + (includeGhee ? gheePricePerMonth : 0);
  const plasticPouchesSaved = Math.round(monthlyMilkLitres * 2);

  const handleFamilyPreset = (type) => {
    setFamilySize(type);
    if (type === "couple") setDailyLitres(1.0);
    else if (type === "family") setDailyLitres(1.5);
    else if (type === "large") setDailyLitres(2.5);
  };

  const handleProceedOrder = () => {
    const params = new URLSearchParams({
      product: "Fresh Whole Milk",
      size: `${dailyLitres} Litre Daily`,
      monthlyEst: totalMonthlyCost
    });
    navigate(`/order?${params.toString()}`);
  };

  return (
    <div className="card subscription-calculator-card">
      <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 32px auto" }}>
        <span className="eyebrow eyebrow-yellow" style={{ marginBottom: "12px" }}>
          <Calculator size={14} /> FLEXIBLE SUBSCRIPTION CALCULATOR
        </span>
        <h3 className="calc-main-title">Customize Your Daily Milk Delivery</h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: "1.5" }}>
          Select your household needs to calculate your monthly doorstep delivery schedule and eco-impact.
        </p>
      </div>

      <div className="split-section" style={{ gap: "30px", alignItems: "stretch" }}>
        {/* Controls Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
          {/* 1. Household Size Presets */}
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px", color: "var(--text-primary)" }}>
              1. Select Household Size
            </label>
            <div className="calc-preset-grid">
              {[
                { id: "couple", label: "1-2 Persons", sub: "1.0L / day" },
                { id: "family", label: "3-4 Family", sub: "1.5L / day" },
                { id: "large", label: "5+ Members", sub: "2.5L / day" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleFamilyPreset(item.id)}
                  className={`calc-preset-btn ${familySize === item.id ? "active" : ""}`}
                  style={{
                    border: familySize === item.id ? "2px solid var(--primary-green)" : "1px solid var(--border-light)",
                    background: familySize === item.id ? "var(--primary-green-subtle)" : "var(--bg-main)",
                    color: familySize === item.id ? "var(--primary-green)" : "var(--text-primary)",
                    cursor: "pointer"
                  }}
                >
                  <div className="calc-preset-title" style={{ fontWeight: 700 }}>{item.label}</div>
                  <div className="calc-preset-sub" style={{ opacity: 0.8, marginTop: "2px" }}>{item.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Daily Milk Slider */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "4px", marginBottom: "8px" }}>
              <label style={{ fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-primary)" }}>
                2. Daily Milk Quantity
              </label>
              <span style={{ fontWeight: 800, color: "var(--primary-green)", fontSize: "1.05rem" }}>
                {dailyLitres} Litres / Day
              </span>
            </div>
            <input
              type="range"
              min="0.5"
              max="4.0"
              step="0.5"
              value={dailyLitres}
              onChange={(e) => setDailyLitres(parseFloat(e.target.value))}
              style={{ width: "100%", accentColor: "var(--primary-green)", cursor: "pointer" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
              <span>0.5L</span>
              <span>1.5L</span>
              <span>2.5L</span>
              <span>4.0L</span>
            </div>
          </div>

          {/* 3. Delivery Frequency */}
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px", color: "var(--text-primary)" }}>
              3. Delivery Frequency
            </label>
            <div className="calc-preset-grid">
              {[
                { days: 30, label: "Everyday", desc: "30 Deliveries" },
                { days: 15, label: "Alternate", desc: "15 Deliveries" },
                { days: 22, label: "Mon – Fri", desc: "22 Deliveries" }
              ].map((f) => (
                <button
                  key={f.days}
                  onClick={() => setFrequency(f.days)}
                  className={`calc-preset-btn ${frequency === f.days ? "active" : ""}`}
                  style={{
                    border: frequency === f.days ? "2px solid var(--primary-green)" : "1px solid var(--border-light)",
                    background: frequency === f.days ? "var(--primary-green-subtle)" : "var(--bg-main)",
                    color: frequency === f.days ? "var(--primary-green)" : "var(--text-primary)",
                    cursor: "pointer"
                  }}
                >
                  <div className="calc-preset-title" style={{ fontWeight: 700 }}>{f.label}</div>
                  <div className="calc-preset-sub" style={{ opacity: 0.8, marginTop: "2px" }}>{f.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Add-ons */}
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px", color: "var(--text-primary)" }}>
              4. Optional Artisanal Add-ons
            </label>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label className="calc-addon-item">
                <input
                  type="checkbox"
                  checked={includeCurd}
                  onChange={(e) => setIncludeCurd(e.target.checked)}
                  style={{ accentColor: "var(--primary-green)", width: "16px", height: "16px", flexShrink: 0 }}
                />
                <span className="calc-addon-text">Add Probiotic Thick Curd (400g x 6 Tubs/mo)</span>
                <span className="calc-addon-price">+₹240/mo</span>
              </label>

              <label className="calc-addon-item">
                <input
                  type="checkbox"
                  checked={includeGhee}
                  onChange={(e) => setIncludeGhee(e.target.checked)}
                  style={{ accentColor: "var(--primary-green)", width: "16px", height: "16px", flexShrink: 0 }}
                />
                <span className="calc-addon-text">Add Bilona Desi Cow Ghee (500ml Jar/mo)</span>
                <span className="calc-addon-price">+₹720/mo</span>
              </label>
            </div>
          </div>
        </div>

        {/* Estimate Output Box */}
        <div className="calc-summary-box" style={{ width: "100%" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--accent-yellow)", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "14px" }}>
              <Calendar size={15} /> MONTHLY ESTIMATE SUMMARY
            </div>

            <div className="calc-summary-amount">
              ₹{totalMonthlyCost}
              <span style={{ fontSize: "0.88rem", fontFamily: "var(--font-sans)", color: "rgba(255, 255, 255, 0.7)", marginLeft: "6px" }}>/ month</span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.8)", marginBottom: "20px", lineHeight: "1.4" }}>
              Includes {monthlyMilkLitres} Litres of fresh glass-bottled milk delivered by 6:30 AM.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", borderTop: "1px solid rgba(255, 255, 255, 0.12)", paddingTop: "16px", marginBottom: "20px" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.84rem", color: "rgba(255, 255, 255, 0.9)" }}>
                <Check size={15} color="var(--accent-yellow)" style={{ flexShrink: 0 }} />
                <span>Zero Ring-Bell Silent Morning Doorstep Delivery</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.84rem", color: "rgba(255, 255, 255, 0.9)" }}>
                <Check size={15} color="var(--accent-yellow)" style={{ flexShrink: 0 }} />
                <span>Pause, Resume or Change Quantity via Whatsapp Anytime</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.84rem", color: "var(--accent-yellow)" }}>
                <Leaf size={15} style={{ flexShrink: 0 }} />
                <span><strong>{plasticPouchesSaved} Plastic Pouches Saved</strong> per month!</span>
              </li>
            </ul>
          </div>

          <button onClick={handleProceedOrder} className="btn btn-accent" style={{ width: "100%", padding: "12px", fontSize: "0.95rem" }}>
            <span>Subscribe & Order Schedule</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
