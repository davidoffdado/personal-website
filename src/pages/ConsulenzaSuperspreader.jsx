import { Link } from "react-router-dom";

const metodo = [
  ["la domanda", "Il modello SIR, la base di molti modelli epidemici, assume che ogni persona abbia lo stesso numero di contatti. Nella realtà ci sono i superspreader. Cosa cambia se si toglie questa ipotesi, e quali parametri contano davvero?"],
  ["il modello", "Ho diviso la popolazione in 30 gruppi in base al numero di contatti giornalieri, distribuiti secondo una legge di potenza governata da un parametro α: più è basso, più superspreader ci sono. Ogni gruppo ha il suo sistema di equazioni differenziali, e i 30 sistemi evolvono insieme."],
  ["il metodo", "Ho confrontato il modello con il SIR classico tramite simulazione e poi ho condotto un'analisi di sensibilità globale (indici di Sobol) su 10.000 combinazioni di parametri estratte a caso. Per ogni parametro l'analisi misura quanta parte della variabilità dei risultati spiega da solo e quanta insieme agli altri."],
  ["strumenti", "R (deSolve, sensitivity)"],
];

const charts = [
  {
    src: "/casi-studio/tesi-curve.png",
    caption: "Quota di infetti nel tempo con diverse distribuzioni dei contatti, a parità di contagiosità e durata della malattia",
  },
  {
    src: "/casi-studio/tesi-sobol.png",
    caption: "Indici di Sobol del primo ordine (effetto da solo) e totali (con le interazioni) per due risultati del modello",
  },
];

export default function ConsulenzaSuperspreader() {
  return (
    <div className="page-content">
      <p className="section-label">
        <Link to="/consulenza">consulenza</Link>
      </p>

      <div className="case-study">

        <div className="case-header">
          <h1 className="case-title">Superspreader: quali parametri contano davvero in un modello statistico?</h1>
          <div className="case-meta">
            <span>Contesto: <strong>tesi di laurea magistrale in Scienze Statistiche, Università di Firenze</strong></span>
            <span>Anno: <strong>2024</strong></span>
            <span>Tipo: <strong>modelli matematici, simulazione, analisi di sensibilità</strong></span>
          </div>
        </div>

        <p className="case-description">
          Ogni modello si regge su ipotesi semplificate. Il lavoro difficile è capire quali ipotesi
          cambiano i risultati e quali no. Nella tesi ho riscritto un modello epidemico classico per
          tenere conto delle differenze nel numero di contatti tra le persone, e poi ho misurato
          quanto ogni parametro pesa sulle previsioni. Lo stesso approccio vale per qualsiasi modello
          previsivo, dal rischio di credito alla domanda di un prodotto.
        </p>

        <div className="case-stats">
          <div className="case-stat">
            <span className="stat-value">30</span>
            <span className="stat-label">sistemi di equazioni differenziali, uno per numero di contatti</span>
          </div>
          <div className="case-stat">
            <span className="stat-value">30% → 45%</span>
            <span className="stat-label">picco di infetti, dal SIR classico al modello con superspreader (α = 2,5)</span>
          </div>
          <div className="case-stat">
            <span className="stat-value">86 → 24</span>
            <span className="stat-label">giorni necessari per arrivare al picco, negli stessi due modelli</span>
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
            Con gli stessi parametri epidemiologici, una popolazione con molti superspreader ha un
            picco più alto e molto più anticipato. L'analisi di sensibilità aggiunge un risultato meno
            ovvio: sull'altezza del picco contagiosità, durata della malattia e distribuzione dei
            contatti agiscono quasi in modo indipendente, mentre sui tempi dell'epidemia contano
            soprattutto le loro combinazioni. Il numero di infetti iniziali, invece, pesa poco. Per
            chi usa un modello del genere significa sapere su quali stime concentrare gli sforzi.
          </p>
        </div>

        <p className="case-note">
          Il grafico delle curve è stato rifatto per il sito rieseguendo il modello. I valori degli
          indici di Sobol sono quelli della tesi, arrotondati.
        </p>

      </div>
    </div>
  );
}
