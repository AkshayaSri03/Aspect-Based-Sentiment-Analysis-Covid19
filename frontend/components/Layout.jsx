import React, { useState } from "react";
import { Page } from "../types";
import "../styles/layout.css";
import {
  Menu,
  X,
  Sun,
  Moon,
  Twitter,
  Github,
  Linkedin,
  ShieldCheck,
} from "lucide-react";

const Layout = ({
  children,
  currentPage,
  setCurrentPage,
  theme,
  toggleTheme,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", value: Page.HOME },
    { label: "About", value: Page.ABOUT },
    { label: "Dashboard", value: Page.DASHBOARD },
    { label: "Methodology", value: Page.METHODOLOGY },
    { label: "Results", value: Page.RESULTS },
    { label: "Team", value: Page.TEAM },
  ];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`app-wrapper ${theme}`}>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-container">
          <div
            className="nav-brand"
            onClick={() => handleNavClick(Page.HOME)}
          >
            <ShieldCheck className="brand-icon" />
            <span className="brand-name">COVID-ABSA</span>
          </div>

          {/* Desktop Nav */}
          <div className="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`nav-btn ${
                  currentPage === item.value ? "active" : ""
                }`}
              >
                {item.label}
              </button>
            ))}

            <button onClick={toggleTheme} className="icon-btn theme-toggle">
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="nav-mobile-toggle">
            <button onClick={toggleTheme} className="icon-btn">
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="icon-btn"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="nav-mobile-menu">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`mobile-nav-btn ${
                  currentPage === item.value ? "active" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ================= MAIN ================= */}
      <main className="content-area">{children}</main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-info">
              <div className="footer-brand">
                <ShieldCheck size={20} className="brand-icon" />
                <span>COVID-ABSA Project</span>
              </div>
              <p>
                Academic research project on Aspect-Based Sentiment Analysis of
                COVID-19 Twitter Discussions.
              </p>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <button onClick={() => handleNavClick(Page.ABOUT)}>
                Project Overview
              </button>
              <button onClick={() => handleNavClick(Page.METHODOLOGY)}>
                Methodology
              </button>
              <button onClick={() => handleNavClick(Page.DASHBOARD)}>
                Data Dashboards
              </button>
            </div>

            <div className="footer-social">
              <h3>Connect</h3>
              <div className="social-icons">
                <Twitter size={18} className="social-icon" />
                <Github size={18} className="social-icon" />
                <Linkedin size={18} className="social-icon" />
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} ABSA COVID-19 Academic Project. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;