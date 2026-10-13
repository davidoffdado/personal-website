import { featuredWorks } from "../data/featured-works";
import { articles } from "../data/articles";
import EmbedCard from "../components/EmbedCard";

export default function DataJournalism() {
  const main = featuredWorks[0];
  const others = featuredWorks.slice(1);

  return (
    <div className="page-content">
      <p className="section-label">data journalism</p>
      <p className="about-text page-intro">
        Come data journalist ho collaborato con Il Sole 24 Ore, Wired Italia, Senza Filtro e Aliseo
        Editoriale, scrivendo articoli che mettono i dati al centro dell'informazione.
      </p>
      <p className="about-text page-intro">
        Posso realizzare articoli basati sui dati, supportare le redazioni nell'analisi o creare
        visualizzazioni interattive e progetti di visual journalism, come quelli che pubblico
        su <a href="https://alea.news" target="_blank" rel="noopener noreferrer">àlea</a>.
      </p>

      <div className="dj-section">
        <p className="section-label">in evidenza</p>
        <div className="featured-main">
          <EmbedCard work={main} />
        </div>
        <div className="featured-row">
          {others.map((w) => (
            <EmbedCard key={w.id} work={w} />
          ))}
        </div>
      </div>

      <div className="dj-section">
        <p className="section-label">tutti gli articoli</p>
        <div className="articles-list">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="article-card"
            >
              <h3><span>{article.title}</span></h3>
              {article.dek && <p className="dek">{article.dek}</p>}
              <p className="meta">{article.tags.join(", ")}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
