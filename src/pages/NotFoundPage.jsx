import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="not-found-page" style={{ paddingTop: "140px", paddingBottom: "100px", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: "600px" }}>
        <div style={{ position: "relative", width: "180px", height: "180px", margin: "0 auto 30px auto", borderRadius: "50%", overflow: "hidden", border: "4px solid var(--accent-yellow)", boxShadow: "var(--shadow-lg)" }}>
          <img
            src="/src/assets/47.png"
            alt="Cow on pasture 404 Illustration"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <span className="eyebrow eyebrow-yellow">404 ERROR</span>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "16px" }}>
          Looks like this page wandered off the farm.
        </h1>
        <p className="lead-text" style={{ marginBottom: "32px" }}>
          The page you're looking for could not be found or has moved to a different pasture.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <Link to="/" className="btn btn-primary">
            <Home size={18} />
            <span>Back to Home</span>
          </Link>
          <Link to="/products" className="btn btn-outline">
            <Compass size={18} />
            <span>Explore Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
