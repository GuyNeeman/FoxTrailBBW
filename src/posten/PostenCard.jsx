import { styles } from "./postenStyles";

export default function PostenCard({ label, title, image, imageAlt, children }) {
  return (
    <div style={styles.page}>
      <div style={styles.box}>
        {label && <p style={styles.label}>{label}</p>}
        <h1 style={styles.title}>{title}</h1>

        {image && <img src={image} alt={imageAlt} style={styles.img} />}

        {children}
      </div>
    </div>
  );
}
