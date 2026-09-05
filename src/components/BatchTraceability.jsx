import React, { useState } from "react";
import { Search, ShieldCheck, Thermometer, Droplets, CheckCircle, FileSpreadsheet, Sparkles } from "lucide-react";

export default function BatchTraceability() {
  const [inputCode, setInputCode] = useState("AAVI-TODAY");
  const [searched, setSearched] = useState(true);

  const sampleBatches = {
    "AAVI-TODAY": {
      batchId: "AAVI-2026-0905",
      date: "September 05, 2026",
      milkingTime: "04:30 AM",
      chillingTemp: "3.8°C",
      fatContent: "4.2%",
      snfContent: "8.8%",
      antibiotics: "0.00% (Passed)",
      steamSterilization: "121°C (Passed)",
      pastureZone: "Central Clover Paddock 4",
      status: "Verified 100% Pure"
    },
    "BATCH-2409": {
      batchId: "AAVI-2026-2409",
      date: "September 04, 2026",
      milkingTime: "04:45 AM",
      chillingTemp: "3.9°C",
      fatContent: "4.1%",
      snfContent: "8.7%",
      antibiotics: "0.00% (Passed)",
      steamSterilization: "121°C (Passed)",
      pastureZone: "East Napier Hill Meadow",
      status: "Verified 100% Pure"
    }
  };

  const activeData = sampleBatches[inputCode] || sampleBatches["AAVI-TODAY"];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="card batch-traceability-card" style={{ padding: "36px 30px", background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-light)" }}>
      <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 28px auto" }}>
        <span className="eyebrow eyebrow-yellow" style={{ marginBottom: "12px" }}>
          <Sparkles size={14} /> 24-POINT TRANSPARENCY LOOKUP
        </span>
        <h3 style={{ fontSize: "2.1rem", marginBottom: "10px" }}>Trace Your Milk Batch</h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
          Enter the batch code printed on your glass bottle neck label to view today's lab purity certificate.
        </p>
      </div>

      {/* Input Search Form */}
      <form onSubmit={handleSearch} style={{ display: "flex", gap: "12px", maxWidth: "540px", margin: "0 auto 28px auto", flexWrap: "wrap" }}>
        <div style={{ position: "relative", flexGrow: 1 }}>
          <input
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value.toUpperCase())}
            placeholder="Enter Batch Code (e.g. AAVI-TODAY)"
            style={{
              width: "100%",
              padding: "14px 18px 14px 44px",
              borderRadius: "var(--radius-full)",
              border: "1.5px solid var(--border-light)",
              fontSize: "0.95rem",
              fontFamily: "var(--font-sans)",
              fontWeight: 600
            }}
          />
          <Search size={18} color="var(--text-muted)" style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }} />
        </div>
        <button type="submit" className="btn btn-primary" style={{ padding: "14px 28px" }}>
          <span>View Report</span>
        </button>
      </form>

      {/* Quick Pills */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", alignSelf: "center" }}>Try Sample Batches:</span>
        {Object.keys(sampleBatches).map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setInputCode(code)}
            style={{
              padding: "4px 12px",
              borderRadius: "var(--radius-full)",
              fontSize: "0.75rem",
              fontWeight: 700,
              border: inputCode === code ? "1px solid var(--primary-green)" : "1px solid var(--border-light)",
              background: inputCode === code ? "var(--primary-green-subtle)" : "var(--bg-main)",
              color: inputCode === code ? "var(--primary-green)" : "var(--text-secondary)",
              cursor: "pointer"
            }}
          >
            {code}
          </button>
        ))}
      </div>

      {/* Batch Certificate Output Grid */}
      {searched && (
        <div style={{ background: "var(--bg-alt)", padding: "28px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border-light)", paddingBottom: "16px", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CheckCircle size={18} color="#2E7D32" />
                <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--primary-green)" }}>{activeData.batchId}</span>
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                Milked: {activeData.date} at {activeData.milkingTime}
              </div>
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(46, 125, 50, 0.12)", color: "#1B5E20", padding: "6px 14px", borderRadius: "var(--radius-full)", fontWeight: 700, fontSize: "0.82rem" }}>
              <ShieldCheck size={16} />
              <span>{activeData.status}</span>
            </div>
          </div>

          {/* Metric Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
            <div style={{ background: "var(--bg-card)", padding: "16px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-light)" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700, marginBottom: "4px" }}>
                Instant Chilling
              </div>
              <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--primary-green)" }}>{activeData.chillingTemp}</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>Chilled in 15 mins</div>
            </div>

            <div style={{ background: "var(--bg-card)", padding: "16px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-light)" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700, marginBottom: "4px" }}>
                Natural Milk Fat
              </div>
              <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--warm-brown)" }}>{activeData.fatContent}</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>Un-homogenized Cream</div>
            </div>

            <div style={{ background: "var(--bg-card)", padding: "16px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-light)" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700, marginBottom: "4px" }}>
                Solids Not Fat (SNF)
              </div>
              <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--primary-green)" }}>{activeData.snfContent}</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>Natural Density</div>
            </div>

            <div style={{ background: "var(--bg-card)", padding: "16px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-light)" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700, marginBottom: "4px" }}>
                Chemical Residue
              </div>
              <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#2E7D32" }}>{activeData.antibiotics}</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>Zero Antibiotics / rBST</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
