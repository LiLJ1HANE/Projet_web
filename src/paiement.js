// Gestion du paiement et génération du ticket PDF

document.addEventListener('DOMContentLoaded', function() {
  const validateBtn = document.getElementById('validatePaymentBtn');
  const downloadBtn = document.getElementById('downloadTicketBtn');
  let ticketData = null;

  // Récupère les infos du formulaire et du siège sélectionné
  function getTicketInfo() {
    // Utilise les bons id du formulaire
    return {
      nom: document.getElementById('fullName')?.value || '',
      email: document.getElementById('email')?.value || '',
      telephone: document.getElementById('phone')?.value || '',
      siege: (JSON.parse(sessionStorage.getItem('selectedSeats')) || [])[0] || {},
      total: sessionStorage.getItem('totalPrice') || '',
      match: sessionStorage.getItem('selectedMatch') || ''
    };
  }

  // Génère le PDF avec jsPDF
  function generatePDF(ticket) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
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
    // Génère un QR code temporaire dans un div caché
    const qrDiv = document.createElement('div');
    qrDiv.style.position = 'fixed';
    qrDiv.style.left = '-9999px';
    document.body.appendChild(qrDiv);
    new QRCode(qrDiv, {
      text: `CAN2025|${ticket.nom}|${ticket.match}|${ticket.siege.tribune || ''}|${ticket.siege.number || ''}`,
      width: 80,
      height: 80
    });
    setTimeout(() => {
      const qrImg = qrDiv.querySelector('img');
      if (qrImg) {
        doc.addImage(qrImg, 'PNG', 140, 30, 50, 50);
      }
      document.body.removeChild(qrDiv);
      doc.save('ticket_CAN2025.pdf');
    }, 500);
  }

  // Validation du paiement
  if (validateBtn) {
    validateBtn.addEventListener('click', function() {
      ticketData = getTicketInfo();
      // Affiche la modale Bootstrap
      const modal = new bootstrap.Modal(document.getElementById('ticketModal'));
      modal.show();
    });
  }

  // Téléchargement du ticket PDF
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
      if (ticketData) generatePDF(ticketData);
    });
  }
}); 