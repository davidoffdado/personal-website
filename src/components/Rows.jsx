import { Link } from "react-router-dom";

// tabella data | titolo | testata, usata in home, nell'archivio di data journalism e per i casi studio
// le voci con "to" sono pagine del sito, quelle con "url" link esterni
export default function Rows({ items }) {
  return (
    <div className="rows">
      {items.map((it, i) => {
        const cells = (
          <>
            <span className="row-meta">{it.date}</span>
            <span className="row-title"><span>{it.title}</span></span>
            <span className="row-meta">{it.outlet}</span>
          </>
        );
        return it.to ? (
          <Link key={i} to={it.to}>{cells}</Link>
        ) : (
          <a key={i} href={it.url} target="_blank" rel="noopener noreferrer">{cells}</a>
        );
      })}
    </div>
  );
}
