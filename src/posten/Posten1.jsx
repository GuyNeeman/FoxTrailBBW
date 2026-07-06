import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostenCard from "./PostenCard";
import { styles as s } from "./postenStyles";
import posten1Image from "../assets/posten1.webp";

export default function Posten1() {
  const [stufen, setStufen] = useState("");
  const [feedback, setFeedback] = useState(null);
  const navigate = useNavigate();

  const pruefen = () => {
    if (Number(stufen) === 10) {
      setFeedback("correct");
      navigate("/posten2");
      return;
    }
    setFeedback("wrong");
  };

  return (
    <PostenCard label="Posten 1" title="🍽️ Zeit für das Frühstück" image={posten1Image} imageAlt="Posten 1">
      <p style={s.text}>
        Guy ist ein sehr exotischer Mensch und möchte einen banger Döner essen.
      </p>
      <p style={s.text}>
        Guy lässt aber, so tollpatschig wie er ist, den Döner auf der Treppe fallen.
      </p>

      <hr style={s.hr} />

      <p style={s.question}>
        Wie viele Stufen hat die Treppe im Laden (mit der oberen Etage)?
      </p>

      <div style={s.row}>
        <input
          type="number"
          value={stufen}
          onChange={(e) => setStufen(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && pruefen()}
          placeholder="Anzahl eingeben"
          style={s.input}
        />
        <button style={s.btn} onClick={pruefen}>
          Prüfen
        </button>
      </div>

      {feedback === "wrong" && <p style={s.wrong}>Leider falsch. Versuche es erneut!</p>}
      {feedback === "correct" && <p style={s.right}>✓ Richtig!</p>}
    </PostenCard>
  );
}
