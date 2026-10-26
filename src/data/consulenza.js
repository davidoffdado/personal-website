// casi studio, nell'ordine in cui compaiono: la home mostra i primi 4
// kind = etichetta breve per la colonna di destra delle righe
export const consulenza = [
  {
    to: "/consulenza/carceri",
    client: "Progetto personale",
    title: "Le carceri italiane, monitorate ogni giorno in automatico",
    dek: "Scraper in R che ogni giorno raccoglie i dati di tutti i 190 istituti penitenziari, calcola il sovraffollamento e aggiorna una pagina interattiva, automatizzato con GitHub Actions.",
    year: "2025",
    type: "web scraping, automazione, visualizzazione",
    kind: "scraping e automazione",
  },
  {
    to: "/consulenza/controllo-di-gestione",
    client: "Esempio per PMI",
    title: "Sapere ogni mattina come va l'azienda, senza rifare i report a mano",
    dek: "Cruscotto di controllo di gestione per una piccola o media impresa, costruito su un calzaturificio inventato con dati simulati: margini, incassi e magazzino aggiornati in automatico.",
    year: "2026",
    type: "cruscotto di controllo di gestione",
    kind: "cruscotto per PMI",
  },
  {
    to: "/consulenza/interzero",
    client: "Interzero",
    title: "Rifiuti aziendali in Europa: un'analisi su vent'anni di dati",
    dek: "Raccolta ed elaborazione di dati Eurostat sulla produzione di rifiuti aziendali nei paesi UE nel periodo 2004–2022, sintetizzati in report e comunicato stampa, realizzati per Interzero tramite l'agenzia SEC Newgate.",
    year: "2025",
    type: "raccolta dati, analisi statistica, report",
    kind: "analisi e report",
  },
  {
    to: "/consulenza/superspreader",
    client: "Tesi magistrale",
    title: "Superspreader: quali parametri contano davvero in un modello statistico?",
    dek: "Modello SIR esteso con 30 sistemi di equazioni differenziali per tenere conto dell'eterogeneità dei contatti, valutato con un'analisi di sensibilità globale basata sugli indici di Sobol.",
    year: "2024",
    type: "modelli matematici, simulazione, analisi di sensibilità",
    kind: "modelli e simulazione",
  },
  {
    to: "/consulenza/power-bi",
    client: "Progetto personale",
    title: "Una dashboard Power BI per seguire i cantieri della banda ultra larga",
    dek: "Dashboard in tre pagine sull'avanzamento del Piano Banda Ultra Larga, con schema a stella, 14 misure DAX e progetto PBIP versionato su GitHub.",
    year: "2026",
    type: "dashboard, modello dati, DAX",
    kind: "dashboard Power BI",
  },
  {
    to: "/consulenza/banda-ultra-larga",
    client: "UnivPM",
    title: "Banda ultra larga: a che punto sono i cantieri, regione per regione",
    dek: "Dataset costruito dalle relazioni ministeriali sul Piano Banda Ultra Larga, indice composito di Wroclaw sulle tre fasi del lavoro, clustering e modelli a effetti misti, durante l'assegno di ricerca all'Università Politecnica delle Marche.",
    year: "2025",
    type: "analisi statistica, indicatori compositi, clustering",
    kind: "indicatori e clustering",
  },
  {
    to: "/consulenza/coopservice",
    client: "Coopservice",
    title: "Sicurezza in Italia: furti, rapine e incendi negli esercizi commerciali, 2019-2023",
    dek: "Analisi di dati ISTAT e dei Vigili del Fuoco su furti, rapine e incendi negli esercizi commerciali italiani, con confronto tra il 2019 e il 2023, realizzata per l'Istituto di Vigilanza Coopservice tramite l'agenzia SEC Newgate.",
    year: "2025",
    type: "raccolta dati, analisi statistica, report",
    kind: "analisi e report",
  },
];

// una voce di consulenza nel formato di <Rows>: anno | titolo | tipo
export const fromCaso = (c) => ({ to: c.to, title: c.title, date: c.year, outlet: c.kind });
