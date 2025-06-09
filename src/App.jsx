import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PdfReader from "./components/PdfReader";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Inicio
        </Link>
        <Link to="/reglas">Ver Reglas PDF</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reglas" element={<PdfReader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
