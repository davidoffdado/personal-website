import { webDevProjects } from "../data/web-dev-projects";
import { Link } from "react-router-dom";


function WebDevProjects() {
  return (
    <main className="main-content">
      <section className="section">
        <h2>Web development</h2>
        <p>Questi sono alcuni dei lavori in web development.</p>

        <div className="projects-list">
          {webDevProjects.map((proj, index) => (
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
          ← Torna alla home
        </Link>
      </section>
    </main>
  );
}

export default WebDevProjects;
