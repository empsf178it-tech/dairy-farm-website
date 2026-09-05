import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Heart } from "lucide-react";
import LogoMark from "./LogoMark";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="brand-logo" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="./src/assets/48.png" alt="AAVINARA Emblem" style={{ width: "44px", height: "44px", objectFit: "contain", borderRadius: "50%" }} />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "#FFF", margin: 0 }}>AAVINARA</h3>
                <span className="brand-tagline" style={{ color: "#EBB842" }}>FARM FRESH DAIRY</span>
              </div>
            </Link>
            <p style={{ marginTop: "14px", fontStyle: "italic", color: "#EBB842" }}>
              "Freshness Starts at the Farm."
            </p>
            <p style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.88)", marginBottom: "16px" }}>
              Delivering single-origin farm-fresh milk, cultured curd, artisanal paneer & Bilona ghee straight from our pastures to your family home.
            </p>
            {/* Certified Heritage Badge Card */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "14px", 
              padding: "14px 16px", 
              background: "rgba(255, 255, 255, 0.05)", 
              borderRadius: "var(--radius-md)", 
              border: "1px solid rgba(235, 184, 66, 0.25)",
              marginTop: "16px"
            }}>
              <img
                src="./src/assets/52.png"
                alt="AAVINARA Single Origin Heritage Seal"
                style={{
                  width: "58px",
                  height: "58px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "2px solid rgba(235, 184, 66, 0.6)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                  flexShrink: 0
                }}
              />
              <div>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#EBB842", letterSpacing: "0.08em", textTransform: "uppercase", display: "block" }}>
                  ESTD 2026 · SINGLE ORIGIN
                </span>
                <h5 style={{ fontSize: "0.92rem", color: "#FFF", margin: "2px 0 2px 0", fontFamily: "var(--font-sans)", fontWeight: 600 }}>
                  Certified Organic Pasture
                </h5>
                <span style={{ fontSize: "0.76rem", color: "rgba(255, 255, 255, 0.72)", display: "block" }}>
                  100% Unadulterated & Traceable
                </span>
              </div>
            </div>
          </div>

          {/* Column 1 - Explore */}
          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><Link to="/farm">Our Farm</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/process">Our Process</Link></li>
              <li><Link to="/values">Our Values</Link></li>
            </ul>
          </div>

          {/* Column 2 - Discover */}
          <div className="footer-col">
            <h4>Discover</h4>
            <ul className="footer-links">
              <li><Link to="/journal">Journal</Link></li>
              <li><Link to="/values">Sustainability</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/order">Order Enquiry</Link></li>
            </ul>
          </div>

          {/* Column 3 - Products */}
          <div className="footer-col">
            <h4>Products</h4>
            <ul className="footer-links">
              <li><Link to="/products/fresh-milk">Fresh Milk</Link></li>
              <li><Link to="/products/curd">Thick Curd</Link></li>
              <li><Link to="/products/paneer">Soft Paneer</Link></li>
              <li><Link to="/products/ghee">Bilona Ghee</Link></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="footer-col">
            <h4>Stay Connected</h4>
            <p style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.88)", marginBottom: "12px" }}>
              Join the AAVINARA circle for morning farm updates, recipes & nutrition stories.
            </p>

            {subscribed ? (
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#EBB842", fontSize: "0.88rem", padding: "10px", background: "rgba(255,255,255,0.08)", borderRadius: "8px" }}>
                <CheckCircle2 size={18} />
                <span>Thank you! You're subscribed to farm news.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                />
                <button type="submit" className="btn btn-accent" style={{ padding: "12px 16px", borderRadius: "50%" }} title="Subscribe">
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
          <div>
            © 2026 AAVINARA Dairy Farm. All rights reserved. Tamil Nadu, India.
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <span>Single-Origin Farm</span>
            <span>·</span>
            <span>Zero Preservatives</span>
            <span>·</span>
            <span>Cold-Chain Delivered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
