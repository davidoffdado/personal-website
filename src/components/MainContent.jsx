import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import ContactSection from "./ContactSection";
import InterestsSection from "./InterestsSection";
import FeaturedWorksSection from "./FeaturedWorksSection";


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
        <div className="hero-inner container">
          <h1 className="hero-name">
            Hello.
          </h1>



          <p className="">
            Sono <Link
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn-link"
            >
              David Ruffini
            </Link>  e questo è il mio <a
  href="#featured"
  className="btn-link"
  onClick={(e) => {
    e.preventDefault();
    document
      .getElementById("featured")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
  portfolio
</a> di data journalism.

            Per contattarmi puoi cliccare <a
  href="#contact"
  className="btn-link"
  onClick={(e) => {
    e.preventDefault();
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
  qui
</a>. <br/>

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
          LAVORI IN EVIDENZA
      ================================= */}
      <FeaturedWorksSection />

      {/* ================================
          AREE DI INTERESSE
      ================================= */}
      <InterestsSection />
      

      {/* ================================
          CONTATTI
      ================================= */}
      <ContactSection />
    </main>
  );
}

export default MainContent;
