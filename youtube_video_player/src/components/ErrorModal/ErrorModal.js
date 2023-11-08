import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ErrorModal = ({ showErrorModal, error, handleClose }) => {
  return (
    <Modal
      show={showErrorModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      id="staticBackdrop"
      aria-labelledby="staticBackdropLabel"
    >
      <Modal.Header closeButton>
        <Modal.Title id="staticBackdropLabel">Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Understood
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;



