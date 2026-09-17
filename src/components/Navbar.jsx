import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        David Ruffini
      </NavLink>
    </nav>
  );
}

export default Navbar;
