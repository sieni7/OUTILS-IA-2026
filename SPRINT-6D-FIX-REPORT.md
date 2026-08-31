# SPRINT 6D — FIX RAPPORT : Chargement conditionnel de `firebase-config.js`

**Date** : 31/08/2026
**Commit** : `607b242`
**Focus** : Éliminer l'erreur `Unexpected token '<'` qui cassait l'affichage sur les déploiements Git (Netlify / Vercel / GitHub Pages) lorsque `firebase-config.js` est absent (fichier ignoré par Git via `.gitignore`).

---

## 1. Diagnostic (Règle 2)

**Structure réelle du projet** (confondue dans le prompt par l'ancienne arbo `js/`) :

```
public/
  404.html  app.js  data.js  firebase-config.js  index.html  style.css  _redirects
`_redirects` :  `/*  /index.html  200`   (rewrite SPA)
`vercel.json` : rewrites  `/(.*)  ->  /index.html`
`.gitignore`  :  `public/firebase-config.js`   (exclu, NA jamais committé)
```

**Cause racine** : `index.html` contenait un chargement **statique et inconditionnel** :

```html
<script src="firebase-config.js"></script>
```

- **Local / Firebase Hosting** : le fichier existe → servi en `text/javascript` → OK.
- **Netlify / Vercel / GitHub Pages** : le fichier est absent (committé nulle part).
  Le rewrite SPA (`_redirects` / `vercel.json` / GitHub Actions) renvoie alors **`index.html` en `text/html`** pour l'URL `/firebase-config.js`.
  → Le navigateur tente d'exécuter du HTML comme du JavaScript → **`Unexpected token '<'`** (syntax error) → le module `app.js` avorte → écran vide.

`app.js` gérait **déjà** correctement l'absence de config (ligne 33 : `if (typeof firebase !== 'undefined' && window.FIREBASE_CONFIG)`) — la seule faute était le chargement HTML.

---

## 2. Solution retenue (Règle 3 — aucun secret exposé)

Micro-correction **limitée strictement au chargement** dans `index.html` (23 lignes / 2 supprimées, 1 seul fichier modifié).

Remplacement de la balise `<script src>` statique par un **chargement dynamique conditionnel via `fetch`** qui :

1. `fetch('/firebase-config.js')` ;
2. abandonne si réponse non-ok (cas Pages 404) ;
3. abandonne si le `Content-Type` n'est pas du JS (cas Netlify/Vercel : `text/html`) ;
4. au fallback, ne traite que si le corps ne commence pas par `<` ou `<!DOCTYPE` (double garde anti-HTML) ;
5. n'exécute le code que si c'est du **vrai JavaScript** (le fichier est alors `window.FIREBASE_CONFIG = {...}`);
6. sinon → ne fait rien → `window.FIREBASE_CONFIG` reste `undefined` → **fallback localStorage** propre géré par `app.js`.

**Aucun secret n'est touché** : `firebase-config.js` reste ignoré par Git, rien d'exposé, aucun refactor, aucune modification d'architecture, de design ni de données.

---

## 3. Tests locaux (e2e Puppeteer, 3 scénarios)

| Scénario | FBC_CONFIG | 96 cartes | Erreur syntaxe | Recherche | Filtres | Thème | CTA | Compteur | Responsive |
|---|---|---|---|---|---|---|---|---|---|
| `present` (fichier réel) | ✅ vrai | ✅ | 0 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `spa` (rewrite → HTML, simule Netlify/Vercel) | ✅ absent | ✅ | **0** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `404` (simule GitHub Pages) | ✅ absent | ✅ | **0** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

L'erreur ciblée `Unexpected token '<'` a **disparu** dans tous les scénarios d'absence.

---

## 4. Test production (4 plateformes, headless réel)

| Plateforme | 96 cartes | Config `firebase-config.js` | Erreur syntaxe JS | Erreur console | Verdict |
|---|---|---|---|---|---|
| **Netlify** `outils-ia-2026.netlify.app` | ✅ | HTML masqué → FBC=false (fallback) | **0** | 0 | ✅ |
| **Vercel** `outils-ia-2026.vercel.app` | ✅ | HTML masqué → FBC=false (fallback) | **0** | 0 | ✅ |
| **Firebase Hosting** `outils-ia-2026.web.app` | ✅ | Vrai JS → FBC=true (**Firebase actif**) | 0 | 0 | ✅ |
| **GitHub Pages** `sieni7.github.io/OUTILS-IA-2026` | ✅ | HTML masqué → FBC=false (fallback) | **0** | 0 | ✅ |

Le flux GitHub Actions `Deploy Pages` : `completed/success`.

---

## 5. Verdict final

**RÉUSSI — defecté correcte sur les 4 plateformes.**

- ✅ L'erreur `Unexpected token '<'` est éliminée sur les 3 plateformes où `firebase-config.js` est absent (Netlify / Vercel / GitHub Pages) ;
- ✅ Le mode **Firebase reste fonctionnel** sur Firebase Hosting (config présente) ;
- ✅ **Fallback localStorage intact** partout ailleurs ;
- ✅ **Aucun secret exposé** (conforme Règle 3 — micro-correction uniquement du chargement) ;
- ✅ Aucune régression des tests A–I (catalogue, recherche, filtres, thème, CTA, compteur, responsive).

**Livrables** : 1 fichier modifié (`public/index.html`), 1 commit (`607b242`), push sur `main`, 4 URLs validées en production.
