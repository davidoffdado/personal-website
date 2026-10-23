import Cta from "../components/Cta";

const dottorato = [
  ["programma", "Quantitative Methods in Economics"],
  ["curriculum", "Mathematical, Statistical and Econometric Methods"],
  ["ateneo", "Università di Macerata, da novembre 2026"],
  ["temi di ricerca", "misture di distribuzioni, statistica bayesiana, teoria dei valori estremi, disuguaglianze di reddito"],
];

export default function Ricerca() {
  return (
    <div className="page-content">
      <h1 className="page-title">Ricerca</h1>
      <div className="intro">
        <p>
          A novembre inizierò il dottorato in Quantitative Methods in Economics presso l'Università
          di Macerata, nel curriculum Mathematical, Statistical and Econometric Methods.
        </p>
      </div>
      <Cta topic="ricerca">Lavori a un progetto di ricerca e ti serve un supporto statistico?</Cta>

      <section className="block">
        <p className="section-label">dottorato</p>
        <dl className="kv block-body">
          {dottorato.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </section>
    </div>
  );
}
