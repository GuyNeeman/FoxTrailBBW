import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostenCard from "./PostenCard";
import posten5Image from "../assets/posten5.png";

export default function Posten5() {
  const [stufen, setStufen] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [solved, setSolved] = useState(false);
  const navigate = useNavigate();

  const pruefen = () => {
    if (solved) return;

    if (Number(stufen) === 67) {
      setFeedback("correct");
      setSolved(true);
      setTimeout(() => navigate("/posten6"), 2000);
      return;
    }
    setFeedback("wrong");
  };

  return (
    <PostenCard step={5} label="Posten 5" title="👟 Zeit noch mehr Geld zu verschwenden" image={posten5Image} imageAlt="Posten 5">
      <p className="posten-text">Guy will sich Schuhe kaufen.</p>
      <p className="posten-text">Er findet die Marke New Balance ganz f-f-f-fresh.</p>

      <p className="posten-question">Wie viele Schuhe der Marke New Balance werden ausgestellt?</p>

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
