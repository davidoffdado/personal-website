import { articles } from "../data/articles";
import { Link } from "react-router-dom";



function Articles() {
  return (
    <main className="main-content">
      <section className="section">
        <h2>Data journalism</h2>
        <p>Questa è una selezione dei miei articoli di data journalism.</p>
        <div className="articles-list">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="article-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>{article.title}</h3>
              <p className="dek">{article.dek}</p>
              <p className="meta">{article.tags.join(", ")}</p>
            </a>
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
