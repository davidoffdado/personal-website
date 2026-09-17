import { Link } from "react-router-dom";

const press = [
  {
    outlet: "Il Sole 24 Ore",
    title: "Economia circolare, Italia a passo lento: Spagna, Francia e Germania tagliano i rifiuti aziendali",
    url: "https://www.ilsole24ore.com/art/economia-circolare-italia-passo-lento-spagna-francia-e-germania-taglio-rifiuti-aziendali-AG7GcvzC",
  },
  {
    outlet: "Corriere della Sera",
    title: "Italia produce ancora troppi rifiuti aziendali, nuovi impianti di riciclo rallentati dalla burocrazia",
    url: "https://www.corriere.it/pianeta2030/25_febbraio_18/italia-produce-ancora-troppi-rifiuti-aziendali-nuovi-impianti-riciclo-rallentati-burocrazia-a6a7b71a-edd8-11ef-9cee-5d8f4adb52ab.shtml",
  },
  {
    outlet: "Italpress",
    title: "Rifiuti aziendali dimezzati in 20 anni nei paesi UE, Italia in ritardo",
    url: "https://www.italpress.com/rifiuti-aziendali-dimezzati-in-20-anni-nei-paesi-ue-italia-in-ritardo/",
  },
];

const charts = [
  {
    src: "/interzero/all.png",
    caption: "Trend della produzione di rifiuti per paese UE (2004–2022)",
  },
  {
    src: "/interzero/attivita.png",
    caption: "Rifiuti per settore economico: confronto 2012–2022",
  },
  {
    src: "/interzero/attivita-top10.png",
    caption: "Top 10 paesi: produzione di rifiuti per settore",
  },
];

export default function ConsulenzaInterzero() {
  return (
    <div className="page-content">
      <p className="section-label">
        <Link to="/consulenza">← consulenza</Link>
      </p>

      <div className="case-study">

        {/* Header */}
        <div className="case-header">
          <h1 className="case-title">Rifiuti aziendali in Europa: un'analisi su vent'anni di dati</h1>
          <div className="case-meta">
            <span>Cliente: <strong>Interzero</strong></span>
            <span>Anno: <strong>2025</strong></span>
            <span>Tipo: <strong>raccolta dati, analisi statistica, report</strong></span>
          </div>
        </div>

        {/* Description */}
        <p className="case-description">
          Per Interzero, gruppo europeo specializzato in economia circolare, ho raccolto ed elaborato
          dati Eurostat sulla produzione di rifiuti aziendali nei paesi dell'Unione Europea nel periodo
          2004–2022. L'analisi — condotta in R su microdati disaggregati per paese, settore economico
          e tipologia di rifiuto — è stata sintetizzata in un report e in un comunicato stampa poi
          distribuito agli organi di informazione.
        </p>

        {/* Key stats */}
        <div className="case-stats">
          <div className="case-stat">
            <span className="stat-value">−50%</span>
            <span className="stat-label">riduzione rifiuti UE in 20 anni</span>
          </div>
          <div className="case-stat">
            <span className="stat-value">−17,8%</span>
            <span className="stat-label">riduzione Italia nello stesso periodo</span>
          </div>
          <div className="case-stat">
            <span className="stat-value">3°</span>
            <span className="stat-label">posto dell'Italia per volume di rifiuti prodotti</span>
          </div>
        </div>

        {/* Charts */}
        <div className="case-charts">
          {charts.map((c, i) => (
            <figure key={i} className="case-chart">
              <img src={c.src} alt={c.caption} />
              <figcaption>{c.caption}</figcaption>
            </figure>
          ))}
        </div>

        {/* Press coverage */}
        <div className="case-section">
          <p className="section-label">rassegna stampa</p>
          <div className="case-press">
            {press.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="press-card">
                <span className="press-outlet">{p.outlet}</span>
                <span className="press-title">{p.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* PDF */}
        <div className="case-section">
          <p className="section-label">ritaglio stampa</p>
          <a href="/interzero/sole24ore.pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
            Il Sole 24 Ore — pagina 17, 11 febbraio 2025 →
          </a>
        </div>

      </div>
    </div>
  );
}
