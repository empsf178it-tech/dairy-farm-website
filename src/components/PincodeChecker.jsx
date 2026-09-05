import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, CheckCircle2, AlertCircle, Clock, Truck, ShieldCheck, ArrowRight } from "lucide-react";

export default function PincodeChecker() {
  const navigate = useNavigate();
  const [pincode, setPincode] = useState("641001");
  const [result, setResult] = useState(null);

  // Sample database of serviced pincodes in Tamil Nadu
  const servicedPincodes = {
    "641001": { hub: "Coimbatore Central Hub", zone: "RS Puram & Town Hall", timing: "05:30 AM - 06:15 AM", status: "active" },
    "641002": { hub: "Coimbatore West Hub", zone: "Vadavalli & Agricultural University", timing: "05:45 AM - 06:30 AM", status: "active" },
    "641004": { hub: "Coimbatore East Hub", zone: "Peelamedu & Hopes College", timing: "05:30 AM - 06:20 AM", status: "active" },
    "641028": { hub: "Coimbatore South Hub", zone: "Singanallur & Trichy Road", timing: "05:45 AM - 06:30 AM", status: "active" },
    "600001": { hub: "Chennai North Hub", zone: "George Town & Beach Road", timing: "05:15 AM - 06:00 AM", status: "active" },
    "600028": { hub: "Chennai Central Hub", zone: "Raja Annamalaipuram & Mylapore", timing: "05:30 AM - 06:15 AM", status: "active" },
    "600032": { hub: "Chennai South Hub", zone: "Guindy & Ekkatuthangal", timing: "05:45 AM - 06:30 AM", status: "active" }
  };

  const handleCheck = (e) => {
    e.preventDefault();
    const cleanPin = pincode.trim();
    if (servicedPincodes[cleanPin]) {
      setResult({ pin: cleanPin, ...servicedPincodes[cleanPin] });
    } else if (cleanPin.length === 6 && /^\d+$/.test(cleanPin)) {
      setResult({
        pin: cleanPin,
        hub: "Regional Express Expansion Hub",
        zone: "Standard Express Courier Zone",
        timing: "Delivery by 07:00 AM",
        status: "available"
      });
    } else {
      setResult({ error: "Please enter a valid 6-digit Pincode (e.g. 641001)" });
    }
  };

  const handleOrderWithPincode = () => {
    if (result && result.pin) {
      navigate(`/order?pincode=${result.pin}`);
    }
  };

  return (
    <div className="card pincode-checker-card" style={{ padding: "36px 30px", background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-light)" }}>
      <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 28px auto" }}>
        <span className="eyebrow eyebrow-yellow" style={{ marginBottom: "12px" }}>
          <MapPin size={14} /> DOORSTEP SERVICEABILITY CHECKER
        </span>
        <h3 style={{ fontSize: "2.1rem", marginBottom: "10px" }}>Check Delivery in Your Area</h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
          Enter your 6-digit Pincode to check 6:30 AM morning doorstep delivery availability and local hub timings.
        </p>
      </div>

      {/* Pincode Search Form */}
      <form onSubmit={handleCheck} style={{ display: "flex", gap: "12px", maxWidth: "520px", margin: "0 auto 24px auto", flexWrap: "wrap" }}>
        <div style={{ position: "relative", flexGrow: 1 }}>
          <input
            type="text"
            maxLength={6}
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Enter 6-digit Pincode (e.g. 641001)"
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
          <MapPin size={18} color="var(--primary-green)" style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }} />
        </div>
        <button type="submit" className="btn btn-primary" style={{ padding: "14px 28px" }}>
          <span>Check Pincode</span>
        </button>
      </form>

      {/* Sample Pincode Quick Pills */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap", marginBottom: "30px" }}>
        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", alignSelf: "center" }}>Popular Pincodes:</span>
        {["641001", "641004", "641028", "600028", "600032"].map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => {
              setPincode(code);
              setResult({ pin: code, ...servicedPincodes[code] });
            }}
            style={{
              padding: "4px 12px",
              borderRadius: "var(--radius-full)",
              fontSize: "0.75rem",
              fontWeight: 700,
              border: pincode === code ? "1px solid var(--primary-green)" : "1px solid var(--border-light)",
              background: pincode === code ? "var(--primary-green-subtle)" : "var(--bg-main)",
              color: pincode === code ? "var(--primary-green)" : "var(--text-secondary)",
              cursor: "pointer"
            }}
          >
            {code}
          </button>
        ))}
      </div>

      {/* Result Card */}
      {result && (
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          {result.error ? (
            <div style={{ padding: "16px 20px", background: "rgba(198, 40, 40, 0.08)", color: "#C62828", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem" }}>
              <AlertCircle size={20} />
              <span>{result.error}</span>
            </div>
          ) : (
            <div style={{ background: "var(--bg-alt)", padding: "26px", borderRadius: "var(--radius-md)", border: "1.5px solid var(--primary-green-light)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle2 size={22} color="#2E7D32" />
                  <div>
                    <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-green)" }}>
                      Pincode {result.pin} Serviced!
                    </span>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                      {result.zone}
                    </div>
                  </div>
                </div>

                <div style={{ background: "#E8F5E9", color: "#1B5E20", padding: "6px 14px", borderRadius: "var(--radius-full)", fontWeight: 700, fontSize: "0.82rem" }}>
                  ⚡ Guaranteed 6:30 AM Slot
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "14px", marginBottom: "20px" }}>
                <div style={{ background: "var(--bg-card)", padding: "14px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-light)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase" }}>
                    <Truck size={14} color="var(--primary-green)" /> Local Delivery Hub
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--primary-green)", marginTop: "4px" }}>
                    {result.hub}
                  </div>
                </div>

                <div style={{ background: "var(--bg-card)", padding: "14px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-light)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase" }}>
                    <Clock size={14} color="var(--warm-brown)" /> Doorstep Slot
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--warm-brown)", marginTop: "4px" }}>
                    {result.timing}
                  </div>
                </div>
              </div>

              <button
                onClick={handleOrderWithPincode}
                className="btn btn-accent"
                style={{ width: "100%", justifyContent: "center", padding: "14px" }}
              >
                <span>Proceed to Order Fresh for {result.pin}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
