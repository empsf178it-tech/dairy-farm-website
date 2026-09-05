import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import { JOURNAL_POSTS } from "../data/journal";

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Farm", "Dairy", "Animal Care", "Sustainability"];

  const filteredPosts = activeCategory === "All"
    ? JOURNAL_POSTS
    : JOURNAL_POSTS.filter((post) => post.category === activeCategory);

  return (
    <div className="journal-page">
      {/* HERO */}
      <section className="hero" style={{ minHeight: "55vh" }}>
        <img
          src="/src/assets/9.png"
          alt="Dairy farm journal reading desk"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>

        <div className="container hero-content animate-fade-in" style={{ textAlign: "center", margin: "0 auto" }}>
          <span className="eyebrow eyebrow-dark">EDITORIAL & DISPATCHES</span>
          <h1 className="hero-title">Stories from our farm.</h1>
          <p className="hero-text" style={{ margin: "0 auto" }}>
            In-depth guides, farm science, animal welfare insights, and traditional dairy recipes from our team.
          </p>
        </div>
      </section>

      {/* FILTER & GRID */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="container">
          {/* Categories */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "40px" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn ${activeCategory === cat ? "btn-primary" : "btn-outline"}`}
                style={{ padding: "8px 20px", fontSize: "0.88rem" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured First Post */}
          {activeCategory === "All" && JOURNAL_POSTS.length > 0 && (
            <div className="card split-section" style={{ gap: "0", marginBottom: "50px", overflow: "hidden" }}>
              <div style={{ position: "relative", minHeight: "280px" }}>
                <img src={JOURNAL_POSTS[0].image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <span className="badge-tag" style={{ top: "16px", left: "16px" }}>Featured Story</span>
              </div>
              <div style={{ padding: "30px 24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--warm-brown)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
                  {JOURNAL_POSTS[0].category} · {JOURNAL_POSTS[0].date}
                </span>
                <h2 style={{ fontSize: "1.8rem", marginBottom: "14px", lineHeight: "1.25" }}>
                  <Link to={`/journal/${JOURNAL_POSTS[0].slug}`} style={{ color: "inherit" }}>
                    {JOURNAL_POSTS[0].title}
                  </Link>
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "24px" }}>
                  {JOURNAL_POSTS[0].excerpt}
                </p>
                <Link to={`/journal/${JOURNAL_POSTS[0].slug}`} className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                  <span>Read Story</span>
                </Link>
              </div>
            </div>
          )}

          {/* Grid of Articles */}
          <div className="grid-journal">
            {filteredPosts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
