import { Link } from "react-router-dom";
import { consulenza } from "../data/consulenza";

const competenze = [
  [
    "R",
    "Python",
    "Stata",
    "SQL",
    "Excel",
    "Power BI",
    "GitHub",
    "D3.js",
  ],
  [
    "modelli statistici",
    "statistica bayesiana",
    "web scraping",
    "visualizzazioni e dashboard interattive",
  ],
];

export default function Consulenza() {
  return (
    <div className="page-content">
      <p className="section-label">consulenza</p>
      <p className="about-text page-intro">
        Posso seguire l'intero ciclo del dato: dalla raccolta alla pulizia, dalle analisi descrittive
        ai modelli statistici più complessi, fino all'interpretazione dei risultati. Quando
        necessario, posso automatizzare l'aggiornamento dei dati.
      </p>

      <div className="dj-section">
        <p className="section-label">competenze</p>
        <p className="about-text">
          {competenze.map((riga, i) => (
            <span key={i}>{riga.join(", ")}<br /></span>
          ))}
        </p>
      </div>

      <div className="dj-section">
        <p className="section-label">in evidenza</p>
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
    </div>
  );
}
