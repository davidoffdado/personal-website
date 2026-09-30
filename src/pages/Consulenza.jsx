import { Link } from "react-router-dom";
import { consulenza } from "../data/consulenza";

export default function Consulenza() {
  return (
    <div className="page-content">
      <p className="section-label">consulenza</p>

      <div className="projects-list">
        {consulenza.map((p, i) => (
          <Link key={i} to={p.to} className="project-card">
            <h3>{p.title}</h3>
            <p className="dek">{p.dek}</p>
            <p className="meta">{p.client} · {p.year} · {p.type}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
