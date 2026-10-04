// Rigenera la pagina dei litigi dal template (13_litigi.R) e la copia dentro
// public/, così il dev server e il deploy la servono su /progetti/litigi-alleati/
import { cpSync, rmSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";

const progetto = "../discorsi_camera/applausi";
const src = `${progetto}/viz`;
const dest = "public/progetti/litigi-alleati";

execFileSync("C:/Program Files/R/R-4.3.0/bin/Rscript.exe", ["R/13_litigi.R"], {
  cwd: progetto,
  stdio: "inherit",
});

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });
cpSync(`${src}/litigi.html`, `${dest}/index.html`);
cpSync(`${src}/foto`, `${dest}/foto`, { recursive: true });
cpSync(`${src}/loghi`, `${dest}/loghi`, { recursive: true });

console.log(`Pagina dei litigi copiata in ${dest}`);
