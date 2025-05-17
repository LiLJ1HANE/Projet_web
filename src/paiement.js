// Gestion du paiement et génération du ticket PDF

// Initialisation au chargement du document
document.addEventListener('DOMContentLoaded', function() {
  // Récupération des boutons de validation et de téléchargement
  const validateBtn = document.getElementById('validatePaymentBtn');
  const downloadBtn = document.getElementById('downloadTicketBtn');

  // Fonction pour récupérer les informations du ticket depuis le formulaire et le stockage de session
  function getTicketInfo() {
    return {
      nom: document.getElementById('fullName')?.value || '',
      email: document.getElementById('email')?.value || '',
      telephone: document.getElementById('phone')?.value || '',
      siege: (JSON.parse(sessionStorage.getItem('selectedSeats')) || [])[0] || {},
      total: sessionStorage.getItem('totalPrice') || '',
      match: sessionStorage.getItem('selectedMatch') || ''
    };
  }

  // Fonction pour générer le PDF du ticket avec jsPDF
  function generatePDF(ticket) {
    // Création d'un nouveau document PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Configuration du titre et des informations du ticket
    doc.setFontSize(18);
    doc.text('Ticket CAN 2025', 20, 20);
    doc.setFontSize(12);
    doc.text(`Nom: ${ticket.nom}`, 20, 35);
    doc.text(`Email: ${ticket.email}`, 20, 43);
    doc.text(`Téléphone: ${ticket.telephone}`, 20, 51);
    if(ticket.match) doc.text(`Match: ${ticket.match}`, 20, 59);
    doc.text(`Place: ${ticket.siege.tribune || ''} - ${ticket.siege.number || ''}`, 20, ticket.match ? 67 : 59);
    doc.text(`Prix: ${ticket.siege.price || ''} MAD`, 20, ticket.match ? 75 : 67);
    doc.text('Merci pour votre achat !', 20, ticket.match ? 93 : 85);

    // Génération du QR code pour le ticket
    const qrDiv = document.createElement('div');
    qrDiv.style.position = 'fixed';
    qrDiv.style.left = '-9999px';
    document.body.appendChild(qrDiv);
    new QRCode(qrDiv, {
      text: `CAN2025|${ticket.nom}|${ticket.match}|${ticket.siege.tribune || ''}|${ticket.siege.number || ''}`,
      width: 80,
      height: 80
    });

    // Ajout du QR code au PDF et sauvegarde
    setTimeout(() => {
      const qrImg = qrDiv.querySelector('img');
      if (qrImg) {
        doc.addImage(qrImg, 'PNG', 140, 30, 50, 50);
      }
      document.body.removeChild(qrDiv);
      doc.save('ticket_CAN2025.pdf');
    }, 500);
  }

  // Gestionnaire d'événement pour le bouton de validation du paiement
  if (validateBtn) {
    validateBtn.addEventListener('click', function() {
      // Affichage de la modale de confirmation
      const modal = new bootstrap.Modal(document.getElementById('ticketModal'));
      modal.show();
    });
  }

  // Gestionnaire d'événement pour le bouton de téléchargement du ticket
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
      const ticketData = getTicketInfo();
      generatePDF(ticketData);
    });
  }
}); 