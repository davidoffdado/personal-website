import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import WebDevProjects from "./pages/WebDevProjects";
import "./styles/global.css";
import CursorFollower from "./components/CursorFollower";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="app min-h-screen bg-white">
      {/* 👇 cursor sempre attivo */}
      <CursorFollower />


      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/web-dev-projects" element={<WebDevProjects />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
