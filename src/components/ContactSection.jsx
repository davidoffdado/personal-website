import "../styles/ContactSection.css";



function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <div className="contact-content">
        <div className="contact-left">
          <h2 className="heading-mono">
            Wanna<br />be starting<br />something?
          </h2>
          <p>
            Contattami se pensi a una possibile collaborazione o se vuoi semplicemente dirmi qualcosa.
          </p>
        </div>

        <div className="contact-right">
          <a href="mailto:davidruffini98@gmail.com" className="contact-email">
            <span className="circle-wrapper">
              <span className="circle-rotate"></span>
              <span className="circle-text">davidruffini98@gmail.com</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;



