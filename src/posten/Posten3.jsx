import { useState } from "react";
import manor from "../assets/manor.jpg";

export default function Posten3() {
    const [antwort, setAntwort] = useState("");
    const [meldung, setMeldung] = useState("");

    const pruefen = () => {
        if (antwort.trim().toLowerCase() === "zitrone") {
            setMeldung("✅ Richtig!");
            navigate("/posten4");
        } else {
            setMeldung("❌ Falsch, versuche es erneut.");
        }
    };

    return (
        <div>
            <img
                src={manor}
                alt="Posten 3"
                style={{ maxWidth: '320px', width: '100%', height: 'auto' }}
            />
            <p>
                Gehe zum roten Laden, welcher alles verkauft. Gehe zur
                Parfümabteilung. Nach was riecht das blaue Parfüm der
                Fussballlegende Ronaldo?
            </p>


            <input
                type="text"
                placeholder="Antwort eingeben"
                value={antwort}
                onChange={(e) => setAntwort(e.target.value)}
            />

            <button onClick={pruefen}>Prüfen</button>

            {meldung && <p>{meldung}</p>}
        </div>
    );
}