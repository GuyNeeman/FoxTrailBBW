import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostenCard from "./PostenCard";
import ubsImage from "../assets/ubs.png";

const CORRECT_ANSWER = 4;

export default function Posten4() {
  const [input, setInput] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [solved, setSolved] = useState(false);
  const navigate = useNavigate();

  const pruefen = () => {
    if (solved) return;

    const val = parseInt(input, 10);
    if (isNaN(val)) {
      setFeedback("empty");
      return;
    }
    if (val === CORRECT_ANSWER) {
      setFeedback("correct");
      setSolved(true);
      setTimeout(() => navigate("/posten5"), 2000);
      return;
    }
    setAttempts((a) => a + 1);
    setFeedback(val < CORRECT_ANSWER ? "low" : "high");
  };

  return (
    <PostenCard step={4} label="Posten 4" title="🏦 UBS Winterthur" image={ubsImage} imageAlt="UBS Winterthur">
      <p className="posten-text">
        Nach dem langen Morgen merkt Guy, dass er kein Bargeld mehr hat. Er geht
        zur UBS-Filiale an der Stadthausstrasse.
      </p>

      <p className="posten-question">Wie viele Bancomaten stehen Guy bei der UBS zur Verfügung?</p>

      <div className="posten-form">
        <input
          className="posten-input"
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && pruefen()}
          placeholder="Anzahl eingeben"
          disabled={solved}
        />
        <button className="posten-button" onClick={pruefen} disabled={solved}>
          Prüfen
        </button>
      </div>

      {feedback === "empty" && <p className="posten-feedback is-wrong">Bitte eine Zahl eingeben.</p>}
      {feedback === "low" && <p className="posten-feedback is-wrong">Zu wenig – es sind mehr.</p>}
      {feedback === "high" && <p className="posten-feedback is-wrong">Zu viele – es sind weniger.</p>}
      {feedback === "correct" && <p className="posten-feedback is-correct">✓ Richtig! Weiter geht's …</p>}

      {attempts >= 2 && !solved && (
        <p className="posten-hint">
          💡 Tipp: Schau auf der UBS-Website beim Standort nach – alle Gerätetypen sind
          dort aufgelistet.
        </p>
      )}
    </PostenCard>
  );
}
