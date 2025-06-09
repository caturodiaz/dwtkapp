import React from "react";

function MonarchSupport({ value, onChange }) {
  return (
    <div className="section">
      <h2>Monarch's Support</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. Strong, Weak, Neutral..."
        className="input"
      />
    </div>
  );
}

export default MonarchSupport;
