import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import WebDevProjects from "./pages/WebDevProjects";
import Loader from "./components/Loader";
import "./styles/global.css";
import { useState } from "react";
import CursorFollower from "./components/CursorFollower";



function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <CursorFollower />
      {isLoading ? (
        <div className="absolute inset-0 z-20 bg-black">
          <Loader onFinish={() => setIsLoading(false)} />
        </div>
      ) : (
        <div className="page slide-up">
          
          <div className="app min-h-screen flex flex-col bg-white">
            <Navbar />  
            <main className="flex-grow main-content">
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
        </div>
      )}
    </div>
  );
}

export default App;
