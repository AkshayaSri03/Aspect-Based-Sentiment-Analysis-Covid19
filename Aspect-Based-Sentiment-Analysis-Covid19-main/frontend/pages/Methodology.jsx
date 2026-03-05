import React from "react";
import { 
  Cpu, 
  Terminal, 
  RefreshCw, 
  BarChart3, 
  Code, 
  FileText 
} from "lucide-react";
import "../styles/methodology.css";

const Methodology = () => {
  const steps = [
    {
      title: "Data Preprocessing",
      icon: <RefreshCw />,
      items: [
        "Tokenization",
        "Removing Stopwords & URLs",
        "Lemmatization",
        "Noise Reduction (Bot filtering)",
      ],
    },
    {
      title: "Feature Engineering",
      icon: <Terminal />,
      items: [
        "Aspect Term Extraction",
        "POS Tagging",
        "Entity Recognition",
        "Dependency Parsing",
      ],
    },
    {
      title: "Transformer Pipeline",
      icon: <Cpu />,
      items: [
        "BERT-Base Model Tuning",
        "Aspect-Sentiment Coupling",
        "Sequence Classification",
        "Multi-Label Labeling",
      ],
    },
    {
      title: "Visualization & Insights",
      icon: <BarChart3 />,
      items: [
        "DAX Query Development",
        "Power BI Data Modeling",
        "Sentiment Aggregation",
        "Temporal Trend Mapping",
      ],
    },
  ];

  return (
    <div className="method-root">
      {/* HEADER */}
      <div className="method-header">
        <h1>Scientific Methodology</h1>
        <p>
          Our research follows a rigorous NLP pipeline using transformer-based
          models to ensure high accuracy and linguistic nuance capture.
        </p>
      </div>

      {/* PIPELINE VISUALIZATION */}
      <div className="method-pipeline">
        <div className="pipeline-track">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="pipeline-step">
                <div className="step-icon">
                  {/* Corrected: Using React.cloneElement to pass size safely */}
                  {React.cloneElement(step.icon, {
                    size: 40,
                  })}
                </div>

                <div className="step-content">
                  <h3>{step.title}</h3>
                  <div className="step-items">
                    {step.items.map((item, i) => (
                      <div key={i} className="step-item">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector between steps */}
              {idx < steps.length - 1 && (
                <div className="pipeline-connector" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className="method-details">
        <div className="detail-card">
          <div className="detail-icon code">
            <Code size={32} />
          </div>
          <h2>NLP Pipeline Explanation</h2>
          <p>
            We employed a <strong>BERT-based architecture</strong> for
            aspect-level sentiment classification, enabling contextual
            understanding of domain-specific pandemic language.
          </p>
        </div>

        <div className="detail-card">
          <div className="detail-icon file">
            <FileText size={32} />
          </div>
          <h2>Evaluation Metrics</h2>
          <p>
            Model performance was evaluated using Precision, Recall, and
            F1-score to ensure balanced and reliable predictions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Methodology;