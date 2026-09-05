import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, Droplets, Thermometer, Box, PackageCheck, Truck } from "lucide-react";
import { PRODUCTS } from "../data/products";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find product by slug or default to 'fresh-milk'
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const journeySteps = [
    { num: "01", title: "Pasture Milking", desc: "Collected warm at dawn from free-grazing cows." },
    { num: "02", title: "15-Min Chilling", desc: "Rapidly chilled to 4°C to preserve natural enzymes." },
    { num: "03", title: "24-Point Lab Test", desc: "Lab checked for zero adulterants, fat & protein density." },
    { num: "04", title: "Sterile Glass Bottling", desc: "Filled in steam-sterilized glass bottles & sealed." }
  ];

  return (
    <div className="product-detail-page" style={{ paddingTop: "120px", paddingBottom: "90px" }}>
      <div className="container">
        {/* Breadcrumbs */}
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "30px" }}>
          <Link to="/" style={{ color: "inherit" }}>Home</Link> /{" "}
          <Link to="/products" style={{ color: "inherit" }}>Products</Link> /{" "}
          <span style={{ color: "var(--primary-green)", fontWeight: 600 }}>{product.name}</span>
        </div>

        {/* Main Product Layout */}
        <div className="split-section" style={{ gap: "40px", marginBottom: "80px" }}>
          {/* Left Column - Gallery */}
          <div>
            <div style={{ position: "relative", width: "100%", height: "380px", borderRadius: "var(--radius-lg)", overflow: "hidden", backgroundColor: "var(--bg-alt)", marginBottom: "16px", border: "1px solid var(--border-light)" }}>
              <img
                src={selectedImage || product.image}
                alt={product.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <span className="badge-tag" style={{ top: "16px", left: "16px", fontSize: "0.8rem", padding: "6px 14px" }}>
                {product.category}
              </span>
            </div>

            {/* Thumbnail Row */}
            {product.gallery && product.gallery.length > 1 && (
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {product.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "var(--radius-sm)",
                      overflow: "hidden",
                      border: selectedImage === imgUrl ? "2px solid var(--primary-green)" : "1px solid var(--border-light)",
                      padding: 0
                    }}
                  >
                    <img src={imgUrl} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Product Meta */}
          <div>
            <span className="eyebrow">FRESH DAIRY</span>
            <h1 style={{ fontSize: "2.4rem", marginBottom: "12px" }}>{product.name}</h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", fontWeight: 700, color: "var(--warm-brown)", marginBottom: "18px" }}>
              {product.priceDisplay}
            </p>

            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "28px" }}>
              {product.description}
            </p>

            {/* Size Selector */}
            {product.sizes && (
              <div style={{ marginBottom: "28px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px", color: "var(--text-primary)" }}>
                  Available Sizes:
                </label>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      style={{
                        padding: "10px 18px",
                        borderRadius: "var(--radius-full)",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        border: selectedSize === sz ? "2px solid var(--primary-green)" : "1px solid var(--border-light)",
                        backgroundColor: selectedSize === sz ? "var(--primary-green-subtle)" : "var(--bg-card)",
                        color: selectedSize === sz ? "var(--primary-green)" : "var(--text-primary)"
                      }}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Details Table */}
            <div style={{ background: "var(--bg-alt)", padding: "20px", borderRadius: "var(--radius-md)", marginBottom: "32px", border: "1px solid var(--border-light)" }}>
              <div className="grid-metrics" style={{ gap: "12px", fontSize: "0.9rem" }}>
                <div><strong>Source:</strong> {product.source}</div>
                <div><strong>Type:</strong> {product.type}</div>
                <div><strong>Storage:</strong> {product.storage}</div>
                <div><strong>Shelf Life:</strong> {product.shelfLife}</div>
              </div>
            </div>

            {/* CTA */}
            <Link
              to={`/order?product=${encodeURIComponent(product.name)}&size=${encodeURIComponent(selectedSize)}`}
              className="btn btn-accent"
              style={{ width: "100%", padding: "16px 28px", fontSize: "1.05rem" }}
            >
              <span>Order Fresh →</span>
            </Link>
          </div>
        </div>

        {/* WHY YOU'LL LOVE IT */}
        <section style={{ marginBottom: "80px" }}>
          <div className="section-header">
            <span className="eyebrow eyebrow-yellow">PURE ADVANTAGES</span>
            <h2>Why You'll Love It</h2>
            <p className="lead-text">4 promises that make AAVINARA dairy standard-setting.</p>
          </div>

          <div className="grid-features">
            {[
              { icon: <Sparkles size={24} />, title: "Farm Fresh", desc: "Chilled immediately at parlour and delivered within hours of morning yield." },
              { icon: <Heart size={24} />, title: "Carefully Handled", desc: "No high-pressure homogenizers or chemical thickeners; natural milk intact." },
              { icon: <ShieldCheck size={24} />, title: "Quality Checked", desc: "Every morning batch lab-tested for fat, density, and zero antibiotic residues." },
              { icon: <Droplets size={24} />, title: "Farm Sourced", desc: "100% single-origin milk from our free-grazing healthy cows in Tamil Nadu." }
            ].map((item, idx) => (
              <div key={idx} className="card" style={{ padding: "28px" }}>
                <div style={{ color: "var(--primary-green)", marginBottom: "14px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FROM FARM TO BOTTLE JOURNEY */}
        <section style={{ backgroundColor: "var(--bg-alt)", padding: "50px 30px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-light)", marginBottom: "60px" }}>
          <div className="section-header">
            <span className="eyebrow">PRODUCTION JOURNEY</span>
            <h2>From Farm to Bottle</h2>
            <p className="lead-text">Visualizing how fresh milk travels to your glass.</p>
          </div>

          <div className="grid-features">
            {journeySteps.map((step) => (
              <div key={step.num} style={{ background: "var(--bg-card)", padding: "24px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--accent-yellow)", display: "block", marginBottom: "8px" }}>
                  {step.num}
                </span>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "6px" }}>{step.title}</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VISUAL INSPECTION & RECIPE PREVIEW */}
        <section className="grid-features" style={{ gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
          <div className="card" style={{ padding: "0", overflow: "hidden" }}>
            <img src="/src/assets/51.png" alt="Packaging Inspection & Quality Seal" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
            <div style={{ padding: "24px" }}>
              <span className="eyebrow">QUALITY ASSURANCE</span>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Steam-Sterilized Glass Packaging</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                Every bottle undergoes multi-stage steam rinsing and vacuum-sealing for zero chemical transfer.
              </p>
            </div>
          </div>

          <div className="card" style={{ padding: "0", overflow: "hidden" }}>
            <img src="/src/assets/50.png" alt="Farm Kitchen Recipe Preview" style={{ width: "100%", height: "220px", objectFit: "cover" }} />
            <div style={{ padding: "24px" }}>
              <span className="eyebrow">FARM KITCHEN</span>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Artisanal Recipe Pairings</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                Rich in natural cream, ideal for traditional payasam, slow-simmered filter coffee, and probiotic curd.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
