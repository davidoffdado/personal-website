const temi = [
  "misture di distribuzioni",
  "statistica bayesiana",
  "teoria dei valori estremi",
  "disuguaglianze di reddito",
];

export default function Universita() {
  return (
    <div className="page-content">
      <p className="section-label">università</p>
      <p className="about-text page-intro">
        A novembre inizierò il dottorato in Quantitative Methods in Economics presso l'Università
        di Macerata, nel curriculum in Mathematical, Statistical and Econometric Methods.
      </p>

      <div className="dj-section">
        <p className="section-label">temi di ricerca</p>
        <p className="about-text">{temi.join(", ")}</p>
      </div>
    </div>
  );
}
