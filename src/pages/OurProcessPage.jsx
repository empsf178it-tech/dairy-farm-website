import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { PROCESS_STEPS } from "../data/farm";

export default function OurProcessPage() {
  return (
    <div className="our-process-page">
      {/* HERO */}
      <section className="hero" style={{ minHeight: "55vh" }}>
        <img
          src="./src/assets/7.png"
          alt="AAVINARA dairy processing and milking parlour"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>

        <div className="container hero-content animate-fade-in" style={{ textAlign: "center", margin: "0 auto" }}>
          <span className="eyebrow eyebrow-dark">TRANSPARENT HARVESTING</span>
          <h1 className="hero-title">From our farm to your table.</h1>
          <p className="hero-text" style={{ margin: "0 auto" }}>
            Step-by-step transparency from pasture health, instant chilling, and 24-point lab testing to glass-bottled doorstep delivery.
          </p>
        </div>
      </section>

      {/* ALTERNATING PROCESS STEPS */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "90px" }}>
          {PROCESS_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={step.step}
                className="split-section"
                style={{ direction: isEven ? "rtl" : "ltr" }}
              >
                <div style={{ direction: "ltr" }}>
                  <span className="eyebrow eyebrow-yellow" style={{ fontSize: "0.85rem", padding: "6px 16px" }}>
                    STEP {step.step}
                  </span>
                  <h2 style={{ fontSize: "2.5rem", marginBottom: "8px", marginTop: "10px" }}>{step.title}</h2>
                  <h4 style={{ fontFamily: "var(--font-sans)", color: "var(--warm-brown)", fontSize: "1.1rem", marginBottom: "20px" }}>
                    {step.subtitle}
                  </h4>

                  <p className="lead-text" style={{ marginBottom: "24px" }}>
                    {step.desc}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                    {step.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.95rem", color: "var(--text-primary)" }}>
                        <CheckCircle2 size={18} color="var(--primary-green)" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="split-image-wrapper" style={{ direction: "ltr" }}>
                  <img src={step.image} alt={step.title} loading="lazy" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ backgroundColor: "var(--primary-green-dark)", color: "#FFF", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 style={{ color: "#FFF", marginBottom: "16px" }}>Taste the purity of our process.</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "32px", fontSize: "1.1rem" }}>
            Experience 100% single-origin daily milk and traditional dairy products delivered fresh every sunrise.
          </p>
          <Link to="/products" className="btn btn-accent" style={{ padding: "16px 32px" }}>
            <span>Explore Products</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
