import { Link } from "react-router-dom";
import Cta from "../components/Cta";

// pagina di servizio per aziende, enti e centri di ricerca: analisi statistiche complesse
const servizi = [
  ["modelli e inferenza", "Regressioni, modelli multilivello e modelli per dati di conteggio o di durata: capire quali fattori contano davvero e quanto, separando gli effetti dal rumore."],
  ["valutazione di impatto", "Misurare l'effetto di una politica, un intervento o una campagna, confrontandolo con cosa sarebbe successo senza."],
  ["previsioni", "Serie storiche e modelli di previsione per vendite, domanda o indicatori, con un intervallo di incertezza e non solo un numero."],
  ["indagini e campioni", "Disegno del campione, questionari, pesi e stima dei risultati sulla popolazione."],
  ["rischi ed eventi rari", "Teoria dei valori estremi per stimare la probabilità di eventi rari ma costosi, come grandi perdite o picchi di domanda."],
  ["simulazione", "Modelli matematici e analisi di sensibilità per capire quali parametri pesano di più sul risultato."],
];

const metodo = [
  ["la domanda prima", "Si parte da cosa serve decidere, non dal metodo: a volte basta un'analisi semplice fatta bene."],
  ["l'incertezza dichiarata", "Ogni stima arriva con il suo margine di errore e con i limiti dei dati scritti chiaramente."],
  ["risultati riproducibili", "Il codice viene consegnato insieme ai risultati: l'analisi si può rifare, controllare e aggiornare."],
  ["due livelli di lettura", "Un report per chi deve decidere, in linguaggio semplice, e un'appendice tecnica per chi vuole verificare."],
];

const esempi = [
  { to: "/consulenza/superspreader", testo: "un modello epidemiologico con analisi di sensibilità globale (tesi magistrale)" },
  { to: "/consulenza/interzero", testo: "vent'anni di dati Eurostat sui rifiuti aziendali, per Interzero" },
  { to: "/consulenza/banda-ultra-larga", testo: "lo stato dei cantieri della banda ultra larga, per l'Università Politecnica delle Marche" },
  { to: "/consulenza/coopservice", testo: "furti, rapine e incendi negli esercizi commerciali, per Coopservice" },
];

const passi = [
  ["1. primo incontro", "Gratuito: parliamo della domanda, dei dati disponibili e dei tempi."],
  ["2. proposta", "Metodo, cosa consegno e quando, a prezzo fisso concordato prima di iniziare."],
  ["3. analisi", "Con aggiornamenti intermedi, così le scelte importanti si discutono insieme."],
  ["4. consegna", "Report, codice e, se serve, una presentazione dei risultati. Resto disponibile per domande e revisioni, anche per un articolo scientifico."],
  ["strumenti", "R e Python, Quarto per report riproducibili."],
];

export default function ConsulenzaStatistica() {
  return (
    <div className="page-content">
      <p className="section-label">
        <Link to="/consulenza">consulenza</Link>
      </p>

      <div className="case-study">

        <div className="case-header">
          <h1 className="case-title">Analisi statistiche rigorose, spiegate in modo chiaro</h1>
          <div className="case-meta">
            <span>Per: <strong>aziende, enti pubblici, centri di ricerca</strong></span>
            <span>Tipo: <strong>modelli, previsioni, valutazioni di impatto</strong></span>
          </div>
        </div>

        <p className="case-description">
          Quando una tabella o un grafico non bastano più: bisogna capire le cause di un fenomeno,
          misurare l'effetto di un intervento, prevedere come andrà o dire quanto ci si può fidare di un
          numero.
        </p>

        <Cta subject="Analisi statistica" label="scrivimi">
          Hai una domanda a cui i dati dovrebbero rispondere?
        </Cta>

        <div className="case-section">
          <p className="section-label">cosa posso fare</p>
          <dl className="kv">
            {servizi.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>

        <div className="case-section">
          <p className="section-label">come lavoro</p>
          <dl className="kv">
            {metodo.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>

        <div className="case-section">
          <p className="section-label">esempi</p>
          <ul className="case-description">
            {esempi.map((e) => (
              <li key={e.to}><Link to={e.to}>{e.testo}</Link></li>
            ))}
          </ul>
        </div>

        <div className="case-section">
          <p className="section-label">come funziona</p>
          <dl className="kv">
            {passi.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>

      </div>
    </div>
  );
}
