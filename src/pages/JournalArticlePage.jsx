import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, CheckCircle2 } from "lucide-react";
import ArticleCard from "../components/ArticleCard";
import { JOURNAL_POSTS } from "../data/journal";

export default function JournalArticlePage() {
  const { slug } = useParams();
  const post = JOURNAL_POSTS.find((p) => p.slug === slug) || JOURNAL_POSTS[0];
  const relatedPosts = JOURNAL_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="journal-article-page" style={{ paddingTop: "110px", paddingBottom: "90px" }}>
      <div className="container">
        {/* Back Link & Meta Header */}
        <div style={{ marginBottom: "30px" }}>
          <Link to="/journal" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", color: "var(--primary-green)", fontWeight: 600, marginBottom: "20px" }}>
            <ArrowLeft size={16} /> Back to Journal
          </Link>

          <div style={{ display: "flex", gap: "16px", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "12px" }}>
            <span className="badge-tag" style={{ position: "static" }}>{post.category}</span>
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Calendar size={14} /> {post.date}</span>
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={14} /> {post.readTime}</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", marginBottom: "16px", maxWidth: "900px" }}>{post.title}</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", fontStyle: "italic", maxWidth: "800px", marginBottom: "24px" }}>
            Written by {post.author}
          </p>
        </div>

        {/* Hero Image */}
        <div style={{ width: "100%", height: "480px", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "50px", boxShadow: "var(--shadow-md)" }}>
          <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Main Article Grid (Sticky TOC on Desktop) */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "60px", marginBottom: "80px" }}>
          {/* Article Body */}
          <div>
            {/* Mobile TOC */}
            {post.toc && (
              <div className="card" style={{ padding: "20px", marginBottom: "30px", backgroundColor: "var(--bg-alt)" }}>
                <h4 style={{ fontSize: "1rem", marginBottom: "10px" }}>Table of Contents</h4>
                {post.toc.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="toc-link">
                    • {item.title}
                  </a>
                ))}
              </div>
            )}

            {/* Article Content Render */}
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "var(--text-primary)" }}
            />

            {/* Share / Bookmark Row */}
            <div style={{ marginTop: "50px", paddingTop: "24px", borderTop: "1px solid var(--border-light)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={handleShare} className="btn btn-outline" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
                  <Share2 size={16} />
                  <span>{copied ? "Link Copied!" : "Share Article"}</span>
                </button>
              </div>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>AAVINARA Farm Journal</span>
            </div>
          </div>

          {/* Desktop Sticky Sidebar / TOC */}
          <aside style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div className="sticky-toc">
              <h4 style={{ fontSize: "1.05rem", marginBottom: "16px" }}>Table of Contents</h4>
              {post.toc && post.toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="toc-link">
                  • {item.title}
                </a>
              ))}

              <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid var(--border-light)" }}>
                <h5 style={{ fontSize: "0.9rem", marginBottom: "8px" }}>About the Author</h5>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>{post.author}</p>
              </div>
            </div>
          </aside>
        </div>

        {/* RELATED ARTICLES */}
        <section style={{ paddingTop: "50px", borderTop: "1px solid var(--border-light)" }}>
          <div className="section-header left-aligned" style={{ marginBottom: "30px" }}>
            <span className="eyebrow">CONTINUE READING</span>
            <h2>Related Farm Stories</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "28px" }}>
            {relatedPosts.map((rel) => (
              <ArticleCard key={rel.id} post={rel} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
