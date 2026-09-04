# Changelog

Toutes les modifications notables du projet **OUTILS IA 2026** sont documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [1.0.0] – 2026-09-04

### 🎉 Livraison finale

Version **1.0.0** validée et **opérationnelle en production** sur les 4 plateformes
(Netlify, Vercel, Firebase Hosting, GitHub Pages).

### Ajouté

- **Sprint 0** : initialisation du projet, structure des dossiers, gestion Git, fichiers racine.
- **Sprint 1** : intégration de 96 outils IA dans `data.js` + maquette statique.
- **Sprint 2** : moteur dynamique — recherche temps réel, filtres par catégorie, persistance localStorage du compteur.
- **Sprint 3** : persistance cloud Firebase Firestore avec fallback localStorage.
- **Sprint 4** : multi-hébergement (Netlify, Vercel, Firebase Hosting, GitHub Pages).
- **Sprint 5** : correction G0 — rewrites SPA, statut des liens, `package.json`, README.
- **Sprint 6a** : modale détaillée premium + enrichissement de `data.js`.
- **Sprint 6b** : footer professionnel, badges (Hot/New/Beta), thème clair/sombre, glassmorphisme, carrousel.
- **Sprint 6c** : héros immersif, footer corporate, passage en version 1.0.
- **Prévalidation v1** : Option A — contraste mode clair, focus clavier, méta SEO + correction de la catégorie Trafic (5 nouveaux outils IA).
- **UI finale** : navbar fixe en glassmorphism (brand « outils ia 2026 » + toggle clair/sombre).

### Modifié

- Remplacement de la catégorie « Trafic » : suppression des 5 anciens outils sociaux (YouTube, Facebook, TikTok, Instagram, Discord) au profit de 5 outils IA (Jasper, Frase, Canva AI, Lately, Brand24).
- Correction d'un `</div>` excédentaire rendant le HTML déséquilibré.
- Restructuration de l'en-tête en une navbar sticky unique (suppression du header redondant avec le carrousel héros).

### Sécurité

- Clés Firebase gitignorées (`firebase-config.js`).
- Variables d'environnement configurables (Netlify/Vercel).
- Règles Firestore restrictives (`allow read, write: if request.resource.data.clicks is int`).
- Aucun secret exposé sur les dépôts publics.

### Documentation

- `README.md` à jour (présentation, 4 cas d'usage, déploiement, fonctionnalités).
- `CONTRIBUTION.md` : guide pour ajouter/modifier un outil.
- Rapports de sprint et rapports de validation récapitulés dans `SPRINT-*REPORT.md`.

## Projets futurs (v1.1.0)

- Filtrage par prix (dropdown).
- Partage d'outil (lien direct + copie).
- Animation d'entrée des cartes (fade-in progressif).
- Badge de clics plus visible sur les cartes.
- Soumission d'outil via formulaire intégré.
- Statistiques avancées (top outils, tendances).
- Mode hors-ligne (PWA).
