// scripts/add-link-status.js
// One-shot / maintenance : ajoute le champ `status` (verified|pending) à chaque outil de js/data.js.
// Règle : status = "pending" si link est "#" , sinon "verified".
// Préserve strictement le formatage existant (diff minimal, insertion unique après `clicks: <n>`).
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const target = resolve(__dirname, "../public/data.js");

const src = readFileSync(target, "utf8");
const lines = src.split("\n");

let changed = 0;
let pending = 0;
let verified = 0;
let hashLinks = 0;

const out = lines.map((line) => {
  // ligne de donnée outil : exactement 2 espaces + `{ id: `
  if (/^  \{ id: ".*clicks: \d+ \},?$/.test(line)) {
    const linkMatch = line.match(/link: "([^"]*)"/);
    const link = linkMatch ? linkMatch[1] : "";
    if (link === "#") hashLinks++;

    // idempotence : ne pas dupliquer un champ déjà présent
    if (/\bstatus: "(verified|pending)"/.test(line)) {
      return line;
    }

    changed++;
    const status = link === "#" ? "pending" : "verified";
    if (status === "pending") pending++;
    else verified++;

    // insert après la valeur `clicks: <n>`
    return line.replace(/^(  \{ id: .*clicks: \d+)( \},?)$/, `$1, status: "${status}"$2`);
  }
  return line;
});

if (changed === 0) {
  console.log("ℹ️ add-link-status : aucun outil modifié (déjà à jour ?).");
  process.exit(0);
}

writeFileSync(target, out.join("\n"), "utf8");

console.log(`✅ add-link-status : ${changed} outils traités`);
console.log(`   status pending  : ${pending}`);
console.log(`   status verified : ${verified}`);
console.log(`   lien '#' recensés : ${hashLinks} (erreur si ≠ pending)`);
if (hashLinks !== pending) {
  console.error("❌ Incohérence : pending != liens '#'");
  process.exit(1);
}