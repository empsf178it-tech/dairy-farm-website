import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ product }) {
  const priceParts = product.priceDisplay ? product.priceDisplay.split("·").map((p) => p.trim()) : [];

  return (
    <div className="card product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="badge-tag">{product.category}</span>
      </div>

      <div className="product-card-body">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-desc">{product.shortDesc}</p>

        <div className="product-card-footer">
          <div className="product-price-wrapper">
            {priceParts.length > 0 ? (
              <>
                <span className="price-primary">{priceParts[0]}</span>
                {priceParts[1] && <span className="price-secondary">· {priceParts[1]}</span>}
              </>
            ) : (
              <span className="price-primary">{product.priceDisplay}</span>
            )}
          </div>
          <Link
            to={`/products/${product.slug}`}
            className="btn btn-outline product-card-btn"
          >
            <span>View Product</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
