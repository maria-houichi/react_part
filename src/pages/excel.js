// excel.js
import ExcelJS from 'exceljs';

export default function handleExportToExcel(searchResults) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Factures');

  // Ajoutez les en-têtes de colonnes
  worksheet.addRow(['N°', 'Prestataire/Fournisseur', 'Facteur N°', 'Date Facteur', 'Montant', 'Bon de Commande ou Contrat N°', 'Transmis à DPT le', 'Transmis à DFC le', 'Observations', 'Imputation', 'Fichier', 'Date et N° de virement', 'Arrivée le']);

  // Ajoutez les données du tableau
  searchResults.forEach(facture => {
    worksheet.addRow([facture.N, facture.Prestataire_fournisseur, facture.factureN, facture.Datefacture, facture.montant, facture.bonCommande, facture.transmisDPT, facture.transmisDFC, facture.observations, facture.imputation, facture.fichier, facture.dateVirement, facture.arrivee]);
  });

  // Générez le fichier Excel
  workbook.xlsx.writeBuffer().then(buffer => {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'factures.xlsx';
    a.click();
    window.URL.revokeObjectURL(url);
  });
}