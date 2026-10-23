import { Link } from "react-router-dom";
import { consulenza } from "../data/consulenza";
import Cta from "../components/Cta";

const competenze = [
  ["strumenti", "R, Python, Stata, SQL, Excel, Power BI, GitHub, D3.js"],
  ["attività", "modelli statistici, statistica bayesiana, web scraping, visualizzazioni e dashboard interattive"],
];

export default function Consulenza() {
  return (
    <div className="page-content">
      <h1 className="page-title">Consulenza</h1>
      <div className="intro">
        <p>
          Posso seguire l'intero ciclo del dato: dalla raccolta alla pulizia, dalle analisi descrittive
          ai modelli statistici più complessi, fino all'interpretazione dei risultati. Quando
          necessario, posso automatizzare l'aggiornamento dei dati.
        </p>
      </div>
      <Cta topic="consulenza">Hai dei dati e non sai da dove partire?</Cta>

      <section className="block">
        <p className="section-label">competenze</p>
        <dl className="kv block-body">
          {competenze.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </section>

      <section className="block">
        <p className="section-label">lavori</p>
        <div className="rows block-body">
          {consulenza.map((p) => (
            <Link key={p.to} to={p.to}>
              <span className="row-meta">{p.client}</span>
              <span className="row-title"><span>{p.title}</span></span>
              <span className="row-meta">{p.year}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
