import { Modal, Button } from 'react-bootstrap';
import ContactForm from '../utils/DatasheetForm';


const BootstrapModal = ({ show, handleClose ,pdfLink,title }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                
            </Modal.Header>
            <Modal.Body>
                <ContactForm customTitle={title} pdfFile={pdfLink} PdfLink={pdfLink} />
            </Modal.Body>
            
        </Modal>
    );
};

export default BootstrapModal;