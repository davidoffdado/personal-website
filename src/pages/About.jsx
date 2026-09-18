import { Link } from "react-router-dom";

// percorso della foto nella cartella public/, es. "/foto.jpg"; con null la colonna non appare
const PHOTO = null;

function About() {
  return (
    <div className="page-content">
      <p className="section-label">about</p>

      <div className={`about-layout${PHOTO ? " about-layout--photo" : ""}`}>
        <div className="about-body">
          <p className="about-text about-lede">
            Ciao, sono David!
          </p>
          <p className="about-text">
            Lavoro come data analyst in una società di consulenza e come data journalist,
            collaborando principalmente con Il Sole 24 Ore. Tra i miei lavori c'è uno scraper
            che aggiorna quotidianamente, in maniera automatica, i dati sul sovraffollamento
            carcerario italiano; il progetto è stato segnalato dal{" "}
            <a
              href="https://gijn.org/stories/europes-deadly-heatwave-middle-east-ceasefires/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Global Investigative Journalism Network
            </a>.
          </p>
          <p className="about-text">
            In passato, sono stato un assegnista di ricerca e ho collaborato con Wired Italia,
            Aliseo Editoriale e SEC Newgate.
          </p>
          <p className="about-text">
            Ho una laurea magistrale in Statistica e Data Science conseguita presso l'Università
            degli Studi di Firenze, con una tesi sulla teoria dei valori estremi applicata
            all'epidemiologia, e una laurea triennale in Economia bancaria, finanziaria e
            assicurativa, conclusa con una tesi sulla probabilità e sui mercati finanziari.
          </p>

          <div className="about-buttons">
            <a
              className="btn"
              href="https://drive.google.com/file/d/1vNtAIv2O_r0Xsiw0KSw2aWvwWDvdc7AP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              curriculum
            </a>
            <a
              className="btn"
              href="https://github.com/davidoffdado"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              className="btn"
              href="https://linktr.ee/davidruffini"
              target="_blank"
              rel="noopener noreferrer"
            >
              social
            </a>
            <Link className="btn" to="/contatti">
              contatti
            </Link>
          </div>
        </div>

        {PHOTO && (
          <figure className="about-photo">
            <img src={PHOTO} alt="David Ruffini" />
          </figure>
        )}
      </div>
    </div>
  );
}

export default About;
