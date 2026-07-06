import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostenCard from "./PostenCard";
import { styles as s } from "./postenStyles";
import manorImage from "../assets/manor.jpg";

export default function Posten3() {
  const [antwort, setAntwort] = useState("");
  const [feedback, setFeedback] = useState(null);
  const navigate = useNavigate();

  const pruefen = () => {
    if (antwort.trim().toLowerCase() === "zitrone") {
      setFeedback("correct");
      navigate("/posten4");
      return;
    }
    setFeedback("wrong");
  };

  return (
    <PostenCard label="Posten 3" title="🛍️ Manor-Parfüm" image={manorImage} imageAlt="Posten 3">
      <p style={s.text}>
        Gehe zum roten Laden, welcher alles verkauft. Gehe zur Parfümabteilung.
      </p>

      <hr style={s.hr} />

      <p style={s.question}>
        Nach was riecht das blaue Parfüm der Fussballlegende Ronaldo?
      </p>

      <div style={s.row}>
        <input
          type="text"
          value={antwort}
          onChange={(e) => setAntwort(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && pruefen()}
          placeholder="Antwort eingeben"
          style={s.input}
        />
        <button style={s.btn} onClick={pruefen}>
          Prüfen
        </button>
      </div>

      {feedback === "wrong" && <p style={s.wrong}>❌ Falsch, versuche es erneut.</p>}
      {feedback === "correct" && <p style={s.right}>✅ Richtig!</p>}
    </PostenCard>
  );
}
