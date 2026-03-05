import React from "react";
import { LayoutDashboard, ExternalLink, Info } from "lucide-react";
import TableauViz from "../components/TableauViz";
import "../styles/dashboard.css";

const Dashboard = () => {
  const dashboards = [
    {
      title: "Aspect Sentiment Overview",
      description:
        "High-level comparison of positive, neutral, and negative sentiments.",
      vizName:
        "Aspect-BasedSentimentAnalysisofCOVID-19TwitterDiscussions/Dashboard1",
      publicUrl:
        "https://public.tableau.com/views/Aspect-BasedSentimentAnalysisofCOVID-19TwitterDiscussions/Dashboard1",
    },
    {
      title: "Aspect Sentiment Trends Over Time",
      description:
        "Shows how sentiment evolved across different pandemic phases.",
      vizName:
        "Aspect-BasedSentimentAnalysisofCOVID-19TwitterDiscussions/Dashboard2",
      publicUrl:
        "https://public.tableau.com/views/Aspect-BasedSentimentAnalysisofCOVID-19TwitterDiscussions/Dashboard2",
    },
    {
      title: "Geographic Distribution of Sentiment",
      description:
        "Maps regional sentiment intensity and tweet volume worldwide.",
      vizName:
        "Aspect-BasedSentimentAnalysisofCOVID-19TwitterDiscussions/Dashboard3",
      publicUrl:
        "https://public.tableau.com/views/Aspect-BasedSentimentAnalysisofCOVID-19TwitterDiscussions/Dashboard3",
    },
    {
      title: "Topic & Keyword Insights",
      description:
        "Highlights dominant discussion topics and frequent keywords.",
      vizName:
        "Aspect-BasedSentimentAnalysisofCOVID-19TwitterDiscussions/Dashboard4",
      publicUrl:
        "https://public.tableau.com/views/Aspect-BasedSentimentAnalysisofCOVID-19TwitterDiscussions/Dashboard4",
    },
  ];

  return (
    <div className="dashboard-root">
      {/* HEADER */}
      <div className="dashboard-header">
        <h1>
          <LayoutDashboard /> Interactive Dashboards
        </h1>
        <p>
          Explore insights from Aspect-Based Sentiment Analysis of COVID-19
          Twitter discussions.
        </p>
      </div>

      {/* GRID */}
      <div className="dashboard-grid">
        {dashboards.map((db, idx) => (
          <div key={idx} className="dashboard-card">
            <a
              href={db.publicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="dashboard-link"
              title="Open in Tableau Public"
            >
              <ExternalLink size={20} />
            </a>

            <h3>{db.title}</h3>
            <p>{db.description}</p>

            <div className="dashboard-viz">
              <TableauViz vizName={db.vizName} />
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="dashboard-footer-wrapper">
        <a 
          href="https://github.com/AkshayaSri03/Aspect-Based-Sentiment-Analysis-Covid19/tree/main/datasets" 
          target="_blank" 
          rel="noopener noreferrer"
          className="dashboard-footer-link"
        >
          <div className="dashboard-footer">
            <span>Access the datasets</span>
            <ExternalLink size={16} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;