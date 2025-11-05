import { articles } from "../data/articles";

function Articles() {
  return (
    <main className="main-content">
      <section className="section">
        <h2>I miei articoli</h2>
        <p>Ecco una selezione di lavori pubblicati come data journalist.</p>

        <div className="articles-list">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <h3>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </h3>
              <p className="dek">{article.dek}</p>
              <p className="meta">
                {article.role} · {article.year} · {article.tags.join(" — ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Articles;
