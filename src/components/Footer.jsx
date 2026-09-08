import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const InstagramIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const WhatsappIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const XIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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

  const socialLinks = [
    { name: "Instagram", icon: InstagramIcon, url: "https://instagram.com" },
    { name: "Facebook", icon: FacebookIcon, url: "https://facebook.com" },
    { name: "YouTube", icon: YoutubeIcon, url: "https://youtube.com" },
    { name: "WhatsApp", icon: WhatsappIcon, url: "https://wa.me/919876543210" },
    { name: "X", icon: XIcon, url: "https://x.com" }
  ];

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

            {/* Social Icons Bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "16px", marginBottom: "16px" }}>
              {socialLinks.map((s) => {
                const IconComponent = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      color: "#EBB842",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(235, 184, 66, 0.3)",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <IconComponent size={16} color="#EBB842" />
                  </a>
                );
              })}
            </div>

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
