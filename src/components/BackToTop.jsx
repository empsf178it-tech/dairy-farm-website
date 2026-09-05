import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top of page"
      className="back-to-top-btn"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 999,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        backgroundColor: "var(--primary-green-dark)",
        color: "var(--accent-yellow)",
        border: "2px solid var(--accent-yellow)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all var(--transition-normal)",
        animation: "fadeIn 0.3s ease"
      }}
      title="Back to Top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
