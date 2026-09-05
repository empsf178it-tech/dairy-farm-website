import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export default function ArticleCard({ post }) {
  return (
    <article className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ position: "relative", height: "220px", overflow: "hidden", backgroundColor: "var(--bg-alt)" }}>
        <img
          src={post.image}
          alt={post.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
          loading="lazy"
        />
        <span className="badge-tag" style={{ top: "12px", left: "12px" }}>{post.category}</span>
      </div>

      <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <div style={{ display: "flex", gap: "14px", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "10px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Calendar size={13} /> {post.date}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Clock size={13} /> {post.readTime}
          </span>
        </div>

        <h3 style={{ fontSize: "1.3rem", marginBottom: "10px", lineHeight: "1.3" }}>
          <Link to={`/journal/${post.slug}`} style={{ color: "inherit" }}>
            {post.title}
          </Link>
        </h3>

        <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "20px", flexGrow: 1, lineHeight: "1.6" }}>
          {post.excerpt}
        </p>

        <div style={{ paddingTop: "14px", borderTop: "1px solid var(--border-light)" }}>
          <Link
            to={`/journal/${post.slug}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-sans)",
              fontSize: "0.88rem",
              fontWeight: "700",
              color: "var(--primary-green)"
            }}
          >
            <span>Read Article</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
