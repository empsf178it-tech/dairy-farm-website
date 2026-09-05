import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Heart, ShieldCheck, Sparkles, Leaf } from "lucide-react";
import { CORE_VALUES, SUSTAINABILITY_STATS } from "../data/farm";
import EcoImpactCounter from "../components/EcoImpactCounter";

export default function OurValuesPage() {
  return (
    <div className="our-values-page">
      {/* HERO */}
      <section className="hero" style={{ minHeight: "55vh" }}>
        <img
          src="./src/assets/8.png"
          alt="AAVINARA green pastures"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>

        <div className="container hero-content animate-fade-in" style={{ textAlign: "center", margin: "0 auto" }}>
          <span className="eyebrow eyebrow-dark">OUR GUIDING PRINCIPLES</span>
          <h1 className="hero-title">Better dairy begins with better choices.</h1>
          <p className="hero-text" style={{ margin: "0 auto" }}>
            The 4 pillars that guide every morning milking, pasture management decision, and glass bottle delivery.
          </p>
        </div>
      </section>

      {/* 4 CORE VALUE SECTIONS */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
          {CORE_VALUES.map((value, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={value.id}
                id={value.id}
                className="split-section"
                style={{ direction: isEven ? "rtl" : "ltr" }}
              >
                <div style={{ direction: "ltr" }}>
                  <span className="eyebrow">PILLAR 0{idx + 1}</span>
                  <h2 style={{ fontSize: "2.4rem", marginBottom: "8px", marginTop: "10px" }}>{value.title}</h2>
                  <h4 style={{ fontFamily: "var(--font-sans)", color: "var(--warm-brown)", fontSize: "1.1rem", marginBottom: "20px" }}>
                    {value.subtitle}
                  </h4>

                  <p className="lead-text" style={{ marginBottom: "24px" }}>
                    {value.desc}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {value.details.map((detail, dIdx) => (
                      <div key={dIdx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.95rem", color: "var(--text-primary)" }}>
                        <CheckCircle2 size={18} color="var(--primary-green)" style={{ flexShrink: 0, marginTop: "3px" }} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="split-image-wrapper" style={{ direction: "ltr" }}>
                  <img src={value.image} alt={value.title} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTERACTIVE ECO-IMPACT CALCULATOR */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container">
          <EcoImpactCounter />
        </div>
      </section>

      {/* DEDICATED SUSTAINABILITY SECTION */}
      <section className="section-padding" style={{ backgroundColor: "var(--primary-green-dark)", color: "#FFF" }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-dark">ENVIRONMENTAL DASHBOARD</span>
            <h2 style={{ color: "#FFF" }}>Dedicated to Sustainable Farming</h2>
            <p className="lead-text" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
              How we minimize our ecological footprint and replenish Tamil Nadu's natural ecosystems.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "40px" }}>
            {SUSTAINABILITY_STATS.map((stat, idx) => (
              <div key={idx} style={{ background: "rgba(255,255,255,0.06)", padding: "30px 24px", borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.12)", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.8rem", color: "var(--accent-yellow)", marginBottom: "8px" }}>{stat.value}</div>
                <h3 style={{ fontSize: "1.15rem", color: "#FFF", marginBottom: "6px" }}>{stat.label}</h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.5" }}>{stat.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link to="/contact" className="btn btn-accent">
              <span>Partner With Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
