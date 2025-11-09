import ContactSection from "../components/ContactSection";
import "../styles/About.css";

function About() {
  return (
    <main className="about-page">
      {/* ===== SEZIONE 1 ===== */}
      <section className="panel intro-panel">
        <div className="intro-content">
          <span className="small-text">Okay, you're here</span>
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
        <p className="big-paragraph"> Sono David Ruffini e sono nato a Macerata nel 1998.
          <br />
          Mi occupo di analisi dei <span className="highlight">dati</span>, costruisco{" "}
          <span className="highlight">siti web</span> e scrivo pezzi di 
          <span className="highlight"> data journalism</span> o sulla <span className="highlight">probabilità</span>.
        </p>
      </section>

      {/* ===== SEZIONE 3 ===== */}
      <section className="panel">
        <p className="big-paragraph">
          Ho una laurea magistrale in <span className="highlight">Statistica e Data Science</span> e molta indecisione su quello che voglio fare da <span className="highlight">grande</span>, ma forse mi sto avvicinando a capirlo.
        </p>
      </section>

      {/* ===== SEZIONE 4 ===== */}
      <section className="panel">
        <p className="big-paragraph">
          Se non sono al computer sono probabilmente a leggere, al cinema, ad allenarmi, a cucinare o in giro qualche parte.
        </p>
      </section>

      {/* ===== SEZIONE 5 — CONTATTI ===== */}
      <section className="panel contact-panel">
        <ContactSection />
      </section>
    </main>
  );
}

export default About;
