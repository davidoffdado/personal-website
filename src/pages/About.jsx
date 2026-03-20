import ContactSection from "../components/ContactSection";
import "../styles/About.css";

function About() {
  return (
    <main className="about-page">
      <section className="panel about-intro-panel">
        <p className="about-text">
          Ciao, il mio nome è David Ruffini. Sono uno statistico e un data journalist.
          <br /><br />

          Lavoro come data analyst, nel mondo della consulenza, e come data journalist,
          collaborando principalmente con Il Sole 24 Ore. Tra i miei lavori, c'è uno scraper
          che aggiorna quotidianamente, in maniera automatica, i dati sul sovraffollamento
          carcerario italiano; il progetto è stato segnalato dal{" "}
          <a
            href="https://gijn.org/stories/europes-deadly-heatwave-middle-east-ceasefires/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Global Investigative Journalism Network
          </a>.
          <br /><br />

          In passato, sono stato un assegnista di ricerca e ho collaborato con Wired Italia,
          Aliseo Editoriale e SEC Newgate.
          <br /><br />

          Ho una laurea magistrale in Statistica e Data Science conseguita presso l'Università
          degli Studi di Firenze, con una tesi sulla teoria dei valori estremi applicata
          all'epidemiologia, e una laurea triennale in Economia bancaria, finanziaria e
          assicurativa, conclusa con una tesi sulla probabilità e sui mercati finanziari.
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
      </section>

      <section className="panel contact-panel">
        <ContactSection />
      </section>
    </main>
  );
}

export default About;