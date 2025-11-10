import ContactSection from "../components/ContactSection";
import "../styles/About.css";

function About() {
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
        <p className="big-paragraph"> Sono David Ruffini e sono nato a Macerata nel 1998.
          <br />
          Analizzo <span className="highlight">dati</span>, costruisco{" "}
          <span className="highlight">siti web</span> e scrivo pezzi di 
          <span className="highlight"> data journalism</span> o sulla <span className="highlight">probabilità</span>.
        </p>
      </section>

      {/* ===== SEZIONE 3 ===== */}
      <section className="panel">
        <p className="big-paragraph">
          Successivamente alla laurea triennale in <span className="highlight">Economia</span>, conseguita a Macerata, mi sono trasferito a Firenze per il corso magistrale in <span className="highlight">Statistica e Data Science</span>.
        </p>
      </section>

      {/* ===== SEZIONE 4 ===== */}
      <section className="panel">
        <p className="big-paragraph">
          Terminati gli studi, ho iniziato a lavorare nel settore privato come <span className="highlight">data analyst</span> e a collaborare con alcune testate giornalistiche come <span className="highlight">data journalist</span>. Nel frattempo, ho ricominciato a spolverare le mie conoscenze di web development, per diventare anche uno <span className="highlight"> sviluppatore web</span> e ho lanciato <span className="highlight">àlea</span>, una newsletter in cui parlo di probabilità.
        </p>
      </section>

      {/* ===== SEZIONE 4 ===== */}
      <section className="panel">
        <p className="big-paragraph">
          Se non sono al computer sono probabilmente a leggere, al cinema, ad allenarmi, a cucinare o in giro da qualche parte.
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
