import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostenCard from "./PostenCard";
import { styles as s } from "./postenStyles";
import posten2Image from "../assets/posten2.webp";

export default function Posten2() {
  const [antwort, setAntwort] = useState("");
  const [feedback, setFeedback] = useState(null);
  const navigate = useNavigate();

  const pruefen = () => {
    const normalized = antwort.toLowerCase().replace("chf", "").replace(",", ".").trim();
    const parsed = Number.parseFloat(normalized);
    const istRichtig = Number.isFinite(parsed) && Math.abs(parsed - 12.3) < 0.0001;

    if (istRichtig) {
      setFeedback("correct");
      setTimeout(() => navigate("/posten3"), 2000);
      return;
    }
    setFeedback("wrong");
  };

  return (
    <PostenCard label="Posten 2" title="🥤 SPAR-Snack" image={posten2Image} imageAlt="Posten 2">
      <p style={s.text}>
        Lauf jetzt zum SPAR. Beim SPAR sollst du den Preis von einem normalen Red
        Bull, einem Schoggigipfeli und einer VELO Snus Dose Icy Berry zusammenrechnen.
      </p>

      <hr style={s.hr} />

      <p style={s.question}>Wie viel kostet das zusammen in CHF?</p>

      <div style={s.row}>
        <input
          type="text"
          value={antwort}
          onChange={(e) => setAntwort(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && pruefen()}
          placeholder="z.B. 10.2"
          style={s.input}
        />
        <button style={s.btn} onClick={pruefen}>
          Prüfen
        </button>
      </div>

      {feedback === "wrong" && <p style={s.wrong}>Falsch. Versuche es noch einmal.</p>}
      {feedback === "correct" && <p style={s.right}>✓ Richtig! Die Lösung ist 12.3 CHF.</p>}
    </PostenCard>
  );
}
