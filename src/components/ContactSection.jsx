import "../styles/ContactSection.css";

const EMAIL = "davidruffini98@gmail.com";

const TOPICS = [
  {
    title: "statistica e ricerca",
    desc: "analisi dei dati per progetti di ricerca e didattica.",
    subject: "Collaborazione: statistica e ricerca",
  },
  {
    title: "data journalism",
    desc: "articoli, inchieste e visualizzazioni basati sui dati e partecipazione a eventi sul tema.",
    subject: "Collaborazione: data journalism",
  },
  {
    title: "consulenza",
    desc: "analisi statistiche e formazione per aziende.",
    subject: "Collaborazione: consulenza",
  },
];

function ContactSection() {
  return (
    <section className="contact">
      <p className="section-label contact-cards-label">di cosa possiamo parlare</p>
      <div className="contact-cards">
        {TOPICS.map((t) => (
          <a
            key={t.title}
            className="home-card contact-card"
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}`}
          >
            <h3 className="home-card-title"><span>{t.title}</span></h3>
            <p className="home-card-desc">{t.desc}</p>
            <span className="contact-card-cta">scrivimi →</span>
          </a>
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
