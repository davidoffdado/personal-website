import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <header className="home-intro">
        <h1>ciao :)</h1>
        <p>
          sono David, uno statistico e un{" "}
          <Link to="/data-journalism">data journalist</Link>, offro{" "}
          <Link to="/consulenza">consulenze</Link> e controllo la mia{" "}
          <Link to="/contatti">mail</Link>.
        </p>
      </header>
    </div>
  );
}
