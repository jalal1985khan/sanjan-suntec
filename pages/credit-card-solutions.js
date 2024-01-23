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
    const PostTitle = "SunTec Solution for Credit Cards";
    const PostDescription = "Personalize your credit cards program to attract and retain customers";
    const PostImage = '/images/Credit-Cards-Solutions.jpg';  

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
        <h2>Understanding the Changing Credit Cards and Payments Landscape</h2>
       <p className="fs-5">The pandemic has been a catalyst for disruption and led to a change in customer behavior. From declining credit card usage to customers expecting hyper-personalized products, rewards and offers, the payments landscape has seen a significant change over the last year and a half. Disruptive payment innovations such as BNPL, contactless cards, e-wallets, or alternative payment options for the underbanked have transformed the landscape further. Credit card issuers are faced with the challenge of retaining existing customers and boosting their credit card usage while attracting new customers through agile offerings that are hyper-personalized to the customer’s context.</p>
      </Container>
  

<Container className="p-3 pe-banner mb-0 mt-5" fluid style={{ 
backgroundImage: `url("/images/invoicing.jpg")` 
}}>
        <Row>
          <Col></Col>
          <Col lg={6}>
<div className="pt-text" >
<h2>Hyper-personalize Your Credit Card Programs with SunTec</h2>
              <p className="fs-5">Customers today expect higher levels of empathy and to be understood better based on what they seek in terms of their goals, lifestyles, likes, and preferences. You need a solution that offers you the right insights to get to know your customers better and offer products that are relevant to them.</p>                          
              <p className="fs-5">With SunTec, you can position your hyper-personalized credit card program to attract and retain customers and get a higher wallet share by meeting customer expectations. <Link href="/suntec-xelerate/">SunTec’s proprietary platform Xelerate</Link> can help you deliver agile products, campaigns, offers and loyalty management capabilities. Now extend control to your customers by enabling them to configure their products and benefits. In addition, offer a wider set of products and benefits from a larger partner ecosystem while delivering a seamless customer experience. The platform lets you ensure transparency in your reward systems and enables easier rewards redemption to build loyalty and ensure customer stickiness.</p>                          
</div>
</Col> 
</Row>           
      </Container>
   
          <Container className=" wbg-gy" fluid>  
        <Container className='pt-5'>
        <h2 className='mb-5 pt-4'>With SunTec’s Credit Cards Loyalty and Rewards Solution, benefit from:</h2>       
        <Row >
          <Col >
<div class="card border-0 wbg-gy" style={{background:'#f4f4f4'}}>
  <img src="images/rapid.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Hyper-personalized rewards to enhance customer experiences</h5>
    
  </div>
</div>
</Col>
<Col>
<div class="card border-0 wbg-gy"style={{background:'#f4f4f4'}} >
  <img src="images/simple.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Greater flexibility and transparency in offers, billing, statements and benefits</h5>
    
  </div>
</div>
</Col>
<Col>
<div class="card border-0 wbg-gy" style={{background:'#f4f4f4'}}>
  <img src="images/rich.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Improved card usage with innovative offerings from a network of service providers</h5>
  </div>
</div>
</Col>
              </Row>  


              <Row className='mt-4'>
<Col lg={4}>
<div class="card border-0 wbg-gy" style={{background:'#f4f4f4'}}>
  <img src="images/configuration.svg" class="card-img-top n_icon" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title fw-bold">Transparent and intuitive billing and reports</h5>
    
  </div>
</div>
</Col>
</Row>
              </Container> 
              <Container className='pt-5 pb-5'>
                  <h2>Our Solutions</h2>
                  <Row className='mt-5'>
                      <Col>
<div class="card" style={{height:'520'+'px'}}>
  <img src="/images/Personalization-Solution.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">SunTec Personalization Solution</h5>
    <p class="card-text">With SunTec Xelerate, you can dynamically curate products and offers based on insights drawn from customer behavior and their unique needs.</p>
                              </div>
                              <a href="#" class="b-btn w-50">Know more</a>
</div>
                      </Col>
                      <Col>
<div class="card" style={{height:'520'+'px'}}>
  <img src="/images/Benefits-Loyalty-Management.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">SunTec Benefits and Loyalty Management</h5>
    <p class="card-text">Create targeted and distinctive loyalty programs that are one-of-a-kind with insights that matter. Enable relationship-driven reward programs that foster positive customer financial behavior.</p>
    
                              </div>
                              <a href="#" class="b-btn w-50">Know more</a>
</div>
                      </Col>
                      <Col>
<div class="card" style={{height:'520'+'px'}}>
  <img src="/images/Personalization-Solution.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">SunTec Ecosystem Management and Monetization</h5>
    <p class="card-text">Monetize business ecosystems by partnering with finance as well as non-finance partners. Co-innovate offerings and offer rewards that help increase revenue and profitability.</p>
    
                              </div>
                              <a href="#" class="b-btn w-50">Know more</a>
</div>
                      </Col>
                  </Row>
              </Container>              


</Container>

<Container className="p-3 pe-banner mb-0 mt-5" fluid style={{ 
backgroundImage: `url("/images/creditcardhand.jpg")` 
}}>
        <Row>
          <Col></Col>
          <Col lg={6}>
<div className="pt-text" >
<h2>A Slow Death of Plastic: How Can Banks Stay Top of Wallet?</h2>
              <p className="fs-5">In recent times, the credit card industry has suffered a setback due to changing customer behavior triggered by the pandemic as well as disruptive innovations such as digital wallets, payment apps and emerging payment models such as <Link href="/articles/building-a-risk-free-bnpl-ecosystem/">BNPL</Link>. How can banks and card issuers reimagine their credit cards program to personalize the ‘credit card experience’ for every customer?  Decode your way into the customer’s day-to-day life. Here is a quick guide to help you discover the role of technology and data to propel customer engagement and three ways to re-position your credit card programs effectively.</p>                            
                <Link href="/point_of_view/a-slow-death-of-plastic-how-can-banks-stay-top-of-wallet/" className='b-btn'>Download the PoV now</Link>
                      </div>
</Col> 
</Row>           
      </Container>          

      <Footer/>
    </>
  )
}

export default productRationalization