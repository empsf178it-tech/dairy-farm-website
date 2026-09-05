import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Truck, Milk, Sparkles } from "lucide-react";
import { PRODUCTS } from "../data/products";

export default function OrderPage() {
  const [searchParams] = useSearchParams();
  const preselectedProductParam = searchParams.get("product") || PRODUCTS[0].name;
  const preselectedSizeParam = searchParams.get("size") || PRODUCTS[0].sizes[0];

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
    <div className="order-page" style={{ paddingTop: "110px", paddingBottom: "90px" }}>
      <div className="container">
        {/* HERO HEADER & SUBSCRIPTION BANNER */}
        <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "40px", color: "#FFF", minHeight: "220px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="./src/assets/11.png" alt="Subscription Banner" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(27,59,43,0.75) 0%, rgba(27,59,43,0.9) 100%)" }}></div>
          <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "30px 20px", maxWidth: "700px" }}>
            <span className="eyebrow eyebrow-dark">DOORSTEP FRESHNESS</span>
            <h1 style={{ fontSize: "2.5rem", color: "#FFF", marginBottom: "8px" }}>Fresh dairy, delivered with care.</h1>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.05rem" }}>
              Place your subscription enquiry for morning glass-bottled milk, curd, paneer, and Bilona ghee.
            </p>
          </div>
        </div>

        {/* ORDER GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "50px", alignItems: "flex-start" }}>
          {/* Form Side */}
          <div className="card" style={{ padding: "40px" }}>
            <h2 style={{ fontSize: "1.6rem", marginBottom: "8px" }}>Order Subscription Enquiry</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginBottom: "28px" }}>
              Our delivery team will confirm your slot and start morning doorstep drops within 24 hours.
            </p>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 20px", background: "var(--primary-green-subtle)", borderRadius: "var(--radius-md)" }}>
                <CheckCircle2 size={52} color="var(--primary-green)" style={{ margin: "0 auto 16px auto" }} />
                <h3 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>Enquiry Submitted Successfully!</h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
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

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
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

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div className="form-group">
                    <label className="form-label">Daily Quantity</label>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="btn btn-outline"
                        style={{ padding: "10px 18px" }}
                      >
                        -
                      </button>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.2rem", fontWeight: 700, minWidth: "30px", textAlign: "center" }}>
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="btn btn-outline"
                        style={{ padding: "10px 18px" }}
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

                <button type="submit" className="btn btn-accent" style={{ width: "100%", padding: "16px", fontSize: "1.05rem" }}>
                  <span>Submit Enquiry →</span>
                </button>
              </form>
            )}
          </div>

          {/* Selected Product Summary Side Panel */}
          <aside className="card" style={{ padding: "30px", backgroundColor: "var(--bg-alt)" }}>
            <h3 style={{ fontSize: "1.3rem", marginBottom: "16px" }}>Order Summary Side Panel</h3>

            <div style={{ position: "relative", width: "100%", height: "200px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "16px" }}>
              <img src={selectedProduct.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <span className="badge-tag" style={{ top: "10px", left: "10px" }}>{selectedProduct.category}</span>
            </div>

            <h4 style={{ fontSize: "1.4rem", marginBottom: "6px" }}>{selectedProduct.name}</h4>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
              {selectedProduct.shortDesc}
            </p>

            <div style={{ padding: "16px", background: "var(--bg-card)", borderRadius: "var(--radius-sm)", marginBottom: "20px", border: "1px solid var(--border-light)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", marginBottom: "8px" }}>
                <span>Unit Price:</span>
                <strong>{selectedProduct.priceDisplay}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", marginBottom: "8px" }}>
                <span>Daily Quantity:</span>
                <strong>{quantity} Pack(s)</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "var(--primary-green)", fontWeight: 700, paddingTop: "8px", borderTop: "1px dashed var(--border-light)" }}>
                <span>Estimated Monthly Drops:</span>
                <span>{quantity * 30} Bottles</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Truck size={16} color="var(--primary-green)" />
                <span>Doorstep delivery before 6:30 AM</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <ShieldCheck size={16} color="var(--primary-green)" />
                <span>Glass bottle return program included</span>
              </div>
            </div>

            {/* Badges 49.png & 54.png */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", paddingTop: "16px", borderTop: "1px solid var(--border-light)" }}>
              <div style={{ textAlign: "center" }}>
                <img src="./src/assets/49.png" alt="Purity Guarantee Badge" style={{ width: "100%", height: "90px", objectFit: "cover", borderRadius: "var(--radius-sm)" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", display: "block", marginTop: "4px" }}>100% Purity Certified</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <img src="./src/assets/54.png" alt="Electric Fleet Delivery" style={{ width: "100%", height: "90px", objectFit: "cover", borderRadius: "var(--radius-sm)" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", display: "block", marginTop: "4px" }}>Eco EV Cold Fleet</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
