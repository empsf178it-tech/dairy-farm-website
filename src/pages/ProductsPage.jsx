import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Filter, Sparkles } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { key: "all", label: "All Products" },
    { key: "milk", label: "Fresh Milk" },
    { key: "cultured", label: "Cultured & Refreshment" },
    { key: "traditional", label: "Paneer & Bilona Ghee" }
  ];

  const filteredProducts = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.categoryKey === activeCategory);

  return (
    <div className="products-page">
      {/* HERO */}
      <section className="hero" style={{ minHeight: "55vh" }}>
        <img
          src="./src/assets/12.png"
          alt="Fresh glass milk bottles and dairy"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>

        <div className="container hero-content animate-fade-in" style={{ textAlign: "center", margin: "0 auto" }}>
          <span className="eyebrow eyebrow-dark">PURE · UNADULTERATED · FARM FRESH</span>
          <h1 className="hero-title">Dairy made for everyday moments.</h1>
          <p className="hero-text" style={{ margin: "0 auto" }}>
            Crafted from single-origin morning milk with traditional care, zero chemical preservatives, and eco-friendly packaging.
          </p>
        </div>
      </section>

      {/* PRODUCT COLLECTION & FILTER */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="container">
          {/* Category Filter Tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`btn ${activeCategory === cat.key ? "btn-primary" : "btn-outline"}`}
                style={{ padding: "10px 22px", fontSize: "0.88rem" }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid-products" style={{ marginBottom: "60px" }}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Custom Order Callout */}
          <div className="card" style={{ padding: "40px", backgroundColor: "var(--bg-alt)", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <h3 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>Looking for Daily Subscription or Custom Quantities?</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
              Get fresh morning milk and dairy delivered to your apartment or home on a flexible weekly schedule.
            </p>
            <Link to="/order" className="btn btn-accent">
              <span>Start Daily Order Enquiry</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
