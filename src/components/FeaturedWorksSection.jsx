import React from "react";
import AnimatedSection from "./AnimatedSection";
import EmbedCard from "./EmbedCard";
import { Link } from "react-router-dom";


const featuredWorks = [
  {
    id: "main",
    size: "lg",
    title: "Progetto personale & Il Sole 24 Ore",
    subtitle: "Scraper automatico per il monitoraggio del sovraffollamento carcerario italiano",
    // Incolla qui l’HTML di embed (iframe o snippet)
    embed: `
     <iframe title="" aria-label="Line chart" id="datawrapper-chart-71MG8" src="https://datawrapper.dwcdn.net/71MG8/26/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="373" data-external="1"></iframe><script type="text/javascript">window.addEventListener("message",function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r,i=0;r=e[i];i++)if(r.contentWindow===a.source){var d=a.data["datawrapper-height"][t]+"px";r.style.height=d}}});</script>
    `,
    link: "https://davidoffdado.github.io/progetto-carceri/", // o link esterno
  },
  {
    id: "a",
    size: "sm",
    title: "Il Sole 24 Ore",
    subtitle: '',
    embed: `<iframe src='https://flo.uri.sh/visualisation/27273649/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>`,
    link: "https://www.infodata.ilsole24ore.com/2026/01/21/operazione-metro-surge-quando-i-numeri-smentiscono-la-retorica/?cmpid=.comhttps://www.infodata.ilsole24ore.com/2026/01/21/operazione-metro-surge-quando-i-numeri-smentiscono-la-retorica/?cmpid=.com",
  },
  {
    id: "b",
    size: "sm",
    title: "Progetto personale",
    subtitle: "",
    embed: `<iframe src='https://flo.uri.sh/visualisation/25370291/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>`,
    link: "https://davidoffdado.github.io/elezioni-marche/",
  },
  {
    id: "c",
    size: "sm",
    title: "Wired Italia",
    subtitle: "",
    embed: `<iframe src='https://flo.uri.sh/visualisation/25181007/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>`,
    link: "https://www.wired.it/article/attacchi-double-tap-striscia-di-gaza-mappa/",
  },
];

export default function FeaturedWorksSection() {
  const main = featuredWorks[0];
  const others = featuredWorks.slice(1, 4);

  return (
    <section id="featured" className="featured-section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Lavori in evidenza</h2>
          <p className="section-subtitle">
            Questa sono alcuni miei lavori in evidenza, ma puoi trovarne altri nelle sezioni <Link to="/articles">articoli</Link>, {" "}
        <Link to="/projects">progetti</Link>  e{" "} <Link to="/web-dev-projects">sviluppo web</Link>.
          </p>

          {/* PRINCIPALE */}
          <div className="featured-main">
            <EmbedCard work={main} />
          </div>

          {/* 3 SOTTO */}
          <div className="featured-row">
            {others.map((w) => (
              <EmbedCard key={w.id} work={w} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}