import { Link, useLocation } from "react-router-dom";

function Navbar() {
  // in home non serve: si è già lì
  if (useLocation().pathname === "/") return null;

  return (
    <nav className="navbar">
      <Link to="/" className="nav-home">
        home
      </Link>
    </nav>
  );
}

export default Navbar;
