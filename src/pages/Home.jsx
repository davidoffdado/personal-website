import { Link } from "react-router-dom";

const sections = [
  { to: "/universita", title: "Università" },
  { to: "/data-journalism", title: "Data journalism" },
  { to: "/consulenza", title: "Consulenza" },
  { to: "/progetti", title: "Progetti" },
];

export default function Home() {
  return (
    <div className="home">
      <header className="home-intro">
        <h1>Ciao :)</h1>
        <p>
          Sono David, uno statistico e un data journalist.
          <br />
          Scopri cosa faccio e, se ti va, <Link to="/contatti">scrivimi</Link>.
        </p>
      </header>

      <nav className="home-links">
        {sections.map((s) => (
          <Link key={s.to} to={s.to}>
            {s.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
