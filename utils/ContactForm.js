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
<label for="firstName" className="form-label">First Name</label>
                                
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
<label for="lastName" className="form-label">Last Name</label>
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
<label for="firstName" className="form-label">Destination</label>                            
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
<label for="businessEmail" className="form-label">Business Email</label>                            
<input
type="text"
name="businessEmail"
className="form-control"
id="designation"                                
placeholder="businessEmail"
value={formData.businessEmail}
onChange={handleChange}
/></div>
</Col>
</Row>
<Row>
<Col>
<div className="mb-3">
<label for="businessPhoneNumber" className="form-label">Business PhoneNumber</label>                            
<input
type="text"
className="form-control"
id="businessPhoneNumber"                                
name="businessPhoneNumber"
placeholder="businessPhoneNumber"
value={formData.businessPhoneNumber}
onChange={handleChange}
/></div>
</Col>
<Col>
<div className="mb-3">
<label for="organization" className="form-label">Organization</label>                            
<input
type="text"
name="organization"
className="form-control"
id="organization"                                 
placeholder="organization"
value={formData.organization}
onChange={handleChange}
/></div>                            
</Col>
</Row>
<Row>
<Col sm={12}>
<div className="mb-3">
<label for="country" className="form-label">Country</label>                            
<input
type="text"
name="country"
className="form-control"
id="country"                                 
placeholder="country"
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
{error && <p>{error}</p>}
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
