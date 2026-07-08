import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostenCard from "./PostenCard";


export default function PostenStart() {
  const [solved, setSolved] = useState(false);
  const navigate = useNavigate();


  function pruefen() {
    if (solved) return;
    setSolved(true);
    setTimeout(() => navigate("/posten1"), 2000);
  }
  return (
    <PostenCard label="Posten Start" title="Foxtrail Start">

      <p className="posten-text"> Willkommen zum Foxtrail von Silvia, Lenin, Gay und Seeby.</p>

      <p className="posten-text"> Ihr braucht: Ein Smartphone mit mobilen Daten und Motivation.</p>

      <p className="posten-text">  Der Foxtrail dauert ungefähr <strong>45 Minuten</strong>.</p>
      
      <p className="posten-text"> Ihr werdet auf eine Reise geschickt, die euch durch die Stadt führt. Ihr werdet Rätsel lösen, Hinweise finden und Herausforderungen meistern müssen, um ans Ziel zu gelangen. Viel Spaß und viel Erfolg!</p>
      
      <p className="posten-text">  Falls ihr Fragen habt oder Hilfe benötigt, könnt ihr euch jederzeit bei <strong>Lena</strong> melden.</p>
      
      <p className="posten-question">Startet mit dem Foxtrail!</p>

      <button className="posten-button" onClick={pruefen} disabled={solved}>
          Starten
      </button>

    </PostenCard>
  );
}
