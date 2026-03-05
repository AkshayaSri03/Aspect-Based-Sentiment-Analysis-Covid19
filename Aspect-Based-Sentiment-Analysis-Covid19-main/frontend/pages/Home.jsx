import React from "react";
import {
  TrendingUp,
  PieChart,
  MessageSquare,
  ArrowRight,
  Brain,
} from "lucide-react";
import "../styles/home.css";
import { Page } from "../types";

const Home = ({ onNavigate }) => {
  return (
    <div className="home-root">
      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="home-hero-bg" />

        <div className="home-container">
          <div className="home-hero-grid">
            {/* LEFT */}
            <div className="home-hero-content">
              <h1 className="home-title">
                Aspect-Based Sentiment Analysis of{" "}
                <span>COVID-19</span> Discussions
              </h1>

              <p className="home-subtitle">
                Uncovering granular public sentiment patterns during the global
                pandemic through advanced NLP and interactive dashboards.
              </p>

              <div className="home-actions">
                <button
                  className="btn-primary"
                  onClick={() => onNavigate(Page.DASHBOARD)}
                >
                  View Dashboards <ArrowRight size={18} />
                </button>

                <button
                  className="btn-secondary"
                  onClick={() => onNavigate(Page.ABOUT)}
                >
                  Learn Methodology
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="home-hero-visual">
              <div className="image-frame">
                <img
                  src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800"
                  alt="COVID-19 Research"
                />

                <div className="accuracy-card">
                  <div className="accuracy-icon">
                    <TrendingUp />
                  </div>
                  <div>
                    <div className="accuracy-value">92%</div>
                    <div className="accuracy-label">
                      Model Accuracy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="home-pillars">
        <div className="home-container">
          <div className="pillars-header">
            <h2>Core Project Pillars</h2>
            <p>
              Our multi-stage pipeline transforms raw Twitter data into
              actionable public health insights.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon blue">
                <Brain />
              </div>
              <h3>ABSA Logic</h3>
              <p>
                Targeting specific pandemic aspects instead of generic sentiment.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon primary">
                <MessageSquare />
              </div>
              <h3>Large Dataset</h3>
              <p>
                Over 500,000 anonymized COVID-19 tweets processed.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon indigo">
                <PieChart />
              </div>
              <h3>Real-time Dashboards</h3>
              <p>
                Interactive Power BI dashboards for deep exploration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;