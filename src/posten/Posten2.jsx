import { useState } from 'react'
import posten2Image from '../assets/posten2.webp'

export default function Posten2() {
  const [antwort, setAntwort] = useState('')
  const [feedback, setFeedback] = useState('')

  const pruefeAntwort = () => {
    const parsed = Number.parseFloat(antwort.replace(',', '.'))
    const istRichtig = Number.isFinite(parsed) && Math.abs(parsed - 12.3) < 0.0001

    if (istRichtig) {
      setFeedback('Richtig! Die Loesung ist 12.3 CHF.')
      return
    }

    setFeedback('Falsch. Versuche es noch einmal.')
  }

  return (
    <div>
      <h2 style= {{color: 'black'}}>Posten 2</h2>

      <img
        src={posten2Image}
        alt="Posten 2"
        style={{ maxWidth: '320px', width: '100%', height: 'auto' }}
      />

      <p>
        Lauf jetzt zum SPAR. Beim SPAR sollst du den Preis von einem normalen Red
        Bull, einem Schoggigipfeli und einer VELO Snus Dose Icy Berry zusammenrechnen.
      </p>

      <div style={{ marginBottom: '12px' }}>
        <label htmlFor="antwort">Deine Antwort in CHF:</label>
        <input
          id="antwort"
          type="text"
          value={antwort}
          onChange={(event) => setAntwort(event.target.value)}
          placeholder="z.B. 10.2"
        />
      </div>

      <button type="button" onClick={pruefeAntwort}>
        Überpruefen
      </button>

      {feedback && <p style={{ marginTop: '12px' }}>{feedback}</p>}
    </div>
  )
}