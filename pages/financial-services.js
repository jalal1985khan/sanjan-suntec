import {Container,Row, Col,Image,Breadcrumb,Card, Button} from 'react-bootstrap';
import { useEffect, useState } from "react";
import Link from 'next/link';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../utils/FetchInsights';
import CtaCall from '../components/CtaCall';
import Cardbox from '../utils/Cardbox';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Breadcum from '../components/Breadcum';
import InsightsBtn from '../utils/InsightsBtn';
function LinksExample() {

  const router = useRouter()  
  const PdfLink = '';
  const PostTitle = "Simplifying Digital Transformation";
  const PostDescription = "SunTec Xelerate provides financial organizations with the agility and scalability to digitally transform their offerings and reap immediate benefits of product innovation, customer experience management and real-time analytics.";
  const PostImage = "/images/financial_Services_banner.jpeg"; 

  return (
<>
      <Header />
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
<Breadcum PostTitle={PostTitle}/>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url(${PostImage})` 
    }}>

<Row>
<Col>
<div className="b-text">
<h1>Simplifying Digital Transformation</h1>
<p>SunTec Xelerate provides financial organizations with the agility and scalability to digitally transform their offerings and reap immediate benefits of product innovation, customer experience management and real-time analytics.</p>
</div>
</Col> 
<Col></Col> 
</Row>
</Container>
<Container>
<h1 className="fs-2 mt-5 mb-5">The Transformation Journey Has Just Begun</h1>
<p className="fs-5">Banks have spent a lot of money on the customer facing layer, which results in improved customer ratings. But most of them are still unable to utilize data to provide innovative products and personalize the customer experience.</p>
<p className="fs-5">A big impediment to owning the customer experience is the “speed to market” which remains a challenge for most banks.</p>
<p className="fs-5">In today&apos;s scenario, banks face unorthodox competition from the likes of Google and Facebook, to name a few. To remain the choice of customers and be competitive banks must aggressively adopt the digital route and transform their go to market approach.</p>

<h2 className="fs-2 mt-5 mb-5">The Challenges</h2>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/1.png"/>
      <Card.Body>
        <Card.Title>Legacy Core Replacement</Card.Title>
        <Card.Text>
        Complex infrastructure, high risk, high rates of failure
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/2.png"/>
      <Card.Body>
        <Card.Title>Digital Savvy Customer</Card.Title>
        <Card.Text>
        Today&apos;s customers demand faster processes, more options and better experience
        </Card.Text>
      </Card.Body>
    </Card>
</Col>   
</Row>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/3.png"/>
      <Card.Body>
        <Card.Title>Traditional Product Based Business Model</Card.Title>
        <Card.Text>
        A need to change to a customer focused organization with products designed to meet customer needs and requirements
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/4.png"/>
      <Card.Body>
        <Card.Title>Expanding Competitive Landscape</Card.Title>
        <Card.Text>
        BigTech & FinTech&apos;s foray into the banking world has added to the pressure on banks to own the customer experience
        </Card.Text>
      </Card.Body>
    </Card>
</Col>   
</Row>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img  className="card-icon-left" src="images/5.png"/>
      <Card.Body>
        <Card.Title>Time to Market</Card.Title>
        <Card.Text>
        With increasing pressure launch new products quickly, banks need to manage their offerings effectively
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/6.png"/>
      <Card.Body>
        <Card.Title>Adoption of Open Banking</Card.Title>
        <Card.Text>
        Lowers entry barriers, need for innovative products, monetizing and managing ecosystem
        </Card.Text>
      </Card.Body>
    </Card>
</Col>   
</Row>

</Container>
<Container className="gra_color" fluid style={{height:35 + 'em'}}>
<Row>
  <Col><img src="/images/xelerate.png" height="300"/></Col>
  <Col>
  <h3 className="text-white fs-2">How SunTec Simplifies Your Transformation Journey? (Financial services)</h3>
  <ul className="mt-5">
   <li className="text-white fs-5"><strong>Adopt digital transformation without replacing your legacy core systems:</strong> Add customer engagement capabilities by &apos;hollowing out customer engagement functions&apos; and managing it as a horizontal cross-enterprise layer.</li> 
   <li className="text-white fs-5"><strong>Transition from being product-focused to customer-first:</strong>
Get end-to-end product innovation capabilities, sophisticated customer data management, partner ecosystem and revenue and pricing management. </li>
  </ul>
  </Col>
</Row>
</Container>
<Container className="mb-5">

<h1 className="fs-2 mt-5 mb-5">SunTec Offerings</h1>
<p className="fs-5">See how we combine components of SunTec Xelerate to create specific solutions for digital transformation, revenue management, customer experience orchestration and partner ecosystem management.</p>
<Row>
          <Col>
            <Cardbox
              title='Relationship-based Pricing'
              desc='Enhance customer relationships, share of wallet and operational efficiency through differential and
              automated pricing. Analyze customer data in real time and deliver context- specific offers at the
              right time.'
              url='/relationship-based-pricing-management/'
              img='/images/icon_1.png' />
</Col>
          <Col>
          <Cardbox
              title='Enterprise Product Management'
              desc='Create and maintain optimized product portfolio with extreme agility. It comes pre-integrated with the relationship-based pricing module and can be seamlessly integrated with core applications.'
              url='/enterprise-product-management/'
              img='/images/icon_2.png' />
</Col>
          <Col>
          <Cardbox
              title='Billing & Invoicing'
              desc='Allows financial institutions to manage all their billing and invoicing requirements including complex charging situations for customers availing multiple products and services. Provides a consolidated statement from across multiple business lines.'
              url='/enterprise-billing-and-statements-management/'
              img='/images/icon_3.png' />
</Col>
</Row>

<Row>
          <Col>
          <Cardbox
              title='Deal Management'
              desc='Manage the complete deal lifecycle of all the contracts in the enterprise, across products and businesses. Use a single source of truth to streamline and simplify complex negotiations across different geographies, increase profit margins, ensure price transparency and policy compliance.'
              url='/deal-management-home/'
              img='/images/icon_4.png' />
</Col>
          <Col>
          <Cardbox
              title='Dynamic Offer Management'
              desc='Track your customers&apos; lifetime journey, get a complete view of the relationship and make highly personalized offers. You can even bundle offers from other partners in your ecosystem to make an offer your customers just can&apos;t refuse.'
              url='/dynamic-offer-management/'
              img='/images/icon_5.png' />
</Col>
          <Col>
          <Cardbox
              title='Loyalty Management'
              desc='Determine the true value of every customer relationship regardless of the complexity of your account hierarchies and product bundles and launch effective loyalty programs. Combine your loyalty program with relationship-based pricing, identify upsell and cross-sell opportunities and improve customer retention.'
              url='/benefits-and-loyalty-management/'
              img='/images/icon_6.png' />
</Col>
</Row>
<Row>
          <Col>
          <Cardbox
              title='Open Banking Monetization'
              desc='Embrace the open banking economy - add new business models and revenue sources. Our easy to
              manage partner ecosystem allows you to transition from being a mere utility provider to a true value
              aggregator.'
              url='/ecosystem-management-and-monetization/'
              img='/images/icon_7.png' />
</Col>
          <Col>
          <Cardbox
              title='Taxation'
              desc='Your one-stop-solution for all GST and VAT regulatory compliance requirements. Configurable framework that seamlessly integrates with business systems across organizational silos, covering tax determination, invoicing, return filing and reporting.'
              url='/enterprise-indirect-taxation-management/'
              img='/images/icon_8.png' />
</Col>
<Col>

</Col>
</Row>
</Container>
<CtaCall text='Accelerating your digital transformation journey has never been this simple!' btn='Discover how' url='/whitepapers/embarking-on-progressive-modernization-to-build-a-digital-bank/'/>
<Insights tags="319"/>
<Footer/>
</>


  );
}

export default LinksExample;