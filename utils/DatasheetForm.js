// components/ContactForm.js

import { useState } from 'react';
import axios from 'axios';
import { Col, Row, Container } from 'react-bootstrap'
import { RotatingLines } from 'react-loader-spinner'

const ContactForm = ({ customTitle , pdfFile, PdfLink }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        businessEmail: '',
        customTitle: customTitle,
        pdfFile: pdfFile,
        
    });
    const isBlank = (str) => {
        return !str.trim();
    };

    const isBlacklistedEmail = (email) => {
        const blacklistDomains = ['gmail.com', 'yahoo.com', /* Add more domains as needed */];
        const emailDomain = email.split('@')[1].toLowerCase();
        return blacklistDomains.includes(emailDomain);
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [formVisible, setFormVisible] = useState(true);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (isBlank(formData.firstName)) {
            setError('Please enter a first name.');
            setIsSubmitting(false);
            return;
        }

        if (isBlank(formData.lastName)) {
            setError('Please enter a last name.');
            setIsSubmitting(false);
            return;
        }

        if (isBlank(formData.businessEmail)) {
            setError('Please enter a Business Email.');
            setIsSubmitting(false);
            return;
        }

        if (isBlacklistedEmail(formData.businessEmail)) {
            setError('Sorry, we do not accept email addresses from Gmail, Yahoo, and similar domains.');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await axios.post(
                'https://elementor.ivistasolutions.biz/wp-json/contact-form-7/v1/contact-forms/52293/feedback',
                formData,
                 {
                    headers: {
                        "Content-Type": 'multipart/form-data',
                    }
        
         
        });
            console.log(response.data.status);
            if (response.data.status === 'mail_sent') {
                setFormVisible(false); // Hide the form
                window.open(PdfLink, '_blank');
                setSuccessMessage('Thank you for your submission!');
                setShowModal(false);
            } else {
                setError('An error occurred. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }

        setIsSubmitting(false);
    };

    return (
<div className="">

  {formVisible ? (           

<form onSubmit={handleSubmit} encType='multipart/form-data'>
<Row>
<Col>
<div className="mb-3">
<label for="firstName" className="form-label">First Name <span class="required">*</span></label>
                                
<input
type="text"
name="firstName"
className="form-control"
id="firstName"
placeholder="First Name"
value={formData.firstName}
onChange={handleChange}
/>
</div>
</Col>
<Col>
<div className="mb-3">
<label for="lastName" className="form-label">Last Name <span class="required">*</span></label>
<input
type="text"
name="lastName"
className="form-control"
id="lastName"
placeholder="Last Name"
value={formData.lastName}
onChange={handleChange}
/>
</div>                            
</Col>                        
</Row>
<Row>

<Col>
<div className="mb-3">
<label for="businessEmail" className="form-label">Business Email <span class="required">*</span></label>                            
<input
type="text"
name="businessEmail"
className="form-control"
id="designation"                                
placeholder="Business Email"
value={formData.businessEmail}
onChange={handleChange}
                                /></div>
                           
</Col>
</Row>

<Row>
                        <Col>
                        <p>For information about how we use your data please see our privacy policy.</p>
                        </Col>

</Row>
<Row><Col sm={12}>
<button type="submit" className="btn b-btn text-white" disabled={isSubmitting} style={{width:'100%'}}>
Download Now
                            { isSubmitting &&
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="3"
                                    animationDuration="1"
                                    width="20"
                                    visible={true}
                                />
                            }
</button>
                   
                    </Col></Row>
{error && <p className="error">{error}</p>}
</form>
            ) : (
                    <Container>
                        <h2>Thank You</h2>
                        <p>An email with the download link has been sent.</p>
                </Container>
            )}
</div>
    );
};

export default ContactForm;
