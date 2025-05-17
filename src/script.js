// Définition de la date de début de la CAN 2025 (21 décembre 2025)
const canStartDate = new Date('2025-12-21T00:00:00').getTime();

// Fonction pour mettre à jour le compte à rebours
function updateCountdown() {
    // Récupération de la date actuelle
    const now = new Date().getTime();
    // Calcul de la différence entre la date de début et maintenant
    const distance = canStartDate - now;

    // Calcul des jours, heures, minutes et secondes restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mise à jour de l'affichage du compte à rebours dans le DOM
    document.getElementById('timer').innerHTML = `
        <div class="row text-center">
            <div class="col">
                <div class="countdown-item">${days}</div>
                <div class="countdown-label">Jours</div>
            </div>
            <div class="col">
                <div class="countdown-item">${hours}</div>
                <div class="countdown-label">Heures</div>
            </div>
            <div class="col">
                <div class="countdown-item">${minutes}</div>
                <div class="countdown-label">Minutes</div>
            </div>
            <div class="col">
                <div class="countdown-item">${seconds}</div>
                <div class="countdown-label">Secondes</div>
            </div>
        </div>
    `;

    // Si le compte à rebours est terminé
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('timer').innerHTML = "La CAN 2025 a commencé !";
    }
}

// Mise à jour du compte à rebours toutes les secondes
const countdownInterval = setInterval(updateCountdown, 1000);

// Fonction pour gérer la recherche dans la barre de navigation
function handleNavbarSearch() {
    const input = document.getElementById('navbar-search-input');
    const resultDiv = document.getElementById('search-result-message');
    // Vérification si l'input n'est pas vide
    if (input && input.value.trim() !== '') {
        resultDiv.style.display = 'block';
        resultDiv.textContent = 'Résultat de recherche pour : ' + input.value;
    } else {
        resultDiv.style.display = 'block';
        resultDiv.textContent = 'Veuillez entrer un terme de recherche.';
    }
}

// Initialisation au chargement du document
document.addEventListener('DOMContentLoaded', function() {
    // Configuration de la recherche dans la barre de navigation
    const searchBtn = document.getElementById('navbar-search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', handleNavbarSearch);
    }

    // Configuration de l'animation au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    // Application de l'animation aux éléments spécifiés
    document.querySelectorAll('.groupe-card, .histoire-section').forEach((el) => {
        observer.observe(el);
    });
}); 