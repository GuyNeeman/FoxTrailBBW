import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostenCard from "./PostenCard";
import { styles as s } from "./postenStyles";

const CORRECT_ANSWER = 4;
const BILD =
  "https://media2.homegate.ch/listings/v2/mib/4002342433/image/41bf62244918dd5811d6dfcc87daf45e.jpg";

export default function Posten4() {
  const [input, setInput] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const navigate = useNavigate();

  const pruefen = () => {
    const val = parseInt(input, 10);
    if (isNaN(val)) {
      setFeedback("empty");
      return;
    }
    if (val === CORRECT_ANSWER) {
      setFeedback("correct");
      navigate("/posten5");
      return;
    }
    setAttempts((a) => a + 1);
    setFeedback(val < CORRECT_ANSWER ? "low" : "high");
  };

  return (
    <PostenCard label="Posten 4" title="🏦 UBS Winterthur" image={BILD} imageAlt="UBS Winterthur">
      <p style={s.text}>
        Nach dem langen Morgen merkt Guy, dass er kein Bargeld mehr hat. Er geht
        zur UBS-Filiale an der Stadthausstrasse.
      </p>

      <hr style={s.hr} />

      <p style={s.question}>Wie viele Bancomaten stehen Guy bei der UBS zur Verfügung?</p>

      <div style={s.row}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && pruefen()}
          placeholder="Anzahl eingeben"
          style={s.input}
        />
        <button style={s.btn} onClick={pruefen}>
          Prüfen
        </button>
      </div>

      {feedback === "empty" && <p style={s.wrong}>Bitte eine Zahl eingeben.</p>}
      {feedback === "low" && <p style={s.wrong}>Zu wenig – es sind mehr.</p>}
      {feedback === "high" && <p style={s.wrong}>Zu viele – es sind weniger.</p>}
      {feedback === "correct" && <p style={s.right}>✓ Richtig!</p>}

      {attempts >= 2 && (
        <p style={s.hint}>
          💡 Tipp: Schau auf der UBS-Website beim Standort nach – alle Gerätetypen sind
          dort aufgelistet.
        </p>
      )}
    </PostenCard>
  );
}
