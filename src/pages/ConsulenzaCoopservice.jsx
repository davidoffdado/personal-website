import { Link } from "react-router-dom";

const charts = [
  {
    src: "/coopservice/mappa-furti-regioni.png",
    caption: "Furti negli esercizi commerciali ogni mille imprese, per regione (2023)",
  },
  {
    src: "/coopservice/furti-regioni-isto.png",
    caption: "Classifica regionale dei furti negli esercizi commerciali ogni mille imprese",
  },
  {
    src: "/coopservice/variazione-furti-regioni.png",
    caption: "Variazione percentuale dei furti negli esercizi commerciali tra il 2019 e il 2023",
  },
];

export default function ConsulenzaCoopservice() {
  return (
    <div className="page-content">
      <p className="section-label">
        <Link to="/consulenza">← consulenza</Link>
      </p>

      <div className="case-study">

        {/* Header */}
        <div className="case-header">
          <h1 className="case-title">Sicurezza in Italia: furti, rapine e incendi negli esercizi commerciali, 2019-2023</h1>
          <div className="case-meta">
            <span>Cliente: <strong>Coopservice</strong> (tramite SEC Newgate)</span>
            <span>Anno: <strong>2025</strong></span>
            <span>Tipo: <strong>raccolta dati, analisi statistica, report</strong></span>
          </div>
        </div>

        {/* Description */}
        <p className="case-description">
          Per l'Istituto di Vigilanza Coopservice, su incarico dell'agenzia SEC Newgate, ho realizzato
          un'analisi sulla sicurezza degli esercizi commerciali italiani, mettendo a confronto i dati
          del 2023 con quelli del 2019. Lo studio incrocia le denunce ISTAT per furti e rapine con i
          dati del Corpo nazionale dei Vigili del Fuoco su cause, luoghi e sostanze all'origine degli
          incendi, a livello sia regionale sia provinciale.
        </p>

        {/* Key stats */}
        <div className="case-stats">
          <div className="case-stat">
            <span className="stat-value">+7,8%</span>
            <span className="stat-label">furti e rapine in Lombardia dal 2019, unica grande regione in aumento</span>
          </div>
          <div className="case-stat">
            <span className="stat-value">−71%</span>
            <span className="stat-label">il calo più marcato d'Italia, in Basilicata</span>
          </div>
          <div className="case-stat">
            <span className="stat-value">305</span>
            <span className="stat-label">denunce ogni 10.000 imprese a Milano nel 2023, la provincia più colpita</span>
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

      </div>
    </div>
  );
}
