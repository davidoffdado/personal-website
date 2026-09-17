import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="mailto:davidruffini98@gmail.com">davidruffini98@gmail.com</a>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </div>
      <span className="footer-copy">© 2026 David Ruffini</span>
    </footer>
  );
}

export default Footer;
