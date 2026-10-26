import { useState } from "react";
import { Link } from "react-router-dom";
import { articles, fromArticle } from "../data/articles";
import { alea } from "../data/alea";
import { consulenza, fromCaso } from "../data/consulenza";
import Rows from "../components/Rows";

const SECTIONS = [
  { to: "/ricerca", title: "Ricerca", desc: "Dottorando in Quantitative Methods in Economics, Macerata." },
  { to: "/data-journalism", title: "Data journalism", desc: "Articoli, grafici interattivi e progetti di visual journalism." },
  { to: "/consulenza", title: "Consulenza", desc: "L'intero ciclo del dato, dalla raccolta al report." },
];

// schede di "ultimi lavori": gli ultimi 3 articoli e gli ultimi 3 numeri di àlea
const TABS = {
  articoli: {
    items: articles.slice(0, 3).map(fromArticle),
    more: <Link className="more" to="/data-journalism">tutti gli articoli</Link>,
  },
  àlea: {
    items: alea.slice(0, 3).map((a) => ({ ...a, outlet: "àlea" })),
    more: <a className="more" href="https://alea.news" target="_blank" rel="noopener noreferrer">vai ad àlea</a>,
  },
};

export default function Home() {
  const [tab, setTab] = useState("articoli");

  return (
    <div className="home">
      <header className="hero">
        <h1>Ciao, sono David. Lavoro con i <mark>dati</mark>.</h1>
        <p>
          Statistico e data journalist. Scrivo per <span className="nowrap">Il Sole 24 Ore</span>, curo la
          newsletter <a href="https://alea.news" target="_blank" rel="noopener noreferrer">àlea</a> e offro
          consulenze di analisi statistica.
        </p>
      </header>

      <section className="block">
        <p className="section-label">cosa faccio</p>
        <div className="cards">
          {SECTIONS.map((s) => (
            <Link key={s.to} className="card" to={s.to}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="block">
        <p className="section-label">casi studio</p>
        <div className="block-body">
          <Rows items={consulenza.slice(0, 4).map(fromCaso)} />
          <Link className="more" to="/consulenza">tutti i casi studio</Link>
        </div>
      </section>

      <section className="block">
        <p className="section-label">ultimi lavori</p>
        <div className="block-body">
          <div className="tabs" role="tablist">
            {Object.keys(TABS).map((k) => (
              <button
                key={k}
                className="tab"
                role="tab"
                aria-selected={tab === k}
                onClick={() => setTab(k)}
              >
                {k}
              </button>
            ))}
          </div>
          <Rows items={TABS[tab].items} />
          {TABS[tab].more}
        </div>
      </section>
    </div>
  );
}
