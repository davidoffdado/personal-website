import { Link } from "react-router-dom";
import "../styles/ContactSection.css";

const EMAIL = "davidruffini98@gmail.com";

const TOPICS = [
  {
    title: "statistica e ricerca",
    desc: "analisi dei dati per progetti di ricerca, supporto metodologico e didattica.",
    subject: "Collaborazione: statistica e ricerca",
  },
  {
    title: "data journalism",
    desc: "per redazioni: inchieste e articoli basati sui dati, grafici e pezzi interattivi, talk ed eventi sul tema.",
    subject: "Collaborazione: data journalism",
    works: "/data-journalism",
  },
  {
    title: "consulenza",
    desc: "per aziende: analisi statistiche, raccolta e pulizia dei dati, automazioni e formazione.",
    subject: "Collaborazione: consulenza",
    works: "/consulenza",
  },
];

function TopicBody({ t }) {
  return (
    <div className="contact-topic-body">
      <p className="contact-topic-desc">{t.desc}</p>
      <p className="contact-topic-links">
        <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}`}>scrivimi</a>
        {t.works && <Link to={t.works}>vedi i lavori</Link>}
      </p>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="contact">
      <p className="section-label contact-cards-label">di cosa possiamo parlare</p>
      <div className="contact-topics">
        {TOPICS.map((t) => (
          <div key={t.title} className="contact-topic-col">
            <details className="contact-topic">
              <summary>
                <span className="contact-plus" aria-hidden="true">+</span>
                <span className="contact-topic-title">{t.title}</span>
              </summary>
              <TopicBody t={t} />
            </details>
            {/* copia invisibile: tiene sempre occupato lo spazio della tendina aperta,
                così aprendo e chiudendo non si sposta niente (solo su desktop, vedi CSS) */}
            <div className="contact-topic-ghost" aria-hidden="true">
              <TopicBody t={t} />
            </div>
          </div>
        ))}
      </div>

      <div className="contact-content">
        {/* Colonna sinistra */}
        <div className="contact-left">
          <h2 className="contact-title">collaboriamo?</h2>
          <p>
            contattami se pensi a una possibile collaborazione o se vuoi semplicemente chiedermi qualcosa.
          </p>
        </div>

        {/* Colonna destra */}
        <div className="contact-right">
          <a href={`mailto:${EMAIL}`} className="contact-email">
            <span className="circle-wrapper">
              <span className="circle-rotate"></span>
              <span className="circle-text">{EMAIL}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
