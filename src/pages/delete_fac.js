// delete.js
import { confirmAlert } from 'react-confirm-alert';
export default function handleDelete(factureId) {
    confirmAlert({
      title: 'Confirmation de suppression',
      message: 'Êtes-vous sûr de vouloir supprimer cette facture ?',
      buttons: [
        {
          label: 'Oui',
          onClick: () => {
            fetch(`http://localhost:5000/api/facture/${factureId}`, {
              method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => {
              // Supprimer la facture de l'affichage dans la liste des factures
              console.log('Facture supprimée:', data);
              // Rafraîchir la liste des factures en rechargeant la page (ou en utilisant un autre moyen pour mettre à jour les données)
              window.location.reload();
            })
            .catch(error => console.error('Erreur lors de la suppression de la facture:', error));
          }
        },
        {
          label: 'Non',
          onClick: () => {
            // L'utilisateur a cliqué sur "Non", rien ne se passera
          }
        }
      ]
    });
  }