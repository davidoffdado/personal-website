import { Link } from "react-router-dom";
import Cta from "../components/Cta";

// pagina di servizio per le PMI, scritta per un titolare: cosa faccio, un esempio di automazione, come funziona
const servizi = [
  ["dati in ordine", "Gestionale, file Excel, fatture ed estratti conto collegati in un unico posto, con controlli che segnalano doppioni ed errori."],
  ["automazione", "I lavori ripetitivi fatti a mano ogni settimana o ogni mese (copiare dati, unire file, preparare report) li fa un programma, sempre allo stesso modo."],
  ["cruscotti e report", "I numeri che servono per decidere, aggiornati da soli e leggibili senza essere tecnici."],
  ["analisi", "Risposte a domande precise: quali clienti o prodotti rendono di più, come andranno le vendite, dove si perde margine."],
];

const prima = [
  ["prima", "Ogni lunedì un'impiegata scarica gli ordini dal gestionale, li incolla in Excel accanto al listino, ricalcola sconti e margini e manda il riepilogo a ogni agente. Servono circa tre ore, e basta una riga incollata male per sbagliare i numeri."],
  ["dopo", "Il lunedì alle 7 un programma legge gli ordini e il listino, controlla che i dati tornino, calcola sconti e margini e manda a ogni agente il suo riepilogo. Se qualcosa non torna, avvisa. Le tre ore si liberano per altro."],
];

const lavori = [
  "unire ogni mese i file Excel di uffici o filiali diverse",
  "preparare lo stesso report per la banca, il commercialista o la proprietà",
  "scaricare dati da portali (banca, fornitori, marketplace, corrieri) e ricopiarli nel gestionale",
  "controllare scadenze, pagamenti e scorte incrociando file diversi",
  "ricopiare ore e materiali dai fogli di produzione o di cantiere",
  "aggiornare listini e cataloghi su più canali",
];

const passi = [
  ["1. check-up", "Un incontro di un'ora, gratuito: guardiamo insieme quali dati avete, dove stanno e quali attività vi portano via più tempo."],
  ["2. progetto", "Scelgo con voi da dove partire, di solito il lavoro che fa perdere più ore o la domanda che conta di più. Il prezzo è fisso e concordato prima di iniziare; di solito servono 2-4 settimane."],
  ["3. manutenzione", "Con un canone mensile mi occupo di aggiornamenti e modifiche e, se serve, leggiamo i numeri insieme una volta al mese."],
  ["strumenti", "Quelli che avete già quando bastano (Excel, Power Query), altrimenti Power BI, R o Python e programmi che girano da soli a orari fissi."],
];

export default function ConsulenzaPmi() {
  return (
    <div className="page-content">
      <p className="section-label">
        <Link to="/consulenza">consulenza</Link>
      </p>

      <div className="case-study">

        <div className="case-header">
          <h1 className="case-title">Meno ore su Excel, più risposte dai dati</h1>
          <div className="case-meta">
            <span>Per: <strong>piccole e medie imprese</strong></span>
            <span>Tipo: <strong>dati, automazione, cruscotti</strong></span>
          </div>
        </div>

        <p className="case-description">
          In quasi tutte le piccole e medie imprese succedono due cose. I dati ci sono già, tra
          gestionale, fatture ed Excel, ma sono sparsi, e domande semplici come "quanto guadagniamo su
          questo cliente?" richiedono ore di lavoro. E c'è qualcuno che ogni settimana rifà a mano lo
          stesso lavoro, con il rischio continuo di sbagliare. Il mio lavoro è sistemare entrambe le cose.
        </p>

        <Cta subject="Check-up dei dati aziendali" label="prenota un check-up gratuito">
          Vuoi sapere cosa si può automatizzare nella tua azienda?
        </Cta>

        <div className="case-section">
          <p className="section-label">cosa posso fare</p>
          <dl className="kv">
            {servizi.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>

        <div className="case-section">
          <p className="section-label">un esempio di automazione</p>
          <dl className="kv">
            {prima.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>

        <div className="case-section">
          <p className="section-label">altri lavori che si possono automatizzare</p>
          <ul className="case-description">
            {lavori.map((l) => <li key={l}>{l}</li>)}
          </ul>
        </div>

        <div className="case-section">
          <p className="section-label">esempi</p>
          <p className="case-description">
            Per aziende del settore finanziario e assicurativo ho costruito processi che ogni mattina
            prendono i file Excel depositati in una cartella e aggiornano i report Power BI,
            senza che nessuno debba aprirli a mano. Qui invece c'è un{" "}
            <Link to="/consulenza/controllo-di-gestione">cruscotto di controllo di gestione</Link> costruito
            su un calzaturificio inventato, con margini, incassi e magazzino aggiornati in automatico.
          </p>
        </div>

        <div className="case-section">
          <p className="section-label">come funziona</p>
          <dl className="kv">
            {passi.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>

        <p className="case-note">
          L'esempio di automazione è tipico, non riguarda un cliente specifico.
        </p>

      </div>
    </div>
  );
}
