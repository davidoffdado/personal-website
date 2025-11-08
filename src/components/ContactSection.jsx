function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <h2 className="heading-mono">Get in touch</h2>
      <p>
        Vuoi collaborare o saperne di più? Scrivimi a{" "}
    <a href="mailto:davidruffini98@gmail.com" className="contact-email">
      <span className="circle-wrapper">
        <span className="circle-rotate"></span>
        <span className="circle-text">davidruffini98@gmail.com</span>
      </span>
    </a>      
</p>
    </section>
  );
}

export default ContactSection;
