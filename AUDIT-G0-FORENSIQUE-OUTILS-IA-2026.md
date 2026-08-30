# AUDIT FORENSIQUE G0 — OUTILS-IA-2026 (L'Arsenal IA Absolu)

**Date :** 2026-08-30 — **Auditeur :** opencode / mode AUDIT (aucune modification)
**Scope :** Local ↔ GitHub ↔ Netlify ↔ Vercel — contexte : `L'Arsenal IA Absolu / Chargement des outils... / Total clics : 0`

---

## 1. Résumé exécutif

Le code **actuellement servi par Netlify et Vercel est identique au local** (preuve : hash SHA256 identiques sur `js/app.js`, `js/data.js`, `css/style.css` pour les 4 états). La chaîne `index.html → app.js → data.js → init() → renderTools()` est **fonctionnelle** : test d'exécution réel (DOM simulé, fichiers servis en production) → **96 cartes rendues, 17 filtres, compteur 0, recherche et filtres opérationnels, aucune erreur JS**.

Le symptôme « Chargement des outils... » n'est donc **pas reproductible** avec le contenu actuel des plateformes dans un navigateur conforme. La divergence **réelle et confirmée** se situe sur **`js/firebase-config.js`** : fichier volontairement hors Git (`.gitignore`), **masqué en production par les rewrites SPA** → il est servi **en `200 text/html` avec le contenu de `index.html`** au lieu d'un 404 franc. Conséquence : la config Firebase n'est jamais définie en prod (fallback localStorage silencieux, ce qui n'empêche **pas** le catalogue) et une erreur classique-script isolée apparaît en console.

Le doute sur le constat d'origine ne peut être levé qu'à 100 % par le re-test du navigateur réel : cause la plus probable = **observation d'un état obsolète/cache antérieur au Sprint 2** ou **blocage environnemental** (aucune preuve directe disponible pour le verifier).

---

## 2. Périmètre

- Local : `C:\Users\PC MARKET CI\OUTILS-IA-2026`
- GitHub : `github.com/sieni7/OUTILS-IA-2026` (branche par défaut `main`)
- Netlify : `https://outils-ia-2026.netlify.app/`
- Vercel : `https://outils-ia-2026.vercel.app/`

## 3. Méthodologie

`preuve → comparaison → diagnostic → conclusion`. Aucune écriture dans le projet. Lectures, requêtes HTTP, hash, exécution des **vrais fichiers** servis en production dans un harnais DOM de test (dossier temp hors projet). Dashboards Netlify/Vercel non accessibles (pas de token) → éléments non vérifiables signalés explicitement, jamais inventés.

---

## 4. Inventaire local

Présents : `css/style.css` · `js/app.js` · `js/data.js` · `js/firebase-config.js` · `scripts/inject-firebase-config.js` · `_redirects` · `.env` · `.gitignore` · `404.html` · `CONTRIBUTION.md` · `firebase.json` · `index.html` · `package.json` · `README.md` · `vercel.json`.

Absents : `node_modules` (non présent), `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `netlify.toml`. `.git` présent (qualité : arbre propre).

**Fichiers uniquement locaux (hors Git, conformément à `.gitignore`) :** `js/firebase-config.js`, `.env`.

## 5. État Git — local

- SHA : `a327590a441d6de67ec3ac9312570982d85cf9f6`
- Branche : `main` (unique, suivie par `origin/main`)
- Date : `2026-08-30` — Message : « Sprint 4 - Docs déploiement exactes (Netlify/Vercel depuis Git), injection des clés Firebase via env au build »
- Remote : `https://github.com/sieni7/OUTILS-IA-2026.git` (fetch = push, correct)
- `git status` : clean — 13 fichiers suivis (`git ls-files`). `js/firebase-config.js` et `.env` **non suivis** (vérifié).

## 6. État GitHub

- Branche par défaut : `main`
- HEAD : `a327590` (identique local) → **SHA Local == SHA GitHub**, pas de divergence de commit.
- `pushed_at` : 2026-08-30T18:46:01Z.
- Arborescence (13 blobs) : `.gitignore`, `404.html`, `CONTRIBUTION.md`, `README.md`, `_redirects`, `css/style.css`, `firebase.json`, `index.html`, `js/app.js`, `js/data.js`, `package.json`, `scripts/inject-firebase-config.js`, `vercel.json`.
- **Absents du dépôt** : `js/firebase-config.js`, `.env`, `netlify.toml`, tous lockfiles, `node_modules`.
- **GitHub Pages : INACTIF** (`GET /pages` → HTTP 404). Le `404.html` existe mais aucun site Pages n'est activé.

### Tableau comparatif Local / GitHub

| Élément            | Local                                  | GitHub                                | Écart |
| ------------------ | -------------------------------------- | ------------------------------------- | ----- |
| Branche            | `main`                                 | `main`                                | Aucun |
| HEAD               | `a327590…cf9f6`                        | `a327590…cf9f6`                       | Aucun |
| index.html         | présent (3002 o)                       | présent (3002 o)                      | Aucun |
| app.js             | présent (6985 o)                       | présent (6985 o)                      | Aucun |
| data.js            | présent (17239 o)                      | présent (17239 o)                     | Aucun |
| firebase-config.js | présent (local uniquement, gitignoré)  | **ABSENT**                            | Différence attendue (`.gitignore` l.3) |
| package.json       | présent (402 o)                        | présent (402 o)                       | Aucun |
| firebase.json      | présent                                | présent                               | Aucun |
| vercel.json        | présent                                | présent                               | Aucun |
| _redirects         | présent                                | présent                               | Aucun |
| README.md          | présent (2965 o)                       | présent (2965 o)                      | Aucun |

## 7. Audit index.html

- HTML5 valide, `lang="fr"`, charset UTF-8. Aucune référence à un fichier inexistant hors cas Firebase traité ci-dessous.
- CSS : Bootstrap 5.3.2 (CDN jsdelivr) + bootstrap-icons 1.11.3 (CDN) + Google Fonts Inter (CDN) + `css/style.css` (local).
- Scripts, dans l'ordre :
  1. `https://www.gstatic.com/firebasejs/10.12.4/firebase-app-compat.js` (classique, CDN)
  2. `https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore-compat.js` (classique, CDN)
  3. `js/firebase-config.js` (classique — **le seul à poser problème en prod, cf. §12/13**)
  4. `js/data.js` (`type="module"`, déferré)
  5. `js/app.js` (`type="module"`, déferré, importe `./data.js`)
- IDs référencés par app.js tous présents : `toolsGrid`, `searchBar`, `filterContainer`, `totalClicks`.
- Chaîne de dépendances :
  `index.html → [CDN firebase ×2] → js/firebase-config.js → js/data.js → js/app.js → import ./data.js`.

## 8. Audit js/app.js

Chemin d'exécution reconstitué :
`DOMContentLoaded → init() → loadClicksFromLocalStorage() → initFirebase() → [Firebase] syncClicksFromFirebase() → generateFilters() → event input(searchBar) → renderTools() → updateTotalClicks()`

- `initFirebase()` : dépend de `typeof firebase !== 'undefined' && window.FIREBASE_CONFIG` ; **toutes les branches sont couvertes par try/catch ou fallback explicit** → en l'absence de config, mode `localStorage`, aucun échec.
- `renderTools()` : 96 entrées → HTML carte ; garde `filtered.length === 0` présente.
- Erreurs potentielles auditées : `t.name/desc.toLowerCase()` (champs toujours présents, §9), `tool.price` (toujours présent), `tool.featured` (optionnel, falsy safe). **Aucun point de blocage identifié.**
- Test réel (DOM simulé, vrai fichier servi Netlify/Vercel) : `init` OK, 96 cartes, 17 boutons de filtre, compteur `0`, placeholder remplacé, **zéro** exception/unhandledRejection.

## 9. Audit js/data.js

Analyse par exécution (parsing réel) :
- Syntaxe : **valide** (module importable — preuve d'exécution).
- **Total : 96 outils** — 16 catégories : Modèles IA, Recherche, Agents & Auto, Images IA, Vidéo IA, Montage, Voix & Audio, Musique IA, Avatars, Design, Contenu, Publication, Vente, Dev, Formation, Trafic.
- Liens `#` : **17** (catégories avec liens manquants à traiter : Agents & Auto, Images IA, Vidéo IA, Voix & Audio, Musique IA, Avatars, Design, Contenu, Formation).
- Liens vides/absents : **0** — IDs dupliqués : **0** — champs manquants : **0**.
- Répartition prix : Frémium 37 · Gratuit 37 · Payant 21 · **Économique 1** (⚠ cosmétique : `Économique` non mappé → badge rouge au lieu de neutre).

## 10. Audit Firebase

Références : `index.html` (SDK CDN compat), `js/firebase-config.js` (objets `window.FIREBASE_CONFIG`), `js/app.js` (`initFirebase`, `syncClicksFromFirebase`, `updateFirebaseClicks`).

- Config **présente localement** mais **placeholder uniquement** (`AIzaSy...`, `votre-projet…`) ; `.env` = placeholders (`xxx`). **Aucune clé réelle nulle part.**
- Config **absente de Git** (`.gitignore` l.3) et **absente du contenu servi** en prod (le fichier est réécrit en index.html, cf. §12/13).
- Variable d'environnement attendue par le build (`scripts/inject-firebase-config.js` : `VITE_FIREBASE_API_KEY` etc.) — script testé : **idempotent** (sans clé → ne touche rien ; avec clé → génère). Aucun dashboard consultable pour confirmer les variables — état actuel : **aucune clé injectée**.

> **Le catalogue peut-il fonctionner sans Firebase ?** — **OUI, démontré** : `initFirebase()` bascule en fallback localStorage ; la simulation d'exécution sans `firebase` et sans `FIREBASE_CONFIG` rend intégralement le catalogue. → **Le premier rendu du catalogue ne dépend pas de Firebase.**

## 11. Audit package / build

- **Projet STATIC** : aucune dépendance (`dependencies`/`devDependencies` absentes), aucun bundler, aucun lockfile (cohérent), aucune version Node imposée (`engines` absent).
- Scripts : `start` (`npx serve .`) · `build` (`node scripts/inject-firebase-config.js`, plat) · `deploy:*` (CLI).
- Risque CI : le script `build` utilise `import`/ESM dans un `.js` sans `"type":"module"` → **warning** Node (perf uniquement), exécution correcte (vérifié). Aucune autre défaillance CI identifiée.

## 12. Audit Netlify — `outils-ia-2026.netlify.app`

- `/` : **HTTP 200**, `text/html; charset=UTF-8`. HTML servi = index local + **injection Netlify HUD** (`/.netlify/scripts/hud`, ajout en fin de body — injection serveur, sans effet sur le rendu).
- Ressources : `/js/app.js` → 200 `application/javascript` (6985 o) · `/js/data.js` → 200 `application/javascript` (17239 o) · `/css/style.css` → 200 `text/css` (1334 o). **Hash == local (3/3).**
- `/js/firebase-config.js` → **200 `text/html` 3722 o — contenu EXACTEMENT le HTML de `/`** (hash identique). **Rewrite SPA `_redirects` (`/* /index.html 200`) masque le fichier manquant.**
- SPA : chemin profond arbitraire → 200 `text/html` (rewrite active et fonctionnelle).
- Build / publish directory / variables : **NON ACCESSIBLE (dashboard)** — le contenu servi étant le commit actuel, le déploiement courant est à jour.

## 13. Audit Vercel — `outils-ia-2026.vercel.app`

- `/` : **HTTP 200**, `text/html; charset=utf-8` (cache HIT, Age 853 → déploiement courant servi).
- Ressources : `/js/app.js` → 200 `application/javascript` (6985 o) · `/js/data.js` → 200 (17239 o) · `/css/style.css` → 200 (1334 o). **Hash == local (3/3).**
- `/js/firebase-config.js` → **200 `text/html` 3002 o — contenu EXACTEMENT le HTML de `/`** (hash identique). **`vercel.json` (`/(.*) → /index.html`) masque le fichier manquant.**
- SPA : chemin profond arbitraire → 200 `text/html`.
- Build / variables : **NON ACCESSIBLE (dashboard)**.

**Comparaison Netlify vs Vercel : identiques en contenu et en divergence** (seule différence : la taille du réécrit — 3722 vs 3002 o — due à l'injection HUD Netlify).

## 14. Tests runtime navigateur (simulation DOM, fichiers réellement servis)

Voir §6/§11 — harnais autonome exécutant **les véritables `app.js`+`data.js`** téléchargés depuis Netlify et Vercel (plus le local), DOM mock minimal, déclenchement `DOMContentLoaded → init()`.

| Mesure                | Local | Netlify (servi) | Vercel (servi) |
| --------------------- | ----- | --------------- | -------------- |
| Import modules        | OK    | OK              | OK             |
| Cartes rendues        | 96    | 96              | 96             |
| Boutons de filtre     | 17    | 17              | 17             |
| Compteur total        | 0     | 0               | 0              |
| Placeholder éliminé   | OUI   | OUI             | OUI            |
| Recherche « claude »  | 1     | 1               | (idem, même hash) |
| Filtre catégorie Dev  | 8     | 8               | (idem, même hash) |
| Erreurs / rejets      | 0     | 0               | 0              |

→ **Le symptôme (« Chargement des outils... ») n'est pas produit par le contenu actuel.**

## 15. Matrice de comparaison

| Test               | Local | GitHub   | Netlify | Vercel |
| ------------------ | ----- | -------- | ------- | ------ |
| index.html         | OK    | OK       | OK      | OK     |
| app.js             | OK    | OK       | OK      | OK     |
| data.js            | OK    | OK       | OK      | OK     |
| firebase-config.js | OK    | KO (absent, attendu) | KO (200 HTML masqué) | KO (200 HTML masqué) |
| CSS                | OK    | OK       | OK      | OK     |
| JS sans erreur     | OK    | N/A      | OK      | OK     |
| Catalogue affiché  | OK    | N/A      | OK      | OK     |
| Recherche          | OK    | N/A      | OK      | OK     |
| Filtres            | OK    | N/A      | OK      | OK     |
| Firebase           | fallback (clés placeholder) | N/A | inopérant masqué | inopérant masqué |
| Compteur           | OK    | N/A      | OK      | OK     |

*(GitHub = référentiel de déploiement, pas d'exécution : N/A sur comportement runtime. Justifications : hash/harness ci-dessus.)*

## 16. Matrice des commits

| Source  | Branche | Commit SHA                             | Date          | État |
| ------- | ------- | -------------------------------------- | ------------- | ---- |
| Local   | main    | `a327590…cf9f6`                        | 2026-08-30    | OK (clean) |
| GitHub  | main    | `a327590…cf9f6`                        | 2026-08-30T18:45:28Z | OK |
| Netlify | main    | **INCONNU** (dashboard) — code servi = `a327590` (hash) | — | En service |
| Vercel  | main    | **INCONNU** (dashboard) — code servi = `a327590` (hash) | — | En service |

## 17. Écarts identifiés

1. **[CONFIRMÉ — point de divergence principal]** `js/firebase-config.js` absent du Git : **Netlify et Vercel le servent en `200 text/html` = index.html** (rewrites SPA) au lieu d'un 404. Le navigateur exécute alors du HTML comme script classique → erreur isolée en console ; `window.FIREBASE_CONFIG` reste `undefined` → Firebase **silencieusement inopérant** en prod (fallback localStorage). Severity : **Moyenne** (n'affecte pas le catalogue, affecte la persistance cloud et la lisibilité de la console).
2. **[CONFIRMÉ]** `404.html` présent mais **GitHub Pages non activé** (API 404) — README/documentation annoncent une destination qui n'existe pas.
3. **[CONFIRMÉ]** `package.json` annonce `deploy:*` ; les outils CLI (`netlify`, `vercel`, `firebase`) ne sont pas dans le projet (devDependencies absentes) → dépendent d'un CLI global non vérifiable ici.
4. **[CONSTAT]** Netlify injecte un script HUD serveur (`/.netlify/scripts/hud`) dans l'HTML servi (invisible/peu risqué).
5. **[CONSTAT]** Prix « Économique » (1 outil) non mappé → badge rouge (`danger`) au lieu d'un code neutre.

## 18. Causes confirmées

- **C1 — Fichier Firebase manquant masqué par les rewrites SPA** (Netlify `_redirects`, Vercel `vercel.json`), preuve : hash `js/firebase-config.js` == hash `/` sur les deux plateformes (3722 o / 3002 o).
- **C2 — GitHub Pages inactif** (preuve : `GET /api/.../pages` → 404) malgré `404.html`.

## 19. Causes très probables

- **P1 — Le constat « Chargement des outils… » provient d'un état obsolète** (déploiement antérieur au Sprint 2, cache navigateur) ou d'un **blocage environnemental** (CSP/adblock/proxy sur les modules). Convergence : contenu actuel 100 % fonctionnel (runtime), aucun 404 critique, MIME conformes.

## 20. Causes probables

- **P2 — L'erreur classique-script (HTML exécuté comme JS) en console a été interprétée comme la cause** alors qu'elle est isolée et non bloquante.

## 21. Causes écartées

- **E1 — app.js syntaxe/module cassé** : import OK + 96 cartes (test réel). Écarté.
- **E2 — data.js invalide** : parse OK, 96 objets, 0 doublon, 0 champ manquant. Écarté.
- **E3 — Firebase bloque `init()`** : découplage prouvé (fallback), 0 rejet. Écarté.
- **E4 — Chemins relatifs cassés / références inexistantes** : app/data/css = 200 corrects sur les 4 états. **Seul** firebase-config.js diffère (absent du Git, par conception). Partiellement écarté (cf. C1).
- **E5 — MIME incorrect des modules** : `application/javascript` partout. Écarté.
- **E6 — Rewrites SPA brisant les fichiers statiques** : les fichiers existants sont servis (app/data/css en JS/CSS), le rewrite ne touche que l'absent. Écarté (responsabilité de C1 ☞ masquage, pas de casse).
- **E7 — Fichier déployé différent de Git/local** : hash identiques Netlify/Vercel/Local/Git. Écarté.

## 22. Risques G0

- **R1** — Firebase « fantôme » : l'utilisateur peut croire la persistance cloud active alors qu'elle est en fallback localStorage (perte multi-appareils). Non visible dans l'UI (seul le log l'indique).
- **R2** — Toute future ressource ajoutée et.gitignoree subira le même masquage (débogage trompeur : « 200 alors que le fichier n'existe pas »).
- **R3** — GitHub Pages annoncé mais inactif → lien/confusion utilisateur.
- **R4** — Aucune clé Firebase réelle nulle part (local placeholder, env absentes) → R1 devient certain tant que les clés ne sont pas injectées.
- **R5** — Cache/redondance plateformes : pas de purge explicite post-déploiement (maigre).

## 23. Recommandations

1. **Adosser la présence du script :** rendre l'absence de `js/firebase-config.js` **explicite** en prod :
   - option A (propre, G0.2) : retirer le `<script src="js/firebase-config.js">` de `index.html` et charger la config dynamiquement (lecture de `window.FIREBASE_CONFIG` si défini) → plus aucun masquage ; ou
   - option B : générer par le build un `js/firebase-config.js` **vide** (fichier réel) → l'include devient inoffensif partout.
2. **Exclure les chemins statiques des rewrites SPA** (exigence minimale) : Netlify `_redirects` et `vercel.json` doivent laisser passer `/js/*`, `/css/*` existants → en cas de ressource réellement manquante, obtenir un **404 franc** au lieu d'un masquage.
3. **Ajouter la résilience Firebase déjà présente** dans la documentation (fallback localStorage attendu) — pas de changement de code nécessaire au rendu.
4. **Décider pour GitHub Pages** : activer (Settings→Pages→branche `main`, avec `404.html` déjà prêt) **ou** retirer l'entrée du README et le fichier `404.html` si non souhaité.
5. **Configurer les variables d'environnement** sur Netlify & Vercel (`VITE_FIREBASE_*`) et renseigner les clés réelles localement → injecter le vrai `js/firebase-config.js` au build (script livré et testé).
6. **Optionnel** : mappage du prix « Économique » → badge neutre ; épingler Node ≥ 18 dans un champ `engines` pour supprimer le warning ESM.

## 24. Plan de correction G0 (proposition — à exécuter après validation)

```
G0.1 — Correction de la cause racine : zéro masquage → 404 franc pour js/firebase-config.js absent
      (rewrites SPA ajustées + suppression/aller du <script> ou fichier vide généré par le build)
G0.2 — Découplage du rendu Firebase : déjà effectif (initFirebase → fallback) → le conserver tel quel
G0.3 — Nettoyage des références : décision GitHub Pages (activer ou dédocumenter + retirer 404.html)
G0.4 — Validation locale : re-test runtime (96 cartes), absence d'erreur console
G0.5 — Commit Git (message explicite, sans clés)
G0.6 — Déploiement Netlify (npm run build + env vars)
G0.7 — Déploiement Vercel (npm run build + env vars)
G0.8 — Tests production : navigateur réel (console réseau/DOM) sur les deux domaines
G0.9 — Validation G0 : matrices OK, aucun masquage, Firebase selon décision
```

**Aucune migration technologique proposée** (projet statique adapté ; pas de preuve justifiant React/Next/Supabase).

## 25. Critères de validation

- A1 — Rafraîchissement forcé des deux domaines → catalogue complet (96) visible.
- A2 — Console navigateur : aucune erreur fatale ; erreur `firebase-config.js` (si présente) explicite, ou absente après G0.1.
- A3 — `Network` : `app.js`/`data.js`/`style.css` en `application/javascript`/`text/css` (200) ; `firebase-config.js` : 404 franc **ou** vrai fichier servi selon option retenue.
- A4 — Recherche + filtres par catégorie opérants.
- A5 — Compteur « Total clics » à jour après clics (mode final : localStorage seul, ou Firebase si clés injectées).
- A6 — `git status` propre, aucune clé sur le dépôt.

---

```
==================================================
VERDICT AUDIT G0
==================================================

G0 :
NON VALIDÉ

CAUSE PRINCIPALE :
Divergence opérationnelle : js/firebase-config.js, absent du dépôt Git,
est masqué en production par les rewrites SPA (Netlify _redirects et vercel.json) :
servi en 200 text/html (contenu = index.html) au lieu d'un 404. Firebase y est
silencieusement inopérant et une erreur classique-script apparaît en console.
La chaîne de rendu du catalogue, elle, est fonctionnelle dans les 4 états.
Non validé car le constat d'origine (« Chargement des outils... ») n'est pas
reproductible sur le contenu actuel : la seule explication factuellement
cohérente est un état obsolète/cache antérieur, restant à confirmer par un
re-test navigateur réel.

CAUSES SECONDAIRES :
- GitHub Pages inactif malgré 404.html et documentation (API 404) ;
- Clés Firebase réelles absentes (placeholders locaux et variables d'env
  non renseignées) → persistance cloud jamais active à ce jour ;
- Injection Netlify HUD (cosmétique) ; prix « Économique » non mappé (badge rouge).

PREUVE PRINCIPALE :
Hash SHA256 : js/firebase-config.js servi == index.html servi sur les deux
plateformes (Netlify 3722 o, Vercel 3002 o, contenu <!DOCTYPE html>).
Contre-preuve : hash app.js/data.js/style.css identiques Local==GitHub==Netlify==Vercel,
et exécution runtime des fichiers servis → 96 cartes, 17 filtres, 0 erreur.

LOCAL :
OK

GITHUB :
OK

NETLIFY :
OK  (rendu catalogue OK ; divergence confirmée uniquement sur firebase-config.js)

VERCEL :
OK  (idem Netlify)

CATALOGUE :
OK  (96 outils — vérifié sur les fichiers servis)

FIREBASE :
NON NÉCESSAIRE pour le premier rendu (découplage prouvé) — actuellement inopérant
en production (masqué) et non configuré (aucune clé réelle)

NIVEAU DE CONFIANCE DU DIAGNOSTIC :
ÉLEVÉ

PROCHAINE ACTION RECOMMANDÉE :
G0.1 à G0.8 (plan ci-dessus), en commençant par : (a) re-test navigateur réel des
deux domaines pour confirmer/écarter l'état « Chargement des outils... »,
(b) suppression du masquage SPA sur les ressources manquantes,
(c) décision GitHub Pages, (d) injection des clés Firebase via env.

AUCUNE MODIFICATION EFFECTUÉE :
OUI
==================================================
```