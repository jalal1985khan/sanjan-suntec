import { Container, Row, Col, Image, Breadcrumb, Card, Button, Offcanvas,ListGroup } from 'react-bootstrap';
import { useEffect, useState } from "react";
import Link from 'next/link';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import CtaCall from '../components/CtaCall';
import Breadcum from '../components/Breadcum';
import Insights from '../utils/FetchInsights';
import InsightsBtn from '../utils/InsightsBtn';
import CardBox from '../utils/Card';

function Platforms() {

    const router = useRouter()  
    const PdfLink = '';
    const PostTitle = "Products";
    const PostDescription = "Accelerate innovation and customer centricity with SunTec";
    const PostImage = "/images/products-overview.jpg"; 


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
          <Col sm={4}>
            <div className="r-text">
            <h1 className="fs-1">{PostTitle}</h1>
              <div className="">
                              <p className="fs-5">{PostDescription}
                </p>
              </div>
            </div>
          </Col>
          <Col >
          </Col>
        </Row>
          </Container>
          <Container className='mt-5 mb-5'>
              <p className='fs-5'>SunTec products are based on our cloud-native and cloud-agnostic, API first, micro-services-based platform, Xelerate. Delivered on-premise, on private cloud and as SaaS, our products offer high-performance, advanced security, scalability, resilience and agility even while handling large volumes of customer and transaction data. Our products can be integrated with transaction systems, customer on-boarding systems and partner management systems and help in real-time automated recommendation of products, offers and pricing to customers and partners.</p>
          </Container>
          <hr />
          <Container className='mt-5'>
              <h2>Our Products</h2>
              <Row className='mt-5'>
                  <Col>
                  <Card className="rounded-0 shadow" style={{ height: 40 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Enterprise Product Management</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              SunTec Enterprise Product Management allows organizations to adopt a consistent and scalable approach to design and launch hyper-personalized innovative products and services for dynamic customer segments. It helps establish a single centralized repository of internal as well as partner products and services, standardize end-to-end product and service lifecycle management along with simulation capability for efficient revenue management.
              </Card.Text>
                          </Card.Body>
                          <Link href="/enterprise-product-management" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
                  <Col>
                  <Card className="rounded-0 shadow" style={{ height: 40 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Dynamic Offer Management</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              SunTec Dynamic Offer Management allows organizations to adopt the “segment of one” strategy, rapidly design and launch highly personalized product bundles and offers for any customer segment by using advanced customer behavior insights.
              </Card.Text>
                          </Card.Body>
                          <Link href="/dynamic-offer-management" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
                  <Col>
                  <Card className="rounded-0 shadow" style={{ height: 40 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Deal Management</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              SunTec Deal Management enables organizations to automate and optimize the end-to-end deal management process including multi-product selection, deal design, simulation, negotiation, proposal generation, closure, and commitment tracking.
              </Card.Text>
                          </Card.Body>
                          <Link href="/deal-management" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
              </Row>

              <Row className='mt-5'>
                
                  <Col lg={4}>
                  <Card className="rounded-0 shadow" style={{ height: 40 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Relationship Based Pricing Management</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              SunTec Relationship-based Pricing Management enables organizations to dynamically segment customers based on their behavior, and design and launch innovative contextualized pricing to customers. It easily integrates with existing transaction systems and automates the end-to-end pricing process and provides a centralized repository to store and manage products and pricing across the enterprise.
              </Card.Text>
                          </Card.Body>
                          <Link href="/relationship-based-pricing-management" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
                  <Col lg={4}>
                  <Card className="rounded-0 shadow" style={{ height: 40 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Enterprise Billing and Statements Management</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              SunTec Enterprise Billing and Statements Management enables organizations to automate the end-to-end billing process including pricing, consolidation, pre-billing, invoicing, and post billing activities including settlement, dispute management and arrears management.
              </Card.Text>
                          </Card.Body>
                          <Link href="/enterprise-billing-and-statements-management" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
                  <Col lg={4}>
                  <Card className="rounded-0 shadow" style={{ height: 40 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Ecosystem Management and Monetization</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              SunTec Ecosystem Management and Monetization enables organizations to build and monetize their own ecosystem or partner with ecosystems of other organizations.
              </Card.Text>
                          </Card.Body>
                          <Link href="/ecosystem-management-and-monetization" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
              </Row>


              <Row className='mt-5'>
                
                <Col lg={4}>
                <Card className="rounded-0 shadow" style={{ height: 40 + 'em', padding: 21 + 'px' }}>
          <Card.Body className="c_body">
                            <Card.Title className="mb-4 fs-3">Benefits and Loyalty Management</Card.Title>
                            <hr className='line-20'/>
            <Card.Text className="fs-5">
            SunTec Benefits and Loyalty Management enables organizations to adopt a total relationship loyalty management strategy that promotes profitable customer financial behavior, increases usage of product and services as well as expand subscription of products and services across all lines of business.
            </Card.Text>
                        </Card.Body>
                        <Link href="/benefits-and-loyalty-management" className='expand-btn w-50'>Learn more</Link>
        </Card>
                </Col>
                <Col lg={4}>
                <Card className="rounded-0 shadow" style={{ height: 40 + 'em', padding: 21 + 'px' }}>
          <Card.Body className="c_body">
                            <Card.Title className="mb-4 fs-3">Enterprise Indirect Taxation Management</Card.Title>
                            <hr className='line-20'/>
            <Card.Text className="fs-5">
            SunTec Enterprise Indirect Taxation Management enables organizations to automate their indirect tax management programs for compliance and efficiency and manage tax compliance mandates of multiple indirect tax regimes including GST and VAT.
            </Card.Text>
                        </Card.Body>
                        <Link href="/enterprise-indirect-taxation-management" className='expand-btn w-50'>Learn more</Link>
        </Card>
                </Col>
                
            </Row>

          </Container>
          <Footer/>
      </>
  )
}

export default Platforms
