import "./posten.css";

const TOTAL_POSTEN = 5;

export default function PostenCard({ step, label, title, image, imageAlt, children }) {
  return (
    <div className="posten-page">
      {step && (
        <div className="posten-progress">
          {Array.from({ length: TOTAL_POSTEN }, (_, i) => i + 1).map((n) => (
            <span
              key={n}
              className={
                "posten-progress-dot" +
                (n === step ? " is-current" : n < step ? " is-done" : "")
              }
            />
          ))}
        </div>
      )}

      <div className="posten-card">
        {label && <p className="posten-label">{label}</p>}
        <h1 className="posten-title">{title}</h1>

        {image && <img src={image} alt={imageAlt} className="posten-image" />}

        {children}
      </div>
    </div>
  );
}
