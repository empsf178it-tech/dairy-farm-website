import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import OurFarmPage from "./pages/OurFarmPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import OurProcessPage from "./pages/OurProcessPage";
import OurValuesPage from "./pages/OurValuesPage";
import JournalPage from "./pages/JournalPage";
import JournalArticlePage from "./pages/JournalArticlePage";
import ContactPage from "./pages/ContactPage";
import OrderPage from "./pages/OrderPage";
import NotFoundPage from "./pages/NotFoundPage";

import QuickTrialDrawer from "./components/QuickTrialDrawer";
import BackToTop from "./components/BackToTop";
import { Zap } from "lucide-react";

export default function App() {
  const [trialDrawerOpen, setTrialDrawerOpen] = React.useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar onOpenTrial={() => setTrialDrawerOpen(true)} />
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage onOpenTrial={() => setTrialDrawerOpen(true)} />} />
            <Route path="/farm" element={<OurFarmPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/process" element={<OurProcessPage />} />
            <Route path="/values" element={<OurValuesPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/journal/:slug" element={<JournalArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Quick Trial Drawer */}
        <QuickTrialDrawer isOpen={trialDrawerOpen} onClose={() => setTrialDrawerOpen(false)} />

        {/* Floating Mobile Trial Bar */}
        <div className="mobile-floating-trial-bar">
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", color: "#FFF" }}>
            <Zap size={15} color="var(--accent-yellow)" />
            <span>6:30 AM Morning Delivery</span>
          </div>
          <button
            onClick={() => setTrialDrawerOpen(true)}
            className="btn btn-accent"
            style={{ padding: "8px 16px", fontSize: "0.8rem", borderRadius: "var(--radius-full)" }}
          >
            <span>Trial Pack 🎁</span>
          </button>
        </div>

        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}
