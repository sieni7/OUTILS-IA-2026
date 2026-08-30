# OUTILS IA 2026 🚀
Curated list of the best AI tools for 2026. Designed to be deployed on Netlify, Vercel, Firebase Hosting, and GitHub Pages.

## 📁 Structure
- `index.html` : Page principale
- `css/` : Styles personnalisés
- `js/` : Données (data.js), logique (app.js), configuration Firebase (firebase-config.js)
- `scripts/` : Scripts de build (injection des clés au déploiement)
- Fichiers racine : `_redirects`, `vercel.json`, `firebase.json`, `404.html`

## 🔐 Gestion des clés Firebase (RÈGLE : jamais de clés sur GitHub)
`js/firebase-config.js` est **ignoré par Git** (`.gitignore`) : vos clés restent locales.
- **Local** : collez vos valeurs dans `js/firebase-config.js` directement.
- **Netlify / Vercel** : définissez `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`,
  `VITE_FIREBASE_PROJECT_ID` (et éventuellement `..._STORAGE_BUCKET`, `..._MESSAGING_SENDER_ID`, `..._APP_ID`)
  dans les variables d'environnement de la plateforme. La commande de build `npm run build`
  (script `scripts/inject-firebase-config.js`) génère alors le fichier au moment du déploiement.
  ⚠️ Le script ne touche JAMAIS votre fichier local s'il n'y a pas de clé dans l'environnement.

## 🚀 Déploiement

> ⚠️ **Important** : Netlify et Vercel déploient à partir du **dépôt Git** (pas de votre dossier local).
> Un `js/firebase-config.js` non versionné sera donc **absent** de ces déploiements, sauf si vous
> injectez les clés via variables d'environnement (voir ci-dessus) ou si vous versionnez le fichier.

### Netlify (recommandé)
1. Importer le dépôt GitHub sur Netlify.
2. Build command : `npm run build` — Publish directory : `/`.
3. Ajouter les variables d'environnement Firebase (voir section 🔐).
4. Le fichier `_redirects` (`/* /index.html 200`) gère le mode SPA.

### Vercel (recommandé)
1. Importer le dépôt GitHub sur Vercel.
2. Framework Preset : « Other » — Build command : `npm run build` — Output directory : `./` .
3. Ajouter les variables d'environnement Firebase (voir section 🔐).
4. `vercel.json` (rewrites -> `/index.html`) gère le mode SPA.

### Firebase Hosting (optionnel)
1. Avoir le CLI : `npm i -g firebase-tools`.
2. `firebase deploy` — le CLI déploie depuis votre **dossier local** : `js/firebase-config.js`
   (avec vos clés) est inclus si vous l'avez en local.
3. Sur un clone Git frais, penser à recréer `js/firebase-config.js` (ou run `npm run build`
   avec les variables d'env définies).

### GitHub Pages
1. Settings > Pages > Deploy from branch `main` (dossier racine `/`).
2. Le fichier `404.html` redirige vers `/OUTILS-IA-2026/`.
   📝 **Si vous changez de sous-dossier ou passez sur un domaine personnel**,
   mettez à jour sa balise : `<meta http-equiv="refresh" content="0; url=<VOTRE-CHEMIN>/">`.
3. Note : ce déploiement est basé sur Git → sans injection d'env, le site fonctionne
   en mode **localStorage** uniquement (pas de persistance cloud).