import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Users, ChefHat, CheckCircle2, ArrowRight, Utensils } from "lucide-react";
import { RECIPES } from "../data/recipes";

export default function RecipeShowcase() {
  const [activeRecipe, setActiveRecipe] = useState(RECIPES[0]);

  return (
    <div className="recipe-showcase card">
      <div className="section-header recipe-showcase-header">
        <span className="eyebrow eyebrow-yellow">
          <ChefHat size={14} /> FARM KITCHEN RECIPES
        </span>
        <h2>Artisanal Dairy Recipes</h2>
        <p className="lead-text" style={{ margin: 0 }}>
          Elevate home cooking with single-origin milk, probiotic curd, soft paneer & golden Bilona ghee.
        </p>
      </div>

      {/* Recipe Tabs */}
      <div className="recipe-tabs-container">
        {RECIPES.map((recipe) => (
          <button
            key={recipe.id}
            onClick={() => setActiveRecipe(recipe)}
            className={`btn recipe-tab-btn ${activeRecipe.id === recipe.id ? "btn-primary" : "btn-outline"}`}
          >
            <Utensils size={14} />
            <span>{recipe.title}</span>
          </button>
        ))}
      </div>

      {/* Active Recipe Content */}
      <div className="split-section" style={{ gap: "30px", alignItems: "flex-start" }}>
        {/* Left Side: Recipe Image & Meta */}
        <div style={{ width: "100%" }}>
          <div className="recipe-image-wrapper">
            <img src={activeRecipe.image} alt={activeRecipe.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <span className="badge-tag" style={{ top: "16px", left: "16px" }}>{activeRecipe.category}</span>
          </div>

          <div className="recipe-meta-bar">
            <div className="recipe-meta-item">
              <Clock size={16} color="var(--primary-green)" style={{ flexShrink: 0 }} />
              <span>{activeRecipe.prepTime}</span>
            </div>
            <div className="recipe-meta-item">
              <Users size={16} color="var(--primary-green)" style={{ flexShrink: 0 }} />
              <span>{activeRecipe.servings}</span>
            </div>
            <div className="recipe-meta-item">
              <ChefHat size={16} color="var(--primary-green)" style={{ flexShrink: 0 }} />
              <span>{activeRecipe.difficulty}</span>
            </div>
          </div>

          <div style={{ padding: "16px", background: "var(--primary-green-subtle)", borderRadius: "var(--radius-sm)", border: "1px solid rgba(43,90,65,0.15)" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--primary-green)", letterSpacing: "0.08em", display: "block", marginBottom: "4px" }}>
              Key Ingredient:
            </span>
            <strong style={{ fontSize: "0.95rem", color: "var(--text-primary)", display: "block", marginBottom: "12px" }}>
              {activeRecipe.productUsed}
            </strong>
            <Link to="/products" className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "0.82rem" }}>
              <span>Order Ingredient</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right Side: Ingredients & Steps */}
        <div style={{ width: "100%" }}>
          <h3 className="recipe-active-title">{activeRecipe.title}</h3>

          <div style={{ marginBottom: "24px" }}>
            <h4 style={{ fontSize: "1.05rem", color: "var(--warm-brown)", marginBottom: "12px", borderBottom: "1px solid var(--border-light)", paddingBottom: "6px" }}>
              Ingredients Required
            </h4>
            <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr", gap: "8px" }}>
              {activeRecipe.ingredients.map((ing, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "var(--text-primary)" }}>
                  <CheckCircle2 size={16} color="var(--primary-green)" style={{ flexShrink: 0 }} />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: "1.05rem", color: "var(--warm-brown)", marginBottom: "12px", borderBottom: "1px solid var(--border-light)", paddingBottom: "6px" }}>
              Step-by-Step Instructions
            </h4>
            <ol style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {activeRecipe.instructions.map((step, idx) => (
                <li key={idx} style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
