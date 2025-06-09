import React from "react";

const PROBLEMS = [
  "Banking Crisis",
  "Economic Crisis",
  "International Incident",
  "Foreign War",
  "Treason and Conspiracy Trials",
  "Pirates",
  "Townsmen Unrest",
  "Peasant Unrest",
  "Agriculture Crisis",
  "Natural Disaster",
];

function UnresolvedProblems({ data, onChange }) {
  const toggleProblem = (problem) => {
    onChange({
      ...data,
      [problem]: !data?.[problem],
    });
  };

  return (
    <div className="section">
      <h2>Unresolved Political Problems</h2>
      <ul className="checkbox-list">
        {PROBLEMS.map((problem) => (
          <li key={problem}>
            <label>
              <input
                type="checkbox"
                checked={data?.[problem] || false}
                onChange={() => toggleProblem(problem)}
              />
              {problem}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UnresolvedProblems;
