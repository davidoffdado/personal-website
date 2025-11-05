import LogoRow from "./LogoRow";
import ContactSection from "./ContactSection";
import { Link } from "react-router-dom";

function MainContent() {
  return (
    <main className="main-content">
      {/* Intro */}
      <section id="home" className="section hero">
        <h2 className="heading-mono">Ciao, il mio nome è David :)</h2>
        <p>Sono uno statistico, uno sviluppatore e un data journalist.</p>
        <div className="hero-links">
        <a href="https://drive.google.com/file/d/1vNtAIv2O_r0Xsiw0KSw2aWvwWDvdc7AP/view?usp=sharing" target="_blank" rel="noopener noreferrer"> curriculum </a>
        <a href="https://github.com/davidoffdado" target="_blank" rel="noopener noreferrer" > github </a>
        <a href="https://linktr.ee/davidruffini" target="_blank" rel="noopener noreferrer" > social </a>
        </div>
      </section>

      {/* STATISTICO */}
      <section id="statistico" className="section">
        <h2 className="heading-mono">Statistico</h2>
        <p>
          Mi occupo di analizzare dati complessi per estrarre informazioni utili e supportare decisioni basate sull’evidenza.
        </p>

        <LogoRow
          title="Ho collaborato con"
          logos={[
            "https://upload.wikimedia.org/wikipedia/commons/4/4a/ISTAT_logo_2018.svg",
            "https://upload.wikimedia.org/wikipedia/commons/3/3e/Logo_UNESCO.svg",
            "https://upload.wikimedia.org/wikipedia/commons/1/1b/Eurostat_logo.svg",
          ]}
        />

        <LogoRow
          title="Competenze"
          logos={[
            "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
            "https://upload.wikimedia.org/wikipedia/commons/0/05/Logo_R_Studio.svg",
          ]}
        />
      </section>

      {/* SVILUPPATORE */}
      <section id="sviluppatore" className="section">
        <h2 className="heading-mono">Sviluppatore</h2>
        <p>
          Scrivo codice pulito e funzionale. Mi piace creare strumenti e siti che rendano i dati accessibili a tutti.
        </p>
        <p>
          <Link to="/web-dev-projects" className="btn-link">Guarda i miei progetti web →</Link>
        </p>

        <LogoRow
          title="Ho lavorato con"
          logos={[
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
          ]}
        />

        <LogoRow
          title="Competenze"
          logos={[
            "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
          ]}
        />
      </section>

      {/* DATA JOURNALIST */}
      <section id="datajournalist" className="section">
        <h2 className="heading-mono">Data journalist</h2>
        <p>
          Trasformo i numeri in storie. Realizzo articoli e progetti che uniscono narrazione e visualizzazione dei dati.
        </p>
        <p>
          <Link to="/articles" className="btn-link">Guarda i miei articoli →</Link>
        </p>

        <LogoRow
          title="Ho pubblicato su"
          logos={[
            "https://upload.wikimedia.org/wikipedia/commons/f/fc/Il_Sole_24_Ore_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/8/8a/Wired_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/d/d3/Logo_Le_Monde.svg",
          ]}
        />

        <LogoRow
          title="Strumenti"
          logos={[
            "https://upload.wikimedia.org/wikipedia/commons/3/38/D3js_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/2/20/Adobe_Illustrator_CC_icon.svg",
            "https://upload.wikimedia.org/wikipedia/commons/d/d1/Mapbox_logo_2019.svg",
          ]}
        />
      </section>

        <ContactSection />
    </main>
  );
}

export default MainContent;
