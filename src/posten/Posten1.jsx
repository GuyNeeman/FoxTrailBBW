import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Posten1() {
    const [stufen, setStufen] = useState("");
    const navigate = useNavigate();

    const handleConfirm = () => {
        if (Number(stufen) === 10) {
            navigate("/posten2");
        } else {
            alert("Leider falsch. Versuche es erneut!");
        }
    };

    return (
        <div
            style={{
                maxWidth: "600px",
                margin: "50px auto",
                padding: "30px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h1>Zeit für das Frühstück 🍽️</h1>

            <p>
                Guy ist ein sehr exotischer Mensch und möchte einen banger Döner
                essen.
            </p>

            <p>
                Guy lässt aber, so tollpatschig wie er ist, den Döner auf der
                Treppe fallen.
            </p>

            <label style={{ display: "block", marginTop: "20px" }}>
                <strong>
                    Wie viele Stufen hat die Treppe im Laden (mit der Etage)?
                </strong>

                <input
                    type="number"
                    value={stufen}
                    onChange={(e) => setStufen(e.target.value)}
                    style={{
                        display: "block",
                        width: "100%",
                        marginTop: "10px",
                        padding: "10px",
                        fontSize: "16px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        boxSizing: "border-box",
                    }}
                />
            </label>

            <button
                onClick={handleConfirm}
                style={{
                    marginTop: "25px",
                    padding: "12px 30px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "#007bff",
                    color: "white",
                    cursor: "pointer",
                }}
            >
                Bestätigen
            </button>
        </div>
    );
}