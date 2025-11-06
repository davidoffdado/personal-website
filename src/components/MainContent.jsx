import ContactSection from "./ContactSection";
import { Link } from "react-router-dom";

function MainContent() {

  return (
    <main className="main-content">
      {/* Intro */}
      <section id="home" className="section hero">
        <div className="hero-inner">
          <h1 className="hero-name">
            <span className="first-name">David</span>
            <span className="last-name">Ruffini</span>
          </h1>

          <p className="hero-subtitle">
            Statistico, sviluppatore, data journalist
          </p>

          <div className="hero-links">
            <a
              href="https://drive.google.com/file/d/1vNtAIv2O_r0Xsiw0KSw2aWvwWDvdc7AP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              curriculum
            </a>
            <a
              href="https://github.com/davidoffdado"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://linktr.ee/davidruffini"
              target="_blank"
              rel="noopener noreferrer"
            >
              social
            </a>
          </div>
        </div>
      </section>



      {/* STATISTICO */}
      <section id="statistico" className="section">
        
        <h2 className="heading-mono">Statistico</h2>
        <p>
          Mi occupo di analizzare dati complessi per estrarre informazioni utili e supportare decisioni basate sull’evidenza.
        </p>



      </section>

      {/* SVILUPPATORE */}
      <section id="sviluppatore" className="section">
        <h2 className="heading-mono">Sviluppatore</h2>
        <p>
          Scrivo codice pulito e funzionale. Mi piace creare strumenti e siti che rendano i dati accessibili a tutti.
        </p>
        <p>
          <Link to="/web-dev-projects" className="btn-link">Guarda i miei progetti web →</Link>
        </p>
      </section>

      {/* DATA JOURNALIST */}
      <section id="datajournalist" className="section">
        <h2 className="heading-mono">Data journalist</h2>
        <p>
          Trasformo i numeri in storie. Realizzo articoli e progetti che uniscono narrazione e visualizzazione dei dati.
        </p>
        <p>
          <Link to="/articles" className="btn-link">Guarda i miei articoli →</Link>
        </p>
        <p>
          <Link to="/projects" className="btn-link">Guarda i miei progetti →</Link>
        </p>

      </section>

        <ContactSection />
    </main>
  );
}

export default MainContent;
