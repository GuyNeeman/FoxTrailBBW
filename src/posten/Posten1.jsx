import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostenCard from "./PostenCard";
import posten1Image from "../assets/posten1.webp";

export default function Posten1() {
  const [stufen, setStufen] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [solved, setSolved] = useState(false);
  const navigate = useNavigate();

  const pruefen = () => {
    if (solved) return;

    if (Number(stufen) === 10) {
      setFeedback("correct");
      setSolved(true);
      setTimeout(() => navigate("/posten2"), 2000);
      return;
    }
    setFeedback("wrong");
  };

  return (
    <PostenCard step={1} label="Posten 1" title="🍽️ Zeit für das Frühstück" image={posten1Image} imageAlt="Posten 1">
      <p className="posten-text">
        Guy ist ein sehr exotischer Mensch und möchte einen banger Döner essen.
      </p>
      <p className="posten-text">
        Guy lässt aber, so tollpatschig wie er ist, den Döner auf der Treppe fallen.
      </p>

      <p className="posten-question">
        Wie viele Stufen hat die Treppe im Laden (mit der oberen Etage)?
      </p>

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
