import React from 'react';
import jsPDF from 'jspdf';

const imprimer = (facture) => {
  const pdf = new jsPDF();
const num= facture.N
  const img = new Image();
  img.src = '/tele.jpg'; // Chemin vers votre image
  img.onload = () => {
    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (imgWidth * img.height) / img.width; // Fix the calculation

    // Ajouter l'image au PDF en la redimensionnant pour qu'elle occupe toute la page
    pdf.addImage(img, 'PNG', 0, 0, imgWidth, imgHeight);

    // Ajouter du texte sur l'image
    pdf.setFontSize(12);
    pdf.text(` ${facture.factureN}`,55, 52);
    pdf.text(` ${facture.Prestataire_fournisseur}`, 155, 48);
    pdf.text(` ${facture.observations}`, 43, 267);
    pdf.text(` ${facture.montant}`, 175, 165);
    // Télécharger le PDF
    pdf.save('image_with_text.pdf');
  };
};

  export default imprimer;