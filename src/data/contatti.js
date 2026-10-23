export const EMAIL = "davidruffini98@gmail.com";

// i tre temi della pagina contatti; lo stesso oggetto della mail si usa nei banner "scrivimi"
// di ricerca, data journalism e consulenza
export const TOPICS = {
  ricerca: {
    title: "Statistica e ricerca",
    desc: "Analisi dei dati per progetti di ricerca, supporto metodologico e didattica.",
    subject: "Collaborazione: statistica e ricerca",
    works: "/ricerca",
    worksLabel: "vedi la ricerca",
  },
  dj: {
    title: "Data journalism",
    desc: "Inchieste e articoli basati sui dati, grafici e pezzi interattivi, talk ed eventi sul tema.",
    subject: "Collaborazione: data journalism",
    works: "/data-journalism",
    worksLabel: "vedi i lavori",
  },
  consulenza: {
    title: "Consulenza",
    desc: "Analisi statistiche, raccolta e pulizia dei dati, automazioni e formazione.",
    subject: "Collaborazione: consulenza",
    works: "/consulenza",
    worksLabel: "vedi i lavori",
  },
};

export const mailto = (topic) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(TOPICS[topic].subject)}`;
