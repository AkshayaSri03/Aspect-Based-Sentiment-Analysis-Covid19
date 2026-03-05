import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import { CheckCircle2, AlertCircle, Quote } from "lucide-react";
import "../styles/results.css";

const sentimentData = [
  { aspect: "Vaccines", positive: 65, negative: 15, neutral: 20 },
  { aspect: "Lockdowns", positive: 25, negative: 55, neutral: 20 },
  { aspect: "Face Masks", positive: 70, negative: 10, neutral: 20 },
  { aspect: "Gov Policy", positive: 40, negative: 40, neutral: 20 },
  { aspect: "Economy", positive: 15, negative: 75, neutral: 10 },
];

const pieData = [
  { name: "Positive", value: 42, color: "#10b981" },
  { name: "Neutral", value: 28, color: "#6366f1" },
  { name: "Negative", value: 30, color: "#ef4444" },
];

const Results = () => {
  return (
    <div className="results-root">
      {/* HEADER */}
      <div className="results-header">
        <h1>Key Results & Findings</h1>
        <p>
          Through Aspect-Based Sentiment Analysis, we identified shifting public
          perceptions across critical pandemic response areas.
        </p>
      </div>

      {/* CHARTS */}
      <div className="results-charts">
        {/* BAR */}
        <div className="chart-card">
          <h3>Polarity by Primary Aspects (%)</h3>

          <div className="chart-area">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sentimentData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="aspect"
                  type="category"
                  width={100}
                />
                <Tooltip />
                <Bar dataKey="positive" stackId="a" fill="#10b981" barSize={18} />
                <Bar dataKey="neutral" stackId="a" fill="#6366f1" />
                <Bar dataKey="negative" stackId="a" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-legend">
            <span><i className="lg-pos" /> Positive</span>
            <span><i className="lg-neu" /> Neutral</span>
            <span><i className="lg-neg" /> Negative</span>
          </div>
        </div>

        {/* PIE */}
        <div className="chart-card center">
          <h3>Overall Sentiment Distribution</h3>

          <div className="chart-area pie">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="pie-stats">
            {pieData.map((item, i) => (
              <div key={i}>
                <div
                  className="pie-value"
                  style={{ color: item.color }}
                >
                  {item.value}%
                </div>
                <div className="pie-label">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INSIGHTS */}
      <div className="results-insights">
        <div className="insight">
          <CheckCircle2 className="icon green" />
          <div>
            <h4>Vaccine Sentiment Shift</h4>
            <p>
              Positive sentiment increased post-approval, though mandates
              remained polarized.
            </p>
          </div>
        </div>

        <div className="insight">
          <AlertCircle className="icon amber" />
          <div>
            <h4>Policy Fatigue</h4>
            <p>
              Lockdown discussion volume dropped, but negative sentiment grew
              over time.
            </p>
          </div>
        </div>
      </div>

      {/* QUOTE */}
      <div className="results-quote">
        <Quote />
        <p>
          Our findings demonstrate that ABSA reveals hidden grievances even
          within generally positive discussions.
        </p>
      </div>
    </div>
  );
};

export default Results;