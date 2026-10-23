import { mailto } from "../data/contatti";

// banner nero "scrivimi" sotto la descrizione delle pagine; la mail parte con l'oggetto del tema
export default function Cta({ topic, children }) {
  return (
    <div className="cta">
      <p>{children}</p>
      <a href={mailto(topic)}>scrivimi</a>
    </div>
  );
}
