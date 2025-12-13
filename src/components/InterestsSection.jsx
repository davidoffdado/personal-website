import React from "react";
import {
  FiBarChart2,
  FiBookOpen,
  FiCpu,
  FiCode,
  FiTrendingUp,
  FiBook
} from "react-icons/fi";
import { Link } from "react-router-dom";


import "../styles/InterestsSection.css";

function InterestsSection() {
  const interests = [
    {
      icon: <FiTrendingUp />,
      title: "Statistica e probabilità",
      description:
      (
        <>
Offro consulenze in ambito statistico, dalla progettazione del piano di analisi alla corretta interpretazione dei risultati, con un approccio rigoroso e trasparente.        
</>
      )
    },
        {
      icon: <FiBookOpen />,
      title: "Data journalism",
      description:
                 (
        <>
          Racconto storie a partire dai dati, con particolare attenzione alla qualità e alla visualizzazione. 
          Qui trovi alcuni dei miei{" "}
          <Link to="/articles" className="interest-link">
            articoli
          </Link>{" "}
          e{" "}
          <Link to="/projects" className="interest-link">
            progetti
          </Link>.

        </>
      )
    },
    {
      icon: <FiBarChart2 />,
      title: "Data analysis",
      description:
         (
        <>
          Gestisco l'intero ciclo del dato: dalla sua raccolta alla sua analisi finale, passando per la sua gestione nel database.
        </>
      )
    },
    
    {
      icon: <FiCode />,
      title: "Sviluppo web",
      description:
        (
        <>
          Costruisco siti e applicativi web, principamente occupandomi di data visualization. Questi sono alcuni dei miei <Link to="/web-dev-projects" className="interest-link">
            lavori
          </Link>.
        </>
      )
    },
        {
      icon: <FiBook />,
      title: "Formazione",
      description:
              (
        <>
          Mi occupo formazione su temi legati alla statistica e al data journalism, al fine di rendere più consapevoli su ciò che ruota intorno al mondo dei dati.
        </>
      )
    }
  ];

  return (
    <section className="interests-section">
      <div className="interests-container">
        <h2 className="interests-title">Aree di interesse</h2>
        <p className="interests-subtitle">
          Queste sono alcune delle aree su cui mi piace lavorare
        </p>

        <div className="interests-grid">
          {interests.map((item, index) => (
            <div className="interest-card" key={index}>
              <div className="interest-icon">
                {item.icon}
              </div>
              <h3 className="interest-heading">
                {item.title}
              </h3>
              <p className="interest-text">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InterestsSection;
