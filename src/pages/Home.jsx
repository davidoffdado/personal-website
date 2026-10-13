import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <header className="home-intro">
        <h1>ciao, sono david :)</h1>
        <p>
          frequento un <Link to="/universita">dottorato</Link> <br />
          collaboro come <Link to="/data-journalism">data journalist</Link> <br />
          ho fondato <a href="https://alea.news" target="_blank" rel="noopener noreferrer">àlea</a> <br />
          offro <Link to="/consulenza">consulenze</Link> <br />
          controllo la mia <Link to="/contatti">mail</Link>
        </p>
      </header>
    </div>
  );
}
