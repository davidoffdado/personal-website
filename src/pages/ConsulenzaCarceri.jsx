import { Link } from "react-router-dom";
import Cta from "../components/Cta";
import { Embed } from "../components/EmbedCard";
import { featuredWorks } from "../data/featured-works";

// stesso grafico Datawrapper della pagina data journalism: legge i dati dello scraper, quindi è sempre aggiornato
const storico = featuredWorks.find((w) => w.id === "main");

const metodo = [
  ["la domanda", "Il Ministero della Giustizia pubblica i dati di ogni carcere su una pagina separata e mostra solo la situazione del giorno: niente storico, niente file da scaricare. Come si misura il sovraffollamento nel tempo, istituto per istituto?"],
  ["la raccolta", "Uno scraper in R visita ogni giorno le schede di tutti gli istituti e raccoglie detenuti, posti, personale e servizi. Aggiunge regione e coordinate, calcola il tasso di sovraffollamento di ogni carcere e quello nazionale, e integra l'elenco delle morti in carcere di Ristretti Orizzonti."],
  ["l'automazione", "Lo script gira da solo ogni mattina su GitHub Actions, con raccolta in parallelo e nuovi tentativi in caso di errore, e scrive i risultati su Google Sheets. Da lì li legge una pagina interattiva con mappe e serie storiche, che quindi si aggiorna senza interventi manuali."],
  ["strumenti", "R (rvest, furrr, googlesheets4), GitHub Actions, Google Sheets, Svelte"],
];

const links = [
  {
    outlet: "Pagina interattiva",
    title: "Lo stato delle carceri italiane",
    url: "https://www.davidruffini.com/stato-delle-carceri.html",
  },
  {
    outlet: "Codice",
    title: "Il repository dello scraper su GitHub",
    url: "https://github.com/davidoffdado/sovraffollamento-carcerario",
  },
  {
    outlet: "GIJN",
    title: "Tra i dieci migliori lavori di data journalism della settimana",
    url: "https://gijn.org/stories/europes-deadly-heatwave-middle-east-ceasefires/",
  },
];

const press = [
  {
    outlet: "Il Sole 24 Ore",
    title: "Carceri italiane, il sovraffollamento cresce ancora: dal 134% al 139% in otto mesi",
    url: "https://www.infodata.ilsole24ore.com/2026/03/18/carceri-italiane-il-sovraffollamento-cresce-ancora-dal-134-al-139-in-otto-mesi-il-nostro-monitoraggio/",
  },
  {
    outlet: "Il Sole 24 Ore",
    title: "Lo stato della polizia penitenziaria",
    url: "https://www.infodata.ilsole24ore.com/2025/07/08/il-carcere-di-brissogne-e-uno-dei-pochi-istituti-italiani-a-non-versare-in-una-situazione-di-sovraffollamento/",
  },
  {
    outlet: "Il Sole 24 Ore",
    title: "Di carcere si muore, da entrambe le parti delle sbarre",
    url: "https://www.infodata.ilsole24ore.com/2025/07/01/di-carcere-si-muore-da-entrambe-le-parti-delle-sbarre/",
  },
  {
    outlet: "Il Sole 24 Ore",
    title: "Il tasso di sovraffollamento medio delle carceri italiane sfiora il 135%",
    url: "https://www.infodata.ilsole24ore.com/2025/06/23/carceri-il-tasso-di-sovraffollamento-medio-delle-carceri-italiane-sfiora-il-135/",
  },
];

export default function ConsulenzaCarceri() {
  return (
    <div className="page-content">
      <p className="section-label">
        <Link to="/consulenza">consulenza</Link>
      </p>

      <div className="case-study">

        <div className="case-header">
          <h1 className="case-title">Le carceri italiane, monitorate ogni giorno in automatico</h1>
          <div className="case-meta">
            <span>Contesto: <strong>progetto personale, poi usato per Il Sole 24 Ore</strong></span>
            <span>Anno: <strong>2025-oggi</strong></span>
            <span>Tipo: <strong>web scraping, automazione, visualizzazione</strong></span>
          </div>
        </div>

        <p className="case-description">
          Molti dati utili esistono già, ma sparsi su pagine web e senza memoria del passato. Per le
          carceri italiane ho costruito una raccolta automatica che ogni giorno scarica i dati di tutti
          gli istituti, li pulisce, calcola gli indicatori e alimenta una pagina pubblica. Da giugno
          2025 lo storico cresce da solo, e lo stesso schema si applica a prezzi, bandi, annunci o
          qualsiasi fonte da tenere sotto controllo.
        </p>

        <Cta subject="Raccolta e automazione dei dati">
          Hai dei dati da raccogliere o aggiornare in automatico?
        </Cta>

        <div className="case-stats">
          <div className="case-stat">
            <span className="stat-value">190</span>
            <span className="stat-label">istituti penitenziari controllati ogni giorno</span>
          </div>
          <div className="case-stat">
            <span className="stat-value">0</span>
            <span className="stat-label">interventi manuali: la raccolta parte da sola ogni mattina</span>
          </div>
          <div className="case-stat">
            <span className="stat-value">4</span>
            <span className="stat-label">articoli del Sole 24 Ore costruiti su questi dati</span>
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
          <figure className="case-chart">
            <Embed html={storico.embed} />
            <figcaption>Tasso di sovraffollamento nazionale, aggiornato ogni giorno dallo scraper</figcaption>
          </figure>
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

        <div className="case-section">
          <p className="section-label">articoli basati su questi dati</p>
          <div className="case-press">
            {press.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="press-card">
                <span className="press-outlet">{p.outlet}</span>
                <span className="press-title">{p.title}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
