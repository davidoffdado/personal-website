import { Link } from "react-router-dom";

const projects = [
  {
    to: "/consulenza/interzero",
    client: "Interzero",
    title: "Rifiuti aziendali in Europa: un'analisi su vent'anni di dati",
    dek: "Raccolta ed elaborazione di dati Eurostat sulla produzione di rifiuti aziendali nei paesi UE nel periodo 2004–2022, sintetizzati in report e comunicato stampa.",
    year: "2025",
    type: "raccolta dati, analisi statistica, report",
  },
];

export default function Consulenza() {
  return (
    <div className="page-content">
      <p className="section-label">consulenza</p>

      <div className="projects-list">
        {projects.map((p, i) => (
          <Link key={i} to={p.to} className="project-card">
            <h3>{p.title}</h3>
            <p className="dek">{p.dek}</p>
            <p className="meta">{p.client} · {p.year} · {p.type}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
