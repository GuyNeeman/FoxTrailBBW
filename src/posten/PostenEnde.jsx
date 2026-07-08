import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostenCard from "./PostenCard";


export default function PostenEnde() {
  const [solved, setSolved] = useState(false);
  const navigate = useNavigate();


  function pruefen() {
    if (solved) return;
    setSolved(true);
    setTimeout(() => navigate("/postenStart"), 2000);
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
