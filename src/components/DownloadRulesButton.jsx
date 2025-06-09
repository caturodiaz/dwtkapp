import React from "react";

export default function DownloadRulesButton() {
  return (
    <div className="download-rules-wrapper">
      <a
        href="/reglas.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="download-rules-button"
      >
        Descargar Reglamento (PDF)
      </a>
    </div>
  );
}
