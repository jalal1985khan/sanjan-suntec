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
  const PdfLink = 'pdf/SunTec_BaaS-datasheet.pdf';
  const PostTitle = "SunTec Banking-as-a-Service Solution";
  const PostDescription = "Deliver lifecycle experiences through an ecosystem of partners";
  const PostImage = '/images/SunTec-Banking-as-a-Service-Solution.jpg';  



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
<Col>
<div className="square-dark">
<div class="lin-dark"></div>
<div className="square-text-dark ">
<h1 className="fs-1">SunTec Banking-as-a-Service Solution</h1>
<p className="fs-5">Deliver lifecycle experiences through an ecosystem of partners
</p>
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
<Container className="p-5" style={{background:'#F3E7EF'}}>
<p className="fs-5">To meet the challenges of increasing competition, stringent regulations, and other macro-economic factors impacting the sector, banks must transform to put the customer at the very core of everything. At the same time, banks must serve larger customer bases at lower costs to open new revenue streams and increase consumption of banking services through non-banking channels.

As customer-centric strategies rule the roost, the business of banking is moving out of the exclusive realm of banks and into a comprehensive ecosystem designed to meet customer requirements and help banks grow revenues. Technology, of course, is the key driver of such integrated banking ecosystems and plays a critical role in enabling providers, enablers, and distributors of new banking models.</p>
</Container>

<Container className="p-3 pe-banner" fluid style={{ 
      backgroundImage: `url("/images/Negative-Interest-mid-section.jpg")` 
    }}>

<Row>
<Col>
</Col> 
<Col>
<div className="pe-text" >
<h1>Why Banking-as-a-Service?</h1>
<p className="fs-5">Banking-as-a-Service (BaaS) helps bring personalized, customer-centric offerings to market faster. Banks can expand their footprint and connect with new demographics to solve broader lifecycle needs and evolve into the ‘everyday bank and customer owner’ by collaborating with a host of partners. BaaS can enhance customer loyalty and create new revenue streams with a robust ecosystem management and monetization platform. The model allows banks to focus on their strengths and minimize gaps in customer satisfaction for future growth.</p>
              <p className="fs-5">As BaaS matures and evolves further, there is a need for robust technology platforms that can integrate digital banking ecosystems and work with:</p>
              <ul><li className="fs-5">Providers: who give access to core elements of the banking product and operations stack</li>
                <li className="fs-5">Enablers: who unify the disparate elements into usable solutions</li>
                <li className="fs-5">Distributors: who take the solution to the customers via proprietary customer channels</li>
              </ul>
</div>
</Col> 
</Row>
</Container>
<Container className="" fluid>
<Container className="py-5" style={{background:'#F3E7EF'}}>
<h2>How Does SunTec Enable Banking-as-a-Service?</h2>
          <p className="fs-5">Legacy banking cores cannot scale up to deliver the agility and compute power required to operate BaaS models. An agile middle-layer solution that can sit over the core is the answer for banks intending to deploy BaaS strategies. SunTec Xelerate is an enterprise-wide, agile, scalable and secure digital layer which integrates seamlessly with core systems, consolidating customer and product data for co-innovation. Its API-based infrastructure can handle every level in the growing spectrum of Business Model complexity.</p>
          <p className="fs-5">SunTec Xelerate enables banks to explore BaaS models by providing a single unified data store and a single store of value. It breaks down silos to connect disparate systems and deliver real-time insights that facilitate better decision-making. It allows banks to improve bundling strategies as well as facilitates bundling, unbundling, and re-bundling of a full ecosystem of products. With SunTec, banks can deliver a hyper-personalized banking experience with a focus on customer acquisition and interaction. Get the flexibility needed to customize the customer experience by removing silos. Further, as the lines between B2C and B2B banking blur, SunTec Xelerate can help manage multiple aspects of high-impact partner ecosystems seamlessly.</p>
</Container></Container>
<Container className="pt-5 pb-5" style={{background:'#E6F6F8'}}>
<h2>Key Capabilities</h2>
<p className="fs-5">SunTec Xelerate seamlessly manages foundational factors for BaaS Models:</p>
        <Row className="pb-5">
          <Col lg={8} sm={12} className="d-flex flex-column justify-content-center">
            <h2>1. Manage</h2>
            <ul><li className="fs-5">Pre-defined product packages and offers for customers</li>
              <li className="fs-5">Price governance across the marketplace using SLAs</li>
              <li className="fs-5">End-to-end partner management</li>
              <li className="fs-5">Partner contracts, with revenue-sharing computation and settlement</li>
              <li className="fs-5">Innovation with disruptive pricing models</li>
            </ul>
          </Col>
          <Col lg={4} sm={12}>
            <Image src="images/manage.png" width="300" height="300" />
          </Col>
        </Row>  
        
        <Row className="pb-5">
          <Col lg={8} sm={12} className="d-flex flex-column justify-content-center">
            <h2>2. Monetize</h2>
            <p className="fs-5">Leverage multiple monetization models:</p>
            <ul><li className="fs-5">Freemium</li>
              <li className="fs-5">Pay as you go</li>
              <li className="fs-5">Slab / tier-based</li>
              <li className="fs-5">Fixed quota</li>
              <li className="fs-5">Ecosystem model</li>
              <li className="fs-5">Subscription model</li>
              <li className="fs-5">Factors of medium, date/time, channel, payload etc.</li>
            </ul>
          </Col>
          <Col lg={4} sm={12}>
            <Image src="images/monetize.png" width="300" height="300" />
          </Col>
        </Row>  


        <Row>
          <Col lg={8} sm={12} className="d-flex flex-column justify-content-center">
            <h2>3. Monitor</h2>
            
            <ul><li className="fs-5">Customer and partner consumption patterns – volume, value, channel, partner, committed products</li>
              <li className="fs-5">On-us and Off-us tracking</li>
              <li className="fs-5">Revenue leakage and non-compliance of receivables from third-party providers (TPPs)</li>
              <li className="fs-5">End-to-end invoicing and settlement process</li>
            </ul>
          </Col>
          <Col lg={4} sm={12}>
            <Image src="images/moniter.png" width="300" height="300" />
          </Col>
        </Row>  
      </Container>
<Container style={{background:'#F1E4F2'}} className="pb-5 pt-5 mb-5">
 <h2 className="pb-4">Business Benefits</h2>       
 <Row>  
<Col sm={6} >
<Card className="d-flex flex-row c-height" style={{backgroundColor:'#F1E4F2'}}>
      <Card.Img className="icon-img" src="images/11.png"/>
      <Card.Body>
        <Card.Title>Centralize products and services and <b>enable relationship banking</b></Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6} >
<Card className="d-flex flex-row c-height" style={{backgroundColor:'#F1E4F2'}}>
      <Card.Img className="icon-img" src="images/22.png"/>
      <Card.Body>
        <Card.Title><b>Drive customer engagement</b> with innovative, personalized need-based offerings, orchestrating end-to-end experiences</Card.Title>
      </Card.Body>
    </Card>
</Col>          
</Row>
<Row>  
<Col sm={6} >
<Card className="d-flex flex-row c-height" style={{backgroundColor:'#F1E4F2'}}>
      <Card.Img className="icon-img" src="images/33.png"/>
      <Card.Body>
        <Card.Title>Effectively <b>engage with internal and partner applications</b> without disrupting core systems</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6} >
<Card className="d-flex flex-row c-height" style={{backgroundColor:'#F1E4F2'}}>
      <Card.Img className="icon-img" src="images/44.png"/>
      <Card.Body>
        <Card.Title><b>Respond to the next big thing quickly</b>, without disruption</Card.Title>
      </Card.Body>
    </Card>
</Col>          
</Row>        
</Container>
      <CtaCall
        text="Rounding up the pulse of the industry as we go along."
        btn="Be up to date now!"
        url="/insights/" />
   

<Container className="wbg-gy mt-5 pb-5 pt-5">        
<h2 className="pb-3">Products That Enable this Solution</h2>
<Row>  
          <Col sm={6} >
            <ShortCard title="Ecosystem Management and Monetization" img="images/1.png"/>
</Col>
          <Col sm={6}>
          <ShortCard title="Relationship-based Pricing Management" img="images/2.png"/>
</Col>   
</Row>
<Row>  
          <Col sm={6}>
          <ShortCard title="Dynamic Offer Management" img="images/3.png"/>
</Col>
          <Col sm={6}>
          <ShortCard title="Enterprise Billing and Statements Management" img="images/4.png"/>

</Col>   
</Row>
</Container>
      


<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Our Latest Insights</h1>
<Row>
<Col>
<Card className="t_shadow">
<Row>
<Col sm={4} lg={4}>
<Card.Img className="img-insghts" src="images/360-240-1.png" /></Col>
<Col sm={8} lg={8} className="d-flex">
      <Card.Body className="c_body d-flex flex-column justify-content-center">
        <Card.Title>A New Wave of Banking: Banking-as-a-Service</Card.Title>
</Card.Body></Col>                
</Row>
</Card>
</Col>
<Col>
<Card className="t_shadow">
<Row>
<Col sm={4} lg={4}>
<Card.Img className="img-insghts" src="images/Image-03-1.jpg" /></Col>
<Col sm={8} lg={8} className="d-flex">
      <Card.Body className="c_body d-flex flex-column justify-content-center">
        <Card.Title>Driving Sustainable Ecosystems with Banking-as-a-Service</Card.Title>
</Card.Body></Col>                
</Row>
</Card>
</Col>

</Row>

<Row>
<Col>
<Card className="t_shadow">
<Row>
<Col sm={4} lg={4}>
<Card.Img className="img-insghts" src="images/360-240-1-1.png" /></Col>
<Col sm={8} lg={8} className="d-flex">
      <Card.Body className="c_body d-flex flex-column justify-content-center">
        <Card.Title>The Emergence of Banking-as-a-Service</Card.Title>
</Card.Body></Col>                
</Row>
</Card>
</Col>
<Col>
<Card className="t_shadow">
<Row>
<Col sm={4} lg={4}>
<Card.Img className="img-insghts" src="images/Banking-as-a-Service-eBook-1-1.png" /></Col>
<Col sm={8} lg={8} className="d-flex">
      <Card.Body className="c_body d-flex flex-column justify-content-center">
        <Card.Title>Demystifying the Buzz around BaaS</Card.Title>
</Card.Body></Col>                
</Row>
</Card>
</Col>

</Row>

</Container>


<Container className="wbg-sun text-white middle p-5" style={{height:7 +'em'}}>
<h2>Join our Team of Dreamers, Innovators and Go-Getters</h2>
</Container>
<Footer/>
</>


  );
}

export default LinksExample;