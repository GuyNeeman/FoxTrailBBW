import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostenCard from "./PostenCard";
import posten2Image from "../assets/posten2.webp";

export default function Posten2() {
  const [antwort, setAntwort] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [solved, setSolved] = useState(false);
  const navigate = useNavigate();

  const pruefen = () => {
    if (solved) return;

    const normalized = antwort.toLowerCase().replace("chf", "").replace(",", ".").trim();
    const parsed = Number.parseFloat(normalized);
    const istRichtig = Number.isFinite(parsed) && Math.abs(parsed - 12.3) < 0.0001;

    if (istRichtig) {
      setFeedback("correct");
      setSolved(true);
      setTimeout(() => navigate("/posten3"), 2000);
      return;
    }
    setFeedback("wrong");
  };

  return (
    <PostenCard step={2} label="Posten 2" title="🥤 SPAR-Snack" image={posten2Image} imageAlt="Posten 2">
      <p className="posten-text">
        Lauf jetzt zum SPAR. Beim SPAR sollst du den Preis von einem normalen Red
        Bull, einem Schoggigipfeli und einer VELO Snus Dose Icy Berry zusammenrechnen.
      </p>

      <p className="posten-question">Wie viel kostet das zusammen in CHF?</p>

      <div className="posten-form">
        <input
          className="posten-input"
          type="text"
          value={antwort}
          onChange={(e) => setAntwort(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && pruefen()}
          placeholder="z.B. 10.2"
          disabled={solved}
        />
        <button className="posten-button" onClick={pruefen} disabled={solved}>
          Prüfen
        </button>
      </div>

      {feedback === "wrong" && <p className="posten-feedback is-wrong">Falsch. Versuche es noch einmal.</p>}
      {feedback === "correct" && <p className="posten-feedback is-correct">✓ Richtig! Die Lösung ist 12.3 CHF.</p>}
    </PostenCard>
  );
}
