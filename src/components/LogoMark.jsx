import React from "react";

export default function LogoMark({ size = 38, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`logo-mark-svg ${className}`}
      style={{ flexShrink: 0 }}
    >
      {/* Outer Golden Pasture Sun Ring */}
      <circle cx="24" cy="24" r="22" fill="#EBB842" fillOpacity="0.18" stroke="#EBB842" strokeWidth="1.5" />
      
      {/* Deep Forest Green Pasture Shield Base */}
      <path
        d="M24 6C15.1634 6 8 13.1634 8 22C8 31.5 24 42 24 42C24 42 40 31.5 40 22C40 13.1634 32.8366 6 24 6Z"
        fill="#1B3B2B"
      />
      
      {/* Pure Milk Drop Core */}
      <path
        d="M24 12C24 12 16 21 16 26.5C16 30.9183 19.5817 34.5 24 34.5C28.4183 34.5 32 30.9183 32 26.5C32 21 24 12 24 12Z"
        fill="#FAF7F2"
      />
      
      {/* Organic Pasture Leaf Overlay Curve */}
      <path
        d="M24 20C21.7909 20 20 21.7909 20 24C20 27.5 24 31 24 31C24 31 28 27.5 28 24C28 21.7909 26.2091 20 24 20Z"
        fill="#EBB842"
      />
      
      {/* Golden Sunrise Ray Highlight */}
      <circle cx="24" cy="24" r="2.5" fill="#1B3B2B" />
    </svg>
  );
}
