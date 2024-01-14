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
    const PostTitle = "Solutions";
    const PostDescription = "Build relationships, enhance efficiency, and ensure compliance";
    const PostImage = "/images/Solutions-overview.jpg"; 


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
          <div className="square-dark">
<div class="lin-dark"></div>
<div className="square-text-dark ">
<h1 className="fs-1">{PostTitle}</h1>
<p className="fs-5">{PostDescription}</p>
</div>
<div class="lin-dark"></div>
</div>
          </Col>
          <Col >
          </Col>
        </Row>
          </Container>
          <Container className='mt-5 mb-5'>
              <p className='fs-5'>SunTec solutions are context driven based on the requirements of our customers. These could be driven by region, regulation environment, customer demand or other such factors. Delivered on-premise, on private cloud and as SaaS, our solutions are designed to fulfil every customer need.</p>
              
          </Container>
          <hr />
          <Container className='mt-5'>
              <h2>Our Solutions</h2>
              <Row className='mt-5'>
                  <Col>
                  <Card className="rounded-0 shadow"  style={{ height: 35 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Personalization</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              Our Personalization Solutions, powered by our flagship platform Xelerate, empower organizations to dynamically tailor their offerings based on the customer journey and overall relationship, to solve each customer’s unique needs.
              </Card.Text>
                          </Card.Body>
                          <Link href="" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
                  <Col>
                  <Card className="rounded-0 shadow"  style={{ height: 35 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Product Rationalization</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              Our Product Rationalization Solution on our proprietary platform Xelerate, enables banks to rationalize their product and service offerings using a centralized product catalog, while balancing agility and stability. It facilitates development of highly differentiated offerings based on context and without adding new products.
              </Card.Text>
                          </Card.Body>
                          <Link href="" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
                  <Col>
                  <Card className="rounded-0 shadow"  style={{ height: 35 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">VAT for GCC</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              Our GCC VAT Solution, deployed on our flagship platform Xelerate, enables financial services organizations and banks to smoothly comply with VAT regulations. Pre-packaged with over 200 features, our out-of-the box VAT solution has been designed to react seamlessly to changes in VAT law, policies, and practices.
              </Card.Text>
                          </Card.Body>
                          <Link href="" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
              </Row>

              <Row className='mt-5'>
                  <Col>
                  <Card className="rounded-0 shadow"  style={{ height: 35 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Negative Interest Management</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              Our Negative Interest Management Solution, powered by our flagship platform Xelerate, enables banks and financial services institutions to design, implement and manage negative interest programs at scale. Given the rule-based and flexible nature of the solution, negative interest programs can be rolled out in a customer centric manner.
              </Card.Text>
                          </Card.Body>
                          <Link href="" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
                  <Col>
                  <Card className="rounded-0 shadow"  style={{ height: 35 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">e-Invoicing Solution</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              Access our e-Book to get started with e-invoicing. In this eBook, we provide guidance to financial institutions in the KSA about the nuances of e-invoicing, how to ensure a smooth integration of VAT and e-invoicing systems, and considerations for deploying a robust e-invoicing solution with the right partner to get you ready in time.
              </Card.Text>
                          </Card.Body>
                          <Link href="" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
                  <Col>
                  <Card className="rounded-0 shadow"  style={{ height: 35 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Account Analysis Solution</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              To charge or not to charge is the question that looms large over most commercial banking executives. Given that customers today expect hyper-personalized services, transparency, and high-speed on-demand services, billing automation becomes crucial to ensure customer satisfaction, profitability, and stability.
              </Card.Text>
                          </Card.Body>
                          <Link href="" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
              </Row>

              <Row className='mt-5'>
                  <Col>
                  <Card className="rounded-0 shadow"  style={{ height: 35 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Invoicing Solution for Swedish Banks</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              Obsolescence and the urgent requirement for an invoicing system that offers seamless and contemporary billing is staring in the face of Swedish Banks. Relying on a software system that was developed by a consortium of banks, several years back, to process payments and generate invoices, is now in need of potential change to meet future requirements.
              </Card.Text>
                          </Card.Body>
                          <Link href="" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
                  <Col>
                  <Card className="rounded-0 shadow"  style={{ height: 35 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Solution for Credit Cards</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              Customers today expect higher levels of empathy and to be understood better based on what they seek in terms of their goals, lifestyles, likes, and preferences. You need a solution that offers you the right insights to get to know your customers better and offer products that are relevant to them.
              </Card.Text>
                          </Card.Body>
                          <Link href="" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
                  <Col>
                  <Card className="rounded-0 shadow" style={{ height: 35 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
                              <Card.Title className="mb-4 fs-3">Banking-as-a-Service Solution</Card.Title>
                              <hr className='line-20'/>
              <Card.Text className="fs-5">
              Alibaba and Amazon use the same horizontal approach in the B2B space, where curated ecosystems from different organizations, with different offerings, meet multiple client needs and offer them more than a channel to sell their products.
              </Card.Text>
                          </Card.Body>
                          <Link href="" className='expand-btn w-50'>Learn more</Link>
          </Card>
                  </Col>
              </Row>

          </Container>
          <Footer/>
      </>
  )
}

export default Platforms
