import React from "react";
import { Database, Network, Search, Layers } from "lucide-react";
import "../styles/about.css";

const About = () => {
return (
  <div className="about-root">
    <div className="about-section">
      {/* LEFT CONTENT */}
      <div>
        <h2>What is Aspect-Based Sentiment Analysis?</h2>

        <p>
          Standard sentiment analysis labels text as positive or negative.
          However, complex discussions may contain multiple sentiments.
        </p>

        <p className="about-quote">
          "The vaccine rollout is fast, but the communication is poor."
        </p>

        <p>
          <strong>Vaccine Rollout:</strong> Positive
          <br />
          <strong>Communication:</strong> Negative
        </p>
      </div>

      {/* RIGHT CARD */}
      <div className="about-card">
        <div className="about-card-item">
          🔍 Term Extraction
        </div>
        <div className="about-card-item">
          🧩 Aspect Classification
        </div>
        <div className="about-card-item">
          📊 Polarity Detection
        </div>
      </div>
    </div>
  </div>
);
};

export default About;