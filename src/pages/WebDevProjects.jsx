import { webDevProjects } from "../data/web-dev-projects";

function WebDevProjects() {
  return (
    <main className="main-content">
      <section className="section">
        <h2>Progetti di sviluppo web</h2>
        <p>Ecco alcuni lavori di programmazione e sviluppo frontend e backend.</p>

        <div className="projects-list">
          {webDevProjects.map((proj, index) => (
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
                {proj.tags?.length > 0 && <> · {proj.tags.join(" — ")}</>}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default WebDevProjects;
