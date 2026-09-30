import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        David Ruffini
      </NavLink>
      <div className="nav-links">
        <NavLink to="/about" className="nav-link">about</NavLink>
        <NavLink to="/contatti" className="nav-link">contatti</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
