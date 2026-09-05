import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, Sparkles, Droplets } from "lucide-react";
import TrustBar from "../components/TrustBar";
import ProductCard from "../components/ProductCard";
import ArticleCard from "../components/ArticleCard";
import SubscriptionCalculator from "../components/SubscriptionCalculator";
import BatchTraceability from "../components/BatchTraceability";
import MilkComparison from "../components/MilkComparison";
import ReviewsAndFAQ from "../components/ReviewsAndFAQ";
import PincodeChecker from "../components/PincodeChecker";
import RecipeShowcase from "../components/RecipeShowcase";
import { PRODUCTS } from "../data/products";
import { JOURNAL_POSTS } from "../data/journal";

export default function HomePage({ onOpenTrial }) {
  const homeProducts = PRODUCTS.slice(0, 4); // Fresh Milk, Full Cream, Curd, Paneer, Ghee
  const homeJournal = JOURNAL_POSTS.slice(0, 3);

  const timelineSteps = [
    {
      num: "01",
      title: "FARM",
      subtitle: "Pasture & Compassionate Care",
      desc: "Animals are cared for in a clean, healthy, and open pasture environment."
    },
    {
      num: "02",
      title: "MILK",
      subtitle: "Hygienic Morning Collection",
      desc: "Fresh milk collected gently and chilled to 4°C within 15 minutes."
    },
    {
      num: "03",
      title: "QUALITY",
      subtitle: "24-Point Purity Testing",
      desc: "Products undergo rigorous quality checks for density, fat & zero chemical residue."
    },
    {
      num: "04",
      title: "HOME",
      subtitle: "Cold-Chain Doorstep Express",
      desc: "Fresh dairy reaches your home family table before 6:30 AM every sunrise."
    }
  ];

  const qualityFeatures = [
    {
      title: "Freshness Guaranteed",
      desc: "Delivered within 24 hours of morning milking for uncompromised natural taste."
    },
    {
      title: "Purity & Hygiene",
      desc: "Steam-sterilized glass packaging and zero-touch automated milking pipelines."
    },
    {
      title: "24-Point Quality Checks",
      desc: "Every batch tested for milk solids, natural density, fat, and zero antibiotics."
    },
    {
      title: "Responsible Handling",
      desc: "Maintained strictly at 2°C–4°C across all storage and delivery vehicles."
    }
  ];

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero">
        <img
          src="/src/assets/1.png"
          alt="AAVINARA Dairy Farm pasture in morning sunlight"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>

        <div className="container hero-content animate-fade-in">
          <span className="eyebrow eyebrow-dark">
            <Sparkles size={14} /> FARM FRESH · RESPONSIBLY PRODUCED
          </span>

          <h1 className="hero-title">
            Freshness Starts at the Farm.
          </h1>

          <p className="hero-text">
            From healthy animals and careful farming to every bottle we deliver, we believe great dairy begins with care at every step.
          </p>

          <div className="hero-ctas">
            <Link to="/products" className="btn btn-accent">
              <span>Explore Our Products</span>
              <ArrowRight size={18} />
            </Link>
            <button onClick={onOpenTrial} className="btn btn-white">
              <span>Get Free Trial Pack 🎁</span>
            </button>
          </div>
        </div>

        {/* 2. OVERLAPPING TRUST BAR */}
        <TrustBar />
      </section>

      {/* 3. FARM INTRODUCTION */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="container">
          <div className="split-section">
            <div className="split-image-wrapper">
              <img
                src="/src/assets/2.png"
                alt="Healthy cows on AAVINARA pastures"
              />
            </div>

            <div>
              <span className="eyebrow">OUR FARM</span>
              <h2 style={{ marginBottom: "20px" }}>
                Healthy animals. Happier farms. Better dairy.
              </h2>
              <p className="lead-text" style={{ marginBottom: "24px" }}>
                Our approach begins with the animals and the environment they live in. We focus on responsible care, clean surroundings and thoughtful farming practices to create better dairy from the source.
              </p>
              <p style={{ color: "var(--text-secondary)", marginBottom: "32px", lineHeight: "1.7" }}>
                On our 120-acre estate, cows graze freely on organic green clover and napier grass. With automated massage brushes, continuous spring water, and veterinary care, we build a low-stress haven that naturally elevates milk purity.
              </p>
              <Link to="/farm" className="btn btn-primary">
                <span>Explore Our Farm</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-yellow">OUR SELECTION</span>
            <h2>Fresh from Our Farm</h2>
            <p className="lead-text">
              Taste the difference of single-origin, unadulterated dairy crafted with care.
            </p>
          </div>

          <div className="grid-products" style={{ marginBottom: "40px" }}>
            {homeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link to="/products" className="btn btn-primary">
              <span>View All 7 Products</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE SUBSCRIPTION CALCULATOR */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="container">
          <SubscriptionCalculator />
        </div>
      </section>

      {/* 6. PINCODE SERVICEABILITY CHECKER */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container">
          <PincodeChecker />
        </div>
      </section>

      {/* 6. FARM TO HOME VISUAL JOURNEY */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">THE JOURNEY</span>
            <h2>Farm to Home</h2>
            <p className="lead-text">
              A transparent 12-hour timeline from our pasture morning milking to your breakfast table.
            </p>
          </div>

          <div className="timeline-grid">
            {timelineSteps.map((step) => (
              <div className="timeline-card" key={step.num}>
                <div className="timeline-number">{step.num}</div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "4px" }}>{step.title}</h3>
                <h4 style={{ fontSize: "0.85rem", color: "var(--warm-brown)", fontFamily: "var(--font-sans)", marginBottom: "12px" }}>
                  {step.subtitle}
                </h4>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMMERCIAL VS AAVINARA COMPARISON */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="container">
          <MilkComparison />
        </div>
      </section>

      {/* 8. ANIMAL CARE */}
      <section className="section-padding" style={{ backgroundColor: "var(--primary-green-dark)", color: "#FFF" }}>
        <div className="container">
          <div className="split-section">
            <div>
              <span className="eyebrow eyebrow-dark">ETHICAL HUSBANDRY</span>
              <h2 style={{ color: "#FFF", marginBottom: "20px" }}>
                Care is part of our recipe.
              </h2>
              <p className="lead-text" style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: "24px" }}>
                Good dairy begins with healthy animals. Our farming practices focus on clean surroundings, proper nutrition, comfortable living conditions and responsible animal care.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
                {[
                  "Free pasture grazing and spacious open climate barns",
                  "Pure spring water & organically cultivated green fodder",
                  "24/7 veterinarian health tracking with zero growth hormones"
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255, 255, 255, 0.9)", fontSize: "0.95rem" }}>
                    <CheckCircle2 size={18} color="var(--accent-yellow)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/farm" className="btn btn-accent">
                <span>Our Animal Care</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="split-image-wrapper">
              <img
                src="/src/assets/3.png"
                alt="Farmer caring for cows on pasture"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. BATCH PURITY TRACEABILITY */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="container">
          <BatchTraceability />
        </div>
      </section>

      {/* 9.5 FARM KITCHEN RECIPES */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container">
          <RecipeShowcase />
        </div>
      </section>

      {/* 10. REVIEWS & FAQ */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="container">
          <ReviewsAndFAQ />
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="section-padding" style={{ position: "relative", backgroundColor: "var(--primary-green-dark)", color: "#FFF", overflow: "hidden" }}>
        <img
          src="/src/assets/4.png"
          alt="AAVINARA farm sunrise landscape"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(27,59,43,0.85) 0%, rgba(27,59,43,0.95) 100%)" }}></div>

        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "700px" }}>
          <span className="eyebrow eyebrow-dark" style={{ marginBottom: "20px" }}>FRESH DELIVERIES DAILY</span>
          <h2 style={{ color: "#FFF", marginBottom: "16px" }}>Bring farm freshness home.</h2>
          <p style={{ fontSize: "1.15rem", color: "rgba(255, 255, 255, 0.85)", marginBottom: "32px", lineHeight: "1.7" }}>
            Discover fresh dairy products made with care from farm to table. Experience glass-bottled morning milk, thick curd, and golden ghee.
          </p>
          <button onClick={onOpenTrial} className="btn btn-accent" style={{ padding: "16px 36px", fontSize: "1rem" }}>
            <span>Claim Free Sample Pack 🎁</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
