import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Truck } from "lucide-react";
import { PRODUCTS } from "../data/products";

export default function OrderPage() {
  const [searchParams] = useSearchParams();
  const preselectedProductParam = searchParams.get("product") || PRODUCTS[0].name;

  const [selectedProduct, setSelectedProduct] = useState(
    PRODUCTS.find((p) => p.name === preselectedProductParam) || PRODUCTS[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    deliveryArea: "Coimbatore Central",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const found = PRODUCTS.find((p) => p.name === preselectedProductParam);
    if (found) setSelectedProduct(found);
  }, [preselectedProductParam]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="order-page" style={{ paddingTop: "90px", paddingBottom: "70px" }}>
      <div className="container">
        {/* HERO HEADER & SUBSCRIPTION BANNER */}
        <div className="order-hero-banner">
          <img src="./src/assets/11.png" alt="Subscription Banner" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(27,59,43,0.78) 0%, rgba(27,59,43,0.92) 100%)" }}></div>
          <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "24px 16px", maxWidth: "700px" }}>
            <span className="eyebrow eyebrow-dark">DOORSTEP FRESHNESS</span>
            <h1 style={{ fontSize: "2.2rem", color: "#FFF", marginBottom: "8px" }}>Fresh dairy, delivered with care.</h1>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.98rem", margin: 0 }}>
              Place your subscription enquiry for morning glass-bottled milk, curd, paneer, and Bilona ghee.
            </p>
          </div>
        </div>

        {/* ORDER GRID */}
        <div className="order-grid">
          {/* Form Side */}
          <div className="card order-form-card">
            <h2 style={{ fontSize: "1.5rem", marginBottom: "6px" }}>Order Subscription Enquiry</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginBottom: "24px" }}>
              Our delivery team will confirm your slot and start morning doorstep drops within 24 hours.
            </p>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "30px 16px", background: "var(--primary-green-subtle)", borderRadius: "var(--radius-md)" }}>
                <CheckCircle2 size={48} color="var(--primary-green)" style={{ margin: "0 auto 14px auto" }} />
                <h3 style={{ fontSize: "1.4rem", marginBottom: "8px" }}>Enquiry Submitted Successfully!</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
                  Thank you, <strong>{formData.name}</strong>. We have received your order request for <strong>{quantity}x {selectedProduct.name}</strong>. Our logistics representative will call <strong>{formData.phone}</strong> shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-outline">
                  Place Another Order
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-row-2col">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="yourname@example.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Select Product *</label>
                  <select
                    className="form-select"
                    value={selectedProduct.name}
                    onChange={(e) => {
                      const p = PRODUCTS.find((prod) => prod.name === e.target.value);
                      if (p) setSelectedProduct(p);
                    }}
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.category})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-row-2col">
                  <div className="form-group">
                    <label className="form-label">Daily Quantity</label>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="btn btn-outline"
                        style={{ padding: "8px 16px" }}
                      >
                        -
                      </button>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", fontWeight: 700, minWidth: "26px", textAlign: "center" }}>
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="btn btn-outline"
                        style={{ padding: "8px 16px" }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Delivery Area / City *</label>
                    <select
                      className="form-select"
                      value={formData.deliveryArea}
                      onChange={(e) => setFormData({ ...formData, deliveryArea: e.target.value })}
                    >
                      <option value="Coimbatore Central">Coimbatore Central</option>
                      <option value="RS Puram & Race Course">RS Puram & Race Course</option>
                      <option value="Peelamedu & Saravanampatti">Peelamedu & Saravanampatti</option>
                      <option value="Chennai Metro Region">Chennai Metro Region</option>
                      <option value="Other Area in Tamil Nadu">Other Area in Tamil Nadu</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Special Delivery Instructions / Notes</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Leave bottle on front door hook before 6:30 AM"
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-accent" style={{ width: "100%", padding: "14px", fontSize: "1rem" }}>
                  <span>Submit Enquiry →</span>
                </button>
              </form>
            )}
          </div>

          {/* Selected Product Summary Side Panel */}
          <aside className="card order-summary-card">
            <h3 style={{ fontSize: "1.25rem", marginBottom: "14px" }}>Order Summary Side Panel</h3>

            <div style={{ position: "relative", width: "100%", height: "180px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "14px" }}>
              <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <span className="badge-tag" style={{ top: "10px", left: "10px" }}>{selectedProduct.category}</span>
            </div>

            <h4 style={{ fontSize: "1.3rem", marginBottom: "4px" }}>{selectedProduct.name}</h4>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "14px", lineHeight: "1.4" }}>
              {selectedProduct.shortDesc}
            </p>

            <div style={{ padding: "14px", background: "var(--bg-card)", borderRadius: "var(--radius-sm)", marginBottom: "18px", border: "1px solid var(--border-light)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", marginBottom: "6px" }}>
                <span>Unit Price:</span>
                <strong>{selectedProduct.priceDisplay}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", marginBottom: "6px" }}>
                <span>Daily Quantity:</span>
                <strong>{quantity} Pack(s)</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", color: "var(--primary-green)", fontWeight: 700, paddingTop: "8px", borderTop: "1px dashed var(--border-light)" }}>
                <span>Estimated Monthly Drops:</span>
                <span>{quantity * 30} Bottles</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "18px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Truck size={15} color="var(--primary-green)" style={{ flexShrink: 0 }} />
                <span>Doorstep delivery before 6:30 AM</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <ShieldCheck size={15} color="var(--primary-green)" style={{ flexShrink: 0 }} />
                <span>Glass bottle return program included</span>
              </div>
            </div>

            {/* Badges */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", paddingTop: "14px", borderTop: "1px solid var(--border-light)" }}>
              <div style={{ textAlign: "center" }}>
                <img src="./src/assets/49.png" alt="Purity Guarantee Badge" style={{ width: "100%", height: "80px", objectFit: "cover", borderRadius: "var(--radius-sm)" }} />
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--text-secondary)", display: "block", marginTop: "4px" }}>100% Purity Certified</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <img src="./src/assets/54.png" alt="Electric Fleet Delivery" style={{ width: "100%", height: "80px", objectFit: "cover", borderRadius: "var(--radius-sm)" }} />
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--text-secondary)", display: "block", marginTop: "4px" }}>Eco EV Cold Fleet</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
