import React from "react";
import { ShieldCheck, Award, Leaf, ThermometerSnowflake } from "lucide-react";

export default function TrustBar() {
  const items = [
    {
      icon: <Leaf size={22} />,
      title: "Farm Fresh",
      desc: "Delivered within 24h of morning milking"
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Quality Tested",
      desc: "24-point laboratory purity checks"
    },
    {
      icon: <Award size={22} />,
      title: "Responsible Farming",
      desc: "Compassionate animal care & open pastures"
    },
    {
      icon: <ThermometerSnowflake size={22} />,
      title: "Carefully Produced",
      desc: "Chilled to 4°C instantly from parlour"
    }
  ];

  return (
    <section className="trust-bar">
      <div className="container">
        <div className="trust-grid">
          {items.map((item, idx) => (
            <div className="trust-item" key={idx}>
              <div className="trust-icon">{item.icon}</div>
              <div className="trust-text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
