import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostenCard from "./PostenCard";
import manorImage from "../assets/manor.jpg";

export default function Posten3() {
  const [antwort, setAntwort] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [solved, setSolved] = useState(false);
  const navigate = useNavigate();

  const pruefen = () => {
    if (solved) return;

    if (antwort.trim().toLowerCase() === "zitrone") {
      setFeedback("correct");
      setSolved(true);
      setTimeout(() => navigate("/posten4"), 2000);
      return;
    }
    setFeedback("wrong");
  };

  return (
    <PostenCard step={3} label="Posten 3" title="🛍️ Manor-Parfüm" image={manorImage} imageAlt="Posten 3">
      <p className="posten-text">
        Gehe zum roten Laden, welcher alles verkauft. Gehe zur Parfümabteilung.
      </p>

      <p className="posten-question">
        Nach was riecht das blaue Parfüm der Fussballlegende Ronaldo?
      </p>

      <div className="posten-form">
        <input
          className="posten-input"
          type="text"
          value={antwort}
          onChange={(e) => setAntwort(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && pruefen()}
          placeholder="Antwort eingeben"
          disabled={solved}
        />
        <button className="posten-button" onClick={pruefen} disabled={solved}>
          Prüfen
        </button>
      </div>

      {feedback === "wrong" && <p className="posten-feedback is-wrong">❌ Falsch, versuche es erneut.</p>}
      {feedback === "correct" && <p className="posten-feedback is-correct">✅ Richtig! Weiter geht's …</p>}
    </PostenCard>
  );
}
