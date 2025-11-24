import "../styles/ContactSection.css";

function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <div className="contact-content">
        {/* Colonna sinistra */}
        <div className="contact-left">
          <h2 className="heading-mono">
            Creiamo<br />qualcosa<br />insieme?
          </h2>
          <p>
            Contattami se pensi a una possibile collaborazione o se vuoi semplicemente chiedermi qualcosa.
          </p>
        </div>

        {/* Colonna destra */}
        <div className="contact-right">
          <div className="contact-links">
            <a href="mailto:davidruffini98@gmail.com" className="contact-email">
              
              <span className="circle-wrapper">
                <span className="circle-rotate"></span>
                <span className="circle-text">davidruffini98@gmail.com</span>
              </span>
            </a>

            {/* Social links */}
            <div className="contact-socials">
              <a
                href="https://www.instagram.com/david_ruffini/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                {/* Icona Instagram */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                href="https://it.linkedin.com/in/david-ruffini-56a5a1161"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                {/* Icona LinkedIn */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default ContactSection;
