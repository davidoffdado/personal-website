import { Link } from "react-router-dom";

// percorso della foto nella cartella public/, es. "/foto.jpg"; con null la colonna non appare
const PHOTO = "/david.jpg";

// larghezza (px) di ogni logo, calibrata a mano perché i file hanno margini interni diversi
const COLLABS = [
  { name: "Il Sole 24 Ore", href: "https://www.ilsole24ore.com", logo: "/logos/sole24ore.svg", width: 130 },
  { name: "Wired Italia", href: "https://www.wired.it", logo: "/logos/wired.svg", width: 150 },
  { name: "Senza Filtro", href: "https://www.informazionesenzafiltro.it", logo: "/logos/senzafiltro.svg", width: 150 },
  { name: "Aliseo Editoriale", href: "https://aliseoeditoriale.it", logo: "/logos/aliseo.png", width: 130 },
  { name: "SEC Newgate", href: "https://www.secnewgate.it", logo: "/logos/secnewgate.svg", width: 150 },
];

function About() {
  return (
    <div className="page-content">
      <h1 className="page-title">About</h1>

      <div className={`about${PHOTO ? "" : " about--single"}`}>
        <div>
          {/*<p className="about-text about-lede">
            Sono David.
          </p> */}
          <p>
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
          <p>
            In passato, sono stato un assegnista di ricerca e ho collaborato con Wired Italia,
            Aliseo Editoriale e SEC Newgate.
          </p>
          {/*
          <p>
            Ho una laurea magistrale in Statistica e Data Science conseguita presso l'Università
            degli Studi di Firenze, con una tesi sulla teoria dei valori estremi applicata
            all'epidemiologia, e una laurea triennale in Economia bancaria, finanziaria e
            assicurativa, conclusa con una tesi sulla probabilità e sui mercati finanziari.
          </p> */}

          <div className="about-links">
            <a
             
              href="https://drive.google.com/file/d/1vNtAIv2O_r0Xsiw0KSw2aWvwWDvdc7AP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              curriculum
            </a>
            {/*
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
            </a> */}
            <Link to="/contatti">
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

      <section className="block">
        <p className="section-label">collaborazioni</p>
        <div className="logos block-body">
          {COLLABS.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={c.name}
            >
              <img
                src={c.logo}
                alt={c.name}
                style={{ width: c.width }}
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
