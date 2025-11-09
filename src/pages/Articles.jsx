import { articles } from "../data/articles";
import { Link } from "react-router-dom";



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
                {article.tags.join(", ")}
              </p>
            </div>
          ))}
        </div>

        <Link to="/" className="btn-link" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ← Torna alla home
        </Link>
      </section>
    </main>
  );
}

export default Articles;
