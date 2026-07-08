import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostenCard from "./PostenCard";
import posten6Image from "../assets/posten7.jpg";

export default function Posten6() {
  const [stufen, setStufen] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [solved, setSolved] = useState(false);
  const navigate = useNavigate();

  const pruefen = () => {
    if (solved) return;

    if (Number(stufen) === 4444) {
      setFeedback("correct");
      setSolved(true);
      setTimeout(() => navigate("/postenEnde"), 2000);
      return;
    }
    setFeedback("wrong");
  };

  return (
    <PostenCard step={6} label="Posten 6" title="Denkmal besuchen" image={posten6Image} imageAlt="Posten 6">
      <p className="posten-text">Guy will sich Bilden und ein Denkmal besuchen.</p>

      <p className="posten-question">Macht ein Selfie von euch mit dem Denkmal und schickt das Foto an Lenas. Ihr bekommt dann die Lösung!</p>

      <div className="posten-form">
        <input
          className="posten-input"
          type="number"
          value={stufen}
          onChange={(e) => setStufen(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && pruefen()}
          placeholder="Anzahl eingeben"
          disabled={solved}
        />
        <button className="posten-button" onClick={pruefen} disabled={solved}>
          Prüfen
        </button>
      </div>

      {feedback === "wrong" && <p className="posten-feedback is-wrong">Leider falsch. Versuche es erneut!</p>}
      {feedback === "correct" && <p className="posten-feedback is-correct">✓ Richtig! Weiter geht's …</p>}
    </PostenCard>
  );
}
