import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ExternalLink, Share2, Clock } from "lucide-react";

const InstagramIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const WhatsappIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const XIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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

  const socialLinks = [
    { name: "Instagram", icon: InstagramIcon, color: "#E1306C", bg: "rgba(225, 48, 108, 0.08)", border: "rgba(225, 48, 108, 0.25)", handle: "@aavinara.farm", url: "https://instagram.com" },
    { name: "Facebook", icon: FacebookIcon, color: "#1877F2", bg: "rgba(24, 119, 242, 0.08)", border: "rgba(24, 119, 242, 0.25)", handle: "AAVINARA Dairy Farm", url: "https://facebook.com" },
    { name: "YouTube", icon: YoutubeIcon, color: "#FF0000", bg: "rgba(255, 0, 0, 0.08)", border: "rgba(255, 0, 0, 0.25)", handle: "AAVINARA Stories", url: "https://youtube.com" },
    { name: "WhatsApp", icon: WhatsappIcon, color: "#25D366", bg: "rgba(37, 211, 102, 0.08)", border: "rgba(37, 211, 102, 0.25)", handle: "+91 98765 43210", url: "https://wa.me/919876543210" },
    { name: "X", icon: XIcon, color: "#000000", bg: "rgba(0, 0, 0, 0.06)", border: "rgba(0, 0, 0, 0.2)", handle: "@aavinara", url: "https://x.com" }
  ];

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="hero" style={{ minHeight: "50vh" }}>
        <img
          src="./src/assets/10.png"
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

            {/* Contact Information & Social Links */}
            <div>
              <span className="eyebrow">AAVINARA HEADQUARTERS</span>
              <h2 style={{ marginBottom: "20px" }}>Contact Information</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "32px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--primary-green-subtle)", color: "var(--primary-green)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>AAVINARA Eco Pasture Farm</h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.5" }}>
                      Coimbatore Pasture Corridor, Tamil Nadu 641001, India
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
                      hello@aavinara.com · care@aavinara.com
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--primary-green-subtle)", color: "var(--primary-green)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>Customer Care & Hotline</h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                      +91 98765 43210 (Mon - Sat, 6:00 AM - 7:00 PM)
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--primary-green-subtle)", color: "var(--primary-green)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>Delivery Operating Hours</h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                      Morning Dispatch: 5:00 AM – 6:30 AM Daily
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="card" style={{ padding: "24px", marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <Share2 size={20} color="var(--primary-green)" />
                  <h4 style={{ fontSize: "1.1rem", margin: 0 }}>Connect on Social Media</h4>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "16px", lineHeight: "1.5" }}>
                  Follow our pasture journey, morning milking updates, and artisanal dairy recipes.
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {socialLinks.map((s) => {
                    const IconComponent = s.icon;
                    return (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "8px 14px",
                          backgroundColor: s.bg,
                          color: s.color,
                          borderRadius: "var(--radius-full)",
                          fontSize: "0.84rem",
                          fontWeight: 600,
                          border: `1px solid ${s.border}`,
                          transition: "all 0.2s ease"
                        }}
                      >
                        <IconComponent size={15} color={s.color} />
                        <span>{s.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Farm Tour Card */}
              <div className="card" style={{ padding: "0", backgroundColor: "var(--bg-alt)", overflow: "hidden" }}>
                <img src="./src/assets/53.png" alt="AAVINARA Farm Landscape" style={{ width: "100%", height: "140px", objectFit: "cover" }} />
                <div style={{ padding: "18px 20px" }}>
                  <h4 style={{ fontSize: "1.05rem", marginBottom: "6px" }}>Interested in a Farm Tour?</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                    We welcome families and schools to observe morning pasture grazing and modern hygienic milking on scheduled weekends. Select "Farm Visit Request" in the form to reserve a slot.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* GOOGLE MAP SECTION */}
          <div style={{ marginTop: "60px" }}>
            <div className="card" style={{ padding: "28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
                <div>
                  <span className="eyebrow eyebrow-yellow" style={{ marginBottom: "6px" }}>LOCATION MAP</span>
                  <h3 style={{ fontSize: "1.6rem", margin: 0 }}>Find AAVINARA Eco Farm</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                    Located in Coimbatore Pasture Region, Tamil Nadu. Visitors strictly by prior slot booking.
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Coimbatore,Tamil+Nadu,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: "10px 20px", fontSize: "0.88rem" }}
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-light)" }}>
                <iframe
                  title="AAVINARA Farm Location on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173169824!2d76.8848325852528!3d11.016844498305047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
