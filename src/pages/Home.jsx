import { Link } from "react-router-dom";

const sections = [
  {
    to: "/universita",
    title: "università",
    desc: "ricerca e working papers",
  },
  {
    to: "/data-journalism",
    title: "data journalism",
    desc: "articoli e visualizzazioni di dati",
  },
  {
    to: "/consulenza",
    title: "consulenza",
    desc: "analisi statistica e data strategy",
  },
  {
    to: "/progetti",
    title: "progetti",
    desc: "analisi, scraping e sviluppo web",
  },
  {
    to: "/about",
    title: "about",
    desc: "chi sono",
  },
  {
    to: "/contatti",
    title: "contatti",
    desc: "lavoriamo insieme",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-grid">
        {sections.map((s) => (
          <Link key={s.to} to={s.to} className="home-card">
            <h2 className="home-card-title">{s.title}</h2>
            <p className="home-card-desc">{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
