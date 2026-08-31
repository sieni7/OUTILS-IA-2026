// js/app.js
import { toolsData } from './data.js';

// --- Variables globales ---
let currentFilter = 'all';
let currentSearch = '';
let allTools = [...toolsData];
let db = null;
let useFirebase = false;

// --- Bascule thème sombre/clair ---
function applyTheme() {
  const darkMode = localStorage.getItem('theme') !== 'light';
  document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.textContent = darkMode ? '🌙' : '☀️';
}
applyTheme();

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const darkMode = localStorage.getItem('theme') !== 'light';
      localStorage.setItem('theme', darkMode ? 'light' : 'dark');
      applyTheme();
    });
  }
});

// --- Initialisation de Firebase (si config disponible) ---
function initFirebase() {
  if (typeof firebase !== 'undefined' && window.FIREBASE_CONFIG) {
    try {
      firebase.initializeApp(window.FIREBASE_CONFIG);
      db = firebase.firestore();
      useFirebase = true;
      console.log('🔥 Firebase connecté');
    } catch (e) {
      console.warn('Firebase init échoué, fallback localStorage', e);
      useFirebase = false;
    }
  } else {
    console.warn('Aucune config Firebase, fallback localStorage');
    useFirebase = false;
  }
}

// --- Synchronisation des clics depuis Firebase ---
async function syncClicksFromFirebase() {
  if (!useFirebase || !db) return;

  try {
    const snapshot = await db.collection('tools').get();
    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.clicks !== undefined) {
        const tool = allTools.find(t => t.id === doc.id);
        if (tool) {
          tool.clicks = data.clicks;
        }
      }
    });
    // Mettre à jour localStorage pour cohérence
    const stored = {};
    allTools.forEach(t => { stored[t.id] = t.clicks; });
    localStorage.setItem('tools_clicks', JSON.stringify(stored));
    console.log('✅ Synchronisation Firebase réussie');
  } catch (e) {
    console.warn('Erreur de sync Firebase, utilisation localStorage', e);
  }
}

// --- Fonction de mise à jour Firebase (appelée après chaque clic) ---
async function updateFirebaseClicks(id, newClicks) {
  if (!useFirebase || !db) return;
  try {
    await db.collection('tools').doc(id).set({ clicks: newClicks }, { merge: true });
  } catch (e) {
    console.warn('Firestore update error', e);
  }
}

// --- Rendu des outils ---
function renderTools() {
  const grid = document.getElementById('toolsGrid');
  const searchVal = document.getElementById('searchBar').value.toLowerCase().trim();
  const filterCat = currentFilter;

  const filtered = allTools.filter(t => {
    const matchCat = filterCat === 'all' || t.category === filterCat;
    const matchSearch = t.name.toLowerCase().includes(searchVal) || t.desc.toLowerCase().includes(searchVal);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center text-muted py-5">
        <i class="bi bi-search display-4 d-block mb-3"></i>
        Aucun outil ne correspond à votre recherche.
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(tool => {
    const clicks = tool.clicks || 0;
    const featuredBadge = tool.featured ? `<span class="badge bg-info text-dark text-uppercase me-1" style="font-size:0.65rem;">Top</span>` : '';
    const badgeMap = { hot: ['danger', 'Hot'], new: ['success', 'New'], beta: ['warning', 'Beta'] };
    const promoBadge = tool.badge && badgeMap[tool.badge]
      ? `<span class="badge bg-${badgeMap[tool.badge][0]} text-white text-uppercase me-1" style="font-size:0.65rem;">${badgeMap[tool.badge][1]}</span>`
      : '';
    const priceClass = tool.price === 'Gratuit' ? 'success' : (tool.price === 'Frémium' ? 'warning' : (tool.price === 'Économique' ? 'secondary' : 'danger'));

    const verified = tool.status === 'verified';
    const detailsBtn = `
      <button onclick="event.stopPropagation(); openModal('${tool.id}')" class="btn btn-sm btn-outline-light px-3" style="border-radius:8px;">
        👁️ Détails
      </button>`;
    const visitLink = verified
      ? `<a href="${tool.link}" target="_blank" rel="noopener" onclick="event.stopPropagation(); window.handleLinkClick('${tool.id}')" class="btn btn-sm btn-primary px-3" style="border-radius:8px;">🌐 Voir le site <i class="bi bi-box-arrow-up-right ms-1"></i></a>`
      : `<span class="badge bg-secondary text-light px-3 py-2" style="border-radius:8px;">⏳ À vérifier</span>`;

    html += `
      <div class="col">
        <div class="card card-tool h-100 p-4 d-flex flex-column justify-content-between">
          <div>
            <div class="d-flex justify-content-between align-items-start mb-3">
              <span class="badge bg-dark border border-secondary text-light">${tool.category}</span>
              <div>
                ${featuredBadge}
                ${promoBadge}
                <span class="badge badge-price bg-${priceClass} bg-opacity-10 text-${priceClass} border border-${priceClass}">${tool.price}</span>
              </div>
            </div>
            <h4 class="text-white fw-bold mb-2">${tool.name}</h4>
            <p class="text-muted small">${tool.desc}</p>
          </div>
          <div class="d-flex flex-wrap justify-content-between align-items-center mt-4 gap-2">
            <span class="click-counter"><i class="bi bi-mouse me-1"></i> ${clicks} clics</span>
            <div class="d-flex gap-2">
              ${detailsBtn}
              ${visitLink}
            </div>
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
  updateTotalClicks();
}

// --- Gestion du clic ---
window.handleClick = function(id) {
  const tool = allTools.find(t => t.id === id);
  if (!tool) return;

  tool.clicks = (tool.clicks || 0) + 1;

  // Mettre à jour localStorage
  try {
    const stored = JSON.parse(localStorage.getItem('tools_clicks')) || {};
    stored[id] = tool.clicks;
    localStorage.setItem('tools_clicks', JSON.stringify(stored));
  } catch (e) {}

  // Mettre à jour Firebase (asynchrone, non bloquante)
  updateFirebaseClicks(id, tool.clicks);

  // Ouvrir le lien
  if (tool.link && tool.link !== '#') {
    window.open(tool.link, '_blank');
  } else {
    alert('Lien non disponible pour cet outil.');
  }

  renderTools();
};

// --- Incrémenter le compteur d'un outil (partagé) ---
function incrementClicks(id) {
  const tool = allTools.find(t => t.id === id);
  if (!tool) return;
  tool.clicks = (tool.clicks || 0) + 1;
  try {
    const stored = JSON.parse(localStorage.getItem('tools_clicks')) || {};
    stored[id] = tool.clicks;
    localStorage.setItem('tools_clicks', JSON.stringify(stored));
  } catch (e) {}
  updateFirebaseClicks(id, tool.clicks);
  renderTools();
}

// --- Clic sur "Voir le site" : incrémente le compteur, ouverture gérée par <a target=_blank> ---
window.handleLinkClick = function(id) {
  incrementClicks(id);
};

// --- Icône par catégorie ---
function getCategoryIcon(cat) {
  const map = {
    'Modèles IA': 'bi-cpu',
    'Recherche IA': 'bi-search-heart',
    'Assistant IA': 'bi-robot',
    'Image IA': 'bi-image',
    'Vidéo IA': 'bi-film',
    'Audio IA': 'bi-music-note-beamed',
    'Musique IA': 'bi-music-note-list',
    'Code IA': 'bi-code-slash',
    'Productivité IA': 'bi-lightning-charge',
    'Marketing IA': 'bi-megaphone',
    'Analyse IA': 'bi-bar-chart',
    'Design IA': 'bi-palette',
    'Chatbot IA': 'bi-chat-dots',
    '3D IA': 'bi-box',
    'Automatisation IA': 'bi-diagram-3',
    'Cybersécurité IA': 'bi-shield-lock'
  };
  return map[cat] || 'bi-stars';
}

// --- MODALE DÉTAILLÉE PREMIUM ---
function openModal(id) {
  const tool = allTools.find(t => t.id === id);
  if (!tool) return;

  const modal = document.getElementById('toolModal');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;

  const clicks = tool.clicks || 0;
  const statusBadge = tool.status === 'verified'
    ? '<span class="badge bg-success text-light">✅ Vérifié</span>'
    : '<span class="badge bg-secondary text-light">⏳ En attente</span>';
  const icon = getCategoryIcon(tool.category);
  const linkBtn = (tool.link && tool.link !== '#')
    ? `<button onclick="event.stopPropagation(); window.open('${tool.link}','_blank')" class="btn btn-primary">🌐 Visiter le site <i class="bi bi-box-arrow-up-right ms-1"></i></button>`
    : '<span class="badge bg-warning text-dark">Lien non disponible</span>';
  const badgeRow = [
    tool.featured ? '<span class="badge bg-info text-dark text-uppercase" style="font-size:0.65rem;">Top</span>' : '',
    (tool.badge === 'hot') ? '<span class="badge bg-danger text-uppercase" style="font-size:0.65rem;">Hot</span>' : '',
    (tool.badge === 'new') ? '<span class="badge bg-success text-uppercase" style="font-size:0.65rem;">New</span>' : '',
    (tool.badge === 'beta') ? '<span class="badge bg-warning text-dark text-uppercase" style="font-size:0.65rem;">Beta</span>' : ''
  ].join('');

  content.innerHTML = `
    <div class="modal-header">
      <div class="d-flex align-items-center">
        <span class="modal-icon"><i class="bi ${icon}"></i></span>
        <h2 class="mb-0">${tool.name}</h2>
      </div>
      ${badgeRow ? `<span class="badge-cat">${badgeRow}</span>` : ''}
    </div>
    <div class="modal-body">
      <div class="modal-info-grid">
        <div class="modal-info-item"><i class="bi bi-building"></i><div><span class="lbl">Éditeur</span><span class="val">${tool.publisher || 'Inconnu'}</span></div></div>
        <div class="modal-info-item"><i class="bi bi-geo-alt"></i><div><span class="lbl">Pays</span><span class="val">${tool.country || 'Inconnu'}</span></div></div>
        <div class="modal-info-item"><i class="bi bi-calendar3"></i><div><span class="lbl">Année</span><span class="val">${tool.year || 'Inconnue'}</span></div></div>
        <div class="modal-info-item"><i class="bi bi-tag"></i><div><span class="lbl">Prix</span><span class="val">${tool.price}</span></div></div>
        <div class="modal-info-item"><i class="bi bi-shield-check"></i><div><span class="lbl">Statut</span><span class="val">${statusBadge}</span></div></div>
        <div class="modal-info-item"><i class="bi bi-mouse"></i><div><span class="lbl">Total clics</span><span class="val">${clicks}</span></div></div>
      </div>
      <div class="modal-desc">
        <strong>Description :</strong> ${tool.descriptionFull || tool.desc}
      </div>
      <div class="modal-actions">
        ${linkBtn}
      </div>
    </div>
  `;

  modal.style.display = 'flex';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('toolModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

window.openModal = openModal;
window.closeModal = closeModal;

// --- MODALE CAS D'USAGE ---
function openUseCasesModal() {
  const modal = document.getElementById('useCasesModal');
  if (!modal) return;
  modal.style.display = 'flex';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeUseCasesModal() {
  const modal = document.getElementById('useCasesModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

window.openUseCasesModal = openUseCasesModal;
window.closeUseCasesModal = closeUseCasesModal;

// --- Mise à jour du compteur total ---
function updateTotalClicks() {
  const total = allTools.reduce((sum, t) => sum + (t.clicks || 0), 0);
  const el = document.getElementById('totalClicks');
  if (el) el.textContent = total;
}

// --- Chargement des clics depuis localStorage (fallback) ---
function loadClicksFromLocalStorage() {
  try {
    const stored = JSON.parse(localStorage.getItem('tools_clicks')) || {};
    allTools.forEach(t => {
      if (stored[t.id] !== undefined) {
        t.clicks = stored[t.id];
      }
    });
  } catch (e) {}
}

// --- Génération des filtres ---
function generateFilters() {
  const container = document.getElementById('filterContainer');
  if (!container) return;
  const categories = ['all', ...new Set(allTools.map(t => t.category))];
  container.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `btn-filter ${cat === 'all' ? 'active' : ''}`;
    btn.textContent = cat === 'all' ? 'Tout' : cat;
    btn.dataset.category = cat;
    btn.onclick = () => {
      document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = cat;
      renderTools();
    };
    container.appendChild(btn);
  });
}

// --- Initialisation asynchrone ---
async function init() {
  // 1. Charger les clics depuis localStorage (fallback immédiat)
  loadClicksFromLocalStorage();

  // 2. Initialiser Firebase (si config disponible)
  initFirebase();

  // 3. Si Firebase est actif, tenter une sync (écrase localStorage)
  if (useFirebase) {
    await syncClicksFromFirebase();
  }

  // 4. Générer les filtres
  generateFilters();

  // 5. Écouter la recherche
  const searchBar = document.getElementById('searchBar');
  if (searchBar) {
    searchBar.addEventListener('input', () => renderTools());
  }

  // 5b. Fermer les modales avec la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (typeof closeModal === 'function') closeModal();
      if (typeof closeUseCasesModal === 'function') closeUseCasesModal();
    }
  });

  // 6. Premier rendu
  renderTools();

  console.log(`✅ Sprint 3 - ${allTools.length} outils, mode ${useFirebase ? 'Firebase' : 'localStorage'}`);
}

// Lancer au chargement
document.addEventListener('DOMContentLoaded', init);