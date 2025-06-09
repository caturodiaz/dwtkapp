import React, { useState, useEffect, useRef } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { searchPlugin } from "@react-pdf-viewer/search";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/search/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function PdfReader() {
  const searchPluginInstance = searchPlugin();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [fileUrl] = useState("/reglas.pdf");
  const [keyword, setKeyword] = useState("");
  const debounceTimeout = useRef(null);

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  };

  // Aplica debounce para el highlight
  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      searchPluginInstance.highlight(keyword);
    }, 300); // espera 300 ms después de dejar de escribir

    // cleanup para evitar memory leaks
    return () => clearTimeout(debounceTimeout.current);
  }, [keyword, searchPluginInstance]);

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ padding: "1rem" }}>
        <input
          type="text"
          placeholder="Buscar en el PDF"
          value={keyword}
          onChange={handleSearchChange}
        />
        <button onClick={searchPluginInstance.jumpToPreviousMatch}>
          Anterior
        </button>
        <button onClick={searchPluginInstance.jumpToNextMatch}>
          Siguiente
        </button>
      </div>
      <div style={{ height: "90%" }}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={fileUrl}
            plugins={[defaultLayoutPluginInstance, searchPluginInstance]}
          />
        </Worker>
      </div>
    </div>
  );
}

export default PdfReader;
