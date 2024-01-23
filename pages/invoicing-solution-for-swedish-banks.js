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
    const PostTitle = "SunTec Invoicing Solution for Swedish Banks";
    const PostDescription = "Meet your invoicing needs seamlessly and automate your end-to-end billing process";
    const PostImage = '/images/Invoicing-Solution-for-Swedish-Banks-01.jpg';  

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
                              <Button onClick={handleShowModal} className="b-btn w-50 mb-3">Read the Datasheet</Button><br/>
                              <BootstrapModal show={showModal} handleClose={handleCloseModal} pdfLink={PdfLink} title={PostTitle} />
                              
                          </div>

<div class="lin-dark"></div>
</div>
</Col> 

              </Row>

              

</Container>      
          <Container className="mt-5 mb-5">
              <p className="fs-5">Obsolescence and the urgent requirement for an invoicing system that offers seamless and contemporary billing is staring in the face of Swedish Banks. Relying on a software system that was developed by a consortium of banks, several years back, to process payments and generate invoices, is now in need of potential change to meet future requirements.</p>
              <p className="fs-5">The system is part of the Bankgirot open interbank network – a clearing house for retail Swedish payments that allows credit transfers between accounts at banks. Given the acquisition of Bankgirot network by P27 and related changes, there is a rising and immediate need for a solution offering e-invoicing and end-to-end revenue management for payment-related products.</p>
              <p className="fs-5">The opportunity to change is also an opportunity to implement a richer system that will hold good for the future. This means, the new solution must offer innovative, rules-driven and flexible pricing and invoicing, fee transparency, process simplification, dashboards and built-in reporting. But more importantly, the solution must allow easy and seamless integration with upstream and downstream systems to ensure quick fulfillment of the immediate needs and scale to suit the banks’ current and future requirements.</p>
          </Container>
<Container className="p-3 pe-banner mb-5" fluid style={{ 
backgroundImage: `url("/images/Negative-Interest-mid-section-2.jpg")` 
}}>
<Row>
<Col>
<div className="pt-text" >
<h1>Rapidly Fill the Gap for Your Invoicing Needs with the Robust, Ready-to-use SunTec Solution</h1>
<p className="fs-5">The SunTec BG-Invoicing Solution, powered by <Link href="/suntec-xelerate/">SunTec Xelerate</Link>, will allow banks and financial institutions in Sweden to rapidly fulfill their invoicing needs. The robust solution comes pre-configured with products and services in the Bankgirot stack and utilizes standard interfaces to enable banks to quickly replace outgoing systems and meet their immediate charging and invoicing needs within a couple of months, while allowing the flexibility to roll out more innovative offerings to the market over time. The out-of-the-box solution comes with a standard integration framework that allows for easy and frictionless integration with core systems, customer channels and other relevant systems in the banks’ landscape, ensuring speedy go-live and time-to-value. Notably, the solution will enable a centralized repository of products and prices, pricing, e-invoice generation and data sharing with e-invoice systems, direct debit and payment trigger support, data extraction including revenue and profitability dashboards, among other key capabilities that will secure a seamless transition to the solution without compromising on as-is needs met by the invoicing solution of the Bankgirot system. Furthermore, the solution is built to accept and manage incoming data in any format, and it supports ISO standards, including CAMT.086, for invoice generation so that the bank is set up to hit the ground running. Through the adoption of this solution, banks can also acquire rich <Link href="/relationship-based-pricing-management/">Relationship-based Pricing</Link> and <Link href="/enterprise-billing-and-statements-management/">Enterprise Billing and Statements Management</Link> capabilities that are necessary to transform customer experience. This will empower these organizations to dynamically segment customers based on their behavior, and design and launch innovative contextualized pricing to customers and automate the end-to-end billing process including pricing, consolidation, pre-billing, invoicing, and post billing activities including settlement, dispute management and receivables management. The solution comes with key dynamic offer management capabilities that will enable firms to roll out highly contextual offers to further drive growth.</p>                          
</div>
</Col> 
</Row>           
</Container>          
          <CtaCall text='Be up to speed in a changing market with SunTec Xelerate by your side.' url='/request-a-demo/' btn="Accelerate with SunTec Xelerate!" />                    

          <Container className="mt-5 wbg-gy" fluid>  
<Container>
        <h2 className='mb-5 pt-4'>With SunTec BG-Invoicing Solution, Benefit from:</h2>       
        <Row >
          <Col >
<div class="card border-0 wbg-gy" style={{background:'#f4f4f4'}}>
  <img src="images/rapid.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Rapid time-to-market</h5>
    
  </div>
</div>
</Col>
<Col>
<div class="card border-0 wbg-gy"style={{background:'#f4f4f4'}} >
  <img src="images/simple.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Simple & Quick Deployment</h5>
    
  </div>
</div>
</Col>
<Col>
<div class="card border-0 wbg-gy" style={{background:'#f4f4f4'}}>
  <img src="images/rich.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Rich Out-of-the-box Capabilities</h5>
  </div>
</div>
</Col>
              </Row>  


              <Row className='mt-4'>
          <Col >
<div class="card border-0 wbg-gy" style={{background:'#f4f4f4'}}>
  <img src="images/configuration.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Configuration Enabled for Easy Adaption</h5>
    
  </div>
</div>
</Col>
<Col>
<div class="card border-0 wbg-gy" style={{background:'#f4f4f4'}}>
  <img src="images/extensibility.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Extensibility Beyond Payment Products</h5>
    
  </div>
</div>
</Col>
<Col>
<div class="card border-0 wbg-gy" style={{background:'#f4f4f4'}}>
  <img src="images/automation.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">End-to-end Automation</h5>
  </div>
</div>
</Col>
                  </Row>
                  </Container>              
</Container>

      <Footer/>
    </>
  )
}

export default productRationalization