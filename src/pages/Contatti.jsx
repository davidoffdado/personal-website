import { Link } from "react-router-dom";
import { EMAIL, TOPICS, mailto } from "../data/contatti";

export default function Contatti() {
  return (
    <div className="page-content">
      <h1 className="page-title">Collaboriamo?</h1>
      <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>

      <section className="block">
        <p className="section-label">di cosa possiamo parlare</p>
        <div className="cards">
          {Object.entries(TOPICS).map(([key, t]) => (
            <div key={key} className="card">
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
              <p className="card-links">
                <a href={mailto(key)}>scrivimi</a>
                <Link to={t.works}>{t.worksLabel}</Link>
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
