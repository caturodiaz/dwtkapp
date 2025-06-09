// Home.jsx
import React, { useState, useEffect } from "react";

import MonarchSupport from "../components/MonarchSupport";
import UnresolvedProblems from "../components/UnresolvedProblems";
import PrestigeModifiers from "../components/PrestigeModifiers";
import ForeignWars from "../components/ForeignWars";
import CounselSection from "../components/CounselSection";
import ResetButton from "../components/ResetButton";
import SaveLoadControls from "../components/SaveLoadControls";
import Toast from "../components/Toast";
import DownloadRulesButton from "../components/DownloadRulesButton";

const defaultState = {
  monarchSupport: "",
  unresolvedProblems: {},
  prestigeModifiers: {},
  foreignWars: "",
  counsel: {},
};

export default function Home() {
  const [gameState, setGameState] = useState(defaultState);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("gameState");
    if (saved) {
      setGameState(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("gameState", JSON.stringify(gameState));
  }, [gameState]);

  useEffect(() => {
    const interval = setInterval(() => {
      const autosave = {
        ...gameState,
        timestamp: new Date().toLocaleString(),
      };
      localStorage.setItem("dwk-save-autosave", JSON.stringify(autosave));
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000);
    }, 5 * 60 * 1000); // cada 5 minutos

    return () => clearInterval(interval);
  }, [gameState]);

  const resetGame = () => {
    setGameState(defaultState);
    localStorage.removeItem("gameState");
  };
  return (
    <>
      <div className="container">
        <h1>Down With The King - Record Sheet</h1>
        <MonarchSupport
          value={gameState.monarchSupport}
          onChange={(val) =>
            setGameState((prev) => ({ ...prev, monarchSupport: val }))
          }
        />
        <UnresolvedProblems
          data={gameState.unresolvedProblems}
          onChange={(val) =>
            setGameState((prev) => ({ ...prev, unresolvedProblems: val }))
          }
        />
        <PrestigeModifiers
          data={gameState.prestigeModifiers}
          onChange={(val) =>
            setGameState((prev) => ({ ...prev, prestigeModifiers: val }))
          }
        />
        <ForeignWars
          value={gameState.foreignWars}
          onChange={(val) =>
            setGameState((prev) => ({ ...prev, foreignWars: val }))
          }
        />
        <CounselSection
          data={gameState.counsel}
          onChange={(val) =>
            setGameState((prev) => ({ ...prev, counsel: val }))
          }
        />
        <ResetButton onClick={resetGame} />
        <SaveLoadControls
          currentState={gameState}
          onLoad={(loadedState) => setGameState(loadedState)}
        />

        <DownloadRulesButton />

        <Toast message="Partida auto-guardada" visible={toastVisible} />
      </div>
    </>
  );
}
