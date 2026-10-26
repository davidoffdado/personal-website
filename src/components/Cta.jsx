import { EMAIL, mailto } from "../data/contatti";

// banner nero "scrivimi" sotto la descrizione delle pagine; la mail parte con l'oggetto del tema,
// oppure con un oggetto e un'etichetta propri (subject, label)
export default function Cta({ topic, subject, label = "scrivimi", children }) {
  const href = subject ? `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}` : mailto(topic);
  return (
    <div className="cta">
      <p>{children}</p>
      <a href={href}>{label}</a>
    </div>
  );
}
