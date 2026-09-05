import React, { useState, useEffect } from "react";
import { Activity, ShieldCheck, Thermometer, Truck, Radio } from "lucide-react";

export default function TelemetryBar() {
  const [telemetry, setTelemetry] = useState({
    chillingTemp: 3.8,
    purityScore: 99.8,
    activeFleet: 14,
    lastUpdate: "Just Now"
  });

  // Subtle live fluctuations for realism
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        ...prev,
        chillingTemp: +(3.7 + Math.random() * 0.3).toFixed(1),
        purityScore: +(99.7 + Math.random() * 0.2).toFixed(1),
        lastUpdate: "Just Now"
      }));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: "var(--primary-green-dark)", color: "#FFF", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.82rem" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--accent-yellow)", fontWeight: 700 }}>
          <span style={{ position: "relative", display: "flex", width: "8px", height: "8px" }}>
            <span style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%", backgroundColor: "#4ADE80", opacity: 0.75, animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite" }}></span>
            <span style={{ position: "relative", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22C55E" }}></span>
          </span>
          <span>LIVE FARM TELEMETRY:</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Thermometer size={14} color="#EBB842" />
            <span>Chilling Tank: <strong>{telemetry.chillingTemp}°C</strong> (Target &lt; 4°C)</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <ShieldCheck size={14} color="#4ADE80" />
            <span>FTIR Lab Purity: <strong>{telemetry.purityScore}%</strong></span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Truck size={14} color="#93C5FD" />
            <span>Cold Fleet: <strong>{telemetry.activeFleet} EV Trucks</strong> en route</span>
          </div>
        </div>

        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem" }}>
          Synced {telemetry.lastUpdate}
        </div>
      </div>
    </div>
  );
}
