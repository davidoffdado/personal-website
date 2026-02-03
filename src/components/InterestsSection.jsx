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
      icon: <FiBookOpen />,
      title: "Data journalism",
      description:
                 (
        <>
          Racconto storie a partire dai dati, unendo raccolta, analisi e visualizzazione. 
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
Gestisco l’intero ciclo del dato, dalla raccolta alla gestione nel database, fino all’analisi e alla presentazione dei risultati.       
 </>
      )
    },
        {
      icon: <FiCode />,
      title: "Sviluppo web",
      description:
        (
        <>
          Sviluppo siti e applicazioni web, con particolare attenzione alla data visualization. 
Qui puoi vedere qualche{" "}
<Link to="/web-dev-projects" className="interest-link">
  esempio
</Link>.

        </>
      )
    }/*,
             {
      icon: <FiTrendingUp />,
      title: "Consulenza",
      description:
      (
        <>
Offro consulenze in ambito statistico, dalla progettazione del piano di analisi alla corretta interpretazione dei risultati, con un approccio rigoroso e trasparente.        
</>
      )
    },
        {
      icon: <FiBook />,
      title: "Formazione",
      description:
              (
        <>
Svolgo attività di formazione e divulgazione su statistica e data journalism, con l’obiettivo di rendere le persone più consapevoli nell’uso e nell’interpretazione dei dati.        </>
      )
    }*/
  ];

  return (
    <section id="interests" className="interests-section">
      <div className="interests-container">
        <h2 className="interests-title">Cosa faccio</h2>

  <p className="interests-subtitle">
          {/* Provando a riassumere  */}
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
