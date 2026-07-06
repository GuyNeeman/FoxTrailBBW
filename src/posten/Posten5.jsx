import { useState } from "react";
import { useNavigate } from "react-router-dom";
import posten5 from "../assets/posten5.png"

export default function Posten5() {
    const [stufen, setStufen] = useState("");
    const navigate = useNavigate();

    const handleConfirm = () => {
        if (Number(stufen) === 67) {
            navigate("/posten6");
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
            <h1 style={{ color: "black" }}>Zeit noch mehr Geld zu verschwenden</h1>

            {/* Bild einfügen */}
            <img
                src={posten5}
                alt="Posten 1"
                style={{
                    width: "100%",
                    maxHeight: "300px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "20px",
                }}
            />

            <p>
                Guy will sich schuhe kaufen.
            </p>

            <p>
                Er findet die Marke New Balance ganz f-f-f-fresh.
            </p>

            <label style={{ display: "block", marginTop: "20px" }}>
                <strong>
                    Wie viele Schuhe der Marke New Balance werden ausgestellt?
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