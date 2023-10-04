import { Modal, Button } from 'react-bootstrap';
import ContactForm from '../utils/DatasheetForm';

const BootstrapModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                
            </Modal.Header>
            <Modal.Body>
            <ContactForm customTitle='' pdfFile='' />
            </Modal.Body>
            
        </Modal>
    );
};

export default BootstrapModal;