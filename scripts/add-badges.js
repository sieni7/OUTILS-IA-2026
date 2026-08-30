import { readFileSync, writeFileSync } from "fs";

const FILE = "public/data.js";
let src = readFileSync(FILE, "utf8");

const HOT = ["claude", "chatgpt", "gemini", "perplexity", "midjourney", "elevenlabs", "notion", "canva", "github", "cursor", "suno"];
const NEW = ["deepseek", "kling", "sora", "udio", "grok", "gamma", "lovable", "mistral"];
const BETA = ["openclaw", "maxclaw", "nanobanana", "lovart", "dreamina", "wanvideo", "seedance", "hailuo", "grokimage", "voicebox", "lyria", "mureka", "pippit", "zimage", "designer", "antigravity", "sifuyik"];

const badgeOf = (id) => (BETA.includes(id) ? "beta" : NEW.includes(id) ? "new" : HOT.includes(id) ? "hot" : null);

// Si une ligne badge existe déjà, la retirer (idempotent)
src = src.replace(/^(\s+)badge: "[^"]*",?\r?\n/gm, "");

// Regex de bloc : un objet outil complet (champs éventuellement multi-lignes)
const blockRe = /(^ {2})\{ id: "([^"]+)"([\s\S]*?)(\r?\n {2}\},)/gm;

let added = 0;
let changed = 0;
src = src.replace(blockRe, (full, indent, id, body, close) => {
  changed++;
  const b = badgeOf(id);
  if (!b) return full;
  if (body.includes("badge:")) return full; // déjà présent (sécurité)
  added++;
  // Trouver `status: "X",` et insérer la ligne badge juste après
  const statusRe = /(status: "[^"]+",)/;
  const badgeLine = `\n    badge: "${b}",`;
  return `${indent}{ id: "${id}"${body.replace(statusRe, (ms, s) => s + badgeLine)}${close}`;
});

// Normalise en CRLF pour cohérence
src = src.split(/\r?\n|\n/).join("\r\n");
writeFileSync(FILE, src + "\r\n", "utf8");
console.log("Blocs traités : " + changed + " / Badges ajoutés : " + added);
