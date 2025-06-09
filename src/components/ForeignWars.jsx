import React from "react";

function ForeignWars({ value, onChange }) {
  return (
    <div className="section">
      <h2>Foreign Wars</h2>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Describe current foreign wars..."
        className="textarea"
        rows={4}
      />
    </div>
  );
}

export default ForeignWars;
