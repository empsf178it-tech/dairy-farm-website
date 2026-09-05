import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Droplets, Sun, Wind, Recycle, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { ANIMAL_CARE_PILLARS, FARM_METRICS, DAILY_LIFE_MOMENTS, SUSTAINABILITY_STATS } from "../data/farm";

export default function OurFarmPage() {
  return (
    <div className="our-farm-page">
      {/* HERO */}
      <section className="hero" style={{ minHeight: "65vh" }}>
        <img
          src="./src/assets/5.png"
          alt="AAVINARA Farm estate landscape"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>

        <div className="container hero-content animate-fade-in" style={{ textAlign: "center", margin: "0 auto" }}>
          <span className="eyebrow eyebrow-dark">120-ACRE ESTATE · TAMIL NADU</span>
          <h1 className="hero-title">Where our dairy begins.</h1>
          <p className="hero-text" style={{ margin: "0 auto 30px auto" }}>
            A sustainable, single-origin eco-farm where healthy cows, lush organic pasture, and gentle care come together.
          </p>
        </div>
      </section>

      {/* FARM PHILOSOPHY */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="container">
          <div className="split-section">
            <div>
              <span className="eyebrow">THE FARM</span>
              <h2 style={{ marginBottom: "20px" }}>
                A sanctuary for cows and land.
              </h2>
              <p className="lead-text" style={{ marginBottom: "20px" }}>
                At AAVINARA, farming is not about mass industrial yields. It is an intentional ecosystem of soil care, natural pasture grazing, and transparent single-origin production.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "24px" }}>
                Nestled amidst fertile green acres in Tamil Nadu, our farm operates on zero-chemical soil principles. We cultivate our own fresh green fodder, napier grass, and clover without synthetic pesticides, ensuring that what our cows eat is 100% pure and wholesome.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {FARM_METRICS.map((m, idx) => (
                  <div key={idx} style={{ padding: "16px", background: "var(--bg-card)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-light)" }}>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--primary-green)" }}>{m.value}</div>
                    <div style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--text-primary)" }}>{m.label}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="split-image-wrapper">
              <img
                src="./src/assets/6.png"
                alt="Cows in pasture"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ANIMAL CARE BREAKDOWN */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-yellow">COMPASSIONATE ANIMAL CARE</span>
            <h2>How we care for our animals every single day</h2>
            <p className="lead-text">
              We design our farm around cow comfort, dignity, and low stress.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {ANIMAL_CARE_PILLARS.map((pillar, idx) => (
              <div key={idx} className="card" style={{ padding: "28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "var(--accent-yellow-light)", color: "var(--warm-brown)", display: "flex", alignItems: "center", justify: "center" }}>
                    <Heart size={20} />
                  </div>
                  <h3 style={{ fontSize: "1.2rem" }}>{pillar.title}</h3>
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAILY LIFE PHOTO GRID */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">AUTHENTIC MOMENTS</span>
            <h2>Daily Life on the Farm</h2>
            <p className="lead-text">
              Take a visual journey into the quiet rhythms, dawn breezes, and hand-crafted moments at AAVINARA.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {DAILY_LIFE_MOMENTS.map((moment, idx) => (
              <div key={idx} className="card" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", height: "230px" }}>
                  <img src={moment.image} alt={moment.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span className="badge-tag" style={{ top: "12px", right: "12px", left: "auto" }}>{moment.time}</span>
                </div>
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "6px" }}>{moment.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{moment.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABLE FARMING */}
      <section className="section-padding" style={{ backgroundColor: "var(--primary-green-dark)", color: "#FFF" }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-dark">EARTH FRIENDLY</span>
            <h2 style={{ color: "#FFF" }}>Sustainable Farming Practices</h2>
            <p className="lead-text" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
              Protecting natural water resources, soil organic carbon, and clean energy.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginBottom: "50px" }}>
            {SUSTAINABILITY_STATS.map((s, idx) => (
              <div key={idx} style={{ background: "rgba(255,255,255,0.06)", padding: "28px 20px", borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem", color: "var(--accent-yellow)", marginBottom: "8px" }}>{s.value}</div>
                <h3 style={{ fontSize: "1.1rem", color: "#FFF", marginBottom: "4px" }}>{s.label}</h3>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)" }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link to="/process" className="btn btn-accent">
              <span>See Our Complete Process</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
