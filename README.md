# OUTILS IA 2026 🚀
Curated list of the best AI tools for 2026. Designed to be deployed on Netlify, Vercel, Firebase Hosting, and GitHub Pages.

## 📁 Structure
Tout le contenu statique est isolé dans `public/` : c'est **le seul dossier déployé** par
Netlify, Vercel et Firebase Hosting (exclusion garantie par construction des fichiers sensibles
comme `.env`, `*.md`, `firebase.json`, `package.json`). Les scripts de build restent à la racine
hors du périmètre de déploiement.
- `public/index.html` : Page principale
- `public/style.css` : Styles personnalisés
- `public/data.js` : Données des outils
- `public/app.js` : Logique de l'application
- `public/firebase-config.js` : Configuration Firebase (générée / non versionnée)
- `public/_redirects`, `public/404.html` : Redirections SPA
- `scripts/` : Scripts de build (injection des clés au déploiement)
- Fichiers racine : `vercel.json`, `firebase.json`, `.gitignore`, `package.json`

## 🌐 Production

Le site est déployé en parallèle sur 4 plateformes (même contenu, synchronisé à chaque push sur `main`) :

| Plateforme | URL |
| :--- | :--- |
| Netlify | [outils-ia-2026.netlify.app](https://outils-ia-2026.netlify.app/) |
| Vercel | [outils-ia-2026.vercel.app](https://outils-ia-2026.vercel.app/) |
| Firebase Hosting | [outils-ia-2026.web.app](https://outils-ia-2026.web.app/) |
| GitHub Pages | [sieni7.github.io/OUTILS-IA-2026](https://sieni7.github.io/OUTILS-IA-2026/) |

Les routes sensibles (`.env`, `firebase.json`, `README.md`, `package.json`) sont masquées
(rewrite SPA → `index.html`) ou renvoient 404 : **aucune fuite**.

## ✨ Fonctionnalités (v1.0)

- **96 outils IA** référencés avec fiches détaillées
- **Recherche en temps réel** par nom ou description
- **Filtrage par catégorie** (16 catégories)
- **Modale détaillée** (année, éditeur, pays, description longue)
- **Badges de statut** (Hot, New, Beta)
- **Compteur de clics** (persistance Firebase + localStorage)
- **Thème clair/sombre** avec persistance locale
- **Carrousel héro** (3 slides, blobs animés, CTA, stats)
- **Footer corporate** (badges hébergeurs, contacts, crédits)
- **Formulaire de soumission** d'outil (email + WhatsApp)
- **Déployé sur 4 plateformes** (Netlify, Vercel, Firebase, GitHub Pages)

## 🔐 Gestion des clés Firebase (RÈGLE : jamais de clés sur GitHub)
`public/firebase-config.js` est **ignoré par Git** (`.gitignore`) : vos clés restent locales.
- **Local** : collez vos valeurs dans `public/firebase-config.js` directement.
- **Netlify / Vercel** : définissez les variables d'environnement ci-dessous. La commande de
  build `npm run build` (script `scripts/inject-firebase-config.js`) génère alors le fichier
  au moment du déploiement.
  ⚠️ Le script ne touche JAMAIS votre fichier local s'il n'y a pas de clé dans l'environnement.

## 🔧 Configuration des variables d'environnement

Variables requises par le build (`scripts/inject-firebase-config.js`), à définir dans les
dashboards Netlify et Vercel (aucune valeur réelle ne doit jamais être versionnée) :

```bash
VITE_FIREBASE_API_KEY=<votre_clé>
VITE_FIREBASE_AUTH_DOMAIN=<votre_projet>.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=<votre_projet>
VITE_FIREBASE_STORAGE_BUCKET=<votre_projet>.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=<votre_sender_id>
VITE_FIREBASE_APP_ID=<votre_app_id>
```

Localement, vous pouvez utiliser un fichier `.env.local` (ignoré par Git) pour les tests sans
toucher `public/firebase-config.js`.

## 🚀 Déploiement

> ⚠️ **Important** : Netlify et Vercel déploient à partir du **dépôt Git** (pas de votre dossier local).
> Un `public/firebase-config.js` non versionné sera donc **absent** de ces déploiements, sauf si vous
> injectez les clés via variables d'environnement (voir ci-dessus) ou si vous versionnez le fichier.

### Netlify (recommandé)
1. Importer le dépôt GitHub sur Netlify.
2. Build command : `npm run build` — Publish directory : `public/`.
3. Ajouter les variables d'environnement Firebase (voir section 🔐).
4. Le fichier `public/_redirects` (`/* /index.html 200`) gère le mode SPA.

### Vercel (recommandé)
1. Importer le dépôt GitHub sur Vercel.
2. Framework Preset : « Other » — Build command : `npm run build` — Output directory : `./public` .
3. Ajouter les variables d'environnement Firebase (voir section 🔐).
4. `vercel.json` (rewrites -> `/index.html`) gère le mode SPA.

### Firebase Hosting (optionnel)
1. Avoir le CLI : `npm i -g firebase-tools`.
2. `firebase deploy` — le CLI déploie **uniquement** le contenu de `public/` (configuré dans
   `firebase.json`) : `public/firebase-config.js` (avec vos clés) est inclus si vous l'avez en local.
3. Sur un clone Git frais, penser à recréer `public/firebase-config.js` (ou run `npm run build`
   avec les variables d'env définies).

### GitHub Pages
Le déploiement utilise un **workflow GitHub Actions** (`.github/workflows/deploy-pages.yml`) qui publie le
dossier `public/`. C'est la seule façon de servir `public/` : le déploiement « Deploy from branch » ne
permet que `/` ou `/docs`. Le build type de Pages doit être réglé sur **GitHub Actions** (**Settings >
Pages > Source : GitHub Actions**).
1. Le workflow se déclenche automatiquement à chaque push sur `main` (ou via « Run workflow »).
2. Il déploie `public/` (pas le `firebase-config.js`, non versionné) → le site fonctionne en mode
   **localStorage** sur Pages (pas de persistance cloud).
3. La page `404.html` (`public/404.html`) redirige vers `/OUTILS-IA-2026/`.
   📝 **Si vous changez de sous-dossier ou passez sur un domaine personnel**, mettez à jour sa balise :
   `<meta http-equiv="refresh" content="0; url=<VOTRE-CHEMIN>/">`.

## 🛠 Dépannage

### « Chargement des outils... » reste affiché / catalogue vide
1. **Videz le cache** (navigation privée / Ctrl+Shift+R). Si le site s'affiche après, le
   problème était un cache ou un ancien déploiement.
2. **Ouvrez la console (F12)** :
   - `Aucune config Firebase, fallback localStorage` → **comportement normal**, voir ci-dessous.
   - Erreur réseau `404` sur `public/firebase-config.js` → normal aussi : ce fichier est absent du
     dépôt Git (clés) ; le fallback localStorage prend le relais. Depuis G0, les ressources
     manquantes renvoient un vrai 404 (plus de masquage par le rewrite SPA).
   - Toute autre erreur JS → remontez-la avec le message exact.

### La persistance cloud (Firebase) ne fonctionne pas en production
L'absence de `public/firebase-config.js` en production (fichier non versionné) déclenche le
fallback **localStorage** : le site fonctionne normalement, mais les clics restent locaux au
navigateur. Ce n'est **pas un bug**.
Pour activer la persistance cloud sur Netlify / Vercel :
1. Renseignez les 6 variables `VITE_FIREBASE_*` (section 🔧) dans les dashboards ;
2. Relancez un déploiement (le build `npm run build` génère le fichier config) ;
3. En navigation privée, vérifiez en console le message `🔥 Firebase connecté`.

### Vérifier localement
```bash
npm start          # sert le site sur http://localhost:3000
npm run build      # injecte les clés si VITE_FIREBASE_* présentes, sinon no-op
```