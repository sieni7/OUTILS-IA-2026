// scripts/inject-firebase-config.js
// Génère js/firebase-config.js depuis les variables d'environnement.
// Usage : utilisé au build sur Netlify / Vercel pour injecter les clés SANS les versionner.
// Règles :
//  - Si VITE_FIREBASE_API_KEY est fournie (non vide, non "xxx") : régénère js/firebase-config.js.
//  - Sinon : ne touche PAS au fichier local existant (vos clés locales restent intouchées).
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const target = resolve(__dirname, "../js/firebase-config.js");

const key = process.env.VITE_FIREBASE_API_KEY;
if (!key || key === "xxx" || key === "") {
  if (existsSync(target)) {
    console.log("ℹ️ inject-firebase-config : aucune VITE_FIREBASE_API_KEY — fichier local conservé intact.");
  } else {
    console.log("ℹ️ inject-firebase-config : aucune clé fournie et fichier absent — rien à faire.");
  }
  process.exit(0);
}

const config = {
  apiKey: key,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.VITE_FIREBASE_APP_ID || "",
};

mkdirSync(dirname(target), { recursive: true });
const out =
  "// js/firebase-config.js\n" +
  "// Généré automatiquement par scripts/inject-firebase-config.js — NE PAS COMMITER.\n" +
  "window.FIREBASE_CONFIG = " +
  JSON.stringify(config, null, 2) +
  ";\n";

writeFileSync(target, out, "utf8");
console.log("✅ inject-firebase-config : js/firebase-config.js généré depuis les variables d'environnement.");