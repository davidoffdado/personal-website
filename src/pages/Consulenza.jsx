import { Link } from "react-router-dom";
import { consulenza, fromCaso } from "../data/consulenza";
import Cta from "../components/Cta";
import Rows from "../components/Rows";

// pagine di servizio, una per tipo di cliente
const servizi = [
  {
    to: "/consulenza/pmi",
    title: "Dati e automazione per le PMI",
    desc: "Dati in ordine, lavori ripetitivi automatizzati e cruscotti che si aggiornano da soli.",
  },
  {
    to: "/consulenza/analisi-statistiche",
    title: "Analisi statistiche",
    desc: "Per aziende, enti e centri di ricerca: modelli, previsioni e valutazioni di impatto.",
  },
];

const competenze = [
  ["strumenti", "R, Python, Stata, SQL, Excel, Power BI, GitHub, D3.js"],
  ["attività", "modelli statistici, web scraping, visualizzazioni e dashboard interattive"],
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
        <p className="section-label">servizi</p>
        <div className="cards cards-2">
          {servizi.map((s) => (
            <Link key={s.to} className="card" to={s.to}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="block">
        <p className="section-label">casi studio</p>
        <div className="block-body">
          <Rows items={consulenza.map(fromCaso)} />
        </div>
      </section>

      <section className="block">
        <p className="section-label">competenze</p>
        <dl className="kv block-body">
          {competenze.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </section>
    </div>
  );
}
