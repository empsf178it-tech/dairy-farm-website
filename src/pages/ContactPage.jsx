import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="hero" style={{ minHeight: "50vh" }}>
        <img
          src="/src/assets/10.png"
          alt="AAVINARA Farm sunrise view"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>

        <div className="container hero-content animate-fade-in" style={{ textAlign: "center", margin: "0 auto" }}>
          <span className="eyebrow eyebrow-dark">GET IN TOUCH</span>
          <h1 className="hero-title">We'd love to hear from you.</h1>
          <p className="hero-text" style={{ margin: "0 auto" }}>
            Whether you have questions about our farm practices, daily milk delivery, or bulk orders, our farm team is here to assist.
          </p>
        </div>
      </section>

      {/* FORM & CONTACT INFO */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="container">
          <div className="split-section" style={{ alignItems: "flex-start" }}>
            {/* Contact Form */}
            <div className="card" style={{ padding: "40px" }}>
              <h2 style={{ fontSize: "1.8rem", marginBottom: "8px" }}>Send Us a Message</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", marginBottom: "28px" }}>
                Fill in your details below and our farm representative will respond within 24 hours.
              </p>

              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 20px", background: "var(--primary-green-subtle)", borderRadius: "var(--radius-md)" }}>
                  <CheckCircle2 size={48} color="var(--primary-green)" style={{ margin: "0 auto 16px auto" }} />
                  <h3 style={{ fontSize: "1.4rem", marginBottom: "8px" }}>Message Received!</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                    Thank you for reaching out to AAVINARA. We have received your message and will respond shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: "20px" }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      className="form-input"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="ramesh@example.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

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
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <select
                      className="form-select"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Daily Milk Subscription">Daily Milk Subscription</option>
                      <option value="Bulk / Apartment Order">Bulk / Apartment Order</option>
                      <option value="Farm Visit Request">Farm Visit Request</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="How can we help you today?"
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "16px" }}>
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <span className="eyebrow">AAVINARA HEADQUARTERS</span>
              <h2 style={{ marginBottom: "20px" }}>Contact Information</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "40px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--primary-green-subtle)", color: "var(--primary-green)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>AAVINARA Eco Farm</h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                      Coimbatore Pasture Corridor, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--primary-green-subtle)", color: "var(--primary-green)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>Email Support</h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                      hello@aavinara.example
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--primary-green-subtle)", color: "var(--primary-green)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>Customer Care Hotline</h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                      +91 XXXXX XXXXX (Mon - Sat, 6:00 AM - 7:00 PM)
                    </p>
                  </div>
                </div>
              </div>

              {/* Farm Visit Note Card */}
              <div className="card" style={{ padding: "0", backgroundColor: "var(--bg-alt)", overflow: "hidden" }}>
                <img src="/src/assets/53.png" alt="AAVINARA Farm Map Location" style={{ width: "100%", height: "160px", objectFit: "cover" }} />
                <div style={{ padding: "20px" }}>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "8px" }}>Interested in a Farm Tour?</h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                    We welcome families and schools to observe morning pasture grazing and modern hygienic milking on scheduled weekends. Select "Farm Visit Request" in the form to reserve a slot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
