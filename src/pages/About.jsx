import ContactSection from "../components/ContactSection";
import "../styles/About.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".highlight");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">
      {/* ===== SEZIONE 1 ===== */}
      <section className="panel intro-panel">
        <div className="intro-content">
          <span className="small-text">Hey, you're here :)</span>
          <h1 className="title">
            Do you wanna<br />know something else
          </h1>
          <div className="image-box"></div>
          <h2 className="subtitle">
            about who <br /> I am?
          </h2>
        </div>
      </section>

      {/* ===== SEZIONE 2 ===== */}
      <section className="panel">
        <p className="big-paragraph">
          
           Sono <span className="highlight">David Ruffini</span> e sono nato a Macerata nel 1998.
          <br />
        </p>
      </section>

      {/* ===== SEZIONE 3 ===== */}
      <section className="panel">
        
        <p className="big-paragraph">
          Ho una laurea triennale in <span className="highlight">Economia</span> conseguita a Macerata. <br/>
          Nella mia tesi ho trattato il tema della <span className="highlight">probabilità</span> e della prevedibilità dei mercati finanziari, analizzando l'ipotesi di efficienza di tre diverse borse valori.
        </p>
      </section>

      <section className="panel">
        <p className="big-paragraph">
          Successivamente alla triennale, mi sono trasferito a Firenze per il corso magistrale in <span className="highlight">Statistica e Data Science</span>. <br/>
          Qui, il mio lavoro di tesi si è rivolto ai modelli matematici utilizzati in <span className="highlight"> epidemiologia</span>, unendo <span className="highlight">teoria dei valori estremi</span> e <span className="highlight"> teoria delle reti sociali</span> alla modellizzazione delle malattie infettive.
        </p>
      </section>

      {/* ===== SEZIONE 4 ===== */}
      <section className="panel">
        <p className="big-paragraph">
          Terminati gli studi, ho iniziato a lavorare nel settore privato come <span className="highlight">data analyst</span> e a collaborare con alcune testate giornalistiche come <span className="highlight">data journalist</span>.
        </p>
      </section>

            {/* ===== SEZIONE 4 ===== */}
      <section className="panel">
        <p className="big-paragraph">
          Tra i vari progetti, ho realizzato uno <span className="highlight">scraper</span> che raccoglie i dati giornalieri sulle <span className="highlight"> carceri italiane</span> e aggiorna quotidianamente i relativi grafici e mappe:
          il           <a
            href="https://davidoffdado.github.io/progetto-carceri/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >progetto</a> è stato segnalato dal           <a
            href="https://gijn.org/stories/europes-deadly-heatwave-middle-east-ceasefires/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >GIJN</a>.
        </p>
      </section>


{/* ===== SEZIONE 6 — COLLABORAZIONI ===== */}
<section className="panel collaborations-panel">
  <h2 className="collab-title">Collaborazioni da data analyst</h2>
        <div className="line"></div>

  <div className="scrolling-text">
    <div className="scrolling-inner">
      <span>
        <strong>ABB</strong> • <strong>Elettromedia</strong> • <strong>Università Politecnica delle Marche</strong> • <strong>DMBI</strong> • <strong>Reply</strong> •
      </span>
      <span>
        <strong>ABB</strong> • <strong>Elettromedia</strong> • <strong>Università Politecnica delle Marche</strong> • <strong>DMBI</strong> • <strong>Reply</strong> 
      </span>
    </div>
    <div className="line"></div>
  </div>
</section>

{/* ===== SEZIONE 6 — COLLABORAZIONI ===== */}
<section className="panel collaborations-panel">
  <h2 className="collab-title">Collaborazioni da data journalist</h2>
      <div className="line"></div>
  <div className="scrolling-text">
    <div className="scrolling-inner">
      <span>
        <strong>Il Sole 24 Ore</strong> • <strong>Wired Italia</strong> • <strong>Aliseo Editoriale</strong> • <strong>SEC Newgate</strong> •
      </span>
      <span>
       <strong>Il Sole 24 Ore</strong> • <strong>Wired Italia</strong> • <strong>Aliseo Editoriale</strong> • <strong>SEC Newgate</strong> 
      </span>
    </div>
        <div className="line"></div>
  </div>
</section>




      {/* ===== SEZIONE 5 — CONTATTI ===== */}
      <section className="panel contact-panel">
        <ContactSection />
      </section>



    </main>
  );
}

export default About;
