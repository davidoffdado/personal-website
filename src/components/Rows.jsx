// tabella data | titolo | testata, usata in home e nell'archivio di data journalism
export default function Rows({ items }) {
  return (
    <div className="rows">
      {items.map((it, i) => (
        <a key={i} href={it.url} target="_blank" rel="noopener noreferrer">
          <span className="row-meta">{it.date}</span>
          <span className="row-title"><span>{it.title}</span></span>
          <span className="row-meta">{it.outlet}</span>
        </a>
      ))}
    </div>
  );
}

