import jsPDF from 'jspdf';

// Fonction pour générer le PDF à partir des factures sélectionnées
const generatePDF = (selectedFactures) => {
  // Créez une instance de jsPDF
  const doc = new jsPDF();

  // Définissez les propriétés du document PDF (facultatif)
  doc.setProperties({
    title: 'Liste des factures', // Titre du document
  });

  // Définissez le style du texte (facultatif)
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);

  // Créez le contenu du PDF à partir des factures sélectionnées
  let startY = 10;
  selectedFactures.forEach((facture, index) => {
    doc.text(20, startY, `N°: ${facture.N}`);
    doc.text(50, startY, `Prestataire/Fournisseur: ${facture.prestataire}`);
    doc.text(120, startY, `Montant: ${facture.montant}`);

    // Augmentez startY pour passer à la ligne suivante
    startY += 10;
  });

  // Enregistrez le document PDF (facultatif)
  doc.save('factures.pdf');
};

export default generatePDF;