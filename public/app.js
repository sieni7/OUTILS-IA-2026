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

    html += `
      <div class="col">
        <div class="card card-tool h-100 p-4 d-flex flex-column justify-content-between" onclick="openModal('${tool.id}')" style="cursor:pointer;">
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
          <div class="d-flex justify-content-between align-items-center mt-4">
            <span class="click-counter"><i class="bi bi-mouse me-1"></i> ${clicks} clics</span>
            ${tool.status === 'verified'
              ? `<button onclick="window.handleClick('${tool.id}')" class="btn btn-sm btn-outline-light px-3" style="border-radius:8px;">Ouvrir <i class="bi bi-box-arrow-up-right ms-1"></i></button>`
              : `<span class="badge bg-secondary text-light px-3 py-2" style="border-radius:8px;">⏳ À vérifier</span>`}
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

// --- MODALE DÉTAILLÉE ---
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
  const linkBtn = (tool.link && tool.link !== '#')
    ? `<a href="${tool.link}" target="_blank" class="btn btn-primary mt-3">🌐 Visiter le site</a>`
    : '<span class="badge bg-warning text-dark mt-3">Lien non disponible</span>';

  content.innerHTML = `
    <div class="modal-header">
      <h2>${tool.name}</h2>
      <span class="badge bg-secondary text-light">${tool.category}</span>
    </div>
    <div class="modal-body">
      <p><strong>Année :</strong> ${tool.year || 'Inconnue'}</p>
      <p><strong>Éditeur :</strong> ${tool.publisher || 'Inconnu'}</p>
      <p><strong>Pays :</strong> ${tool.country || 'Inconnu'}</p>
      <p><strong>Description :</strong> ${tool.descriptionFull || tool.desc}</p>
      <p><strong>Prix :</strong> ${tool.price}</p>
      <p><strong>Statut :</strong> ${statusBadge}</p>
      <p><strong>Total clics :</strong> ${clicks}</p>
      ${linkBtn}
    </div>
  `;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('toolModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

window.openModal = openModal;
window.closeModal = closeModal;

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

  // 5b. Fermer la modale avec la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // 6. Premier rendu
  renderTools();

  console.log(`✅ Sprint 3 - ${allTools.length} outils, mode ${useFirebase ? 'Firebase' : 'localStorage'}`);
}

// Lancer au chargement
document.addEventListener('DOMContentLoaded', init);