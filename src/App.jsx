import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DataJournalism from "./pages/DataJournalism";
import Universita from "./pages/Universita";
import Consulenza from "./pages/Consulenza";
import ConsulenzaInterzero from "./pages/ConsulenzaInterzero";
import ConsulenzaCoopservice from "./pages/ConsulenzaCoopservice";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contatti from "./pages/Contatti";
import "./styles/global.css";
import CursorFollower from "./components/CursorFollower";

function App() {
  return (
    <div className="app">
      <CursorFollower />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universita" element={<Universita />} />
        <Route path="/data-journalism" element={<DataJournalism />} />
        <Route path="/consulenza" element={<Consulenza />} />
        <Route path="/consulenza/interzero" element={<ConsulenzaInterzero />} />
        <Route path="/consulenza/coopservice" element={<ConsulenzaCoopservice />} />
        <Route path="/progetti" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
