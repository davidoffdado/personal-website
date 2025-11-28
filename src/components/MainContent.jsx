import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import ContactSection from "./ContactSection";


/**
 * MainContent.jsx
 * Sezioni principali del sito con effetto scroll animato.
 */
function MainContent() {
  return (
    <main className="main-content overflow-x-hidden bg-transparent">
      {/* ================================
          HERO / INTRO
      ================================= */}
      <section
        id="home"
      >
        <div className="hero-inner">
          <h1 className="hero-name">
            Hello.
          </h1>



          <p className="">
            Sono David e sono uno statistico. <br/><br/>
            Lavoro come data analyst in una società di consulenza e come data journalist, realizzando <Link
            to="/articles"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn-link"
            >
              articoli
            </Link> e <Link
              to="/projects"
              className="btn-link"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              progetti
            </Link>. <br/>
              A volte, sviluppo <Link
              to="/web-dev-projects"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn-link"
            >
              siti web
            </Link>. <br/><br/>
            Se vuoi saperne di più su di me e sulle realtà con cui ho già collaborato, visita la sezione <Link
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn-link"
            >
              about
            </Link>. <br/> Se mi vuoi contattare, ti basta scorrere un po' più giù. <br/><br/>

          </p>

          <div className="hero-links flex gap-6 text-lg">
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

      

      {/* ================================
          CONTATTI
      ================================= */}
      <ContactSection />
    </main>
  );
}

export default MainContent;
