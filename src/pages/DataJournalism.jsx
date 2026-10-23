import { useState } from "react";
import { featuredWorks } from "../data/featured-works";
import { articles, fromArticle } from "../data/articles";
import EmbedCard from "../components/EmbedCard";
import Cta from "../components/Cta";
import Rows from "../components/Rows";

const ALL = "tutte";
const outlets = [ALL, ...new Set(articles.map((a) => a.tags[0]))];
const yearOf = (a) => a.tags[1].slice(-4);

export default function DataJournalism() {
  const main = featuredWorks[0];
  const others = featuredWorks.slice(1);
  const [outlet, setOutlet] = useState(ALL);

  // archivio raggruppato per anno, filtrabile per testata
  const list = articles.filter((a) => outlet === ALL || a.tags[0] === outlet);
  const years = [...new Set(list.map(yearOf))];

  return (
    <div className="page-content">
      <h1 className="page-title">Data journalism</h1>
      <div className="intro">
        <p>
          Come data journalist ho collaborato con Il Sole 24 Ore, Wired Italia, Senza Filtro e Aliseo
          Editoriale, scrivendo articoli che mettono i dati al centro dell'informazione.
        </p>
        <p>
          Posso realizzare articoli basati sui dati, supportare le redazioni nell'analisi o creare
          visualizzazioni interattive e progetti di visual journalism, come quelli che pubblico
          su <a href="https://alea.news" target="_blank" rel="noopener noreferrer">àlea</a>.
        </p>
      </div>
      <Cta topic="dj">Lavori in una redazione e hai dei dati da raccontare?</Cta>

      <section className="block">
        <p className="section-label">in evidenza</p>
        <div className="block-body featured">
          <div className="featured-main">
            <EmbedCard work={main} />
          </div>
          <div className="featured-row">
            {others.map((w) => (
              <EmbedCard key={w.id} work={w} />
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <p className="section-label">tutti gli articoli</p>
        <div className="block-body">
          <div className="filters">
            {outlets.map((o) => (
              <button key={o} aria-pressed={outlet === o} onClick={() => setOutlet(o)}>
                {o} {o === ALL ? articles.length : articles.filter((a) => a.tags[0] === o).length}
              </button>
            ))}
          </div>
          {years.map((y) => (
            <div key={y}>
              <h2 className="year">{y}</h2>
              <Rows items={list.filter((a) => yearOf(a) === y).map(fromArticle)} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
