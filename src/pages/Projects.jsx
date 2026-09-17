import { projects } from "../data/projects";

function Projects() {
  return (
    <div className="page-content">
      <p className="section-label">progetti</p>
      <div className="projects-list">
        {projects.map((proj, index) => (
          <a
            key={index}
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>{proj.title}</h3>
            {proj.dek && <p className="dek">{proj.dek}</p>}
            <p className="meta">
              {proj.role && <>{proj.role} · </>}
              {proj.year}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
