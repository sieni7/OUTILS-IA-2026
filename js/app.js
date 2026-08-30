// js/app.js
import { toolsData } from './data.js';

// --- Variables globales ---
let currentFilter = 'all';
let currentSearch = '';
let allTools = [...toolsData];

// --- Rendu des outils ---
function renderTools() {
  const grid = document.getElementById('toolsGrid');
  const searchVal = document.getElementById('searchBar').value.toLowerCase().trim();
  const filterCat = currentFilter;

  // Filtrer les données
  const filtered = allTools.filter(t => {
    const matchCat = filterCat === 'all' || t.category === filterCat;
    const matchSearch = t.name.toLowerCase().includes(searchVal) || t.desc.toLowerCase().includes(searchVal);
    return matchCat && matchSearch;
  });

  // Si aucun résultat
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center text-muted py-5">
        <i class="bi bi-search display-4 d-block mb-3"></i>
        Aucun outil ne correspond à votre recherche.
      </div>
    `;
    return;
  }

  // Génération des cartes
  let html = '';
  filtered.forEach(tool => {
    const clicks = tool.clicks || 0;
    const featuredBadge = tool.featured
      ? `<span class="badge bg-info text-dark text-uppercase me-1" style="font-size:0.65rem;">Top</span>`
      : '';
    const priceClass = tool.price === 'Gratuit' ? 'success' : (tool.price === 'Frémium' ? 'warning' : 'danger');

    html += `
      <div class="col">
        <div class="card card-tool h-100 p-4 d-flex flex-column justify-content-between">
          <div>
            <div class="d-flex justify-content-between align-items-start mb-3">
              <span class="badge bg-dark border border-secondary text-light">${tool.category}</span>
              <div>
                ${featuredBadge}
                <span class="badge badge-price bg-${priceClass} bg-opacity-10 text-${priceClass} border border-${priceClass}">${tool.price}</span>
              </div>
            </div>
            <h4 class="text-white fw-bold mb-2">${tool.name}</h4>
            <p class="text-muted small">${tool.desc}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center mt-4">
            <span class="click-counter"><i class="bi bi-mouse me-1"></i> ${clicks} clics</span>
            <button onclick="window.handleClick('${tool.id}')" class="btn btn-sm btn-outline-light px-3" style="border-radius:8px;">
              Ouvrir <i class="bi bi-box-arrow-up-right ms-1"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
  updateTotalClicks();
}

// --- Gestion du clic sur un outil (exposée globalement) ---
window.handleClick = function(id) {
  const tool = allTools.find(t => t.id === id);
  if (!tool) return;

  // Incrémenter localement
  tool.clicks = (tool.clicks || 0) + 1;

  // Sauvegarder dans localStorage (fallback avant Firebase)
  try {
    const stored = JSON.parse(localStorage.getItem('tools_clicks')) || {};
    stored[id] = tool.clicks;
    localStorage.setItem('tools_clicks', JSON.stringify(stored));
  } catch (e) {
    console.warn('Erreur de sauvegarde localStorage', e);
  }

  // Ouvrir le lien
  if (tool.link && tool.link !== '#') {
    window.open(tool.link, '_blank');
  } else {
    alert('Lien non disponible pour cet outil.');
  }

  // Re-rendre pour mettre à jour l'affichage
  renderTools();
};

// --- Mise à jour du compteur total ---
function updateTotalClicks() {
  const total = allTools.reduce((sum, t) => sum + (t.clicks || 0), 0);
  const el = document.getElementById('totalClicks');
  if (el) el.textContent = total;
}

// --- Chargement des clics depuis localStorage ---
function loadClicksFromLocalStorage() {
  try {
    const stored = JSON.parse(localStorage.getItem('tools_clicks')) || {};
    allTools.forEach(t => {
      if (stored[t.id] !== undefined) {
        t.clicks = stored[t.id];
      }
    });
  } catch (e) {
    console.warn('Erreur de lecture localStorage', e);
  }
}

// --- Génération des boutons de filtre dynamiquement ---
function generateFilters() {
  const container = document.getElementById('filterContainer');
  if (!container) return;

  // Récupérer les catégories uniques (triées)
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

// --- Initialisation ---
function init() {
  // Charger les clics depuis localStorage
  loadClicksFromLocalStorage();

  // Générer les filtres
  generateFilters();

  // Écouter la recherche
  const searchBar = document.getElementById('searchBar');
  if (searchBar) {
    searchBar.addEventListener('input', (e) => {
      renderTools();
    });
  }

  // Premier rendu
  renderTools();

  console.log(`✅ Sprint 2 - ${allTools.length} outils chargés, mode localStorage actif`);
}

// Lancer l'application au chargement du DOM
document.addEventListener('DOMContentLoaded', init);