import { projects } from "../data/projects";

function Projects() {
  return (
    <main className="main-content">
      <section className="section">
        <h2>I miei progetti</h2>
        <p>Ecco una selezione di progetti di sviluppo e analisi dati.</p>

        <div className="projects-list">
          {projects.map((proj, index) => (
            <div key={index} className="project-card">
              <h3>
                <a href={proj.url} target="_blank" rel="noopener noreferrer">
                  {proj.title}
                </a>
              </h3>
              <p className="dek">{proj.dek}</p>

              <p className="meta">
                {proj.role && <>{proj.role} · </>}
                {proj.year}
                {proj.tags?.length > 0 && (
                  <> · {proj.tags.join(" — ")}</>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
