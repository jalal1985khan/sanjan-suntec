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
    const PostTitle = "Platforms";
    const PostDescription = "Increase Customer Lifetime Value | Manage Revenue Effectively";
    const PostImage = "/images/Platforms-overview.jpg"; 


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
              <div class="ribbon-2"></div>
              <h1 className="fs-1">Platforms</h1>
              <div className="wbg-gr p-2 w-text">
                <p className="fs-5">Built for customer-centricity, efficiency, and security
                </p>
              </div>
            </div>
          </Col>
          <Col >
          </Col>
        </Row>
          </Container>
          <Container className='mt-5 mb-5'>
              <p className='fs-5'>SunTec products and solutions can be delivered on a model that best suits your organizational needs. Whether you wish to subscribe to our products and solutions on a flexible and scalable SaaS model or opt for a cloud-based adoption to accelerate time to market or simply deploy the products and solutions on premise through our propriety platform Xelerate, we ensure that your customer needs are at the heart of all your digital transformation plans.</p>
              <p className='fs-5'>Organizations can exponentially increase revenue and customer base, deliver exceptional customer experience, prevent revenue leakage, and ensure compliance by deploying our products and solutions rapidly and seamlessly.</p>
          </Container>
          <hr />
          <Container className='mt-5'>
              <h2>Our Platforms</h2>
              <Row className='mt-5'>
                  <Col>
                  <Card className="rounded-0 shadow" style={{ height: 35 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">SunTec Xelerate</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              Xelerate is an award-winning, cloud-native and micro-services-based platform that helps organizations own the customer experience by setting up a system-of-engagement with enhanced product management capabilities, enterprise pricing, revenue management and partner ecosystem management.
              </Card.Text>
                          </Card.Body>
                          <Link href="/suntec-xelerate" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
                  <Col>
                  <Card className="rounded-0 shadow" style={{ height: 35 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">SunTec Cloud</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              SunTec’s flagship platform Xelerate and its products are cloud-enabled and readily compatible with industry leading cloud platforms such as AWS, Microsoft Azure and IBM Cloud. Xelerate on Cloud is designed and built to ease the stress of cloud adoption that comes with operating in highly regulated markets and to ensure that organizations reap the benefits of this robust platform.
              </Card.Text>
                          </Card.Body>
                          <Link href="/suntec-cloud" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
                  <Col>
                  <Card className="rounded-0 shadow" style={{ height: 35 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">SunTec SaaS</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              SunTec SaaS will provide you the flexibility to run any of the cloud-agnostic, Xelerate products and featured SaaS solutions on an industry leading cloud-based platform, while ensuring reliable and secure cloud operations.
              </Card.Text>
                          </Card.Body>
                          <Link href="/suntec-saas" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
              </Row>

          </Container>
          <Footer/>
      </>
  )
}

export default Platforms
