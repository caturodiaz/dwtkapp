import React from "react";

function ResetButton({ onClick }) {
  return (
    <div className="section">
      <button className="reset-button" onClick={onClick}>
        Reset Game
      </button>
    </div>
  );
}

export default ResetButton;
