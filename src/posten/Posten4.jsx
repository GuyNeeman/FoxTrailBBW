import { useState } from "react";

const CORRECT_ANSWER = 4;

// Bild hier einfügen (URL oder importiertes Bild):
const BILD = "src/assets/ubs.png"
export default function FoxtrailPosten4() {
    const [input, setInput] = useState("");
    const [attempts, setAttempts] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const [solved, setSolved] = useState(false);

    function checkAnswer() {
        const val = parseInt(input, 10);
        if (isNaN(val)) { setFeedback("empty"); return; }
        if (val === CORRECT_ANSWER) {
            setFeedback("correct");
            setTimeout(() => setSolved(true), 1000);
            return;
        }
        setAttempts((a) => a + 1);
        setFeedback(val < CORRECT_ANSWER ? "low" : "high");
    }

    function goNext() {
        window.location.href = "#/posten5"; // Link anpassen
    }

    if (solved) {
        return (
            <div style={s.page}>
                <div style={s.box}>
                    <p style={s.emoji}>✅</p>
                    <h2 style={s.title}>Richtig!</h2>
                    <p style={s.text}>Guy hebt sein Geld ab und macht sich auf den Weg zum nächsten Posten.</p>
                    <button style={s.btn} onClick={goNext}>Weiter zu Posten 5 →</button>
                </div>
            </div>
        );
    }

    return (
        <div style={s.page}>
            <div style={s.box}>
                <p style={s.label}>Posten 4</p>
                <h1 style={s.title}>🏦 UBS Winterthur</h1>

                {/* Bild */}
                {BILD ? (
                    <img src={BILD} alt="UBS Winterthur" style={s.img} />
                ) : (
                    <div style={s.imgPlaceholder}>
                        <span style={s.imgPlaceholderText}></span>
                    </div>
                )}

                <p style={s.text}>
                    Nach dem langen Morgen merkt Guy, dass er kein Bargeld mehr hat.
                    Er geht zur UBS-Filiale an der Stadthausstrasse
                </p>

                <hr style={s.hr} />

                <p style={s.question}>
                    Wie viele Bancomaten stehen Guy bei der UBS zur Verfügung?
                </p>

                <div style={s.row}>
                    <input
                        type="number"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
                        placeholder="Anzahl eingeben"
                        style={s.input}
                    />
                    <button style={s.btn} onClick={checkAnswer}>Prüfen</button>
                </div>

                {feedback === "empty" && <p style={s.wrong}>Bitte eine Zahl eingeben.</p>}
                {feedback === "low"   && <p style={s.wrong}>Zu wenig – es sind mehr.</p>}
                {feedback === "high"  && <p style={s.wrong}>Zu viele – es sind weniger.</p>}
                {feedback === "correct" && <p style={s.right}>✓ Richtig!</p>}

                {attempts >= 2 && (
                    <p style={s.hint}>
                        💡 Tipp: Schau auf der UBS-Website beim Standort nach – alle Gerätetypen sind dort aufgelistet.
                    </p>
                )}
            </div>
        </div>
    );
}

const s = {
    page: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        fontFamily: "system-ui, sans-serif",
        background: "#f7f7f7",
    },
    box: {
        background: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: 12,
        padding: "2rem",
        maxWidth: 480,
        width: "100%",
    },
    label:   { fontSize: 12, color: "#999", marginBottom: 4 },
    emoji:   { fontSize: 40, marginBottom: "0.5rem" },
    title:   { fontSize: 22, fontWeight: 600, color: "#111", margin: "0 0 1rem" },
    img: {
        width: "100%",
        height: 200,
        objectFit: "cover",
        borderRadius: 8,
        marginBottom: "1rem",
    },
    imgPlaceholder: {
        width: "100%",
        height: 200,
        background: "#f0f0f0",
        border: "2px dashed #ccc",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1rem",
        textAlign: "center",
    },
    imgPlaceholderText: { fontSize: 14, color: "#999", lineHeight: 1.8 },
    text:    { fontSize: 15, color: "#555", lineHeight: 1.7, margin: "0 0 1rem" },
    hr:      { border: "none", borderTop: "1px solid #eee", margin: "1.25rem 0" },
    question:{ fontSize: 16, fontWeight: 500, color: "#111", marginBottom: "1rem" },
    row:     { display: "flex", gap: 8 },
    input: {
        flex: 1,
        fontSize: 15,
        padding: "0.6rem 0.75rem",
        border: "1px solid #ccc",
        borderRadius: 8,
        outline: "none",
        color: "#111",
    },
    btn: {
        padding: "0.6rem 1.25rem",
        background: "#111",
        color: "#fff",
        border: "none",
        borderRadius: 8,
        fontSize: 15,
        cursor: "pointer",
        whiteSpace: "nowrap",
    },
    wrong: { marginTop: "0.75rem", fontSize: 14, color: "#c0392b" },
    right: { marginTop: "0.75rem", fontSize: 14, color: "#27ae60", fontWeight: 500 },
    hint:  { marginTop: "1rem", fontSize: 13, color: "#888", lineHeight: 1.6 },
};