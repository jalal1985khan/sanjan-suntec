import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../utils/ContactForm';

function LinksExample() {

  

  return (
<>
<Header />
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/company" active>
      Request a Demo
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/demo-request.jpeg")` 
    }}>

<Row>
<Col>
<div className="square">
<div class="lin"></div>
<div className="square-text ">
<h1 className="fs-1 text-black">Request a Demo</h1>
{/* <p className="fs-5">Explore inspiring testimonials and employee experiences, one story at a time</p> */}

</div>
<div class="lin"></div>
</div>
</Col> 
<Col>
</Col> 
</Row>
</Container>      
<Container className="mt-5">
<Row>
<Col>
<h2>Register for a Live Product Demo</h2>
<p>130+ leading organizations across 45+ countries use SunTec Xelerate to deliver their relationship-based pricing, billing, product and offer, deal, loyalty management, ecosystem monetization and indirect tax management needs.</p>
<p>With SunTec, you will be able to:</p>
<ul>
<li>Improve customer experience by creating and launching hyper-personalized products, offers and pricing</li>
<li>Accelerate time to market, reduce cost of creating and launching new products and services</li>
<li>Build and monetize ecosystems, accelerate sales through partners</li>
<li>Prevent revenue leakage, ensure profitability</li>
<li>Replace multiple disparate billing systems and generate consolidate bills</li>
<li>Mitigate risk and ensure compliance with regulatory requirements</li>
</ul>
</Col>
          <Col>
          <ContactForm customTitle='Request a Demo' pdfFile='' />
          </Col>
</Row>    
</Container>

<Footer/>
</>


  );
}

export default LinksExample;