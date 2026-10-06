import { Link, useLocation } from "react-router-dom";

function Footer() {
  // in home niente link a home (si è già lì) né indirizzo mail (c'è già nella bio)
  const isHome = useLocation().pathname === "/";

  return (
    <footer className="footer">
      <div className="footer-links">
        {!isHome && <a href="mailto:davidruffini98@gmail.com">davidruffini98@gmail.com</a>}
        {!isHome && <Link to="/">home</Link>}
        <Link to="/about">about</Link>
        <Link to="/contatti">contatti</Link>
        <span className="footer-copy">© 2026 David Ruffini</span>
      </div>
    </footer>
  );
}

export default Footer;
