import React from 'react'
import { Button, Container,Col,Row } from 'react-bootstrap'

function HomeFuture() {
  return (
      <Container fluid className="future g-0 d-flex flex-column justify-content-center">
          <Row>
              <Col className="p-5">
                  <h2 className='mb-4'>Step into the Future of Banking with<br/> the Bank of 20XX</h2>
                  <p className='s-text'>A concept built on adaptability and innovation. The banking landscape is undergoing a seismic shift, with customer expectations and digital technologies reshaping the industry. As banks transform into “financial supermarkets,” embracing customer-centricity is no longer a choice. The Bank of 20XX, our vision of the bank of the future, emerges as a response to this transformation.

                  </p>
                  <p className='s-text'>The journey to becoming the Bank of 20XX demands a holistic approach, marked by a shift to a customer-centric mindset, commitment to becoming “lifestyle partners,” and a complete reorganization around the customer’s unique needs. It involves embracing sustainability practices and striving to be omnipresent in the lives of customers, seamlessly integrating into their daily routines and addressing their evolving expectations.</p>
                  <p className='s-text'>Overcoming the legacy systems’ constraints, adopting cutting-edge technologies like AI, and fostering a data-driven culture are the stepping stones to success. The Bank of 20XX is not a distant dream; it’s a strategic choice and a leap into the future, aligning banking with the evolving expectations of customers.</p>
                  <p className='s-text txt-main fw-bold'>Are you ready for the bank of the future?</p>
                  <Button className='slide-btn'>Talk to a solution expert</Button>
              </Col>
              <Col lg={5}>
              <video width="100%" height="100%" autoplay="autoplay" loop muted playsinline="">
            <source src="https://www.suntecgroup.com/wp-content/uploads/2023/11/Home-Pager-GIF.mp4" type="video/mp4"/>
                </video>
              </Col>
        </Row>
      </Container>
    
  )
}

export default HomeFuture
