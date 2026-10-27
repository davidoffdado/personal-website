import { Link } from "react-router-dom";
import { EMAIL } from "../data/contatti";

function Footer() {
  // data-nosnippet: Google non usa il footer come descrizione del sito nei risultati di ricerca
  return (
    <footer className="footer" data-nosnippet>
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <nav>
        <Link to="/about">about</Link>
        <Link to="/contatti">contatti</Link>
        <a href="https://alea.news" target="_blank" rel="noopener noreferrer">àlea</a>
        <a href="https://www.linkedin.com/in/david-ruffini-56a5a1161/" target="_blank" rel="noopener noreferrer">linkedin</a>      </nav>
    </footer>
  );
}

export default Footer;
