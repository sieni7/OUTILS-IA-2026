// js/data.js
export const toolsData = [
  // === MODÈLES IA ===
  { id: "claude", name: "Claude AI", desc: "Écriture humaine fluide et contextualisée, idéal pour la rédaction pro.", link: "https://claude.ai", category: "Modèles IA", price: "Frémium", featured: true, clicks: 0, status: "verified",
    badge: "hot",
    year: "2023",
    publisher: "Anthropic",
    country: "USA",
    descriptionFull: "Modèle de langage d'Anthropic reconnu pour son écriture fluide, contextualisée et proche de l'humain. Très apprécié en rédaction professionnelle, en analyse de documents longs et en raisonnement. Points forts : grande qualité de rédaction et capacité de contexte étendue. Points faibles : accès à certaines fonctions réservé à l'offre payante."
  },
  { id: "chatgpt", name: "ChatGPT", desc: "Brainstorming rapide, assistance polyvalente.", link: "https://chat.openai.com", category: "Modèles IA", price: "Frémium", featured: true, clicks: 0, status: "verified",
    badge: "hot",
    year: "2022",
    publisher: "OpenAI",
    country: "USA",
    descriptionFull: "Assistant polyvalent d'OpenAI, idéal pour le brainstorming rapide, la résolution de problèmes et l'assistance quotidienne. Large écosystème de plugins et d'outils. Points forts : univers d'usages très riche et base d'utilisateurs mondiale. Points faibles : dépendance au service et limites de facturation sur l'offre gratuite."
  },
  { id: "deepseek", name: "DeepSeek V3.2", desc: "Modèle ultra-puissant et économique pour prompts complexes.", link: "https://deepseek.com", category: "Modèles IA", price: "Économique", featured: true, clicks: 0, status: "verified",
    badge: "new",
    year: "2024",
    publisher: "DeepSeek",
    country: "Chine",
    descriptionFull: "Modèle de langage ultra-puissant et très économique, adapté aux prompts complexes et aux tâches exigeantes. Offre un excellent rapport performance/coût pour les utilisateurs avancés. Points forts : capacité de raisonnement et prix très compétitifs. Points faibles : données et services hébergés hors UE/USA à évaluer selon vos exigences."
  },
  { id: "qwen", name: "Qwen", desc: "Code et multilingue, performance solide.", link: "https://qwen.ai", category: "Modèles IA", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2023",
    publisher: "Alibaba",
    country: "Chine",
    descriptionFull: "Famille de modèles multilingues d'Alibaba, performante en génération de code et en compréhension multilingue. Points forts : bonnes performances en code et prise en charge de nombreuses langues. Points faibles : documentation et notoriété moindres que les grands acteurs occidentaux."
  },
  { id: "gemini", name: "Gemini", desc: "Intégration Google & YouTube, recherche avancée.", link: "https://gemini.google.com", category: "Modèles IA", price: "Gratuit", featured: false, clicks: 0, status: "verified",
    badge: "hot",
    year: "2023",
    publisher: "Google",
    country: "USA",
    descriptionFull: "Famille de modèles multimodaux de Google, intégrée à l'écosystème Google (Search, YouTube, Workspace). Excellent pour la recherche avancée et le raisonnement multimodal. Points forts : intégration Google et gratuité de la version de base. Points faibles : fonctionnalités avancées réservées aux abonnés."
  },
  { id: "copilot", name: "Microsoft Copilot", desc: "Assistant IA intégré à l'écosystème Microsoft 365.", link: "https://copilot.microsoft.com", category: "Modèles IA", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2023",
    publisher: "Microsoft",
    country: "USA",
    descriptionFull: "Assistant IA de Microsoft intégré à l'écosystème Microsoft 365, Windows et Edge. Facilite la rédaction, l'analyse et la productivité au quotidien. Points forts : intégration native avec les outils Microsoft. Points faibles : nécessite un compte Microsoft et certaines fonctions sont payantes."
  },
  { id: "mistral", name: "Mistral AI", desc: "Le champion européen, modèles open-source et 'Le Chat'.", link: "https://mistral.ai", category: "Modèles IA", price: "Gratuit", featured: false, clicks: 0, status: "verified",
    badge: "new",
    year: "2023",
    publisher: "Mistral AI",
    country: "France",
    descriptionFull: "Champion européen de l'IA, Mistral propose des modèles open-source et l'assistant 'Le Chat'. Alternative souveraine et européenne, appréciée pour son ouverture. Points forts : open-source, souveraineté européenne et 'Le Chat' gratuit. Points faibles : écosystème moins fourni que les leaders américains."
  },
  { id: "huggingface", name: "Hugging Face", desc: "Plateforme de référence pour modèles open-source et datasets.", link: "https://huggingface.co", category: "Modèles IA", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2016",
    publisher: "Hugging Face",
    country: "USA",
    descriptionFull: "Plateforme de référence pour les modèles open-source, les datasets et les espaces de démonstration. Incontournable de la communauté IA. Points forts : vaste bibliothèque de modèles et d'outils. Points faibles : courbe d'apprentissage pour les débutants."
  },
  { id: "kimi", name: "Kimi K3", desc: "Assistant avec très grande fenêtre de contexte.", link: "https://kimi.ai", category: "Modèles IA", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2023",
    publisher: "Moonshot AI",
    country: "Chine",
    descriptionFull: "Assistant doté d'une très grande fenêtre de contexte, adapté à l'analyse de longs documents. Points forts : capacité à traiter de très longs textes. Points faibles : notoriété et disponibilité moindres hors de la Chine."
  },

  // === RECHERCHE ===
  { id: "perplexity", name: "Perplexity", desc: "Réponses sourcées avec citations.", link: "https://perplexity.ai", category: "Recherche", price: "Frémium", featured: true, clicks: 0, status: "verified",
    badge: "hot",
    year: "2022",
    publisher: "Perplexity AI",
    country: "USA",
    descriptionFull: "Moteur de réponse avec citations et sources, parfait pour la recherche rapide et vérifiée. Points forts : réponses sourcées avec liens. Points faibles : offres avancées payantes et rationalisation des citations selon les requêtes."
  },
  { id: "ithy", name: "Ithy", desc: "Rapports complets et structurés.", link: "https://ithy.com", category: "Recherche", price: "Payant", featured: false, clicks: 0, status: "verified" ,
    year: "2023",
    publisher: "Inconnu",
    country: "USA",
    descriptionFull: "Outil de recherche produisant des rapports complets et structurés. Points forts : synthèses organisées. Points faibles : offre payante et notoriété limitée. // TODO: vérifier éditeur et année de parution."
  },
  { id: "notebooklm", name: "NotebookLM", desc: "Analyse et synthèse de vos PDFs.", link: "https://notebooklm.google", category: "Recherche", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2023",
    publisher: "Google",
    country: "USA",
    descriptionFull: "Outil de Google pour analyser et synthétiser vos PDFs et documents. Très utile pour prendre des notes et générer des synthèses à partir de sources. Points forts : analyse de documents et gratuité. Points faibles : limité au format texte/document."
  },
  { id: "googletrends", name: "Google Trends", desc: "Tendances marché et mots-clés.", link: "https://trends.google.com", category: "Recherche", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2006",
    publisher: "Google",
    country: "USA",
    descriptionFull: "Outil gratuit de Google pour suivre les tendances de recherche et les mots-clés. Utile pour l'analyse de marché et la recherche de niches. Points forts : données réelles et gratuites. Points faibles : représentation relative et non absolue des volumes."
  },
  { id: "grok", name: "Grok", desc: "Tendances X (Twitter) en temps réel.", link: "https://grok.x.ai", category: "Recherche", price: "Payant", featured: false, clicks: 0, status: "verified",
    badge: "new",
    year: "2023",
    publisher: "xAI",
    country: "USA",
    descriptionFull: "Assistant IA de xAI, intégré à X (Twitter), qui exploite les tendances en temps réel. Points forts : accès aux données temps réel de X. Points faibles : réservé aux abonnés Premium de X."
  },

  // === AGENTS & AUTO ===
  { id: "openclaw", name: "OpenClaw", desc: "Agent autonome sans code.", link: "#", category: "Agents & Auto", price: "Gratuit", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "Inconnu",
    country: "Inconnu",
    descriptionFull: "Agent autonome sans code annoncé pour l'automatisation. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays, année et description détaillée."
  },
  { id: "maxclaw", name: "MaxClaw", desc: "Agent avancé pour automatisations complexes.", link: "#", category: "Agents & Auto", price: "Payant", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "Inconnu",
    country: "Inconnu",
    descriptionFull: "Agent avancé pour des automatisations complexes. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays, année et description détaillée."
  },
  { id: "n8n", name: "n8n", desc: "Automatisez tous vos workflows avec flexibilité technique.", link: "https://n8n.io", category: "Agents & Auto", price: "Frémium", featured: true, clicks: 0, status: "verified" ,
    year: "2019",
    publisher: "n8n GmbH",
    country: "Allemagne",
    descriptionFull: "Plateforme d'automatisation de workflows avec flexibilité technique, très appréciée des développeurs. Permet de connecter de nombreux services et exécuter du code personnalisé. Points forts : auto-hébergement possible et open-source. Points faibles : courbe d'apprentissage pour les non-techniques."
  },
  { id: "make", name: "Make", desc: "Automatisation visuelle et simple.", link: "https://make.com", category: "Agents & Auto", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2020",
    publisher: "Celonis",
    country: "République tchèque",
    descriptionFull: "Outil d'automatisation visuelle et simple, alternative à n8n et Zapier. Interface en glisser-déposer pour créer des scénarios. Points forts : simplicité d'utilisation et scénarios visuels. Points faibles : opérations avancées limitées sur l'offre gratuite."
  },
  { id: "coze", name: "Coze", desc: "Créez des bots pour TikTok / WhatsApp.", link: "https://coze.com", category: "Agents & Auto", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2023",
    publisher: "ByteDance",
    country: "Chine",
    descriptionFull: "Plateforme pour créer des bots conversationnels pour TikTok, WhatsApp et d'autres canaux. Points forts : création de bots sans code et intégration sociale. Points faibles : dépendance à l'écosystème ByteDance."
  },
  { id: "zapier", name: "Zapier", desc: "Alternative populaire pour l'automatisation de workflows.", link: "https://zapier.com", category: "Agents & Auto", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2011",
    publisher: "Zapier",
    country: "USA",
    descriptionFull: "Plateforme populaire d'automatisation de workflows reliant des milliers d'applications. Points forts : catalogue d'intégrations très large. Points faibles : coût qui monte vite et limites de l'offre gratuite."
  },
  { id: "lindy", name: "Lindy", desc: "Plateforme d'agents IA spécialisée en délégation de tâches.", link: "https://lindy.ai", category: "Agents & Auto", price: "Payant", featured: false, clicks: 0, status: "verified" ,
    year: "2023",
    publisher: "Lindy AI",
    country: "USA",
    descriptionFull: "Plateforme d'agents IA spécialisée dans la délégation de tâches métier. Points forts : agents autonomes dédiés à des tâches précises. Points faibles : offre payante."
  },
  { id: "lovable", name: "Lovable", desc: "Créez des applications web fonctionnelles sans coder.", link: "https://lovable.dev", category: "Agents & Auto", price: "Frémium", featured: false, clicks: 0, status: "verified",
    badge: "new",
    year: "2023",
    publisher: "Lovable",
    country: "Suède",
    descriptionFull: "Outil permettant de créer des applications web fonctionnelles sans coder, piloté par l'IA. Points forts : génération rapide d'apps complètes. Points faibles : offre payante pour les usages avancés."
  },

  // === IMAGES IA ===
  { id: "nanobanana", name: "Nano Banana 2", desc: "Ultra-réaliste avec précision anatomique.", link: "#", category: "Images IA", price: "Payant", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "Inconnu",
    country: "Inconnu",
    descriptionFull: "Outil de génération d'images ultra-réaliste avec précision anatomique. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays et année."
  },
  { id: "lovart", name: "Lovart", desc: "Design produit et visuels commerciaux.", link: "#", category: "Images IA", price: "Payant", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "Inconnu",
    country: "Inconnu",
    descriptionFull: "Outil de design produit et de visuels commerciaux. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays et année."
  },
  { id: "canva", name: "Canva AI", desc: "Posts rapides pour réseaux sociaux.", link: "https://canva.com", category: "Images IA", price: "Frémium", featured: true, clicks: 0, status: "verified",
    badge: "hot",
    year: "2013",
    publisher: "Canva",
    country: "Australie",
    descriptionFull: "Outil de design en ligne tout-en-un, idéal pour créer des posts réseau social et des supports visuels rapidement. Points forts : accessibilité pour les non-designers et bibliothèque de templates. Points faibles : fonctions avancées et IA réservées à l'offre payante."
  },
  { id: "firefly", name: "Adobe Firefly", desc: "Génération sans copyright.", link: "https://firefly.adobe.com", category: "Images IA", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2023",
    publisher: "Adobe",
    country: "USA",
    descriptionFull: "Suite de génération d'images d'Adobe conçue pour du contenu sans problème de droits. S'intègre à Photoshop et à l'écosystème Adobe. Points forts : contenu 'sans copyright' et intégration Adobe. Points faibles : nécessite un abonnement Adobe pour un usage étendu."
  },
  { id: "dreamina", name: "Dreamina", desc: "Gratuit et illimité.", link: "#", category: "Images IA", price: "Gratuit", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "Inconnu",
    country: "Inconnu",
    descriptionFull: "Outil de génération d'images annoncé gratuit et illimité. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays et année."
  },
  { id: "midjourney", name: "Midjourney", desc: "Style artistique reconnu, génération d'images.", link: "https://midjourney.com", category: "Images IA", price: "Payant", featured: false, clicks: 0, status: "verified",
    badge: "hot",
    year: "2022",
    publisher: "Midjourney Inc.",
    country: "USA",
    descriptionFull: "Générateur d'images au style artistique reconnu, prisé des créatifs. Points forts : qualité esthétique et style unique. Points faibles : accessible principalement via Discord et offre entièrement payante."
  },
  { id: "stablediffusion", name: "Stable Diffusion", desc: "Modèle open-source de génération d'images.", link: "https://stability.ai", category: "Images IA", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2022",
    publisher: "Stability AI",
    country: "UK (Royaume-Uni)",
    descriptionFull: "Modèle open-source de génération d'images, très flexible et auto-hébergeable. Points forts : open-source, personnalisation et contrôle local. Points faibles : nécessite du matériel ou une plateforme pour un usage optimal."
  },
  { id: "runway", name: "Runway", desc: "Création et édition vidéo/IA.", link: "https://runwayml.com", category: "Images IA", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2018",
    publisher: "Runway AI",
    country: "USA",
    descriptionFull: "Plateforme de création et d'édition vidéo assistée par IA. Points forts : outils vidéo génératifs avancés. Points faibles : offre payante et consommation de crédits."
  },

  // === VIDÉO IA ===
  { id: "wanvideo", name: "Wan Video", desc: "Texte vers vidéo.", link: "#", category: "Vidéo IA", price: "Gratuit", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "Inconnu",
    country: "Inconnu",
    descriptionFull: "Outil annoncé de génération de vidéo à partir de texte. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays et année."
  },
  { id: "seedance", name: "Seedance 2.0", desc: "Mouvement fluide et réaliste.", link: "#", category: "Vidéo IA", price: "Payant", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "Inconnu",
    country: "Inconnu",
    descriptionFull: "Outil annoncé de génération vidéo avec mouvement fluide et réaliste. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays et année."
  },
  { id: "kling", name: "Kling AI", desc: "Réalisme extrême pour les vidéos.", link: "https://kling.ai", category: "Vidéo IA", price: "Payant", featured: false, clicks: 0, status: "verified",
    badge: "new",
    year: "2024",
    publisher: "Kling AI (Kuaishou)",
    country: "Chine",
    descriptionFull: "Générateur de vidéo IA réputé pour son réalisme extrême. Points forts : qualité vidéo très réaliste. Points faibles : offre payante."
  },
  { id: "hailuo", name: "Hailuo", desc: "Courts métrages et clips.", link: "#", category: "Vidéo IA", price: "Frémium", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "Inconnu",
    country: "Inconnu",
    descriptionFull: "Outil annoncé pour créer de courts métrages et clips. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays et année."
  },
  { id: "grokimage", name: "Grok Imagine", desc: "Image vers vidéo.", link: "#", category: "Vidéo IA", price: "Payant", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "xAI",
    country: "USA",
    descriptionFull: "Fonctionnalité annoncée de transformation d'image en vidéo chez xAI. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays et année."
  },
  { id: "sora", name: "Sora 2", desc: "Générateur vidéo d'OpenAI.", link: "https://sora.openai.com", category: "Vidéo IA", price: "Payant", featured: false, clicks: 0, status: "verified",
    badge: "new",
    year: "2024",
    publisher: "OpenAI",
    country: "USA",
    descriptionFull: "Générateur de vidéo d'OpenAI, capable de produire des séquences réalistes à partir de texte. Points forts : réalisme et contrôle. Points faibles : accès limité et offre payante."
  },

  // === MONTAGE ===
  { id: "capcut", name: "CapCut", desc: "Reels / TikTok faciles.", link: "https://capcut.com", category: "Montage", price: "Gratuit", featured: true, clicks: 0, status: "verified" ,
    year: "2019",
    publisher: "ByteDance",
    country: "Chine",
    descriptionFull: "Application de montage vidéo, très utilisée pour créer des Reels et des vidéos TikTok facilement. Points forts : gratuit, nombreux templates et effets. Points faibles : fonctions avancées payantes."
  },
  { id: "davinci", name: "DaVinci Resolve", desc: "Pro gratuit, montage avancé.", link: "https://blackmagicdesign.com", category: "Montage", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2004",
    publisher: "Blackmagic Design",
    country: "Australie",
    descriptionFull: "Suite de montage et d'étalonnage professionnelle avec version gratuite très complète. Points forts : version gratuite pro et outils d'étalonnage. Points faibles : courbe d'apprentissage et configuration avancée."
  },
  { id: "obs", name: "OBS Studio", desc: "Capture écran et streaming.", link: "https://obsproject.com", category: "Montage", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2012",
    publisher: "OBS Project",
    country: "USA",
    descriptionFull: "Logiciel open-source de capture d'écran et de streaming, standard de la diffusion en direct. Points forts : gratuit, open-source et puissant. Points faibles : configuration technique."
  },
  { id: "canvavid", name: "Canva Video", desc: "Montage express en ligne.", link: "https://canva.com", category: "Montage", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2019",
    publisher: "Canva",
    country: "Australie",
    descriptionFull: "Montage vidéo express en ligne intégré à Canva, idéal pour du contenu rapide. Points forts : simplicité et intégration Canva. Points faibles : moins de contrôle qu'un logiciel de montage dédié."
  },
  { id: "openshot", name: "OpenShot", desc: "Simple et léger.", link: "https://openshot.org", category: "Montage", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2008",
    publisher: "OpenShot Studios",
    country: "USA",
    descriptionFull: "Logiciel de montage vidéo open-source, simple et léger. Points forts : gratuit et accessible. Points faibles : fonctionnalités plus limitées sur des projets complexes."
  },
  { id: "descript", name: "Descript", desc: "Montage par transcription.", link: "https://descript.com", category: "Montage", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2017",
    publisher: "Descript",
    country: "USA",
    descriptionFull: "Outil de montage vidéo/audio piloté par transcription : vous éditez le texte, la vidéo suit. Points forts : approche par transcription très efficace. Points faibles : offre payante."
  },

  // === VOIX & AUDIO ===
  { id: "voicebox", name: "Voicebox", desc: "Clone ta voix.", link: "#", category: "Voix & Audio", price: "Payant", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "Inconnu",
    country: "Inconnu",
    descriptionFull: "Outil annoncé de clonage de voix. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays et année."
  },
  { id: "elevenlabs", name: "ElevenLabs", desc: "Voix humaine réaliste.", link: "https://elevenlabs.io", category: "Voix & Audio", price: "Frémium", featured: true, clicks: 0, status: "verified",
    badge: "hot",
    year: "2022",
    publisher: "ElevenLabs",
    country: "UK (Royaume-Uni)",
    descriptionFull: "Plateforme de synthèse vocale à la voix humaine très réaliste, multi-langues. Points forts : qualité vocale proche de l'humain. Points faibles : offre payante pour un usage étendu."
  },
  { id: "adobepodcast", name: "Adobe Podcast", desc: "Nettoie l'audio automatiquement.", link: "https://podcast.adobe.com", category: "Voix & Audio", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2021",
    publisher: "Adobe",
    country: "USA",
    descriptionFull: "Outil d'Adobe qui nettoie l'audio automatiquement (bruit, réverbération) pour les podcasts. Points forts : amélioration audio en un clic et gratuit. Points faibles : limité au traitement d'enrichissement audio."
  },
  { id: "murf", name: "Murf AI", desc: "Voix-off professionnelle.", link: "https://murf.ai", category: "Voix & Audio", price: "Payant", featured: false, clicks: 0, status: "verified" ,
    year: "2020",
    publisher: "Murf AI",
    country: "Singapour",
    descriptionFull: "Outil de voix-off professionnelle avec de nombreuses voix et langues. Points forts : qualité studio et variété de voix. Points faibles : offre payante."
  },
  { id: "naturalreader", name: "Natural Reader", desc: "Texte vers voix.", link: "https://naturalreaders.com", category: "Voix & Audio", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2014",
    publisher: "Natural Reader",
    country: "USA",
    descriptionFull: "Outil de synthèse vocale (texte vers voix) pour lire documents et textes à voix haute. Points forts : accessibilité et nombreuses voix. Points faibles : offres avancées payantes."
  },
  { id: "aiva", name: "AIVA", desc: "Composition musicale par IA.", link: "https://aiva.ai", category: "Voix & Audio", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2016",
    publisher: "AIVA Technologies",
    country: "Luxembourg",
    descriptionFull: "Outil de composition musicale par IA, pour créer des musiques originales. Points forts : composition originale. Points faibles : offre payante pour générer et télécharger sans droits."
  },

  // === MUSIQUE IA ===
  { id: "suno", name: "Suno AI", desc: "Chanson complète générée.", link: "https://suno.ai", category: "Musique IA", price: "Frémium", featured: false, clicks: 0, status: "verified",
    badge: "hot",
    year: "2023",
    publisher: "Suno",
    country: "USA",
    descriptionFull: "Outil capable de générer une chanson complète (paroles, musique, voix) à partir d'un prompt. Points forts : chansons complètes et de qualité. Points faibles : offre payante pour un usage et des droits étendus."
  },
  { id: "lyria", name: "Lyria 3", desc: "Instrumental professionnel.", link: "#", category: "Musique IA", price: "Payant", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "Inconnu",
    country: "Inconnu",
    descriptionFull: "Outil annoncé pour générer des instrumentaux professionnels. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays et année."
  },
  { id: "mureka", name: "Mureka", desc: "Sans copyright.", link: "#", category: "Musique IA", price: "Gratuit", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "Inconnu",
    country: "Inconnu",
    descriptionFull: "Outil annoncé de génération musicale sans problème de droits. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays et année."
  },
  { id: "udio", name: "Udio", desc: "Qualité studio.", link: "https://udio.com", category: "Musique IA", price: "Frémium", featured: false, clicks: 0, status: "verified",
    badge: "new",
    year: "2024",
    publisher: "Udio",
    country: "USA",
    descriptionFull: "Générateur de musique IA à la qualité studio, depuis un simple prompt. Points forts : qualité de production. Points faibles : offre payante."
  },
  { id: "soundraw", name: "Soundraw", desc: "Musique pour YouTube.", link: "https://soundraw.io", category: "Musique IA", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2019",
    publisher: "Soundraw",
    country: "Japon",
    descriptionFull: "Outil de génération de musique libre de droits, souvent utilisé pour YouTube. Points forts : musique générée adaptée aux vidéos. Points faibles : offre payante."
  },

  // === AVATARS ===
  { id: "heygen", name: "HeyGen", desc: "Avatar multilingue.", link: "https://heygen.com", category: "Avatars", price: "Frémium", featured: true, clicks: 0, status: "verified" ,
    year: "2020",
    publisher: "HeyGen",
    country: "USA",
    descriptionFull: "Outil de création d'avatars multilingues pour vidéos. Points forts : avatars réalistes et traduction automatique. Points faibles : offre payante."
  },
  { id: "pippit", name: "Pippit", desc: "Avatar vendeur.", link: "#", category: "Avatars", price: "Payant", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "Inconnu",
    country: "Inconnu",
    descriptionFull: "Outil annoncé d'avatar vendeur. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays et année."
  },
  { id: "did", name: "D-ID", desc: "Photo qui parle.", link: "https://d-id.com", category: "Avatars", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2019",
    publisher: "D-ID",
    country: "Israël",
    descriptionFull: "Outil qui anime une photo pour la faire parler, idéal pour des vidéos à partir d'images. Points forts : 'photo qui parle' facile. Points faibles : offre payante."
  },
  { id: "synthesia", name: "Synthesia", desc: "Avatar pour formations.", link: "https://synthesia.io", category: "Avatars", price: "Payant", featured: false, clicks: 0, status: "verified" ,
    year: "2017",
    publisher: "Synthesia",
    country: "UK (Royaume-Uni)",
    descriptionFull: "Plateforme d'avatars IA pour créer des vidéos de formation et d'entreprise. Points forts : avatars professionnels et multi-langues. Points faibles : offre entièrement payante."
  },
  { id: "zimage", name: "Z-image", desc: "Photo de profil IA.", link: "#", category: "Avatars", price: "Gratuit", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "Inconnu",
    country: "Inconnu",
    descriptionFull: "Outil annoncé pour créer des photos de profil IA. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays et année."
  },

  // === DESIGN ===
  { id: "canvadesign", name: "Canva", desc: "Tout-en-un pour le design.", link: "https://canva.com", category: "Design", price: "Frémium", featured: true, clicks: 0, status: "verified" ,
    year: "2013",
    publisher: "Canva",
    country: "Australie",
    descriptionFull: "Version 'design' tout-en-un de Canva pour créer supports et visuels. Points forts : polyvalence et simplicité. Points faibles : fonctions avancées payantes."
  },
  { id: "designer", name: "Designer", desc: "Design rapide.", link: "#", category: "Design", price: "Gratuit", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "Inconnu",
    country: "Inconnu",
    descriptionFull: "Outil annoncé de design rapide. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays et année."
  },
  { id: "figma", name: "Figma", desc: "UI/UX professionnel.", link: "https://figma.com", category: "Design", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2012",
    publisher: "Figma",
    country: "USA",
    descriptionFull: "Outil de design UI/UX professionnel, collaboratif et multi-utilisateurs. Points forts : collaboration temps réel et prototypes. Points faibles : offre payante pour les équipes et fonctions avancées."
  },
  { id: "gimp", name: "GIMP", desc: "Photoshop gratuit.", link: "https://gimp.org", category: "Design", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "1998",
    publisher: "GIMP Team",
    country: "USA",
    descriptionFull: "Logiciel libre de retouche d'image, alternative gratuite à Photoshop. Points forts : gratuit, open-source et complet. Points faibles : interface moins moderne et courbe d'apprentissage."
  },
  { id: "freepik", name: "Freepik AI", desc: "Templates + IA générative.", link: "https://freepik.com", category: "Design", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2010",
    publisher: "Freepik",
    country: "Espagne",
    descriptionFull: "Banque de templates et d'images enrichie de fonctions IA générative. Points forts : ressources nombreuses + IA. Points faibles : accès aux ressources premium payant."
  },

  // === CONTENU ===
  { id: "notion", name: "Notion", desc: "Second cerveau, organisation.", link: "https://notion.so", category: "Contenu", price: "Frémium", featured: true, clicks: 0, status: "verified",
    badge: "hot",
    year: "2013",
    publisher: "Notion Labs",
    country: "USA",
    descriptionFull: "Outil tout-en-un de productivité, souvent décrit comme un 'second cerveau' : notes, bases de données, wiki et projets. Points forts : flexibilité et organisation. Points faibles : courbe d'apprentissage et fonctions avancées payantes."
  },
  { id: "antigravity", name: "Antigravity", desc: "Écriture collaborative avec Drive.", link: "#", category: "Contenu", price: "Payant", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "Inconnu",
    country: "Inconnu",
    descriptionFull: "Outil annoncé d'écriture collaborative avec Google Drive. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays et année."
  },
  { id: "languagetool", name: "LanguageTool", desc: "Correction grammaticale avancée.", link: "https://languagetool.org", category: "Contenu", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2005",
    publisher: "LanguageTooler GmbH",
    country: "Allemagne",
    descriptionFull: "Correcteur grammatical et stylistique avancé, multi-langues. Points forts : correction de qualité et gratuité de base. Points faibles : versions étendues payantes."
  },
  { id: "copyai", name: "Copy AI", desc: "Textes de vente et persuasion.", link: "https://copy.ai", category: "Contenu", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2020",
    publisher: "Copy.ai",
    country: "USA",
    descriptionFull: "Outil de génération de textes de vente et de persuasion pour le marketing. Points forts : copywriting rapide. Points faibles : offre payante."
  },
  { id: "gamma", name: "Gamma", desc: "Présentations automatiques.", link: "https://gamma.app", category: "Contenu", price: "Frémium", featured: false, clicks: 0, status: "verified",
    badge: "new",
    year: "2020",
    publisher: "Gamma",
    country: "USA",
    descriptionFull: "Outil de création de présentations automatiques par IA. Points forts : génération de slides rapide. Points faibles : offre payante."
  },

  // === PUBLICATION ===
  { id: "substack", name: "Substack", desc: "Newsletter payante.", link: "https://substack.com", category: "Publication", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2017",
    publisher: "Substack",
    country: "USA",
    descriptionFull: "Plateforme de newsletters avec monétisation par abonnement payant. Points forts : diffusion d'audience et monétisation. Points faibles : commission sur les abonnements payants."
  },
  { id: "buffer", name: "Buffer", desc: "Programmation de posts.", link: "https://buffer.com", category: "Publication", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2010",
    publisher: "Buffer",
    country: "USA",
    descriptionFull: "Outil de programmation de publications sur les réseaux sociaux. Points forts : planification multi-réseaux. Points faibles : offre payante pour plusieurs comptes."
  },
  { id: "brevo", name: "Brevo", desc: "Email marketing (ex Sendinblue).", link: "https://brevo.com", category: "Publication", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2012",
    publisher: "Brevo (ex Sendinblue)",
    country: "France",
    descriptionFull: "Outil d'email marketing (ex Sendinblue) pour campagnes et automatisations. Points forts : offre freemium et écosystème complet. Points faibles : limites de volume sur l'offre gratuite."
  },
  { id: "mailerlite", name: "Mailerlite", desc: "Email marketing gratuit.", link: "https://mailerlite.com", category: "Publication", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2010",
    publisher: "MailerLite",
    country: "Lituanie",
    descriptionFull: "Outil d'email marketing gratuit et simple, adapté aux petits créateurs. Points forts : gratuité généreuse et simplicité. Points faibles : fonctionnalités avancées payantes."
  },
  { id: "systemeio", name: "Systeme.io", desc: "Funnels de vente et email FR.", link: "https://systeme.io", category: "Publication", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2019",
    publisher: "Systeme.io",
    country: "France",
    descriptionFull: "Plateforme tout-en-un pour funnels de vente et email marketing en français. Points forts : complet et accessible. Points faibles : offre payante."
  },

  // === VENTE ===
  { id: "gumroad", name: "Gumroad", desc: "Vendez ebooks, produits digitaux.", link: "https://gumroad.com", category: "Vente", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2011",
    publisher: "Gumroad",
    country: "USA",
    descriptionFull: "Plateforme de vente de produits numériques (ebooks, formations, logiciels). Points forts : simple à vendre et à installer. Points faibles : commission sur les ventes."
  },
  { id: "stripe", name: "Stripe", desc: "Paiement professionnel.", link: "https://stripe.com", category: "Vente", price: "Payant", featured: true, clicks: 0, status: "verified" ,
    year: "2010",
    publisher: "Stripe",
    country: "USA",
    descriptionFull: "Solution de paiement en ligne professionnelle, très utilisée par les développeurs. Points forts : API robuste et paiements internationaux. Points faibles : frais par transaction."
  },
  { id: "kofi", name: "Ko-Fi", desc: "Boutique + dons.", link: "https://ko-fi.com", category: "Vente", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2017",
    publisher: "Ko-fi",
    country: "UK (Royaume-Uni)",
    descriptionFull: "Plateforme pour recevoir des dons et créer une boutique, alternative conviviale. Points forts : dons et boutique simples, faible commission. Points faibles : fonctionnalités complètes payantes."
  },
  { id: "woocommerce", name: "WooCommerce", desc: "Boutique WordPress.", link: "https://woocommerce.com", category: "Vente", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2011",
    publisher: "WooCommerce (Automattic)",
    country: "USA",
    descriptionFull: "Extension open-source de boutique en ligne pour WordPress. Points forts : gratuit et personnalisable. Points faibles : hébergement et extensions payants."
  },
  { id: "paypal", name: "PayPal", desc: "Paiement rapide.", link: "https://paypal.com", category: "Vente", price: "Payant", featured: false, clicks: 0, status: "verified" ,
    year: "1998",
    publisher: "PayPal",
    country: "USA",
    descriptionFull: "Solution de paiement rapide et largement utilisée dans le monde. Points forts : confiance et couverture mondiale. Points faibles : frais par transaction."
  },

  // === DEV ===
  { id: "aistudio", name: "AI Studio", desc: "Testez Gemini et autres modèles.", link: "https://aistudio.google.com", category: "Dev", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2023",
    publisher: "Google",
    country: "USA",
    descriptionFull: "Studio de Google pour tester Gemini et d'autres modèles en ligne. Points forts : accès gratuit aux modèles Google. Points faibles : pensé pour les tests plutôt que l'usage métier."
  },
  { id: "github", name: "GitHub", desc: "Code et portfolio.", link: "https://github.com", category: "Dev", price: "Gratuit", featured: true, clicks: 0, status: "verified",
    badge: "hot",
    year: "2008",
    publisher: "Microsoft",
    country: "USA",
    descriptionFull: "Plateforme de développement pour héberger le code et constituer un portfolio. Points forts : standard de l'industrie et gratuit. Points faibles : libre accès des dépôts publics aux référentiels par défaut."
  },
  { id: "cloudflare", name: "Cloudflare", desc: "Hébergement gratuit, CDN.", link: "https://cloudflare.com", category: "Dev", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2009",
    publisher: "Cloudflare",
    country: "USA",
    descriptionFull: "Réseau de CDN et d'hébergement avec offre gratuite, pour performance et sécurité. Points forts : gratuit, CDN mondial, protection DDoS. Points faibles : certaines fonctions avancées payantes."
  },
  { id: "openrouter", name: "OpenRouter", desc: "Une API pour accéder à toutes les IA.", link: "https://openrouter.ai", category: "Dev", price: "Payant", featured: false, clicks: 0, status: "verified" ,
    year: "2023",
    publisher: "OpenRouter",
    country: "USA",
    descriptionFull: "API unique pour accéder à de nombreux modèles d'IA sans multiplier les abonnements. Points forts : accès unifié aux modèles. Points faibles : paiement à l'usage."
  },
  { id: "cursor", name: "Cursor AI", desc: "Codez 10x plus vite avec l'IA.", link: "https://cursor.sh", category: "Dev", price: "Frémium", featured: true, clicks: 0, status: "verified",
    badge: "hot",
    year: "2023",
    publisher: "Anysphere (Cursor)",
    country: "USA",
    descriptionFull: "Éditeur de code boosté par l'IA pour coder plus vite. Points forts : autocomplétion et assistance contextuelles. Points faibles : offre payante."
  },
  { id: "githubcopilot", name: "GitHub Copilot", desc: "Assistant de code intégré.", link: "https://github.com/features/copilot", category: "Dev", price: "Payant", featured: false, clicks: 0, status: "verified" ,
    year: "2021",
    publisher: "GitHub / Microsoft",
    country: "USA",
    descriptionFull: "Assistant de code intégré à l'éditeur, propulsé par l'IA. Points forts : complétion pertinente. Points faibles : abonnement payant."
  },
  { id: "windsurf", name: "Windsurf", desc: "IDE propulsé par l'IA.", link: "https://windsurf.dev", category: "Dev", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2023",
    publisher: "Windsurf (ex Codeium)",
    country: "USA",
    descriptionFull: "IDE (environnement de développement) propulsé par l'IA. Points forts : assistance complète au code. Points faibles : offre payante."
  },
  { id: "tabnine", name: "Tabnine", desc: "Complétion de code sécurisée.", link: "https://tabnine.com", category: "Dev", price: "Frémium", featured: false, clicks: 0, status: "verified" ,
    year: "2013",
    publisher: "Tabnine",
    country: "Israël",
    descriptionFull: "Complétion de code sécurisée, pensé pour la confidentialité des entreprises. Points forts : sécurité et conformité. Points faibles : offre payante."
  },

  // === FORMATION ===
  { id: "sifuyik", name: "Sifu Yik", desc: "Tutos IA courts et pratiques.", link: "#", category: "Formation", price: "Gratuit", featured: false, clicks: 0, status: "pending",
    badge: "beta",
    year: "Inconnue",
    publisher: "Inconnu",
    country: "Inconnu",
    descriptionFull: "Créateur de tutoriels IA courts et pratiques. Fiche à compléter et lien à vérifier. // TODO: vérifier éditeur, pays et année."
  },
  { id: "googleai", name: "Google AI Cert", desc: "Certification gratuite.", link: "https://cloud.google.com/ai", category: "Formation", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2023",
    publisher: "Google",
    country: "USA",
    descriptionFull: "Certification gratuite en IA proposée par Google Cloud. Points forts : certification reconnue et gratuite. Points faibles : niveau technique requis."
  },
  { id: "openaiacademy", name: "OpenAI Academy", desc: "Cours officiels OpenAI.", link: "https://openai.com/academy", category: "Formation", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2024",
    publisher: "OpenAI",
    country: "USA",
    descriptionFull: "Plateforme de cours officiels proposée par OpenAI. Points forts : contenu officiel et fiable. Points faibles : catalogue encore limité."
  },
  { id: "youtube-tuto", name: "YouTube Tuto", desc: "Apprentissage gratuit en vidéo.", link: "https://youtube.com", category: "Formation", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2005",
    publisher: "Google (YouTube)",
    country: "USA",
    descriptionFull: "Accès à un apprentissage gratuit et varié via des tutoriels vidéo. Points forts : gratuit et vaste choix. Points faibles : qualité variable selon les sources."
  },
  { id: "freecodecamp", name: "freeCodeCamp", desc: "Cours dev & IA gratuits.", link: "https://freecodecamp.org", category: "Formation", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2014",
    publisher: "freeCodeCamp",
    country: "USA",
    descriptionFull: "Plateforme gratuite de cours en développement et IA, avec certification. Points forts : 100% gratuit et certification. Points faibles : format long à compléter."
  },

  // === TRAFIC ===
  { id: "youtube", name: "YouTube", desc: "Long terme, SEO vidéo.", link: "https://youtube.com", category: "Trafic", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2005",
    publisher: "Google (YouTube)",
    country: "USA",
    descriptionFull: "Plateforme vidéo à fort potentiel SEO à long terme. Points forts : gratuit et référencement durable. Points faibles : concurrence forte et temps nécessaire."
  },
  { id: "facebook", name: "Facebook", desc: "Communauté et groupes.", link: "https://facebook.com", category: "Trafic", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2004",
    publisher: "Meta",
    country: "USA",
    descriptionFull: "Réseau social utile pour bâtir une communauté et des groupes. Points forts : portée et groupes. Points faibles : portée organique en baisse."
  },
  { id: "tiktok", name: "TikTok", desc: "Viralité rapide.", link: "https://tiktok.com", category: "Trafic", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2016",
    publisher: "ByteDance",
    country: "Chine",
    descriptionFull: "Réseau social vidéo court à fort potentiel de viralité rapide. Points forts : viralité et audience jeune. Points faibles : algorithme imprévisible."
  },
  { id: "instagram", name: "Instagram", desc: "Image de marque.", link: "https://instagram.com", category: "Trafic", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2010",
    publisher: "Meta",
    country: "USA",
    descriptionFull: "Réseau social visuel orienté image de marque et esthétique. Points forts : engagement visuel fort. Points faibles : nécessité de production de contenu visuel."
  },
  { id: "discord", name: "Discord", desc: "Fédérer une audience.", link: "https://discord.com", category: "Trafic", price: "Gratuit", featured: false, clicks: 0, status: "verified" ,
    year: "2015",
    publisher: "Discord",
    country: "USA",
    descriptionFull: "Plateforme communautaire pour fédérer et engager une audience. Points forts : communauté et interaction. Points faibles : gestion et animation nécessaires."
  }
];

