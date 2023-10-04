// components/ContactForm.js

import { useState } from 'react';
import axios from 'axios';
import { Col, Row, Container } from 'react-bootstrap'
import { RotatingLines } from 'react-loader-spinner'

const ContactForm = ({ customTitle , pdfFile }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        designation: '',
        businessEmail: '',
        businessPhoneNumber: '',
        organization: '',
        country: '',
        title: customTitle,
        pdf:pdfFile,
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
            setError('Please enter a valid last name.');
            setIsSubmitting(false);
            return;
        }

        if (isBlank(formData.lastName)) {
            setError('Please enter a valid last name.');
            setIsSubmitting(false);
            return;
        }

        if (isBlank(formData.designation)) {
            setError('Please enter a designation.');
            setIsSubmitting(false);
            return;
        }

        if (isBlank(formData.businessEmail)) {
            setError('Please enter a Business Email.');
            setIsSubmitting(false);
            return;
        }

        if (isBlank(formData.businessPhoneNumber)) {
            setError('Please enter a valid Phone Number.');
            setIsSubmitting(false);
            return;
        }

        if (isBlank(formData.organization)) {
            setError('Please enter a Organization.');
            setIsSubmitting(false);
            return;
        }
        if (isBlank(formData.country)) {
            setError('Please enter a Country.');
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
                'https://elementor.ivistasolutions.biz/wp-json/contact-form-7/v1/contact-forms/52288/feedback',
                formData,
                 {
                    headers: {
                        "Content-Type": 'multipart/form-data',
                    }
        
         
        });
            console.log(response.data.status);
            if (response.data.status === 'mail_sent') {
                setFormVisible(false); // Hide the form
                setSuccessMessage('Thank you for your submission!');
            } else {
                setError('An error occurred. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }

        setIsSubmitting(false);
    };

    return (
<div className="form-bg">

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
<label for="firstName" className="form-label">Destination <span class="required">*</span></label>                            
<input
type="text"
name="designation"
className="form-control"
id="designation"
placeholder="Designation"
value={formData.designation}
onChange={handleChange}
/></div>
</Col>
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
<div className="mb-3">
<label for="businessPhoneNumber" className="form-label">Business PhoneNumber <span class="required">*</span></label>                            
<input
type="text"
className="form-control"
id="businessPhoneNumber"                                
name="businessPhoneNumber"
placeholder="Business PhoneNumber"
value={formData.businessPhoneNumber}
onChange={handleChange}
/></div>
</Col>
<Col>
<div className="mb-3">
<label for="organization" className="form-label">Organization <span class="required">*</span></label>                            
<input
type="text"
name="organization"
className="form-control"
id="organization"                                 
placeholder="Organization"
value={formData.organization}
onChange={handleChange}
/></div>                            
</Col>
</Row>
<Row>
<Col sm={12}>
<div className="mb-3">
<label for="country" className="form-label">Country <span class="required">*</span></label>                            
<input
type="text"
name="country"
className="form-control"
id="country"                                 
placeholder="Country"
value={formData.country}
onChange={handleChange}
/>                          
</div>                                
</Col>
<Col>
<div class="form-check mb-3">
<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
<label class="form-check-label" for="flexCheckChecked">
To subscribe and receive future communication from SunTec, check the box
  </label>
</div>                            
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
