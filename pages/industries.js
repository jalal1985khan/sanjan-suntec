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
    const PostTitle = "Industries";
    const PostDescription = "Count on our vertical focused, award-winning products and solutions";
    const PostImage = "/images/Industries-overview.jpg"; 


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
              <p className='fs-5'>SunTec’s products and solutions based on our cloud-native and cloud-agnostic, API first, micro-services-based platform, Xelerate enables organizations to gain deep insights about their customer behavior, create dynamic customer segments, provide hyper-personalized products, offers, pricing, loyalty programs and billing, plug revenue leakage, and enhance customer experience.</p>
          </Container>
          <hr />
          <Container className='mt-5'>
              <h2>Here’s How Our Products & Solutions Can Help You</h2>
              <Row className='mt-5'>
                  <Col>
                  <Card className="rounded-0 shadow" style={{ height: 55 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Financial Services</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              Our products and solutions help banks and financial services organizations to adopt digital transformation without replacing their legacy core systems. Banks can build the robustness of the existing legacy core and enhance it by adding sophisticated customer engagement capabilities by ‘hollowing out customer engagement functions’ and managing it as a horizontal cross-enterprise layer.
              <br/>Capitalize on product innovation capabilities, customer data management, partner ecosystem, revenue management, pricing and more. Seamlessly transition from a product-focused to an agile, customer-first organization.
              </Card.Text>
                          </Card.Body>
                          <Link href="/financial-services/" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
                  <Col>
                  <Card className="rounded-0 shadow" style={{ height: 55 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Telecom</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
                                  Telecom operators typically make huge investments in digitizing the OSS infrastructure and embracing digital transformation. However, an ‘intelligence layer’ is crucial to enable telcos to monetize end user services and provide innovative products and offers that are personalized to your customers’ specific needs.
                                  <br/>Our products enable telecom companies to quickly manage product launches, product changes and reduce the time to market. Gain the much-needed agility and scalability that are critical for the success of every customer-centric transformation journey.
              </Card.Text>
                          </Card.Body>
                          <Link href="/telecom/" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
                  <Col>
                  <Card className="rounded-0 shadow" style={{ height: 55 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Travel</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              Travel Management Companies (TMCs) require a competitive edge. With a next-gen revenue management product, you can build new capabilities into your existing infrastructure to transform, optimize and grow your business. Our product enables TMCs in implementing and monetizing all service offerings through a single platform.
              </Card.Text>
                          </Card.Body>
                          <Link href="/travel/" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
              </Row>

              <Row className='mt-5'>
                
                  <Col lg={4}>
                  <Card className="rounded-0 shadow" style={{ height: 55 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Travel</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              Travel Management Companies (TMCs) require a competitive edge. With a next-gen revenue management product, you can build new capabilities into your existing infrastructure to transform, optimize and grow your business. Our product enables TMCs in implementing and monetizing all service offerings through a single platform.
              </Card.Text>
                          </Card.Body>
                          <Link href="/travel/" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
              </Row>

          </Container>
          <Footer/>
      </>
  )
}

export default Platforms
