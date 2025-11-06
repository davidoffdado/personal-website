import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import About from "./pages/About";
import Articles from "./pages/Articles";  // 👈 nuova importazione
import Projects from "./pages/Projects";  // 👈 nuova importazione
import WebDevProjects from "./pages/WebDevProjects";  // 👈 nuova importazione
import "./styles/global.css";

function App() {
  return (
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} /> {/* 👈 nuova pagina */}
            <Route path="/projects" element={<Projects />} /> {/* 👈 nuova rotta */}
            <Route path="/web-dev-projects" element={<WebDevProjects />} /> {/* 👈 nuova rotta */}
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;
