import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-inner">
        <NavLink to="/" className="sidebar-link home-link">
          David Ruffini
        </NavLink>
        <NavLink to="/articles" className="sidebar-link">
          articoli
        </NavLink>
        <NavLink to="/projects" className="sidebar-link">
          progetti
        </NavLink>
        {/*<NavLink to="/web-dev-projects" className="sidebar-link">
          sviluppo web
        </NavLink>*/}
        <NavLink to="/about" className="sidebar-link">
          about
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;