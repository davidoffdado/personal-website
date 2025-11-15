import { projects } from "../data/projects";
import { Link } from "react-router-dom";


function Projects() {
  return (
    <main className="main-content">
      <section className="section">
        <h2>Data journalism</h2>
        <p>Questi sono alcuni dei miei progetti di data journalism.</p>

<div className="projects-list">
  {projects.map((proj, index) => (
    <a
      key={index}
      href={proj.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <h3>{proj.title}</h3>
      <p className="dek">{proj.dek}</p>

      <p className="meta">
        {proj.role && <>{proj.role} · </>}
        {proj.year}
        {proj.tags?.length > 0 && <> · {proj.tags.join(" — ")}</>}
      </p>
    </a>
  ))}
</div>



        <Link to="/" className="btn-link" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ← Torna alla Home
        </Link>
      </section>
    </main>
  );
}

export default Projects;
