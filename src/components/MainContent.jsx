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
            <span className="first-name">David </span>
            <span className="last-name">Ruffini</span>
          </h1>

          <div className="oggetto"></div>

          <p className="hero-subtitle text-xl text-gray-700">
            Statistico, sviluppatore, data journalist
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

      <AnimatedSection id="statistico" color="#c0c0c0ff">
      
      <div className="section-divider"></div>
      
      <div className="thematic-block stat">
        <h2 className="heading-mono text-3xl font-semibold text-blue-200 text-center">
          Statistico
        </h2>

        <p>
          Analizzo i tuoi dati, <br/>
          siano essi aziendali, <br/>
          della tua tesi <br/>
          o di altra natura.
        </p>
      </div>

      <div className="section-divider"></div>

      <div className="thematic-block stat">
        <h2 className="heading-mono">
          Sviluppatore
        </h2>

        <p>Realizzo il tuo sito web, <br/>
        curandone l'indicizzazione <br/>
        e garantendoti future modifiche. <br/>


          <Link
            to="/web-dev-projects"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn-link"
          >
            Guarda i miei progetti →
          </Link>
        </p>
      </div>

      <div className="section-divider"></div>

      <div className="thematic-block dj">
        <h2 className="heading-mono">
          Data journalist
        </h2>

        <p>
          Trasformo i numeri in storie: <br/>
          realizzo articoli e progetti che <br/>
          uniscono analisi e <br/> 
          visualizzazione dei dati. <br/>

          <Link
            to="/articles"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn-link"
          >
            Guarda i miei articoli →
          </Link> <br/>

          <Link
            to="/projects"
            className="btn-link"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Guarda i miei progetti →
          </Link> <br/>

            <a
              href="https://aalea.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leggi àlea →
            </a>
        </p>
      </div>

      <div className="section-divider"></div>

      </AnimatedSection>

      {/* ================================
          CONTATTI
      ================================= */}
      <ContactSection />
    </main>
  );
}

export default MainContent;
