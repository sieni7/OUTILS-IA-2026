// js/data.js
export const toolsData = [
  // === MODÈLES IA ===
  { id: "claude", name: "Claude AI", desc: "Écriture humaine fluide et contextualisée, idéal pour la rédaction pro.", link: "https://claude.ai", category: "Modèles IA", price: "Frémium", featured: true, clicks: 0, status: "verified" },
  { id: "chatgpt", name: "ChatGPT", desc: "Brainstorming rapide, assistance polyvalente.", link: "https://chat.openai.com", category: "Modèles IA", price: "Frémium", featured: true, clicks: 0, status: "verified" },
  { id: "deepseek", name: "DeepSeek V3.2", desc: "Modèle ultra-puissant et économique pour prompts complexes.", link: "https://deepseek.com", category: "Modèles IA", price: "Économique", featured: true, clicks: 0, status: "verified" },
  { id: "qwen", name: "Qwen", desc: "Code et multilingue, performance solide.", link: "https://qwen.ai", category: "Modèles IA", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "gemini", name: "Gemini", desc: "Intégration Google & YouTube, recherche avancée.", link: "https://gemini.google.com", category: "Modèles IA", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "copilot", name: "Microsoft Copilot", desc: "Assistant IA intégré à l'écosystème Microsoft 365.", link: "https://copilot.microsoft.com", category: "Modèles IA", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "mistral", name: "Mistral AI", desc: "Le champion européen, modèles open-source et 'Le Chat'.", link: "https://mistral.ai", category: "Modèles IA", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "huggingface", name: "Hugging Face", desc: "Plateforme de référence pour modèles open-source et datasets.", link: "https://huggingface.co", category: "Modèles IA", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "kimi", name: "Kimi K3", desc: "Assistant avec très grande fenêtre de contexte.", link: "https://kimi.ai", category: "Modèles IA", price: "Gratuit", featured: false, clicks: 0, status: "verified" },

  // === RECHERCHE ===
  { id: "perplexity", name: "Perplexity", desc: "Réponses sourcées avec citations.", link: "https://perplexity.ai", category: "Recherche", price: "Frémium", featured: true, clicks: 0, status: "verified" },
  { id: "ithy", name: "Ithy", desc: "Rapports complets et structurés.", link: "https://ithy.com", category: "Recherche", price: "Payant", featured: false, clicks: 0, status: "verified" },
  { id: "notebooklm", name: "NotebookLM", desc: "Analyse et synthèse de vos PDFs.", link: "https://notebooklm.google", category: "Recherche", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "googletrends", name: "Google Trends", desc: "Tendances marché et mots-clés.", link: "https://trends.google.com", category: "Recherche", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "grok", name: "Grok", desc: "Tendances X (Twitter) en temps réel.", link: "https://grok.x.ai", category: "Recherche", price: "Payant", featured: false, clicks: 0, status: "verified" },

  // === AGENTS & AUTO ===
  { id: "openclaw", name: "OpenClaw", desc: "Agent autonome sans code.", link: "#", category: "Agents & Auto", price: "Gratuit", featured: false, clicks: 0, status: "pending" },
  { id: "maxclaw", name: "MaxClaw", desc: "Agent avancé pour automatisations complexes.", link: "#", category: "Agents & Auto", price: "Payant", featured: false, clicks: 0, status: "pending" },
  { id: "n8n", name: "n8n", desc: "Automatisez tous vos workflows avec flexibilité technique.", link: "https://n8n.io", category: "Agents & Auto", price: "Frémium", featured: true, clicks: 0, status: "verified" },
  { id: "make", name: "Make", desc: "Automatisation visuelle et simple.", link: "https://make.com", category: "Agents & Auto", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "coze", name: "Coze", desc: "Créez des bots pour TikTok / WhatsApp.", link: "https://coze.com", category: "Agents & Auto", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "zapier", name: "Zapier", desc: "Alternative populaire pour l'automatisation de workflows.", link: "https://zapier.com", category: "Agents & Auto", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "lindy", name: "Lindy", desc: "Plateforme d'agents IA spécialisée en délégation de tâches.", link: "https://lindy.ai", category: "Agents & Auto", price: "Payant", featured: false, clicks: 0, status: "verified" },
  { id: "lovable", name: "Lovable", desc: "Créez des applications web fonctionnelles sans coder.", link: "https://lovable.dev", category: "Agents & Auto", price: "Frémium", featured: false, clicks: 0, status: "verified" },

  // === IMAGES IA ===
  { id: "nanobanana", name: "Nano Banana 2", desc: "Ultra-réaliste avec précision anatomique.", link: "#", category: "Images IA", price: "Payant", featured: false, clicks: 0, status: "pending" },
  { id: "lovart", name: "Lovart", desc: "Design produit et visuels commerciaux.", link: "#", category: "Images IA", price: "Payant", featured: false, clicks: 0, status: "pending" },
  { id: "canva", name: "Canva AI", desc: "Posts rapides pour réseaux sociaux.", link: "https://canva.com", category: "Images IA", price: "Frémium", featured: true, clicks: 0, status: "verified" },
  { id: "firefly", name: "Adobe Firefly", desc: "Génération sans copyright.", link: "https://firefly.adobe.com", category: "Images IA", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "dreamina", name: "Dreamina", desc: "Gratuit et illimité.", link: "#", category: "Images IA", price: "Gratuit", featured: false, clicks: 0, status: "pending" },
  { id: "midjourney", name: "Midjourney", desc: "Style artistique reconnu, génération d'images.", link: "https://midjourney.com", category: "Images IA", price: "Payant", featured: false, clicks: 0, status: "verified" },
  { id: "stablediffusion", name: "Stable Diffusion", desc: "Modèle open-source de génération d'images.", link: "https://stability.ai", category: "Images IA", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "runway", name: "Runway", desc: "Création et édition vidéo/IA.", link: "https://runwayml.com", category: "Images IA", price: "Frémium", featured: false, clicks: 0, status: "verified" },

  // === VIDÉO IA ===
  { id: "wanvideo", name: "Wan Video", desc: "Texte vers vidéo.", link: "#", category: "Vidéo IA", price: "Gratuit", featured: false, clicks: 0, status: "pending" },
  { id: "seedance", name: "Seedance 2.0", desc: "Mouvement fluide et réaliste.", link: "#", category: "Vidéo IA", price: "Payant", featured: false, clicks: 0, status: "pending" },
  { id: "kling", name: "Kling AI", desc: "Réalisme extrême pour les vidéos.", link: "https://kling.ai", category: "Vidéo IA", price: "Payant", featured: false, clicks: 0, status: "verified" },
  { id: "hailuo", name: "Hailuo", desc: "Courts métrages et clips.", link: "#", category: "Vidéo IA", price: "Frémium", featured: false, clicks: 0, status: "pending" },
  { id: "grokimage", name: "Grok Imagine", desc: "Image vers vidéo.", link: "#", category: "Vidéo IA", price: "Payant", featured: false, clicks: 0, status: "pending" },
  { id: "sora", name: "Sora 2", desc: "Générateur vidéo d'OpenAI.", link: "https://sora.openai.com", category: "Vidéo IA", price: "Payant", featured: false, clicks: 0, status: "verified" },

  // === MONTAGE ===
  { id: "capcut", name: "CapCut", desc: "Reels / TikTok faciles.", link: "https://capcut.com", category: "Montage", price: "Gratuit", featured: true, clicks: 0, status: "verified" },
  { id: "davinci", name: "DaVinci Resolve", desc: "Pro gratuit, montage avancé.", link: "https://blackmagicdesign.com", category: "Montage", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "obs", name: "OBS Studio", desc: "Capture écran et streaming.", link: "https://obsproject.com", category: "Montage", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "canvavid", name: "Canva Video", desc: "Montage express en ligne.", link: "https://canva.com", category: "Montage", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "openshot", name: "OpenShot", desc: "Simple et léger.", link: "https://openshot.org", category: "Montage", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "descript", name: "Descript", desc: "Montage par transcription.", link: "https://descript.com", category: "Montage", price: "Frémium", featured: false, clicks: 0, status: "verified" },

  // === VOIX & AUDIO ===
  { id: "voicebox", name: "Voicebox", desc: "Clone ta voix.", link: "#", category: "Voix & Audio", price: "Payant", featured: false, clicks: 0, status: "pending" },
  { id: "elevenlabs", name: "ElevenLabs", desc: "Voix humaine réaliste.", link: "https://elevenlabs.io", category: "Voix & Audio", price: "Frémium", featured: true, clicks: 0, status: "verified" },
  { id: "adobepodcast", name: "Adobe Podcast", desc: "Nettoie l'audio automatiquement.", link: "https://podcast.adobe.com", category: "Voix & Audio", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "murf", name: "Murf AI", desc: "Voix-off professionnelle.", link: "https://murf.ai", category: "Voix & Audio", price: "Payant", featured: false, clicks: 0, status: "verified" },
  { id: "naturalreader", name: "Natural Reader", desc: "Texte vers voix.", link: "https://naturalreaders.com", category: "Voix & Audio", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "aiva", name: "AIVA", desc: "Composition musicale par IA.", link: "https://aiva.ai", category: "Voix & Audio", price: "Frémium", featured: false, clicks: 0, status: "verified" },

  // === MUSIQUE IA ===
  { id: "suno", name: "Suno AI", desc: "Chanson complète générée.", link: "https://suno.ai", category: "Musique IA", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "lyria", name: "Lyria 3", desc: "Instrumental professionnel.", link: "#", category: "Musique IA", price: "Payant", featured: false, clicks: 0, status: "pending" },
  { id: "mureka", name: "Mureka", desc: "Sans copyright.", link: "#", category: "Musique IA", price: "Gratuit", featured: false, clicks: 0, status: "pending" },
  { id: "udio", name: "Udio", desc: "Qualité studio.", link: "https://udio.com", category: "Musique IA", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "soundraw", name: "Soundraw", desc: "Musique pour YouTube.", link: "https://soundraw.io", category: "Musique IA", price: "Frémium", featured: false, clicks: 0, status: "verified" },

  // === AVATARS ===
  { id: "heygen", name: "HeyGen", desc: "Avatar multilingue.", link: "https://heygen.com", category: "Avatars", price: "Frémium", featured: true, clicks: 0, status: "verified" },
  { id: "pippit", name: "Pippit", desc: "Avatar vendeur.", link: "#", category: "Avatars", price: "Payant", featured: false, clicks: 0, status: "pending" },
  { id: "did", name: "D-ID", desc: "Photo qui parle.", link: "https://d-id.com", category: "Avatars", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "synthesia", name: "Synthesia", desc: "Avatar pour formations.", link: "https://synthesia.io", category: "Avatars", price: "Payant", featured: false, clicks: 0, status: "verified" },
  { id: "zimage", name: "Z-image", desc: "Photo de profil IA.", link: "#", category: "Avatars", price: "Gratuit", featured: false, clicks: 0, status: "pending" },

  // === DESIGN ===
  { id: "canvadesign", name: "Canva", desc: "Tout-en-un pour le design.", link: "https://canva.com", category: "Design", price: "Frémium", featured: true, clicks: 0, status: "verified" },
  { id: "designer", name: "Designer", desc: "Design rapide.", link: "#", category: "Design", price: "Gratuit", featured: false, clicks: 0, status: "pending" },
  { id: "figma", name: "Figma", desc: "UI/UX professionnel.", link: "https://figma.com", category: "Design", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "gimp", name: "GIMP", desc: "Photoshop gratuit.", link: "https://gimp.org", category: "Design", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "freepik", name: "Freepik AI", desc: "Templates + IA générative.", link: "https://freepik.com", category: "Design", price: "Frémium", featured: false, clicks: 0, status: "verified" },

  // === CONTENU ===
  { id: "notion", name: "Notion", desc: "Second cerveau, organisation.", link: "https://notion.so", category: "Contenu", price: "Frémium", featured: true, clicks: 0, status: "verified" },
  { id: "antigravity", name: "Antigravity", desc: "Écriture collaborative avec Drive.", link: "#", category: "Contenu", price: "Payant", featured: false, clicks: 0, status: "pending" },
  { id: "languagetool", name: "LanguageTool", desc: "Correction grammaticale avancée.", link: "https://languagetool.org", category: "Contenu", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "copyai", name: "Copy AI", desc: "Textes de vente et persuasion.", link: "https://copy.ai", category: "Contenu", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "gamma", name: "Gamma", desc: "Présentations automatiques.", link: "https://gamma.app", category: "Contenu", price: "Frémium", featured: false, clicks: 0, status: "verified" },

  // === PUBLICATION ===
  { id: "substack", name: "Substack", desc: "Newsletter payante.", link: "https://substack.com", category: "Publication", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "buffer", name: "Buffer", desc: "Programmation de posts.", link: "https://buffer.com", category: "Publication", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "brevo", name: "Brevo", desc: "Email marketing (ex Sendinblue).", link: "https://brevo.com", category: "Publication", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "mailerlite", name: "Mailerlite", desc: "Email marketing gratuit.", link: "https://mailerlite.com", category: "Publication", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "systemeio", name: "Systeme.io", desc: "Funnels de vente et email FR.", link: "https://systeme.io", category: "Publication", price: "Frémium", featured: false, clicks: 0, status: "verified" },

  // === VENTE ===
  { id: "gumroad", name: "Gumroad", desc: "Vendez ebooks, produits digitaux.", link: "https://gumroad.com", category: "Vente", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "stripe", name: "Stripe", desc: "Paiement professionnel.", link: "https://stripe.com", category: "Vente", price: "Payant", featured: true, clicks: 0, status: "verified" },
  { id: "kofi", name: "Ko-Fi", desc: "Boutique + dons.", link: "https://ko-fi.com", category: "Vente", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "woocommerce", name: "WooCommerce", desc: "Boutique WordPress.", link: "https://woocommerce.com", category: "Vente", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "paypal", name: "PayPal", desc: "Paiement rapide.", link: "https://paypal.com", category: "Vente", price: "Payant", featured: false, clicks: 0, status: "verified" },

  // === DEV ===
  { id: "aistudio", name: "AI Studio", desc: "Testez Gemini et autres modèles.", link: "https://aistudio.google.com", category: "Dev", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "github", name: "GitHub", desc: "Code et portfolio.", link: "https://github.com", category: "Dev", price: "Gratuit", featured: true, clicks: 0, status: "verified" },
  { id: "cloudflare", name: "Cloudflare", desc: "Hébergement gratuit, CDN.", link: "https://cloudflare.com", category: "Dev", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "openrouter", name: "OpenRouter", desc: "Une API pour accéder à toutes les IA.", link: "https://openrouter.ai", category: "Dev", price: "Payant", featured: false, clicks: 0, status: "verified" },
  { id: "cursor", name: "Cursor AI", desc: "Codez 10x plus vite avec l'IA.", link: "https://cursor.sh", category: "Dev", price: "Frémium", featured: true, clicks: 0, status: "verified" },
  { id: "githubcopilot", name: "GitHub Copilot", desc: "Assistant de code intégré.", link: "https://github.com/features/copilot", category: "Dev", price: "Payant", featured: false, clicks: 0, status: "verified" },
  { id: "windsurf", name: "Windsurf", desc: "IDE propulsé par l'IA.", link: "https://windsurf.dev", category: "Dev", price: "Frémium", featured: false, clicks: 0, status: "verified" },
  { id: "tabnine", name: "Tabnine", desc: "Complétion de code sécurisée.", link: "https://tabnine.com", category: "Dev", price: "Frémium", featured: false, clicks: 0, status: "verified" },

  // === FORMATION ===
  { id: "sifuyik", name: "Sifu Yik", desc: "Tutos IA courts et pratiques.", link: "#", category: "Formation", price: "Gratuit", featured: false, clicks: 0, status: "pending" },
  { id: "googleai", name: "Google AI Cert", desc: "Certification gratuite.", link: "https://cloud.google.com/ai", category: "Formation", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "openaiacademy", name: "OpenAI Academy", desc: "Cours officiels OpenAI.", link: "https://openai.com/academy", category: "Formation", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "youtube-tuto", name: "YouTube Tuto", desc: "Apprentissage gratuit en vidéo.", link: "https://youtube.com", category: "Formation", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "freecodecamp", name: "freeCodeCamp", desc: "Cours dev & IA gratuits.", link: "https://freecodecamp.org", category: "Formation", price: "Gratuit", featured: false, clicks: 0, status: "verified" },

  // === TRAFIC ===
  { id: "youtube", name: "YouTube", desc: "Long terme, SEO vidéo.", link: "https://youtube.com", category: "Trafic", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "facebook", name: "Facebook", desc: "Communauté et groupes.", link: "https://facebook.com", category: "Trafic", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "tiktok", name: "TikTok", desc: "Viralité rapide.", link: "https://tiktok.com", category: "Trafic", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "instagram", name: "Instagram", desc: "Image de marque.", link: "https://instagram.com", category: "Trafic", price: "Gratuit", featured: false, clicks: 0, status: "verified" },
  { id: "discord", name: "Discord", desc: "Fédérer une audience.", link: "https://discord.com", category: "Trafic", price: "Gratuit", featured: false, clicks: 0, status: "verified" }
];