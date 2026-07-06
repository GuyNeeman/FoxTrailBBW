import { useState } from "react";

export default function Posten3() {
    const [antwort, setAntwort] = useState("");
    const [meldung, setMeldung] = useState("");

    const pruefen = () => {
        if (antwort.trim().toLowerCase() === "zitrone") {
            setMeldung("✅ Richtig!");
        } else {
            setMeldung("❌ Falsch, versuche es erneut.");
        }
    };

    return (
        <div>
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