import React, { useState } from "react";
import { Star, ChevronDown, ChevronUp, Quote, CheckCircle2, MessageSquare } from "lucide-react";

export default function ReviewsAndFAQ() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [reviewFilter, setReviewFilter] = useState("All");

  const reviews = [
    {
      id: 1,
      name: "Priya S. & Family",
      location: "Coimbatore",
      rating: 5,
      product: "Fresh Whole Milk",
      date: "Verified Subscriber (9 Mos)",
      comment: "The difference in taste is unbelievable. You can actually see the thick cream layer (malai) when boiled. Plus, no plastic pouches to throw away every morning!"
    },
    {
      id: 2,
      name: "Ramesh Kannan",
      location: "Chennai",
      rating: 5,
      product: "Golden Bilona Ghee",
      date: "Verified Buyer",
      comment: "Authentic granular bilona ghee just like my grandmother used to make on our ancestral village hearth. The aroma fills the whole kitchen!"
    },
    {
      id: 3,
      name: "Anitha Venkatesh",
      location: "Tiruppur",
      rating: 5,
      product: "Thick Set Curd",
      date: "Verified Subscriber (1 Yr)",
      comment: "Our kids refuse to eat any other curd now. Thick, naturally set without any sourness or watery separation. Absolutely worth every rupee."
    }
  ];

  const faqs = [
    {
      q: "How does the daily morning glass bottle delivery work?",
      a: "Our cold-chain delivery team leaves chilled glass bottles in your insulated doorstep bag by 6:30 AM every morning. On your next delivery, simply leave the rinsed empty glass bottle in the bag for our team to collect, sterilize, and reuse!"
    },
    {
      q: "What makes AAVINARA pasteurization gentle compared to UHT milk?",
      a: "We use Low-Temperature Long-Time (LTLT) pasteurization at 63°C for 30 minutes. This destroys all pathogenic bacteria while protecting heat-sensitive vitamins, immunoglobulins, and digestive enzymes intact."
    },
    {
      q: "Can I pause or change my daily milk quantity when traveling?",
      a: "Yes! You can pause, resume, or adjust your daily volume anytime via our Whatsapp assistant or account portal with just 1-click before 8:00 PM the previous evening."
    },
    {
      q: "Are synthetic growth hormones or antibiotics used on your cows?",
      a: "Never. We enforce a strict zero-rBST hormone policy and zero preventive antibiotics. If a cow requires veterinary care, her milk is strictly isolated until complete medical recovery."
    }
  ];

  const filteredReviews = reviewFilter === "All"
    ? reviews
    : reviews.filter((r) => r.product === reviewFilter);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      {/* 1. SUBSCRIBER REVIEWS */}
      <div>
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 30px auto" }}>
          <span className="eyebrow eyebrow-yellow" style={{ marginBottom: "12px" }}>
            <Star size={14} fill="var(--warm-brown)" /> VERIFIED FAMILY REVIEWS
          </span>
          <h3 style={{ fontSize: "2.1rem", marginBottom: "10px" }}>Loved by 5,000+ Daily Households</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
            Read real experiences from families who switched to single-origin glass-bottled dairy.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
          {["All", "Fresh Whole Milk", "Golden Bilona Ghee", "Thick Set Curd"].map((cat) => (
            <button
              key={cat}
              onClick={() => setReviewFilter(cat)}
              style={{
                padding: "6px 16px",
                borderRadius: "var(--radius-full)",
                fontSize: "0.8rem",
                fontWeight: 600,
                border: reviewFilter === cat ? "1.5px solid var(--primary-green)" : "1px solid var(--border-light)",
                background: reviewFilter === cat ? "var(--primary-green-subtle)" : "var(--bg-card)",
                color: reviewFilter === cat ? "var(--primary-green)" : "var(--text-secondary)",
                cursor: "pointer"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Review Cards Grid */}
        <div className="grid-journal">
          {filteredReviews.map((rev) => (
            <div key={rev.id} className="card" style={{ padding: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", gap: "4px", color: "var(--accent-yellow)", marginBottom: "14px" }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--accent-yellow)" />
                  ))}
                </div>
                <p style={{ fontSize: "0.95rem", color: "var(--text-primary)", lineHeight: "1.6", fontStyle: "italic", marginBottom: "20px" }}>
                  "{rev.comment}"
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--primary-green)" }}>{rev.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{rev.location} · {rev.product}</div>
                </div>
                <div style={{ fontSize: "0.72rem", color: "#2E7D32", background: "rgba(46, 125, 50, 0.1)", padding: "3px 8px", borderRadius: "var(--radius-sm)", fontWeight: 700 }}>
                  {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. INTERACTIVE FAQ ACCORDION */}
      <div className="card" style={{ padding: "36px 30px", background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-light)" }}>
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 30px auto" }}>
          <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
          <h3 style={{ fontSize: "2rem", marginBottom: "10px" }}>Everything You Need to Know</h3>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "800px", margin: "0 auto" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
              style={{
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-light)",
                background: activeFaq === idx ? "var(--bg-alt)" : "var(--bg-main)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.25s ease"
              }}
            >
              <div style={{ padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 700, fontSize: "0.98rem", color: "var(--primary-green)" }}>
                <span>{faq.q}</span>
                {activeFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {activeFaq === idx && (
                <div style={{ padding: "0 22px 20px 22px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: "1.65" }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
