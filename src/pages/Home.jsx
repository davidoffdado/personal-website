import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import { projects } from "../data/projects";
import { consulenza } from "../data/consulenza";

const COLLABS = [
  "Il Sole 24 Ore",
  "Wired Italia",
  "Senza Filtro",
  "Aliseo Editoriale",
  "SEC Newgate",
];

function ExternalItem({ href, children }) {
  return (
    <p>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </p>
  );
}

export default function Home() {
  return (
    <div className="home">
      <h1>
        David è uno statistico e data journalist. Lavora come data analyst in una società
        di consulenza e racconta storie con i dati per Il Sole 24 Ore.
      </h1>
      <h1 className="home-sub">Qui raccoglie il suo lavoro, diviso in quattro sezioni...</h1>

      <div className="home-sections">
        <section className="home-section">
          <h3>
            <Link to="/data-journalism">Data journalism</Link>
          </h3>
          <p>Articoli e visualizzazioni di dati</p>
          <p className="subhead">Ultimi articoli</p>
          <div className="home-items">
            {articles.slice(0, 6).map((a) => (
              <ExternalItem key={a.url} href={a.url}>
                {a.title}
              </ExternalItem>
            ))}
          </div>
          <Link to="/data-journalism" className="home-more">
            tutti gli articoli →
          </Link>
        </section>

        <section className="home-section">
          <h3>
            <Link to="/consulenza">Consulenza</Link>
          </h3>
          <p>Analisi statistica e data strategy</p>
          <p className="subhead">Lavori</p>
          <div className="home-items">
            {consulenza.map((c) => (
              <p key={c.to}>
                <Link to={c.to}>{c.title}</Link> <span>per {c.client}</span>
              </p>
            ))}
          </div>
          <Link to="/consulenza" className="home-more">
            tutti i lavori →
          </Link>
        </section>

        <section className="home-section">
          <h3>
            <Link to="/progetti">Progetti</Link>
          </h3>
          <p>Analisi, scraping e sviluppo web</p>
          <p className="subhead">Ultimi progetti</p>
          <div className="home-items">
            {projects.slice(0, 5).map((p) => (
              <ExternalItem key={p.url} href={p.url}>
                {p.title}
              </ExternalItem>
            ))}
          </div>
          <Link to="/progetti" className="home-more">
            tutti i progetti →
          </Link>
        </section>

        <section className="home-section">
          <h3>
            <Link to="/universita">Università</Link>
          </h3>
          <p>Ricerca e working papers</p>
          <p className="subhead">In arrivo</p>
          <div className="home-items">
            <p className="home-muted">Temi di ricerca, articoli scientifici e working papers.</p>
          </div>
        </section>
      </div>

      <h3 className="home-block-title">Collaborazioni</h3>
      <div className="home-collabs">
        {COLLABS.map((c) => (
          <p key={c}>{c}</p>
        ))}
      </div>

      <h3 className="home-block-title">Segnalazioni</h3>
      <div className="home-items">
        <p>
          Lo scraper sul sovraffollamento carcerario è stato segnalato dal{" "}
          <a
            href="https://gijn.org/stories/europes-deadly-heatwave-middle-east-ceasefires/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Global Investigative Journalism Network
          </a>
        </p>
      </div>
    </div>
  );
}
