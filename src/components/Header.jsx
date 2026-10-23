import { Link, NavLink, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/ricerca", label: "ricerca" },
  { to: "/data-journalism", label: "data journalism" },
  { to: "/consulenza", label: "consulenza" },
  { to: "/about", label: "about" },
  { to: "/contatti", label: "contatti" },
];

// nome a sinistra e menu a destra; la pagina in cui ci si trova è nel blocco nero (classe active di NavLink)
function Header() {
  const isHome = useLocation().pathname === "/";

  return (
    <header className={`top${isHome ? " top--home" : ""}`}>
      <Link className="top-name" to="/">David Ruffini</Link>
      <nav>
        {LINKS.map((l) => (
          <NavLink key={l.to} to={l.to}>{l.label}</NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
