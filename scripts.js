const stades = [
  {
    id: 'tanger',
    nom: 'Grand Stade de Tanger',
    ville: 'Tanger',
    capacite: '75 000',
    ouverture: '2011',
    images: [
      'images/tanger.jpg',
      'images/tanger2.jpg',
      'images/tanger3.jpg'
    ],
    adresse: 'Avenue Ibn Batouta, Tanger',
    description: "Le Grand Stade de Tanger est l'un des plus grands stades du Maroc, accueillant des matchs nationaux et internationaux, doté d'infrastructures modernes.",
    map: 'https://goo.gl/maps/8Qw6QwF8Qw6QwF8',
    lat: 35.7636, lon: -5.8341,
    avis: [
      { nom: 'Yassine', note: 5, commentaire: 'Superbe ambiance et stade moderne !' },
      { nom: 'Fatima', note: 4, commentaire: 'Très bon accueil, accès facile.' }
    ]
  },
  {
    id: 'rabat-abdellah',
    nom: 'Complexe Sportif Prince Moulay Abdellah',
    ville: 'Rabat',
    capacite: '69 500',
    ouverture: '1983',
    images: [
      'images/rabat-abdellah.jpg',
      'images/rabat-abdellah1.jpg',
      'images/rabat-abdellah2.jpg'
    ],
    adresse: 'Avenue Ibn Sina, Rabat',
    description: "Le principal stade de Rabat, accueillant de nombreux événements sportifs et culturels majeurs.",
    map: 'https://goo.gl/maps/0Qw6QwF0Qw6QwF0',
    lat: 34.0101, lon: -6.8446
  },
  {
    id: 'marrakech',
    nom: 'Grand Stade de Marrakech',
    ville: 'Marrakech',
    capacite: '41 245',
    ouverture: '2011',
    images: [
      'images/marrakech.jpg',
      'images/marrakech1.jpg',
      'images/marrakech2.jpg'
    ],
    adresse: 'Route de Casablanca, Marrakech',
    description: "Un stade moderne situé à Marrakech, connu pour son architecture et son ambiance lors des grands matchs.",
    map: 'https://goo.gl/maps/1Qw6QwF1Qw6QwF1',
    lat: 31.6847, lon: -8.0576
  },
  {
    id: 'agadir',
    nom: "Grand Stade d'Agadir",
    ville: 'Agadir',
    capacite: '41 144',
    ouverture: '2013',
    images: [
      'images/agadir.jpg',
      'images/agadir1.jpg',
      'images/agadir2.jpg'
    ],
    adresse: 'Quartier Tilila, Agadir',
    description: "Stade emblématique du sud marocain, il accueille de nombreux événements sportifs internationaux.",
    map: 'https://goo.gl/maps/2Qw6QwF2Qw6QwF2',
    lat: 30.4381, lon: -9.5836
  },
  {
    id: 'casablanca',
    nom: 'Complexe Sportif Mohammed V',
    ville: 'Casablanca',
    capacite: '45 000',
    ouverture: '1955',
    images: [
      'images/casablanca.jpg',
      'images/casablanca1.jpg',
      'images/casablanca2.jpg'
    ],
    adresse: 'Bd Omar Al Khayam, Casablanca',
    description: "Le stade mythique de Casablanca, fief du Raja et du Wydad, au cœur de la capitale économique.",
    map: 'https://goo.gl/maps/3Qw6QwF3Qw6QwF3',
    lat: 33.5866, lon: -7.6426
  },
  {
    id: 'fes',
    nom: 'Complexe Sportif de Fès',
    ville: 'Fès',
    capacite: '35 468',
    ouverture: '2007',
    images: [
      'images/fes.jpg',
      'images/fes1.jpg',
      'images/fes2.jpg'
    ],
    adresse: 'Route Sidi Hrazem, Fès',
    description: "Un stade moderne pour la ville impériale de Fès, accueillant de nombreux matchs nationaux.",
    map: 'https://goo.gl/maps/4Qw6QwF4Qw6QwF4',
    lat: 34.0433, lon: -4.9998
  },
  {
    id: 'rabat-hassan',
    nom: 'Complexe Sportif Prince Héritier Moulay El Hassan',
    ville: 'Rabat',
    capacite: '22 000',
    ouverture: '2003',
    images: [
      'images/rabat-hassan.jpg',
      'images/rabat-hassan1.jpg',
      'images/rabat-hassan2.jpg'
    ],
    adresse: 'Avenue Annakhil, Rabat',
    description: "Un stade polyvalent de Rabat, souvent utilisé pour les matchs de football et d'autres événements sportifs.",
    map: 'https://goo.gl/maps/5Qw6QwF5Qw6QwF5',
    lat: 34.0202, lon: -6.8416
  },
  {
    id: 'rabat-olympique',
    nom: 'Stade Olympique Annexe Prince Moulay Abdellah',
    ville: 'Rabat',
    capacite: '21 000',
    ouverture: '1983',
    images: [
      'images/rabat-olympique.jpg',
      'images/rabat-olympique1.jpg',
      'images/rabat-olympique2.jpg'
    ],
    adresse: 'Avenue Ibn Sina, Rabat',
    description: "Annexe du grand complexe de Rabat, il accueille des compétitions et des entraînements de haut niveau.",
    map: 'https://goo.gl/maps/6Qw6QwF6Qw6QwF6',
    lat: 34.0101, lon: -6.8446
  },
  {
    id: 'rabat-barid',
    nom: 'Stade Al Barid',
    ville: 'Rabat',
    capacite: '18 000',
    ouverture: '2010',
    images: [
      'images/rabat-barid.jpg',
      'images/rabat-barid1.jpg',
      'images/rabat-barid2.jpg'
    ],
    adresse: 'Quartier Al Barid, Rabat',
    description: "Un stade récent de Rabat, principalement utilisé pour le football et les compétitions locales.",
    map: 'https://goo.gl/maps/7Qw6QwF7Qw6QwF7',
    lat: 34.0250, lon: -6.8360
  }
];

function createStadiumCard(stade) {
  return `
    <div class="col stadium-col" data-nom="${stade.nom.toLowerCase()}" data-ville="${stade.ville.toLowerCase()}">
      <div class="card h-100 stadium-card">
        <img src="${stade.images[0]}" class="card-img-top img-fluid" alt="${stade.nom}">
        <div class="card-body">
          <div class="stadium-title">${stade.nom}</div>
          <ul class="list-unstyled mb-2">
            <li><strong>Ville :</strong> ${stade.ville}</li>
            <li><strong>Capacité :</strong> ${stade.capacite}</li>
            <li><strong>Année d'ouverture :</strong> ${stade.ouverture}</li>
          </ul>
          <button class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#modal${capitalize(stade.id)}">Détails</button>
        </div>
      </div>
    </div>
  `;
}

function createStars(note) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += `<span class="bi ${i <= note ? 'bi-star-fill text-warning' : 'bi-star text-secondary'}"></span>`;
  }
  return stars;
}

function createAvisSection(stade) {
  const avis = stade.avis || [];
  let html = `<div class="avis-section mt-4"><h5>Avis des visiteurs</h5>`;
  if (avis.length === 0) {
    html += '<p class="text-muted">Aucun avis pour ce stade.</p>';
  } else {
    html += avis.map(a => `
      <div class="mb-2">
        <strong>${a.nom}</strong> ${createStars(a.note)}<br>
        <span class="text-muted small">${a.commentaire}</span>
      </div>
    `).join('');
  }
  html += `
    <form class="mt-3" onsubmit="return submitAvis('${stade.id}', this)">
      <div class="mb-2">
        <input type="text" name="nom" class="form-control form-control-sm" placeholder="Votre nom" required aria-label="Votre nom">
      </div>
      <div class="mb-2">
        <select name="note" class="form-select form-select-sm" required aria-label="Note">
          <option value="">Note</option>
          <option value="5">★★★★★</option>
          <option value="4">★★★★☆</option>
          <option value="3">★★★☆☆</option>
          <option value="2">★★☆☆☆</option>
          <option value="1">★☆☆☆☆</option>
        </select>
      </div>
      <div class="mb-2">
        <textarea name="commentaire" class="form-control form-control-sm" placeholder="Votre commentaire" required aria-label="Votre commentaire"></textarea>
      </div>
      <button type="submit" class="btn btn-outline-primary btn-sm">Laisser un avis</button>
    </form>
  </div>`;
  return html;
}

function createModal(stade) {
  // Carrousel d'images si plusieurs images
  let carousel = '';
  if (stade.images.length > 1) {
    carousel = `
      <div class="mb-3">
        <h5>Galerie</h5>
        <div id="carousel${capitalize(stade.id)}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${stade.images.map((img, i) => `
              <div class="carousel-item${i === 0 ? ' active' : ''}">
                <img src="${img}" class="d-block w-100" alt="${stade.nom} image ${i+1}">
              </div>
            `).join('')}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel${capitalize(stade.id)}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Précédent</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel${capitalize(stade.id)}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Suivant</span>
          </button>
        </div>
      </div>
    `;
  } else {
    carousel = `<img src="${stade.images[0]}" class="img-fluid mb-3" alt="${stade.nom}">`;
  }
  return `
  <div class="modal fade animate__animated animate__fadeIn" id="modal${capitalize(stade.id)}" tabindex="-1" aria-labelledby="modal${capitalize(stade.id)}Label" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal${capitalize(stade.id)}Label">${stade.nom}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
        </div>
        <div class="modal-body">
          ${carousel}
          <ul class="list-unstyled mb-2">
            <li><strong>Ville :</strong> ${stade.ville}</li>
            <li><strong>Adresse :</strong> <span id="adresse-${stade.id}">${stade.adresse}</span> <button class="btn btn-sm btn-outline-secondary ms-2" onclick="copyAdresse('${stade.id}')" aria-label="Copier l'adresse">Copier</button></li>
            <li><strong>Capacité :</strong> ${stade.capacite}</li>
            <li><strong>Année d'ouverture :</strong> ${stade.ouverture}</li>
          </ul>
          <p><strong>Description :</strong> ${stade.description}</p>
          <div class="d-flex gap-2 flex-wrap mb-3">
            <a href="${stade.map}" target="_blank" rel="noopener" class="btn btn-outline-secondary" aria-label="Voir sur la carte Google Maps">Voir sur la carte</a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(stade.adresse)}" target="_blank" rel="noopener" class="btn btn-outline-primary" aria-label="Itinéraire">Itinéraire</a>
            <button class="btn btn-outline-success" onclick="shareStadium('${stade.id}')" aria-label="Partager">Partager</button>
            <button class="btn btn-outline-info" onclick="centerMapOnStadium('${stade.id}')" aria-label="Voir sur la carte du site">Voir sur la carte du site</button>
          </div>
          ${createAvisSection(stade)}
        </div>
      </div>
    </div>
  </div>
  `;
}

function capitalize(str) {
  return str.replace(/(^|-)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());
}

// Recherche instantanée
function setupSearch() {
  const input = document.getElementById('searchStadium');
  input.addEventListener('input', function() {
    const value = this.value.toLowerCase();
    document.querySelectorAll('.stadium-col').forEach(col => {
      const nom = col.getAttribute('data-nom');
      const ville = col.getAttribute('data-ville');
      if (nom.includes(value) || ville.includes(value) || value === '') {
        col.style.display = '';
      } else {
        col.style.display = 'none';
      }
    });
  });
}

// Carte Google Maps avec tous les stades
let map, markers = {};
function initMap() {
  if (!window.google || !window.google.maps) return;
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: { lat: 32.5, lng: -6.5 },
    mapTypeId: 'roadmap',
  });
  stades.forEach(stade => {
    const marker = new google.maps.Marker({
      position: { lat: stade.lat, lng: stade.lon },
      map,
      title: stade.nom
    });
    markers[stade.id] = marker;
    const infowindow = new google.maps.InfoWindow({
      content: `<strong>${stade.nom}</strong><br>${stade.ville}<br><a href=\"#${stade.id}\">Voir la fiche</a>`
    });
    marker.addListener('click', () => {
      infowindow.open(map, marker);
    });
  });
}
window.initMap = initMap;

// Copier l'adresse
window.copyAdresse = function(id) {
  const el = document.getElementById('adresse-' + id);
  if (el) {
    navigator.clipboard.writeText(el.textContent);
    el.classList.add('text-success');
    setTimeout(() => el.classList.remove('text-success'), 1000);
  }
};

// Partage du stade
window.shareStadium = function(id) {
  const stade = stades.find(s => s.id === id);
  if (!stade) return;
  const url = window.location.origin + window.location.pathname + '#' + id;
  navigator.clipboard.writeText(url);
  alert('Lien du stade copié dans le presse-papier !');
};

// Centrer la carte sur le stade
window.centerMapOnStadium = function(id) {
  const stade = stades.find(s => s.id === id);
  if (!stade || !window.map) return;
  map.setZoom(12);
  map.panTo({ lat: stade.lat, lng: stade.lon });
  if (markers[id]) {
    new google.maps.event.trigger(markers[id], 'click');
  }
};

// Avis utilisateur (stocké localement)
window.submitAvis = function(id, form) {
  const nom = form.nom.value.trim();
  const note = parseInt(form.note.value);
  const commentaire = form.commentaire.value.trim();
  if (!nom || !note || !commentaire) return false;
  let avis = JSON.parse(localStorage.getItem('avis-' + id) || '[]');
  avis.push({ nom, note, commentaire });
  localStorage.setItem('avis-' + id, JSON.stringify(avis));
  // Recharge la modal
  const stade = stades.find(s => s.id === id);
  if (stade) {
    stade.avis = (stade.avis || []).concat([{ nom, note, commentaire }]);
    document.querySelector(`#modal${capitalize(id)} .avis-section`).outerHTML = createAvisSection(stade);
  }
  form.reset();
  return false;
};

// Mode sombre
function setupDarkMode() {
  const btn = document.createElement('button');
  btn.className = 'btn btn-dark position-fixed bottom-0 end-0 m-4 shadow';
  btn.innerHTML = '<span class="bi bi-moon"></span> Mode sombre';
  btn.style.zIndex = 2000;
  document.body.appendChild(btn);
  btn.onclick = () => {
    document.body.classList.toggle('dark-mode');
    btn.classList.toggle('btn-light');
    btn.classList.toggle('btn-dark');
    btn.innerHTML = document.body.classList.contains('dark-mode') ? '<span class="bi bi-sun"></span> Mode clair' : '<span class="bi bi-moon"></span> Mode sombre';
  };
}

document.addEventListener('DOMContentLoaded', () => {
  // Génération dynamique des cartes
  const row = document.querySelector('.row.row-cols-1.row-cols-md-3.g-4');
  row.innerHTML = stades.map(createStadiumCard).join('');
  // Génération des modals
  const modalsContainer = document.getElementById('modals-stades');
  // Charger les avis locaux
  stades.forEach(stade => {
    const avisLocaux = JSON.parse(localStorage.getItem('avis-' + stade.id) || '[]');
    if (avisLocaux.length) {
      stade.avis = (stade.avis || []).concat(avisLocaux);
    }
  });
  modalsContainer.innerHTML = stades.map(createModal).join('');
  setupSearch();
  setupDarkMode();
}); 