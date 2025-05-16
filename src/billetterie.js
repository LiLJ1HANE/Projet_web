// Plan du stade dynamique et réservation

document.addEventListener('DOMContentLoaded', function() {
    const stadiumMap = document.getElementById('stadiumMap');
    const selectedSeatsContainer = document.getElementById('selectedSeatsContainer');
    const totalPriceElement = document.getElementById('totalPrice');
    const checkoutBtn = document.getElementById('checkoutBtn');

    let selectedSeats = [];
    let totalPrice = 0;

    // Création du plan du stade
    function createStadium() {
        stadiumMap.innerHTML = '';
        // Calcul dynamique du terrain et des sièges
        const layout = stadiumMap.getBoundingClientRect();
        const fieldW = Math.max(layout.width * 0.28, 90);
        const fieldH = Math.max(layout.height * 0.28, 40);
        const seatSize = Math.max(Math.min(layout.width, layout.height) * 0.032, 7);
        const field = document.createElement('div');
        field.className = 'field';
        field.style.width = fieldW + 'px';
        field.style.height = fieldH + 'px';
        stadiumMap.appendChild(field);

        const rowCount = 9;
        const seatsPerRow = [32, 36, 40, 44, 48, 52, 56, 60, 64];
        const rowTypes = ["vvip", "vvip", "vip", "vip", "vip", "standard", "standard", "standard", "standard"];
        const rowPrices = [1200, 1200, 800, 800, 800, 400, 400, 300, 300];
        const centerX = layout.width / 2;
        const centerY = layout.height / 2 + 8;
        const a0 = layout.width * 0.22;
        const b0 = layout.height * 0.22;
        const aStep = (layout.width * 0.46 - a0) / (rowCount - 1);
        const bStep = (layout.height * 0.44 - b0) / (rowCount - 1);
        for (let row = 0; row < rowCount; row++) {
            const a = a0 + aStep * row;
            const b = b0 + bStep * row;
            const seats = seatsPerRow[row];
            for (let i = 0; i < seats; i++) {
                const angle = (i / seats) * 2 * Math.PI;
                const yPerspective = b * Math.sin(angle) * (1 + 0.13 * (row / rowCount));
                const xPerspective = a * Math.cos(angle) * (1 - 0.08 * (row / rowCount));
                const x = centerX + xPerspective - seatSize / 2;
                const y = centerY + yPerspective - seatSize / 2;
                const seat = document.createElement('div');
                seat.className = `seat ${rowTypes[row]}`;
                seat.style.width = seatSize + 'px';
                seat.style.height = seatSize + 'px';
                if (Math.random() < 0.12) {
                    seat.classList.add('reserved');
                } else {
                    seat.addEventListener('click', function() {
                        toggleSeatSelection(seat, rowPrices[row], rowTypes[row].toUpperCase(), i+1);
                    });
                }
                // Tooltip
                const tooltip = document.createElement('span');
                tooltip.className = 'seat-tooltip';
                tooltip.textContent = `${rowTypes[row].toUpperCase()} - ${rowPrices[row]} MAD`;
                seat.appendChild(tooltip);
                seat.style.left = `${x}px`;
                seat.style.top = `${y}px`;
                stadiumMap.appendChild(seat);
            }
        }
    }

    // Gestion de la sélection des places
    function toggleSeatSelection(seat, price, tribuneName, seatNumber) {
        const seatId = `${tribuneName}-${seatNumber}`;
        const seatIndex = selectedSeats.findIndex(s => s.id === seatId);

        if (seatIndex === -1) {
            // Sélectionner la place
            seat.classList.add('selected');
            selectedSeats.push({
                id: seatId,
                element: seat,
                price: price,
                tribune: tribuneName,
                number: seatNumber
            });
            totalPrice += price;
        } else {
            // Désélectionner la place
            seat.classList.remove('selected');
            totalPrice -= selectedSeats[seatIndex].price;
            selectedSeats.splice(seatIndex, 1);
        }

        updateSelectionSummary();
    }

    // Mise à jour du résumé de la sélection
    function updateSelectionSummary() {
        if (selectedSeats.length === 0) {
            selectedSeatsContainer.innerHTML = '<p class="text-muted">Aucune place sélectionnée</p>';
            checkoutBtn.disabled = true;
        } else {
            selectedSeatsContainer.innerHTML = '';
            selectedSeats.forEach(seat => {
                const seatElement = document.createElement('div');
                seatElement.className = 'd-flex justify-content-between align-items-center mb-2';
                seatElement.innerHTML = `
                        <span>${seat.tribune} - Place ${seat.number}</span>
                        <span class="badge bg-primary">${seat.price} MAD</span>
                    `;
                selectedSeatsContainer.appendChild(seatElement);
            });
            checkoutBtn.disabled = false;
        }

        totalPriceElement.textContent = `${totalPrice} MAD`;
    }

    // Gestion du bouton de paiement
    checkoutBtn.addEventListener('click', function() {
        // Stocker la sélection dans le sessionStorage pour la page de paiement
        sessionStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
        sessionStorage.setItem('totalPrice', totalPrice);

        // Redirection vers la page de paiement
        window.location.href = 'paiement.html';
    });

    // Initialiser le stade
    createStadium();
}); 