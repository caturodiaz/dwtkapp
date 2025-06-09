import React from "react";

function CounselSection({ data, onChange }) {
  return (
    <div className="section">
      <h2>Counsel Notes</h2>
      <textarea
        value={data?.notes || ""}
        onChange={(e) => onChange({ ...data, notes: e.target.value })}
        placeholder="Notes from the counsel, strategic plans, etc..."
        className="textarea"
        rows={6}
      />
    </div>
  );
}

export default CounselSection;
