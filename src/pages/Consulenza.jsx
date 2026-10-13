import { Link } from "react-router-dom";
import { consulenza } from "../data/consulenza";

export default function Consulenza() {
  return (
    <div className="page-content">
      <p className="section-label">consulenza</p>
      <p className="about-text page-intro">
        Ho lavorato come consulente esterno per un'agenzia di comunicazione, realizzando analisi
        dei dati e report. Vorrei contribuire anche a progetti che richiedano analisi statistiche
        più complesse e una gestione dei dati più articolata.
      </p>

      <div className="projects-list">
        {consulenza.map((p, i) => (
          <Link key={i} to={p.to} className="project-card">
            <h3><span>{p.title}</span></h3>
            <p className="dek">{p.dek}</p>
            <p className="meta">{p.client} · {p.year} · {p.type}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
