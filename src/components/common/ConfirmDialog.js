import { Modal, Button } from "react-bootstrap";
import "./confirmDialog.css";

const ConfirmDialog = ({ show, onClose, onSave }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h3 className="modal-warning">Warning</h3>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="modal-p">Are you sure you want to delete this?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onSave}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDialog;
