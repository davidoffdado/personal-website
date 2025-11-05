import ContactSection from "./ContactSection";

function MainContent() {
  return (
    <main className="main-content">
      <section id="home" className="section hero">
        <h2>Ciao, il mio nome è David :)</h2>
        <p>Sono uno statistico, uno sviluppatore e un data journalist.</p>
      </section>

      <section id="statistico" className="section">
        <h2>Statistico</h2>
        <p>Mi occupo di analizzare dati complessi per estrarre informazioni utili e supportare decisioni basate sull’evidenza.</p>
      </section>

      <section id="sviluppatore" className="section">
        <h2>Sviluppatore</h2>
        <p>Scrivo codice pulito e funzionale. Mi piace creare strumenti e siti che rendano i dati accessibili a tutti.</p>
        <a href="/web-dev-projects" className="btn-link">Guarda i miei progetti →</a>
      </section>

      <section id="datajournalist" className="section">
        <h2>Data Journalist</h2>
        <p>Trasformo i numeri in storie. Realizzo articoli e progetti che uniscono narrazione e visualizzazione dei dati.</p>
        <a href="/articles" className="btn-link">Guarda i miei articoli →</a>
        <a href="/projects" className="btn-link">Guarda i miei progetti →</a>

      </section>

      <ContactSection />
    </main>
  );
}

export default MainContent;
