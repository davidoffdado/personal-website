import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const PAGES = [
  { to: "/universita", label: "università" },
  { to: "/data-journalism", label: "data journalism" },
  { to: "/consulenza", label: "consulenza" },
  { to: "/progetti", label: "progetti" },
  { to: "/about", label: "about" },
  { to: "/contatti", label: "contatti" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // chiude il menu quando si cambia pagina
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // chiude con click fuori o Esc
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        David Ruffini
      </Link>

      <div className="nav-menu" ref={menuRef}>
        <button
          type="button"
          className="nav-menu-toggle"
          aria-expanded={open}
          aria-controls="nav-menu-list"
          onClick={() => setOpen((o) => !o)}
        >
          sezioni <span className="nav-menu-caret" aria-hidden="true">▾</span>
        </button>

        {open && (
          <ul id="nav-menu-list" className="nav-menu-list">
            {PAGES.map((p) => (
              <li key={p.to}>
                <NavLink to={p.to} className="nav-menu-item">
                  {p.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
