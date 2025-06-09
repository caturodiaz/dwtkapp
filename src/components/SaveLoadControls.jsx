import React, { useState, useEffect } from "react";

function SaveLoadControls({ currentState, onLoad }) {
  const [saveName, setSaveName] = useState("");
  const [saves, setSaves] = useState([]);

  useEffect(() => {
    loadSaves();
  }, []);

  const loadSaves = () => {
    const keys = Object.keys(localStorage)
      .filter((key) => key.startsWith("dwk-save-"))
      .map((key) => {
        const raw = localStorage.getItem(
          `dwk-save-${key.replace("dwk-save-", "")}`
        );
        try {
          const parsed = JSON.parse(raw);
          return {
            name: key.replace("dwk-save-", ""),
            timestamp: parsed.timestamp || "No date",
          };
        } catch {
          return {
            name: key.replace("dwk-save-", ""),
            timestamp: "Invalid data",
          };
        }
      });
    setSaves(keys);
  };

  const saveGame = () => {
    if (!saveName) return alert("Please enter a name");
    const payload = {
      ...currentState,
      timestamp: new Date().toLocaleString(),
    };
    localStorage.setItem(`dwk-save-${saveName}`, JSON.stringify(payload));
    alert(`Game saved as "${saveName}"`);
    loadSaves();
  };

  const loadGame = (name) => {
    const data = localStorage.getItem(`dwk-save-${name}`);
    if (data) {
      const parsed = JSON.parse(data);
      delete parsed.timestamp;
      onLoad(parsed);
    }
  };

  const deleteGame = (name) => {
    if (confirm(`Delete saved game "${name}"?`)) {
      localStorage.removeItem(`dwk-save-${name}`);
      loadSaves();
    }
  };

  return (
    <div className="section">
      <h2>Save / Load Game</h2>
      <input
        className="input"
        type="text"
        value={saveName}
        placeholder="Enter save name"
        onChange={(e) => setSaveName(e.target.value)}
      />
      <button
        onClick={saveGame}
        className="reset-button"
        style={{ marginTop: "0.5rem" }}
      >
        Save
      </button>

      <h3>Saved Games</h3>
      <ul className="saved-list">
        {saves.map(({ name, timestamp }) => (
          <li key={name}>
            <div style={{ flex: 1 }}>
              <strong>{name}</strong>
              <div style={{ fontSize: "0.8rem", color: "#555" }}>
                {timestamp}
              </div>
            </div>
            <button onClick={() => loadGame(name)}>Load</button>
            <button onClick={() => deleteGame(name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SaveLoadControls;
