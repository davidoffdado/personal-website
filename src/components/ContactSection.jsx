import "../styles/ContactSection.css";

const EMAIL = "davidruffini98@gmail.com";

const TOPICS = [
  {
    title: "Statistica e ricerca",
    desc: "Analisi dei dati e modelli statistici per progetti di ricerca, lezioni o corsi di statistica.",
    subject: "Collaborazione - statistica e ricerca",
  },
  {
    title: "Data journalism",
    desc: "Articoli, inchieste e visualizzazioni basati sui dati per testate e giornalisti, interventi come relatore a eventi e conferenze.",
    subject: "Collaborazione - data journalism",
  },
  {
    title: "Consulenza",
    desc: "Analisi statistiche e report su misura per aziende e agenzie di comunicazione, formazione sull'analisi dei dati.",
    subject: "Collaborazione - consulenza",
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
            <h3 className="home-card-title">{t.title}</h3>
            <p className="home-card-desc">{t.desc}</p>
            <span className="contact-card-cta">scrivimi →</span>
          </a>
        ))}
      </div>

      <div className="contact-content">
        {/* Colonna sinistra */}
        <div className="contact-left">
          <h2 className="contact-title">Collaboriamo?</h2>
          <p>
            Contattami se pensi a una possibile collaborazione o se vuoi semplicemente chiedermi qualcosa.
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
