import { useState, useEffect } from "react";
import "../styles/Loader.css";

function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

 // Loader.jsx
useEffect(() => {
  const interval = setInterval(() => {
    setProgress(p => {
      if (p >= 100) {
        clearInterval(interval);
        onFinish(); // leggero delay
        return 100;
      }
      return p + 1;
    });
  }, 30);
  return () => clearInterval(interval);
}, []);


  return (
    <div className={`loader-screen ${isDone ? "fade-out" : ""}`}>
      <h1 className="loader-title">this is a useless (but cool) loader</h1>
      <p className="loader-counter">{progress}%</p>
    </div>
  );
}

export default Loader;
