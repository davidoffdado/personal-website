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

      {/* ================================
          STATISTICO (con effetto scroll)
      ================================= */}


      <AnimatedSection id="statistico" color="#b92f2f" prevColor="white">
        <h2 className="heading-mono text-3xl font-semibold text-blue-200 text-center">
          Statistico
        </h2>

        <p>
          Mi occupo dell'analisi dei dati e della loro presentazione sotto forma
          di report interattivi o statici. Gestisco le informazioni dalla loro
          origine fino alla visualizzazione, mettendo le mani al database e
          creando procedure automatizzate per raccogliere e ripulire i dati.
        </p>

        <p>
          Utilizzo R e Python per l'analisi statistica, mentre SQL, SSMS e SSIS
          sono utilizzati per la gestione dei database; infine, progetto la
          visualizzazione dei risultati con Power BI, Tableau e Report Builder.
        </p>

        <p>
          Da statistico e analista dati ho collaborato con aziende e università:
          ABB, Elettromedia, Università Politecnica delle Marche, DMBI e Reply.
        </p>
      </AnimatedSection>

      {/* ================================
          SVILUPPATORE (con effetto scroll)
      ================================= */}
      <AnimatedSection id="sviluppatore" color="#166534" prevColor="white">
        <h2 className="heading-mono">
          Sviluppatore
        </h2>

        <p>Realizzo siti web, con particolare attenzione allo sviluppo front-end.</p>

        <p>
          Utilizzo HTML, CSS e JavaScript, spesso affidandomi a framework come
          React. Dal lato back-end, uso Node.js con Express e database come SQL
          Server o PostgreSQL.
        </p>

        <p>
          Spesso cerco di unire il mondo della data visualization a quello dello
          sviluppo web.
        </p>

        <p>
          <Link
            to="/web-dev-projects"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn-link"
          >
            Guarda i miei progetti →
          </Link>
        </p>
      </AnimatedSection>

      {/* ================================
          DATA JOURNALIST (con effetto scroll)
      ================================= */}
      <AnimatedSection id="datajournalist" color="#db6c17ff" prevColor="white">
        <h2 className="heading-mono">
          Data journalist
        </h2>

        <p>
          Trasformo i numeri in storie: realizzo articoli e progetti che uniscono
          narrazione e visualizzazione dei dati.
        </p>

        <p>
          Utilizzo R e Python per la raccolta e l'analisi dei dati, spesso
          creando web scraper da zero per ottenere i dati necessari. Per la
          visualizzazione, mi affido a librerie come D3.js o a software come
          Flourish e Datawrapper.
        </p>

        <p>
          Il mio{" "}
          <a
            href="https://davidoffdado.github.io/progetto-carceri/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            progetto
          </a>{" "}
          di web scraping automatizzato dei dati sulle carceri italiane è stato
          selezionato tra i top 10 lavori di data journalism nel periodo dal 21
          giugno al 9 luglio, secondo il{" "}
          <a
            href="https://gijn.org/stories/europes-deadly-heatwave-middle-east-ceasefires/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Global Investigative Journalism Network
          </a>
          .
        </p>

        <p>
          Come data journalist, ho collaborato con Il Sole 24 Ore, Wired Italia e
          Aliseo Editoriale.
        </p>

        <p>
          <Link
            to="/articles"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn-link"
          >
            Guarda i miei articoli →
          </Link>
        </p>

        <p>
          <Link
            to="/projects"
            className="btn-link"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Guarda i miei progetti →
          </Link>
        </p>

        <p>
            <a
              href="https://aalea.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leggi la mia newsletter sulla probabilità →
            </a>
        </p>
      </AnimatedSection>

      {/* ================================
          CONTATTI
      ================================= */}
      <ContactSection />
    </main>
  );
}

export default MainContent;
