import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DataJournalism from "./pages/DataJournalism";
import Ricerca from "./pages/Ricerca";
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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ricerca" element={<Ricerca />} />
        {/* vecchio indirizzo della pagina ricerca */}
        <Route path="/universita" element={<Navigate to="/ricerca" replace />} />
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
