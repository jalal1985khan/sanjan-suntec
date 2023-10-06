// components/ContactForm.js

import { useState } from 'react';
import axios from 'axios';
import { Col, Row, Container } from 'react-bootstrap'
import { RotatingLines } from 'react-loader-spinner'


const ContactForm = ({ customTitle , pdfFile }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        businessEmail: '',
        businessPhoneNumber: '',
        position: '',
        about: '',
        relocate: '',
        worked: '',
        title: customTitle,
        
    });
    const isBlank = (str) => {
        return !str.trim();
    };

   

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [formVisible, setFormVisible] = useState(true);
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            
        });
    };
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        setFormData({
          ...formData,
          resume: selectedFile,
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (isBlank(formData.fullName)) {
            setError('Please enter a full name.');
            setIsSubmitting(false);
            return;
        }


        if (isBlank(formData.businessEmail)) {
            setError('Please enter a valid Email.');
            setIsSubmitting(false);
            return;
        }

        if (isBlank(formData.businessPhoneNumber)) {
            setError('Please enter a valid Phone Number.');
            setIsSubmitting(false);
            return;
        }

        if (isBlank(formData.position)) {
            setError('Please select a position.');
            setIsSubmitting(false);
            return;
        }
        if (isBlank(formData.about)) {
            setError('Please select How did you hear about the position?.');
            setIsSubmitting(false);
            return;
        }
        if (isBlank(formData.relocate)) {
            setError('Please select Are you willing to relocate?');
            setIsSubmitting(false);
            return;
        }
        if (isBlank(formData.worked)) {
            setError('Please select Have you worked with SunTec before?');
            setIsSubmitting(false);
            return;
        }
        if (!formData.resume) {
            setError('Please upload your resume.');
            setIsSubmitting(false);
            return;
          }

        const formDataToSubmit = new FormData();
        formDataToSubmit.append('fullName', formData.fullName);
        formDataToSubmit.append('businessEmail', formData.businessEmail);
        formDataToSubmit.append('businessPhoneNumber', formData.businessPhoneNumber);
        formDataToSubmit.append('position', formData.position);
        formDataToSubmit.append('about', formData.about);
        formDataToSubmit.append('relocate', formData.relocate);
        formDataToSubmit.append('worked', formData.worked);
        formDataToSubmit.append('resume', formData.resume);
        formDataToSubmit.append('title', formData.title);

        try {
            const response = await axios.post(
              'https://elementor.ivistasolutions.biz/wp-json/contact-form-7/v1/contact-forms/52309/feedback',
              formDataToSubmit,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              }
            );
            console.log(response.data);
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
<div className="mt-4 mb-4">
  {formVisible ? (           
<form onSubmit={handleSubmit} encType='multipart/form-data'>
<Row>
<Col>
<div className="mb-3">
<label for="fullName" className="form-label">Full Name <span class="required">*</span></label>
                                
<input
type="text"
name="fullName"
className="form-control"
id="fullName"
placeholder="Full Name"
value={formData.fullName}
onChange={handleChange}
/>
</div>
</Col>                        
</Row>
<Row>
<Col>
<div className="mb-3">
<label for="businessEmail" className="form-label">Email <span class="required">*</span></label>                            
<input
type="text"
name="businessEmail"
className="form-control"
id="businessEmail"                                
placeholder="Email"
value={formData.businessEmail}
onChange={handleChange}
/></div>
</Col>
</Row>
<Row>
<Col>
<div className="mb-3">
<label for="businessPhoneNumber" className="form-label">Phone Number <span class="required">*</span></label>                            
<input
type="text"
className="form-control"
id="businessPhoneNumber"                                
name="businessPhoneNumber"
placeholder="Phone Number"
value={formData.businessPhoneNumber}
onChange={handleChange}
/></div>
</Col>
</Row>
<Row>
<Col sm={12}>
<div className="mb-3">
<label for="position" 
className="form-label">Position <span class="required">*</span></label>                            
<select class="form-select"
aria-label="Default select example"
id="position"
name="position"
onChange={handleChange}    
>
  <option selected>Apply For</option>
  <option value="Alliance Manager">Alliance Manager</option>
  <option value="HR Executive">HR Executive</option>
</select>                          
</div>                                
</Col>
</Row>
<Row>
<Col sm={12}>
<div className="mb-3">
<label for="about" className="form-label">How did you hear about the position? <span class="required">*</span></label>                            
<select class="form-select"
aria-label="Default select example"
name="about"
id="about"  
onChange={handleChange}    
>
                                    <option value="">Select</option>
                                    <option value="LinkedIn">LinkedIn</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Direct Website">Direct Website</option>
                                    <option value="Referral">Referral</option>
                                    <option value="Job Platforms">Job Platforms</option>
                                    <option value="Ads">Ads</option>
</select>                                 
</div>                                
</Col>
</Row>
<Row>
<Col sm={12}>
<div className="mb-3">
<label for="relocate" className="form-label">Are you willing to relocate? <span class="required">*</span></label>                            
<select class="form-select"
aria-label="Default select example"
name="relocate"
id="relocate"   
onChange={handleChange}    
>
<option value="">Select</option>
<option value="Yes">Yes</option>
<option value="No">No</option>

</select>                                 
</div>                                
</Col>
</Row>                    
<Row>
<Col sm={12}>
<div className="mb-3">
<label for="worked" className="form-label">Have you worked with SunTec before? <span class="required">*</span></label>                            
<select class="form-select"
aria-label="Default select example"
name="worked"
id="worked"   
onChange={handleChange}    
>
<option value="">Select</option>
<option value="Yes">Yes</option>
<option value="No">No</option>
</select>                         
</div>                                
</Col>
                    </Row>
                    <Row>
<Col sm={12}>
<div class="input-group mb-3">
  
</div>                            
<div className="mb-3">
<label for="worked" className="form-label">Upload Resume <span class="required">*</span></label>                            
<input
                  type="file"
                  name="resume"
                  className="form-control"
                  id="resume"
                  placeholder="Resume"
                  onChange={handleFileChange}
                />                         
</div>                                
</Col>
</Row>                    

<Row><Col sm={12}>
<button type="submit" className="btn b-btn text-white" disabled={isSubmitting} style={{width:'100%'}}>
Apply
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
                    <Container className="mt-5 d-flex flex-column align-items-center">
                        <h2>Thank you for applying.</h2>
                        <p>Our Talent team will get in touch with you soon.</p>
                </Container>
            )}
</div>
    );
};

export default ContactForm;
