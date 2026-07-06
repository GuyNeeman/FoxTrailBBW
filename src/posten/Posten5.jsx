import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostenCard from "./PostenCard";
import { styles as s } from "./postenStyles";
import posten5Image from "../assets/posten5.png";

export default function Posten5() {
  const [stufen, setStufen] = useState("");
  const [feedback, setFeedback] = useState(null);
  const navigate = useNavigate();

  const pruefen = () => {
    if (Number(stufen) === 67) {
      setFeedback("correct");
      navigate("/posten6");
      return;
    }
    setFeedback("wrong");
  };

  return (
    <PostenCard label="Posten 5" title="👟 Zeit noch mehr Geld zu verschwenden" image={posten5Image} imageAlt="Posten 5">
      <p style={s.text}>Guy will sich Schuhe kaufen.</p>
      <p style={s.text}>Er findet die Marke New Balance ganz f-f-f-fresh.</p>

      <hr style={s.hr} />

      <p style={s.question}>Wie viele Schuhe der Marke New Balance werden ausgestellt?</p>

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
