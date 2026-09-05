import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import LogoMark from "./LogoMark";

export default function Navbar({ onOpenTrial }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Farm", path: "/farm" },
    { name: "Products", path: "/products" },
    { name: "Our Process", path: "/process" },
    { name: "Our Values", path: "/values" },
    { name: "Journal", path: "/journal" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container navbar-inner">
          <Link to="/" className="brand-logo" aria-label="AAVINARA Homepage">
            <img src="/src/assets/48.png" alt="AAVINARA Emblem" style={{ width: "40px", height: "40px", objectFit: "contain", borderRadius: "50%" }} />
            <div className="brand-text">
              <span className="brand-name">AAVINARA</span>
              <span className="brand-tagline">FARM FRESH DAIRY</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav>
            <ul className="nav-menu">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    end={link.path === "/"}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right CTA & Mobile Hamburger Toggle */}
          <div className="nav-actions">
            {onOpenTrial && (
              <button
                onClick={onOpenTrial}
                className="btn btn-accent nav-trial-btn"
                style={{ padding: "8px 16px", fontSize: "0.82rem" }}
              >
                <span>Trial Pack 🎁</span>
              </button>
            )}

            <Link to="/order" className="btn btn-primary nav-cta-btn">
              <span>Order Fresh</span>
              <ArrowRight size={14} />
            </Link>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-overlay ${mobileMenuOpen ? "open" : ""}`} onClick={() => setMobileMenuOpen(false)} />
      <aside className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
          <div className="brand-logo" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/src/assets/48.png" alt="AAVINARA Emblem" style={{ width: "36px", height: "36px", objectFit: "contain", borderRadius: "50%" }} />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span className="brand-name" style={{ fontSize: "1.4rem" }}>AAVINARA</span>
              <span className="brand-tagline">FARM FRESH DAIRY</span>
            </div>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} style={{ color: "var(--primary-green)", padding: "4px" }}>
            <X size={24} />
          </button>
        </div>

        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "18px", marginBottom: "32px" }}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                style={{ fontSize: "1.1rem", display: "block" }}
                end={link.path === "/"}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "auto", paddingTop: "20px", borderTop: "1px solid var(--border-light)" }}>
          <Link to="/order" className="btn btn-accent" style={{ width: "100%", justifyContent: "center" }}>
            <span>Order Fresh Now</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </aside>
    </>
  );
}
