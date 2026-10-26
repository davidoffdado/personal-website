import { Link } from "react-router-dom";
import Cta from "../components/Cta";

const metodo = [
  ["la domanda", "Il Piano Banda Ultra Larga porta la fibra nelle aree bianche, dove nessun operatore privato avrebbe investito. I lavori dovevano chiudersi tra il 2020 e il 2022: quali regioni sono più indietro, e in quale fase si bloccano?"],
  ["i dati", "Le relazioni periodiche del Ministero delle Imprese e del Made in Italy sullo stato di avanzamento, dal 2020 al 2024. Ho estratto le tabelle e le ho riorganizzate in un unico dataset per regione, fase (progetto definitivo, progetto esecutivo, lavori) e periodo."],
  ["il metodo", "Ho rapportato ogni fase ai cantieri programmati e ho sintetizzato le tre fasi in un indice composito (metodo tassonomico di Wroclaw), che misura la distanza di ogni regione da una regione ideale. L'indice è calcolato con tre scenari di obiettivo: il cronoprogramma, la mediana e il miglior valore osservato. Ho poi raggruppato le regioni con andamento simile (k-means e clustering gerarchico) e stimato un modello a effetti misti per separare il peso dell'anno, della regione e della macroarea."],
  ["strumenti", "R (tidyverse, Compind, lme4, sf), Stata per la consegna dei dataset etichettati"],
];

const charts = [
  {
    src: "/casi-studio/bul-cantieri.png",
    caption: "Cantieri con lavori conclusi in rapporto a quelli programmati, per regione",
  },
  {
    src: "/casi-studio/bul-wroclaw.png",
    caption: "Indice di Wroclaw a dicembre 2024: distanza di ogni regione dalla migliore su tutte e tre le fasi",
  },
];

export default function ConsulenzaBandaUltraLarga() {
  return (
    <div className="page-content">
      <p className="section-label">
        <Link to="/consulenza">consulenza</Link>
      </p>

      <div className="case-study">

        <div className="case-header">
          <h1 className="case-title">Banda ultra larga: a che punto sono i cantieri, regione per regione</h1>
          <div className="case-meta">
            <span>Per: <strong>Università Politecnica delle Marche</strong> (assegno di ricerca)</span>
            <span>Anno: <strong>2024-2025</strong></span>
            <span>Tipo: <strong>analisi statistica, indicatori compositi, clustering</strong></span>
          </div>
        </div>

        <p className="case-description">
          Un piano di investimenti pubblici produce molti numeri, ma pochi dicono davvero dove le cose
          non funzionano. Per il Piano Banda Ultra Larga ho costruito un dataset unico a partire dalle
          relazioni ministeriali e un indicatore che mette a confronto le regioni su tutte le fasi del
          lavoro, non solo sull'ultima. Il risultato: a fine 2024 nessuna regione aveva chiuso tutti i
          cantieri, e i ritardi non nascono ovunque nello stesso punto.
        </p>

        <Cta subject="Analisi dei dati">
          Hai dei dati e vuoi capire cosa raccontano?
        </Cta>

        <div className="case-stats">
          <div className="case-stat">
            <span className="stat-value">11.707</span>
            <span className="stat-label">cantieri programmati in 20 regioni</span>
          </div>
          <div className="case-stat">
            <span className="stat-value">79%</span>
            <span className="stat-label">cantieri con lavori conclusi a dicembre 2024</span>
          </div>
          <div className="case-stat">
            <span className="stat-value">56-93%</span>
            <span className="stat-label">la forbice tra Liguria e Friuli-Venezia Giulia</span>
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
          <p className="section-label">cosa è emerso</p>
          <p className="case-description">
            Marche e Trentino-Alto Adige sono le regioni più vicine all'ideale, Lazio, Liguria e Molise
            le più lontane. Ma guardare tutte le fasi insieme cambia la lettura: in Liguria, Lombardia
            ed Emilia-Romagna i progetti sono quasi tutti approvati e il ritardo si concentra nei lavori
            (in Liguria 86% di progetti definitivi contro 56% di cantieri chiusi), mentre nel Lazio e
            in Molise è tutta la filiera a essere lenta. Sono due problemi diversi, che chiedono
            interventi diversi.
          </p>
        </div>

        <p className="case-note">
          I dati sono pubblici. I grafici di questa pagina sono rielaborazioni fatte per il sito a
          partire dal dataset del progetto. Con gli stessi dati ho costruito anche
          una <Link to="/consulenza/power-bi">dashboard Power BI</Link>.
        </p>

      </div>
    </div>
  );
}
