import ContactSection from "../components/ContactSection";

function About() {
  return (
    <main className="main-content">
      <section id="about" className="section">
        <h2>About me</h2>
        <p>
          Sono David, uno statistico, sviluppatore e data journalist.
          Amo trasformare i dati in strumenti utili e racconti chiari.
        </p>
      </section>

      <ContactSection />
    </main>
  );
}

export default About;
