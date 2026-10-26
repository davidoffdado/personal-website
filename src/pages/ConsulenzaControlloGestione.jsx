import { Link } from "react-router-dom";
import Cta from "../components/Cta";

// pagina scritta per un titolare d'azienda: domande concrete al posto del metodo
const domande = [
  {
    domanda: "Quanto sto guadagnando davvero?",
    testo: "Ad Ardesia i ricavi crescono, +5,6% negli ultimi 12 mesi, ma il margine lordo è sceso dal 42,6% al 37,4%. L'azienda se ne sarebbe accorta in tempi utili e da dove nasce questo calo? La pagina dei clienti mostra dove nasce il problema: lo sconto medio è passato dall'8,6% al 14,2%, spinto soprattutto dai grossisti.",
    immagini: [
      { src: "/casi-studio/pmi-sintesi.png", caption: "La sintesi: ricavi, crescita e margine degli ultimi 12 mesi, crediti scaduti e magazzino" },
      { src: "/casi-studio/pmi-clienti.png", caption: "Clienti e prodotti: margine e sconto per canale e per cliente, in rosso chi rende meno della media" },
    ],
  },
  {
    domanda: "Chi mi deve dei soldi?",
    testo: "Il cruscotto divide i crediti per fascia di scadenza e mette in cima i clienti che pagano in ritardo. Ad Ardesia un solo grossista vale più di un terzo dei 540.000 euro scaduti: è la prima telefonata da fare.",
    immagini: [
      { src: "/casi-studio/pmi-incassi.png", caption: "Gli incassi: crediti aperti per fascia di scadenza e clienti con più scaduto" },
    ],
  },
  {
    domanda: "Cosa ho fermo in magazzino?",
    testo: "Circa un quarto del valore del magazzino è merce delle stagioni passate che non si vende da oltre sei mesi. Vederla articolo per articolo aiuta a decidere cosa mandare in outlet e quanto produrre per la prossima collezione.",
    immagini: [
      { src: "/casi-studio/pmi-magazzino.png", caption: "Il magazzino: valore per stagione di collezione e articoli fermi da più tempo" },
    ],
  },
];

const passi = [
  ["1. check-up", "Un incontro di un'ora, gratuito: guardiamo insieme quali dati avete, dove stanno e quali domande oggi restano senza risposta."],
  ["2. progetto", "Collego il gestionale e i file Excel, metto in ordine i dati e costruisco il cruscotto rispettando le vostre richieste e il branding aziendale. Il prezzo è fisso e concordato prima di iniziare; di solito servono 2-4 settimane."],
  ["3. aggiornamento", "I dati si aggiornano da soli. Con un canone mensile mi occupo della manutenzione e delle modifiche e, se serve, leggiamo i numeri insieme una volta al mese."],
  ["strumenti", "Power BI collegato al vostro gestionale, oppure Excel se basta."],
];

export default function ConsulenzaControlloGestione() {
  return (
    <div className="page-content">
      <p className="section-label">
        <Link to="/consulenza">consulenza</Link>
      </p>

      <div className="case-study">

        <div className="case-header">
          <h1 className="case-title">Sapere ogni mattina come va l'azienda, senza rifare i report a mano</h1>
          <div className="case-meta">
            <span>Per: <strong>piccole e medie imprese</strong></span>
            <span>Esempio: <strong>Calzaturificio Ardesia, azienda inventata con dati simulati</strong></span>
            <span>Tipo: <strong>cruscotto di controllo di gestione</strong></span>
          </div>
        </div>

        <p className="case-description">
          Nella maggior parte delle piccole e medie imprese i numeri ci sono già: nel gestionale, nei
          file Excel dell'amministrazione e negli estratti conto. Il problema è metterli insieme, ma un
          report automatizzato collegato al gestionale o, in generale, alla fonte dati risolve il
          problema, mostrando ogni volta i dati più aggiornati. Questo è un esempio di cosa cambia quando
          quei dati vengono collegati e aggiornati in automatico, costruito su un'azienda inventata del
          distretto calzaturiero marchigiano.
        </p>

        <Cta subject="Check-up dei dati aziendali" label="prenota un check-up gratuito">
          Vuoi sapere cosa dicono i dati della tua azienda?
        </Cta>

        {domande.map((d) => (
          <div key={d.domanda} className="case-section">
            <p className="section-label">{d.domanda.toLowerCase()}</p>
            <p className="case-description">{d.testo}</p>
            <div className="case-charts">
              {d.immagini.map((c) => (
                <figure key={c.src} className="case-chart">
                  <img src={c.src} alt={c.caption} />
                  <figcaption>{c.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}

        <div className="case-section">
          <p className="section-label">come funziona</p>
          <dl className="kv">
            {passi.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>

        <div className="case-section">
          <p className="section-label">per chi è tecnico</p>
          <p className="case-description">
            Modello a stella con tre tabelle dei fatti (vendite, scadenze, magazzino) e tre dimensioni,
            29 misure DAX tra confronti con l'anno precedente, ultimi 12 mesi e formattazione
            condizionale, tema e navigazione costruiti sul marchio. Il progetto completo, dati inclusi,
            è su <a href="https://github.com/davidoffdado/powerbi-controllo-gestione-pmi" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
          <figure className="case-chart">
            <img src="/casi-studio/pmi-modello.png" alt="Il modello dati del cruscotto" />
            <figcaption>Il modello dati: vendite, scadenze e magazzino collegati a clienti, prodotti e calendario</figcaption>
          </figure>
        </div>

        <p className="case-note">
          Calzaturificio Ardesia non esiste: nomi, clienti e numeri sono simulati. Il cruscotto è lo
          stesso che costruirei per un'azienda vera.
        </p>

      </div>
    </div>
  );
}
