import {Container,Row, Col,Image,Breadcrumb,Card, Button} from 'react-bootstrap';
import { useEffect, useState } from "react";
import Link from 'next/link';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';
import BootstrapModal from '../components/Modal';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import CtaCall from '../components/CtaCall';
import Breadcum from '../components/Breadcum';
import Insights from '../utils/FetchInsights';
import InsightsBtn from '../utils/InsightsBtn';

function productRationalization() {
    const router = useRouter()  
    const [showModal, setShowModal] = useState(false);
    const PdfLink = 'pdf/VAT-Solution-Overview_30-Oct_v1-1.pdf';
    const PostTitle = "SunTec e-Invoicing Solution";
    const PostDescription = "Increase transactional efficiency and ensure complete digital invoicing while staying compliant with e-invoicing in Saudi Arabia";
    const PostImage = '/images/SunTec-e-Invoicing-Solution.jpg';  

    const handleShowModal = () => {
        setShowModal(true);
    };
    
      const handleCloseModal = () => {
        setShowModal(false);
    };  


  return (
      <>
          <Header/>
<NextSeo
      title={PostTitle}
      description={PostDescription}
      canonical="/{router.asPath}"
      openGraph={{
        url: `${router.asPath}`,
        title: `${PostTitle}`,
        description: `${PostDescription}`,
        images: [
          {
            url: `${PostImage}`,
            width: 800,
            height: 600,
            alt: {PostTitle},
            type: 'image/jpeg',
          },
          {
            url: `${PostImage}`,
            width: 900,
            height: 800,
            alt: {PostTitle},
            type: 'image/jpeg',
          },
          { url: `${PostImage}` },
          { url: `${PostImage}` },
        ],
        siteName: 'SunTec Group',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />       
<Breadcum PostTitle={PostTitle} />
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url(${PostImage})` 
          }}>
<Row>
<Col className='d-flex align-content-center'>
<div className="square-dark">
<div class="lin-dark"></div>
<div className="square-text-dark ">
                              <h1 className="fs-1">{PostTitle}</h1>
                              <p className="fs-5">{PostDescription}</p>
                              <Button onClick={handleShowModal} className="b-btn w-50 mb-3">Download eBook now</Button><br/>
                              <BootstrapModal show={showModal} handleClose={handleCloseModal} pdfLink={PdfLink} title={PostTitle} />
                              
                          </div>

<div class="lin-dark"></div>
</div>
</Col> 
</Row>

              

</Container>      
      <Container className="mt-5 mb-5">
        <h2>What Does the KSA e-Invoicing Mandate Mean for Banks and Financial Institutions?</h2>
              <p className="fs-5">The Kingdom of Saudi Arabia (KSA) will implement its e-invoicing mandate with effect from 4 December 2021. From this date, all business entities, including banks & financial institutions in the KSA to which e-invoicing regulations apply, must be prepared to issue, receive, and store e-invoices. This is a giant leap in the Kingdom’s digital transformation journey and e-invoicing will enable payments efficiency and security. It will eliminate error-prone manual invoice processing and reconciliation, thereby addressing fake invoices and reducing the risk of revenue leakage through VAT avoidance. This move will not only make trade more seamless but also ensure tax compliance and enhance transparency.</p>
      </Container>
<InsightsBtn tags='336'/>      

<Container className="p-3 pe-banner mb-0 mt-5" fluid style={{ 
backgroundImage: `url("/images/invoicing.jpg")` 
}}>
        <Row>
          <Col></Col>
          <Col lg={6}>
<div className="pt-text" >
<h2>Who is Subject to the e-Invoicing Regulation?</h2>
              <p className="fs-5">The e-invoicing regulations will apply to two categories of entities/individuals:</p>                          
              <ul className="fs-5">All taxpayers subject to value-added tax residing in KSA; and</ul>
              <ul className="fs-5">Any party that issues a tax invoice on behalf of a taxpayer who is subject to VAT.</ul>
              <p className="fs-5">At this time, taxpayers who are not residents of KSA are excluded from the e-invoicing requirement.</p>                          
</div>
</Col> 
</Row>           
      </Container>
   
          <Container className=" wbg-gy" fluid>  
        <Container className='pt-5'>
        <h2>SunTec’s e-Invoicing Solution for Financial Institutions</h2>
        <p className='fs-5'>You can now successfully prepare for Saudi Arabia’s e-invoice mandate. It is important to understand that data elements required for e-invoicing are a sub-set of the data processed in a VAT system. Thus, to comply with the e-invoice regulations, your bank or business entity will have to ensure that your accounting/billing system for VAT compliance or the VAT engine that you have in place is integrated with the e-invoicing system.</p>
        <p className='fs-5'>SunTec e-Invoicing Solution can be integrated with your accounting system or with our VAT engine within a matter of weeks without disturbing your existing IT landscape. Now seamlessly manage VAT, electronically generate & exchange e-invoices, handle accounting as well as ensure regulatory reporting.</p>
        <p className='fs-5'>Our strong focus on the banking sector and rich experience of having deployed our VAT solution for over 30 banks across the Middle East reflects our sound market and domain understanding. It also positions us to help our customers to prepare for this mandate and comply smoothly with the Kingdom’s e-invoicing regulations.</p>

        <h2 className='mb-5 pt-4'>With SunTec BG-Invoicing Solution, Benefit from:</h2>       
        <Row >
          <Col >
<div class="card border-0 wbg-gy" style={{background:'#f4f4f4'}}>
  <img src="images/rapid.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Accurate invoicing</h5>
    
  </div>
</div>
</Col>
<Col>
<div class="card border-0 wbg-gy"style={{background:'#f4f4f4'}} >
  <img src="images/simple.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Compliance with e-invoice and <Link href="/press_release/suntec-introduces-a-fully-pre-configured-e-invoicing-solution-to-help-banks-in-the-kingdom-of-saudi-arabia-comply-with-regulations/">VAT regulations of KSA</Link></h5>
    
  </div>
</div>
</Col>
<Col>
<div class="card border-0 wbg-gy" style={{background:'#f4f4f4'}}>
  <img src="images/rich.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Complete digital invoice management</h5>
  </div>
</div>
</Col>
              </Row>  


              <Row className='mt-4'>
          <Col >
<div class="card border-0 wbg-gy" style={{background:'#f4f4f4'}}>
  <img src="images/configuration.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Seamless integration with systems</h5>
    
  </div>
</div>
</Col>
<Col>
<div class="card border-0 wbg-gy" style={{background:'#f4f4f4'}}>
  <img src="images/extensibility.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Extend seamlessly to other indirect taxation requirements</h5>
    
  </div>
</div>
</Col>
<Col>
<div class="card border-0 wbg-gy" style={{background:'#f4f4f4'}}>
  <img src="images/automation.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Strengthen reputation for not allowing fake invoices</h5>
  </div>
</div>
</Col>
                  </Row>
                  </Container>              
</Container>
<Insights tags="336" />
      <Footer/>
    </>
  )
}

export default productRationalization