import React from "react";
import "../styles/team.css";

const Team = () => {
  const guide = {
    name: "Dr. Rakesh Kumar Donthi",
    role: "Project Guide",
  };

  const members = [
    {
      name: "AkshayaSri Kadiyala",
      role: "Designed scalable data pipeline for tweet processing.",
    },
    {
      name: "Gantala Santhoshi",
      role: "Designed scalable data pipeline for tweet processing.",
    },
    {
      name: "Billa Sai Akshith",
      role: "Built interactive dashboards and charts.",
    },
    {
      name: "Konayala Mahesh Reddy",
      role: "Built interactive dashboards and charts.",
    },
  ];

  return (
    <div className="team-root">
      {/* HEADER */}
      <div className="team-header">
        <h1>The Research Team</h1>
        <p>Meet the contributors behind the project.</p>
      </div>

      {/* GUIDE */}
      <div className="team-guide">
        <div className="team-card guide">
          <div className="avatar large" />
          <h3>{guide.name}</h3>
          <span className="role highlight">{guide.role}</span>
        </div>
      </div>

      {/* MEMBERS */}
      <div className="team-grid">
        {members.map((member, index) => (
          <div key={index} className="team-card">
            <div className="avatar" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;