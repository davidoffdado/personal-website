import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleWorkClick = (e) => {
    e.preventDefault();
    // Se sei già sulla home, scorri subito
    if (location.pathname === "/") {
      const el = document.getElementById("statistico");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Torna alla home e poi scorri
      navigate("/");
      // piccolo delay per dare tempo al DOM di montare
      setTimeout(() => {
        const el = document.getElementById("statistico");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <nav className="navbar">
      <a href="#home" className="nav-left" onClick={(e) => {
        e.preventDefault();
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById("home");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }}>
        home
      </a>

      <div className="nav-right">
        <a href="#statistico" onClick={handleWorkClick}>
          work
        </a>
        <Link to="/about">about</Link>
      </div>
    </nav>
  );
}

export default Navbar;
