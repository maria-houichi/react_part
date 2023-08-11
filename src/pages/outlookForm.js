import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const OutlookForm = ({ onSendPDF }) => {
  const [startNumber, setStartNumber] = useState('');
  const [endNumber, setEndNumber] = useState('');

  const handleSendPDF = () => {
    // Vous pouvez ajouter ici la logique pour envoyer le PDF en utilisant la plage de numéros de facture spécifiée par l'utilisateur
    // par exemple, vous pouvez filtrer les factures dont le numéro est compris entre "startNumber" et "endNumber"
    onSendPDF(startNumber, endNumber);
  };

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>De</Form.Label>
        <Form.Control
          type="text"
          placeholder="Numéro de facture de départ"
          value={startNumber}
          onChange={(e) => setStartNumber(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlInput2">
        <Form.Label>Au</Form.Label>
        <Form.Control
          type="text"
          placeholder="Numéro de facture de fin"
          value={endNumber}
          onChange={(e) => setEndNumber(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" onClick={handleSendPDF}>
        Envoyer par Outlook
      </Button>
    </Form>
  );
};

export default OutlookForm;
