import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BootstrapModal from '../components/Modal';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import CtaCall from '../components/CtaCall';
import Breadcum from '../components/Breadcum';
import Insights from '../utils/FetchInsights';
import InsightsBtn from '../utils/InsightsBtn';
import ShortCard from '../utils/ShortCard';

function LinksExample() {

  const router = useRouter()  
  const [showModal, setShowModal] = useState(false);
  const PdfLink = 'https://www.suntecgroup.com/wp-content/uploads/2022/05/Personalization-use-cases.pdf';
  const PostTitle = "SunTec Personalization Solution for Banking";
  const PostDescription = "Embrace the open economy – adopt new business models and increase revenue sources. Become a true value aggregator through collaboration and co-innovation.";
  const PostImage = '/images/personliasetion.png';   

  const handleShowModal = () => {
    setShowModal(true);
};

  const handleCloseModal = () => {
    setShowModal(false);
};  
  

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
<Breadcum PostTitle={PostTitle} />
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url(${PostImage})` 
    }}>
<Row>
<Col>
<div className="square-dark">
<div class="lin-dark"></div>
<div className="square-text-dark ">
<h1 className="fs-1">SunTec Personalization Solution for Banking</h1>
<p className="fs-5">Tailor your banking offers to suit customers&apos; specific needs</p>
<button onClick={handleShowModal} className="b-btn">Read the Datasheet</button>
<BootstrapModal show={showModal} handleClose={handleCloseModal} pdfLink={PdfLink} title={PostTitle} />
</div>
<div class="lin-dark"></div>
</div>
</Col> 
<Col>
</Col> 
</Row>
</Container>
<Container className="mt-5">
<p className="fs-5">Banks have a dual challenge today – a demanding customer and a whole new set of competitors. User experiences in e-commerce and other industries with digital offerings are so seamlessly designed that today’s customer sees that as the norm. This sort of experience expectation is increasingly felt across the consumer ecosystem including their traditional banks. The problem is compounded by the fact that customers’ relationships with their banks today is are a relationship of friction; they are either intimidated or unimpressed – neither bodes well for the banking industry or the bank. At the same time, the new-age challengers and neobanks are precisely meeting the evolving experience expectations with their innovative offerings enabled by cloud and digital technologies like AI, ML, AR/VR, RPA, chatbots and self-service. The only way forward for banks is to understand the power of personalization in banking. They will need to leverage data and agile technologies to anticipate and respond to individual customer needs, design offerings to target segments of one and build deep relationships.</p>
</Container>

<Container className="p-3 pe-banner" fluid style={{ 
      backgroundImage: `url("/images/personalization_banner.jpeg")` 
    }}>

<Row>
<Col>
</Col> 
<Col>
<div className="pe-text">
<h1>Why Personalization?</h1>
<p className="fs-5">Conventional offers and loyalty programs are a small part of customers expectation to stay with their banks. Personalized customer engagement and an end-to-end experience are needed, mapped to each customer’s unique journey and context. Treating each customer problem as unique and designing solutions to address these needs with speed, across touch points and using available data to do so, can transform customer engagement and experience. The rewards are many – improving customer acquisition, retention, loyalty, growing wallet share, driving incremental revenue, positively affecting top-line growth and of course, giving banks a better chance at being relevant.</p>
<p className="fs-5">Personalization is critical because customer behavior and expectations are changing dramatically. Today’s customers expect choices and wants to be treated uniquely. Personalization will help banks win customer trust and loyalty. If banks are to stay relevant and compete with their new-age competition, the key lies in personalization and the creating customized experiences.</p>
</div>
</Col> 
</Row>
</Container>
<Container className="wbg-gy" fluid>
<Container className="py-5">
<h2>How Can Our Personalization Solution Help Banks?</h2>
<p className="fs-5">Powered by SunTec Xelerate, our solutions empower banks to dynamically tailor their offerings based on the customer journey and overall relationship, to solve each customer’s unique needs. With these solutions, banks will be able to go beyond their own market offerings and tap into the broader ecosystem to serve, satisfy and grow their customer base.</p>
<Row className=" mt-5">
<Col className=" text-center">
<img src="/images/innovation_icon_1.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">Scale and Innovate</h4>
<p className="fs-5">Adopt a scalable approach towards hyper-personalization, with innovative offers, pricing models and loyalty programs</p>
</Col>
<Col className=" text-center">
<img src="/images/data_icon_2.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">Create Context</h4>
<p className="fs-5">Design and launch hyper-personalized offers, dynamically. Bundle products and extend benefits based on customer profile and behavior to deliver the most contextual offers</p>
</Col>
<Col className=" text-center">
<img src="/images/shakehand_icon_3.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">Stay Relevant</h4>
<p className="fs-5">Provide a wider choice for customers by offering partner products and services as standalone or bundled offerings</p>
</Col>
<Col className=" text-center">
<img src="/images/revenue_icon_4.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">Offer Control</h4>
<p className="fs-5">Utilize our API banking capabilities to introduce self-serve and empower customers with control and transparency</p>
</Col>
</Row>
<Row className="mt-5">
<Col className=" text-center">
<img src="/images/automate_solutions_icon_5.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">Automate Solutions​</h4>
<p className="fs-5">Achieve rapid product adoption with automatic enrollment and solution recommendations to the right customer segments</p>
</Col>
<Col className=" text-center">
<img src="/images/speed_up_icon_6.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">Speed Up and Save</h4>
<p className="fs-5">Easy integration and interoperability mean accelerated time to market and reduced costs of creating and launching new offerings</p>
</Col>
<Col className="text-center">
<img src="/images/configure_icon_7.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">Configure Easily</h4>
<p className="fs-5">Use easy-to-use, drag-and-drop capabilities to rapidly create hyper-personalized offerings and reduce time to market, product complexity and costs significantly</p>
</Col>
<Col className="text-center">
</Col>
</Row>
</Container>
<InsightsBtn tags='333'/>
        
</Container>
<hr/>
<Container className="mb-5">

<h1 className="fs-2 mt-5 mb-5">Key Capabilities and Benefits</h1>
<Row>
<Col>
<Card className="c_shadow" style={{height:250 +'px'}}>
      <Card.Body className="c_body">
        <Card.Title>Centralized Offerings Repository</Card.Title>
        <Card.Text>
        Empower product, pricing and partner managers to break out of siloed systems and processes, and easily design and launch bundles and offers
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:250 +'px'}}>
      <Card.Body className="c_body">
        <Card.Title>Relationship-based Banking</Card.Title>
        <Card.Text>
        Develop a single view of customers to create personalized, contextual offerings based on customer journey insights, to influence customer behavior and drive growth
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:250 +'px'}}>
      <Card.Body className="c_body">
        <Card.Title>Customer Enablement</Card.Title>
        <Card.Text>
        Offer transparency and control by sharing profile, behavior and consumption information and recommending appropriate offers, while ensuring easy enrolment, de-enrolment and switching
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:250 +'px'}}>
      <Card.Body className="c_body">
        <Card.Title>Ecosystem Management</Card.Title>
        <Card.Text>
        Broaden customer choice by integrating partner products and services into the bank&apos;s offer portfolio
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:250 +'px'}}>
      <Card.Body className="c_body">
        <Card.Title>Analysis and Insights</Card.Title>
        <Card.Text>
        Evaluate and compare customer behavior, usage and profitability trends, by bundle, offer, sub-segment, region and unit, among others, to inform decisions
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:250 +'px'}}>
      <Card.Body className="c_body">
        <Card.Title>Augmentation of Core Capabilities</Card.Title>
        <Card.Text>
        Avoid expensive and risky rip-and-replace projects and augment existing core capabilities by extracting and consolidating necessary data in a centralized, agile, cloud-based middle-layer solution
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

</Container>
<CtaCall text="Know your customers better and deliver hyper-personalized offerings with SunTec."
        btn="Start a conversation"
        url="/contact-us/" />      
      
<Container className="mt-5" style={{background:'#F4F4F4'}} fluid>
<Container className='pb-5 pt-5'>
        <Row>  
<Col sm={6}>
              <ShortCard
                title='Enterprise Product Management'
                img='images/1.png'
              />
              </Col>
            <Col sm={6}>
            <ShortCard
                title='Ecosystem Management and Monetization'
                img='images/2.png'/></Col>
          </Row>

          <Row>  
<Col sm={6}>
              <ShortCard
                title='Dynamic Offer Management'
                img='images/3.png'
                 />
              </Col>
            <Col sm={6}>
            <ShortCard
                title='Relationship-based Pricing Management'
                img='images/4.png'
              />
            </Col>   
          </Row>  

          <Row>  
<Col sm={6}>
              <ShortCard
                title='Benefits and Loyalty Management'
                img='images/5.png'
                 />
              </Col>
            <Col sm={6}>
            <ShortCard
                title='Enterprise Billing and Statements Management'
                img='images/6.png'
              />
            </Col>   
</Row>            
</Container>
</Container>

<Insights tags='333'/>      
<Footer/>
</>


  );
}

export default LinksExample;