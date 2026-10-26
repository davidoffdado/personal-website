import { Link } from "react-router-dom";
import Cta from "../components/Cta";

const metodo = [
  ["la domanda", "Chi finanzia o gestisce un piano di investimenti ha bisogno di sapere a che punto è, dove si è fermato e quanto è già stato speso, senza aspettare un report. Ho preso i dati del Piano Banda Ultra Larga e li ho trasformati in una dashboard che risponde da sola a queste domande, per l'Italia e per ogni regione."],
  ["i dati", "Un dataset costruito dalle relazioni del Ministero delle Imprese e del Made in Italy, riorganizzato con uno script in R in uno schema a stella: due tabelle dei fatti (avanzamento per regione, fase e data; valori economici in euro) e tre dimensioni (regioni, fasi, date)."],
  ["il modello", "I dati sono cumulati: ogni rilevazione è lo stock a quella data. Le misure DAX quindi non sommano nel tempo, ma prendono l'ultima rilevazione disponibile nel contesto, così ogni combinazione di filtri (macroarea, bando, regione, data) restituisce numeri corretti. Sopra ci sono il confronto con l'anno precedente, la classifica delle regioni e la quota di lavori contabilizzati."],
  ["strumenti", "Power BI (Power Query, DAX), R, GitHub. Il progetto è in formato PBIP: modello e report sono file di testo, versionati come codice"],
];

const charts = [
  { src: "/casi-studio/pbi-panoramica.png", caption: "Panoramica: numeri chiave, andamento nel tempo e classifica delle regioni, filtrabili per macroarea e bando" },
  { src: "/casi-studio/pbi-fasi.png", caption: "Le tre fasi: progetto definitivo, progetto esecutivo e lavori a confronto, per capire dove si ferma la filiera" },
  { src: "/casi-studio/pbi-regioni.png", caption: "Dettaglio regione: avanzamento delle fasi e valori economici nel tempo per la regione scelta" },
  { src: "/casi-studio/pbi-modello.png", caption: "Il modello dati: due tabelle dei fatti collegate a regioni, fasi e date" },
];

const links = [
  {
    outlet: "GitHub",
    title: "Il progetto completo: dati, modello, misure DAX e report",
    url: "https://github.com/davidoffdado/powerbi-banda-ultra-larga",
  },
];

export default function ConsulenzaPowerBI() {
  return (
    <div className="page-content">
      <p className="section-label">
        <Link to="/consulenza">consulenza</Link>
      </p>

      <div className="case-study">

        <div className="case-header">
          <h1 className="case-title">Una dashboard Power BI per seguire i cantieri della banda ultra larga</h1>
          <div className="case-meta">
            <span>Contesto: <strong>progetto personale, sui dati dell'assegno di ricerca</strong></span>
            <span>Anno: <strong>2026</strong></span>
            <span>Tipo: <strong>dashboard, modello dati, DAX</strong></span>
          </div>
        </div>

        <p className="case-description">
          Gli stessi dati del <Link to="/consulenza/banda-ultra-larga">caso studio sulla banda ultra
          larga</Link>, ma per un altro lettore. L'analisi statistica spiega perché alcune regioni sono
          indietro; la dashboard serve a chi deve controllare l'avanzamento ogni giorno e vuole le
          risposte a portata di filtro: quanti cantieri sono chiusi, in quale fase si blocca ogni
          regione, quanto valgono i lavori già contabilizzati.
        </p>

        <Cta subject="Dashboard">
          Ti serve una dashboard per tenere sotto controllo i tuoi dati?
        </Cta>

        <div className="case-stats">
          <div className="case-stat">
            <span className="stat-value">3</span>
            <span className="stat-label">pagine: panoramica, fasi, dettaglio regione</span>
          </div>
          <div className="case-stat">
            <span className="stat-value">14</span>
            <span className="stat-label">misure DAX su uno schema a stella di 5 tabelle</span>
          </div>
          <div className="case-stat">
            <span className="stat-value">2,6 mld €</span>
            <span className="stat-label">valore dei cantieri avviati, seguito dal 2020 al 2024</span>
          </div>
        </div>

        <div className="case-section">
          <p className="section-label">come ho lavorato</p>
          <dl className="kv">
            {metodo.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>

        <div className="case-charts">
          {charts.map((c, i) => (
            <figure key={i} className="case-chart">
              <img src={c.src} alt={c.caption} />
              <figcaption>{c.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="case-section">
          <p className="section-label">link</p>
          <div className="case-press">
            {links.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="press-card">
                <span className="press-outlet">{p.outlet}</span>
                <span className="press-title">{p.title}</span>
              </a>
            ))}
          </div>
        </div>

        <p className="case-note">
          La dashboard non è pubblicata online: il progetto si scarica da GitHub e si apre con Power BI
          Desktop.
        </p>

      </div>
    </div>
  );
}
