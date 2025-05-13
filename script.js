// Date de début de la CAN 2025 (21 décembre 2025)
const canStartDate = new Date('2025-12-21T00:00:00').getTime();

// Mise à jour du compte à rebours
function updateCountdown() {
    const now = new Date().getTime();
    const distance = canStartDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

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

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('timer').innerHTML = "La CAN 2025 a commencé !";
    }
}

// Mise à jour toutes les secondes
const countdownInterval = setInterval(updateCountdown, 1000);

// Recherche dans la navbar
function handleNavbarSearch() {
    const input = document.getElementById('navbar-search-input');
    const resultDiv = document.getElementById('search-result-message');
    if (input && input.value.trim() !== '') {
        resultDiv.style.display = 'block';
        resultDiv.textContent = 'Résultat de recherche pour : ' + input.value;
    } else {
        resultDiv.style.display = 'block';
        resultDiv.textContent = 'Veuillez entrer un terme de recherche.';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Recherche navbar
    const searchBtn = document.getElementById('navbar-search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', handleNavbarSearch);
    }

    // Animation au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    document.querySelectorAll('.groupe-card, .histoire-section').forEach((el) => {
        observer.observe(el);
    });
}); 