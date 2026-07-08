import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostenCard from "./PostenCard";
import posten6Image from "../assets/posten7.jpg";

export default function Posten6() {
  const [stufen, setStufen] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [solved, setSolved] = useState(false);
  const navigate = useNavigate();


  function pruefen() {
    if (solved) return;
    setSolved(true);
    setTimeout(() => navigate("/posten1"), 2000);
  }
  return (
    <PostenCard step={6} label="Posten Ende" title="Du hast es geschafft!">
      <p className="posten-text">Ihr habt den Foxtrail geschafft. Viel Spass beim zurücklaufen😘</p>

      <p className="posten-question">Lauft jetzt wieder zurück zu der BBW!</p>

      <button className="posten-button" onClick={pruefen} disabled={solved}>
          Neustarten
      </button>

    </PostenCard>
  );
}
