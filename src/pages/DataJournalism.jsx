import { featuredWorks } from "../data/featured-works";
import { articles } from "../data/articles";
import EmbedCard from "../components/EmbedCard";

export default function DataJournalism() {
  const main = featuredWorks[0];
  const others = featuredWorks.slice(1);

  return (
    <div className="page-content">
      <div className="dj-section">
        <p className="section-label">selected works</p>
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
              <h3>{article.title}</h3>
              {article.dek && <p className="dek">{article.dek}</p>}
              <p className="meta">{article.tags.join(", ")}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
