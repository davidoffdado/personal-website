import React, { useEffect, useRef } from "react";

function Embed({ html }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // Inserisce l'HTML
    ref.current.innerHTML = html;

    // Esegue eventuali <script> presenti nello snippet (Flourish spesso lo richiede)
    const scripts = ref.current.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      [...oldScript.attributes].forEach((attr) =>
        newScript.setAttribute(attr.name, attr.value)
      );
      newScript.appendChild(document.createTextNode(oldScript.innerHTML));
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }, [html]);

  return <div ref={ref} className="embed-root" />;
}

export default function EmbedCard({ work }) {
  const isLarge = work.size === "lg";

  return (
    <article className={`embed-card ${isLarge ? "is-large" : "is-small"}`}>
      <header className="embed-card-header">
        <div>
          <h3 className="embed-card-title">{work.title}</h3>
          {work.subtitle && <p className="embed-card-subtitle">{work.subtitle}</p>}
        </div>

        {work.link && (
          <a
            className="embed-card-link"
            href={work.link}
            target={work.link.startsWith("http") ? "_blank" : undefined}
            rel={work.link.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            apri →
          </a>
        )}
      </header>

      <div className="embed-frame">
        <Embed html={work.embed} />
      </div>
    </article>
  );
}
